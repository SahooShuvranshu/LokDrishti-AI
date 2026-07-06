import React, { useEffect, useRef, useState } from 'react';
import { useApp } from '../context/AppContext';
import { Info, MapPin } from 'lucide-react';

// Bounding box for wards partition in Bhubaneswar, Odisha
const wards = [
  {
    id: 'Ward A: Industrial Core',
    name: 'Ward A',
    label: 'Industrial Core',
    latRange: [20.28, 20.35],
    lngRange: [85.75, 85.80],
    path: [
      { lat: 20.28, lng: 85.75 },
      { lat: 20.35, lng: 85.75 },
      { lat: 20.35, lng: 85.80 },
      { lat: 20.28, lng: 85.80 }
    ],
    baseSatisfaction: 64,
    population: '1.2L'
  },
  {
    id: 'Ward B: Urban Center',
    name: 'Ward B',
    label: 'Urban Center',
    latRange: [20.28, 20.35],
    lngRange: [85.80, 85.85],
    path: [
      { lat: 20.28, lng: 85.80 },
      { lat: 20.35, lng: 85.80 },
      { lat: 20.35, lng: 85.85 },
      { lat: 20.28, lng: 85.85 }
    ],
    baseSatisfaction: 79,
    population: '2.5L'
  },
  {
    id: 'Ward C: Rural Green',
    name: 'Ward C',
    label: 'Rural Green',
    latRange: [20.22, 20.28],
    lngRange: [85.75, 85.80],
    path: [
      { lat: 20.22, lng: 85.75 },
      { lat: 20.28, lng: 85.75 },
      { lat: 20.28, lng: 85.80 },
      { lat: 20.22, lng: 85.80 }
    ],
    baseSatisfaction: 52,
    population: '0.8L'
  },
  {
    id: 'Ward D: Heritage Quarter',
    name: 'Ward D',
    label: 'Heritage Quarter',
    latRange: [20.28, 20.35],
    lngRange: [85.85, 85.90],
    path: [
      { lat: 20.28, lng: 85.85 },
      { lat: 20.35, lng: 85.85 },
      { lat: 20.35, lng: 85.90 },
      { lat: 20.28, lng: 85.90 }
    ],
    baseSatisfaction: 71,
    population: '1.1L'
  },
  {
    id: 'Ward E: Coastal/Lake District',
    name: 'Ward E',
    label: 'Coastal/Lake',
    latRange: [20.22, 20.28],
    lngRange: [85.85, 85.90],
    path: [
      { lat: 20.22, lng: 85.85 },
      { lat: 20.28, lng: 85.85 },
      { lat: 20.28, lng: 85.90 },
      { lat: 20.22, lng: 85.90 }
    ],
    baseSatisfaction: 68,
    population: '0.9L'
  },
  {
    id: 'Ward F: Suburbia East',
    name: 'Ward F',
    label: 'Suburbia East',
    latRange: [20.22, 20.28],
    lngRange: [85.80, 85.85],
    path: [
      { lat: 20.22, lng: 85.80 },
      { lat: 20.28, lng: 85.80 },
      { lat: 20.28, lng: 85.85 },
      { lat: 20.22, lng: 85.85 }
    ],
    baseSatisfaction: 85,
    population: '1.8L'
  }
];

