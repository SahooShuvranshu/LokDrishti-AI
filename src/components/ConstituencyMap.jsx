import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { MapPin, Info, Layers, Sliders } from 'lucide-react';

export default function ConstituencyMap({ onSelectGrievance }) {
  const {
    grievances,
    selectedWard,
    setSelectedWard,
    selectedSector,
    selectedUrgency
  } = useApp();

  const [mapView, setMapView] = useState('density'); // 'density' or 'satisfaction'

  // Ward data definition
  const wards = [
    {
      id: 'Ward A: Industrial Core',
      name: 'Ward A',
      label: 'Industrial Core',
      points: '50,120 260,80 290,220 180,340 50,280',
      center: { x: 150, y: 190 },
      baseSatisfaction: 64,
      population: '1.2L'
    },
    {
      id: 'Ward B: Urban Center',
      name: 'Ward B',
      label: 'Urban Center',
      points: '290,220 480,170 520,310 320,360',
      center: { x: 400, y: 260 },
      baseSatisfaction: 79,
      population: '2.5L'
    },
    {
      id: 'Ward C: Rural Green',
      name: 'Ward C',
      label: 'Rural Green',
      points: '480,170 750,110 700,340 520,310',
      center: { x: 610, y: 220 },
      baseSatisfaction: 52,
      population: '0.8L'
    },
    {
      id: 'Ward D: Heritage Quarter',
      name: 'Ward D',
      label: 'Heritage Quarter',
      points: '260,80 480,60 480,170 290,220',
      center: { x: 370, y: 130 },
      baseSatisfaction: 71,
      population: '1.1L'
    },
    {
      id: 'Ward E: Coastal/Lake District',
      name: 'Ward E',
      label: 'Coastal/Lake',
      points: '180,340 320,360 520,310 450,440 120,410',
      center: { x: 300, y: 390 },
      baseSatisfaction: 68,
      population: '0.9L'
    },
    {
      id: 'Ward F: Suburbia East',
      name: 'Ward F',
      label: 'Suburbia East',
      points: '750,110 700,340 520,310 580,440 780,380',
      center: { x: 680, y: 360 },
      baseSatisfaction: 85,
      population: '1.8L'
    }
  ];

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
  // More pending/critical grievances reduces the satisfaction rate
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
      return 'var(--bg-tertiary)';
    }

    if (mapView === 'density') {
      const count = getWardGrievanceCount(ward.id);
      if (count > 6) return 'rgba(239, 68, 68, 0.4)'; // Heavy Red
      if (count > 3) return 'rgba(245, 158, 11, 0.35)'; // Amber
      if (count > 0) return 'rgba(99, 102, 241, 0.25)'; // Indigo
      return 'rgba(16, 185, 129, 0.15)'; // Green
    } else {
      const sat = getWardSatisfaction(ward);
      if (sat < 60) return 'rgba(239, 68, 68, 0.3)'; // Red
      if (sat < 75) return 'rgba(245, 158, 11, 0.3)'; // Amber
      return 'rgba(16, 185, 129, 0.3)'; // Green
    }
  };

  const getWardBorderColor = (ward) => {
    if (selectedWard === ward.id) {
      return 'var(--accent)';
    }
    return 'var(--border-color)';
  };

  const handleWardClick = (wardId) => {
    if (selectedWard === wardId) {
      setSelectedWard('All'); // Deselect
    } else {
      setSelectedWard(wardId);
    }
  };

  // Grievance Pins to overlay on the map
  // Filter pins based on selected Ward/Sector/Urgency, and status must not be Resolved
  const mapPins = grievances.filter((g) => {
    if (g.status === 'Resolved') return false;
    if (selectedWard !== 'All' && g.ward !== selectedWard) return false;
    if (selectedSector !== 'All' && g.sector !== selectedSector) return false;
    if (selectedUrgency !== 'All' && g.urgency !== selectedUrgency) return false;
    return true;
  });

  return (
    <div className="glass-panel" style={{
      padding: '20px',
      backgroundColor: 'var(--bg-secondary)',
      border: '1px solid var(--border-color)',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      height: '100%'
    }}>
      {/* Map Settings controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Layers size={18} style={{ color: 'var(--accent)' }} />
          Constituency Heatmap
        </h3>

        {/* View toggles */}
        <div style={{ display: 'flex', gap: '4px', background: 'var(--bg-tertiary)', padding: '2px', borderRadius: 'var(--radius-sm)' }}>
          <button
            onClick={() => setMapView('density')}
            style={{
              padding: '4px 10px',
              fontSize: '0.75rem',
              border: 'none',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
              background: mapView === 'density' ? 'var(--bg-secondary)' : 'transparent',
              color: mapView === 'density' ? 'var(--text-primary)' : 'var(--text-tertiary)',
              fontWeight: '500'
            }}
          >
            Grievances
          </button>
          <button
            onClick={() => setMapView('satisfaction')}
            style={{
              padding: '4px 10px',
              fontSize: '0.75rem',
              border: 'none',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
              background: mapView === 'satisfaction' ? 'var(--bg-secondary)' : 'transparent',
              color: mapView === 'satisfaction' ? 'var(--text-primary)' : 'var(--text-tertiary)',
              fontWeight: '500'
            }}
          >
            Satisfaction
          </button>
        </div>
      </div>

      {/* SVG Map Container */}
      <div style={{
        position: 'relative',
        width: '100%',
        backgroundColor: 'var(--bg-tertiary)',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border-color)',
        overflow: 'hidden',
        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)'
      }}>
        {/* SVG paths representing wards */}
        <svg
          viewBox="0 0 800 480"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block'
          }}
        >
          {wards.map((ward) => (
            <g key={ward.id} style={{ cursor: 'pointer' }} onClick={() => handleWardClick(ward.id)}>
              <polygon
                points={ward.points}
                fill={getWardColor(ward)}
                stroke={getWardBorderColor(ward)}
                strokeWidth={selectedWard === ward.id ? '3' : '1.5'}
                style={{
                  transition: 'all 0.3s ease',
                  filter: selectedWard === ward.id ? 'drop-shadow(0 0 8px var(--accent-glow))' : 'none'
                }}
              />
              {/* Ward Labels overlay in SVG */}
              <text
                x={ward.center.x}
                y={ward.center.y}
                textAnchor="middle"
                style={{
                  fill: 'var(--text-primary)',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  pointerEvents: 'none',
                  letterSpacing: '0.05em'
                }}
              >
                {ward.name}
              </text>
              <text
                x={ward.center.x}
                y={ward.center.y + 16}
                textAnchor="middle"
                style={{
                  fill: 'var(--text-secondary)',
                  fontSize: '0.65rem',
                  pointerEvents: 'none'
                }}
              >
                {mapView === 'density' ? `${getWardGrievanceCount(ward.id)} Tickets` : `${getWardSatisfaction(ward)}% Sat`}
              </text>
            </g>
          ))}
        </svg>

        {/* Absolute Overlay Pins */}
        {mapPins.map((pin) => {
          const pinColor = pin.urgency === 'Critical' ? 'var(--danger)' : pin.urgency === 'Medium' ? 'var(--warning)' : 'var(--success)';
          return (
            <div
              key={pin.id}
              onClick={() => onSelectGrievance(pin)}
              className={pin.urgency === 'Critical' ? 'pulse-glow' : ''}
              style={{
                position: 'absolute',
                left: `${pin.coordinates.x}%`,
                top: `${pin.coordinates.y}%`,
                transform: 'translate(-50%, -100%)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 5,
                transition: 'all 0.2s ease'
              }}
              title={`${pin.id}: ${pin.title} (${pin.urgency})`}
            >
              <MapPin
                size={22}
                fill={pinColor}
                color="var(--bg-secondary)"
                style={{
                  filter: `drop-shadow(0 2px 4px rgba(0,0,0,0.3))`
                }}
              />
            </div>
          );
        })}
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
          Click Wards to Filter Dashboard
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