// Dark Google Maps theme styling
const darkMapStyle = [
  { elementType: 'geometry', stylers: [{ color: '#18181b' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#18181b' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#71717a' }] },
  { featureType: 'administrative', elementType: 'geometry', stylers: [{ color: '#27272a' }] },
  { featureType: 'poi', elementType: 'labels.text.fill', stylers: [{ color: '#a1a1aa' }] },
  { featureType: 'poi.park', elementType: 'geometry', stylers: [{ color: '#09090b' }] },
  { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#27272a' }] },
  { featureType: 'road', elementType: 'geometry.stroke', stylers: [{ color: '#09090b' }] },
  { featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#3f3f46' }] },
  { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#09090b' }] }
];

// Light Google Maps theme styling
const lightMapStyle = [
  { elementType: 'geometry', stylers: [{ color: '#f4f4f5' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#ffffff' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#71717a' }] },
  { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#ffffff' }] },
  { featureType: 'road', elementType: 'geometry.stroke', stylers: [{ color: '#e4e4e7' }] },
  { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#e0f2fe' }] }
];

export default function ConstituencyMap({ onSelectGrievance }) {
  const {
    grievances,
    selectedWard,
    setSelectedWard,
    selectedSector,
    selectedUrgency,
    googleMapsApiKey,
    theme
  } = useApp();

  const [mapView, setMapView] = useState('density'); // 'density' or 'satisfaction'
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);

  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const polygonsRef = useRef({});
  const markersRef = useRef([]);
  const infoWindowRef = useRef(null);

  // Helper: Count grievances in a ward matching current sector/urgency filters
  const getWardGrievanceCount = (wardId) => {
    return grievances.filter((g) => {
      if (g.ward !== wardId) return false;
      if (selectedSector !== 'All' && g.sector !== selectedSector) return false;
      if (selectedUrgency !== 'All' && g.urgency !== selectedUrgency) return false;
      return g.status !== 'Resolved';
    }).length;
  };

  // Helper: Calculate Dynamic Satisfaction per ward
  const getWardSatisfaction = (ward) => {
    const criticalCount = grievances.filter((g) => g.ward === ward.id && g.urgency === 'Critical' && g.status !== 'Resolved').length;
    const pendingCount = grievances.filter((g) => g.ward === ward.id && g.status === 'Pending').length;
    const resolvedCount = grievances.filter((g) => g.ward === ward.id && g.status === 'Resolved').length;
    
    let penalty = criticalCount * 4 + pendingCount * 1.5 - resolvedCount * 1;
    let finalSatisfaction = Math.min(100, Math.max(30, ward.baseSatisfaction - penalty));
    return Math.round(finalSatisfaction);
  };

  // Helper: Determine Ward Fill Color
  const getWardColor = (ward) => {
    const isSelected = selectedWard === 'All' || selectedWard === ward.id;
    if (!isSelected) {
      return '#3f3f46'; // dim grey for unselected
    }

    if (mapView === 'density') {
      const count = getWardGrievanceCount(ward.id);
      if (count === 0) return '#10b981'; // green / quiet
      if (count <= 2) return '#f59e0b';  // yellow / warning
      return '#ef4444';                  // red / dense
    } else {
      const sat = getWardSatisfaction(ward);
      if (sat >= 75) return '#10b981';    // green / high satisfaction
      if (sat >= 60) return '#f59e0b';    // yellow / moderate
      return '#ef4444';                  // red / poor satisfaction
    }
  };

  // Translate grid percentage coordinates {x, y} to geographical Lat/Lng inside the ward bounds
  const getGrievanceLatLng = (grievance) => {
    const wardDef = wards.find((w) => w.id === grievance.ward);
    if (!wardDef) {
      return { lat: 20.2961, lng: 85.8245 }; // Center Bhubaneswar
    }
    const latMin = wardDef.latRange[0];
    const latMax = wardDef.latRange[1];
    const lngMin = wardDef.lngRange[0];
    const lngMax = wardDef.lngRange[1];

    const x = grievance.coordinates?.x ?? 50;
    const y = grievance.coordinates?.y ?? 50;

    // Linearly interpolate inside the bounding box
    const lng = lngMin + (x / 100) * (lngMax - lngMin);
    const lat = latMin + ((100 - y) / 100) * (latMax - latMin);
    return { lat, lng };
  };

  // 1. Dynamic Script Loader
  useEffect(() => {
    if (window.google && window.google.maps) {
      setScriptLoaded(true);
      return;
    }

    const scriptId = 'google-maps-script';
    let script = document.getElementById(scriptId);

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey || ''}`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }

    const handleScriptLoad = () => setScriptLoaded(true);
    const handleScriptError = () => setLoadError(true);

    script.addEventListener('load', handleScriptLoad);
    script.addEventListener('error', handleScriptError);

    return () => {
      script.removeEventListener('load', handleScriptLoad);
      script.removeEventListener('error', handleScriptError);
    };
  }, [googleMapsApiKey]);

  // 2. Initialize Google Maps
  useEffect(() => {
    if (!scriptLoaded || !mapContainerRef.current) return;

    // Setup map instance
    const map = new window.google.maps.Map(mapContainerRef.current, {
      center: { lat: 20.2961, lng: 85.8245 },
      zoom: 12,
      styles: theme === 'dark' ? darkMapStyle : lightMapStyle,
      disableDefaultUI: false,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: true
    });

    mapInstanceRef.current = map;
    infoWindowRef.current = new window.google.maps.InfoWindow();

    // Render Ward Polygons
    const polygons = {};
    wards.forEach((ward) => {
      const polygon = new window.google.maps.Polygon({
        paths: ward.path,
        strokeColor: '#71717a',
        strokeOpacity: 0.8,
        strokeWeight: 1.5,
        fillColor: getWardColor(ward),
        fillOpacity: 0.35,
        map: map
      });

      // Click: set active ward filter
      polygon.addListener('click', () => {
        if (selectedWard === ward.id) {
          setSelectedWard('All');
        } else {
          setSelectedWard(ward.id);
        }
      });

      // Hover: opacity feedback
      polygon.addListener('mouseover', () => {
        polygon.setOptions({ fillOpacity: 0.55 });
      });
      polygon.addListener('mouseout', () => {
        const isCurrentSelected = selectedWard === 'All' || selectedWard === ward.id;
        polygon.setOptions({ fillOpacity: isCurrentSelected ? 0.35 : 0.1 });
      });

      polygons[ward.id] = polygon;
    });

    polygonsRef.current = polygons;

    return () => {
      // Clear polygons
      Object.values(polygonsRef.current).forEach((p) => p.setMap(null));
      polygonsRef.current = {};
    };
  }, [scriptLoaded]);

  // 3. Update Polygons Fill Color on state change
  useEffect(() => {
    if (!mapInstanceRef.current) return;
    wards.forEach((ward) => {
      const polygon = polygonsRef.current[ward.id];
      if (polygon) {
        polygon.setOptions({
          fillColor: getWardColor(ward),
          fillOpacity: selectedWard === 'All' || selectedWard === ward.id ? 0.35 : 0.1
        });
      }
    });
  }, [grievances, mapView, selectedWard, selectedSector, selectedUrgency]);

  // 4. Update Map Theme Styling
  useEffect(() => {
    if (!mapInstanceRef.current) return;
    mapInstanceRef.current.setOptions({
      styles: theme === 'dark' ? darkMapStyle : lightMapStyle
    });
  }, [theme]);

  // 5. Render Grievance Markers
  useEffect(() => {
    if (!mapInstanceRef.current) return;

    // Clear existing markers
    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current = [];

    // Filter grievances based on dashboard selections
    const filteredGrievances = grievances.filter((g) => {
      if (selectedWard !== 'All' && g.ward !== selectedWard) return false;
      if (selectedSector !== 'All' && g.sector !== selectedSector) return false;
      if (selectedUrgency !== 'All' && g.urgency !== selectedUrgency) return false;
      return g.status !== 'Resolved';
    });

    // Plot markers
    filteredGrievances.forEach((item) => {
      const latLng = getGrievanceLatLng(item);
      const color = item.urgency === 'Critical' ? '#ef4444' : item.urgency === 'Medium' ? '#f59e0b' : '#10b981';

      // SVG path representation for a clean custom MapPin marker icon
      const pinIcon = {
        path: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
        fillColor: color,
        fillOpacity: 1,
        strokeColor: '#ffffff',
        strokeWeight: 1.5,
        scale: 1.2,
        anchor: new window.google.maps.Point(12, 22)
      };

      const marker = new window.google.maps.Marker({
        position: latLng,
        map: mapInstanceRef.current,
        icon: pinIcon,
        title: item.title
      });

      marker.addListener('click', () => {
        const contentString = `
          <div style="padding: 10px; color: #18181b; font-family: sans-serif; max-width: 250px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
              <span style="font-weight: bold; font-size: 0.75rem; color: #71717a;">${item.id}</span>
              <span style="padding: 2px 6px; font-size: 0.65rem; border-radius: 4px; font-weight: bold; background: ${color}20; color: ${color};">${item.urgency}</span>
            </div>
            <h4 style="margin: 0 0 6px 0; font-size: 0.85rem; font-weight: 600; color: #18181b;">${item.title}</h4>
            <p style="margin: 0 0 10px 0; font-size: 0.75rem; color: #52525b; line-height: 1.3;">${item.description.substring(0, 80)}...</p>
            <button 
              id="inspect-btn-${item.id}"
              style="width: 100%; border: none; padding: 6px; font-size: 0.75rem; background: #2563eb; color: white; border-radius: 4px; cursor: pointer; font-weight: bold;"
            >
              Inspect Details
            </button>
          </div>
        `;

        infoWindowRef.current.setContent(contentString);
        infoWindowRef.current.open(mapInstanceRef.current, marker);

        // Add listener to inspect details button in InfoWindow
        window.google.maps.event.addListenerOnce(infoWindowRef.current, 'domready', () => {
          const btn = document.getElementById(`inspect-btn-${item.id}`);
          if (btn) {
            btn.onclick = () => {
              onSelectGrievance(item);
              infoWindowRef.current.close();
            };
          }
        });
      });

      markersRef.current.push(marker);
    });
  }, [grievances, selectedWard, selectedSector, selectedUrgency, scriptLoaded]);

  const handleWardClick = (wardId) => {
    if (selectedWard === wardId) {
      setSelectedWard('All');
    } else {
      setSelectedWard(wardId);
    }
  };

  return (
    <div className="glass-panel" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '14px', flexGrow: 1 }}>
      
      {/* Header & View Switcher */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>Constituency Map Diagnostics</span>
          <span style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)' }}>Live Google Maps spatial overlay of Bhubaneswar Constituency, Odisha</span>
        </div>

        <div className="glass-panel" style={{ display: 'flex', padding: '3px', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
          <button
            onClick={() => setMapView('density')}
            className="btn"
            style={{
              padding: '4px 10px',
              fontSize: '0.7rem',
              borderRadius: 'var(--radius-xs)',
              background: mapView === 'density' ? 'var(--bg-secondary)' : 'transparent',
              color: mapView === 'density' ? 'var(--text-primary)' : 'var(--text-tertiary)',
              border: 'none',
              boxShadow: 'none'
            }}
          >
            Grievance Density
          </button>
          <button
            onClick={() => setMapView('satisfaction')}
            className="btn"
            style={{
              padding: '4px 10px',
              fontSize: '0.7rem',
              borderRadius: 'var(--radius-xs)',
              background: mapView === 'satisfaction' ? 'var(--bg-secondary)' : 'transparent',
              color: mapView === 'satisfaction' ? 'var(--text-primary)' : 'var(--text-tertiary)',
              border: 'none',
              boxShadow: 'none'
            }}
          >
            Satisfaction Rate
          </button>
        </div>
      </div>

      {/* Map Container */}
      <div style={{ position: 'relative', width: '100%', height: '420px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', overflow: 'hidden', backgroundColor: 'var(--bg-tertiary)' }}>
        {loadError ? (
          <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', color: 'var(--danger)', fontSize: '0.85rem' }}>
            <p>Failed to load Google Maps script. Check your internet connection or API Key configuration.</p>
          </div>
        ) : !scriptLoaded ? (
          <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
            <span className="pulse-glow" style={{ padding: '8px 16px', borderRadius: 'var(--radius-full)', backgroundColor: 'var(--bg-secondary)' }}>Loading Google Maps...</span>
          </div>
        ) : (
          <div ref={mapContainerRef} style={{ width: '100%', height: '100%' }} />
        )}
      </div>

      {/* Ward Status Cards Info */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px', marginTop: '4px' }}>
        {wards.map((ward) => {
          const count = getWardGrievanceCount(ward.id);
          const sat = getWardSatisfaction(ward);
          const isSelected = selectedWard === 'All' || selectedWard === ward.id;
          return (
            <div
              key={ward.id}
              onClick={() => handleWardClick(ward.id)}
              className="glass-panel"
              style={{
                padding: '10px',
                cursor: 'pointer',
                border: selectedWard === ward.id ? '1px solid var(--accent)' : '1px solid var(--border-color)',
                backgroundColor: selectedWard === ward.id ? 'var(--accent-glow)' : 'var(--bg-tertiary)',
                opacity: isSelected ? 1 : 0.6,
                borderRadius: 'var(--radius-sm)',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>{ward.name}</span>
                <span style={{ fontSize: '0.65rem', color: 'var(--text-tertiary)' }}>Pop: {ward.population}</span>
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
                <div>Grievances: <span style={{ fontWeight: '600', color: count > 3 ? 'var(--danger)' : 'var(--text-primary)' }}>{count}</span></div>
                <div>Satisfaction: <span style={{ fontWeight: '600', color: sat < 60 ? 'var(--danger)' : 'var(--success)' }}>{sat}%</span></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Helper Legend */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.7rem', color: 'var(--text-tertiary)', borderTop: '1px solid var(--border-color)', paddingTop: '10px' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Info size={12} />
          Click Wards on Map to Filter Workspace
        </span>
        <div style={{ display: 'flex', gap: '10px' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--danger)' }}></div> Critical</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--warning)' }}></div> Medium</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--success)' }}></div> Low</span>
        </div>
      </div>
    </div>
  );
}
