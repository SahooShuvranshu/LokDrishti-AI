import React, { createContext, useState, useEffect, useContext } from 'react';

const AppContext = createContext();

const initialGrievances = [
  {
    id: 'LKD-1001',
    title: 'Severe Potholes on Main Junction',
    description: 'The main crossing near the industrial area is completely ruined with deep potholes. Two-wheelers are slipping daily during evening hours.',
    translatedDescription: 'The main crossing near the industrial area is completely ruined with deep potholes. Two-wheelers are slipping daily during evening hours.',
    reporter: 'Rajesh Kumar',
    ward: 'Ward A: Industrial Core',
    sector: 'Infrastructure',
    urgency: 'Critical',
    status: 'Investigating',
    coordinates: { x: 25, y: 35 },
    timestamp: '2026-06-25T10:30:00Z',
    impact: '150+ households'
  },
  {
    id: 'LKD-1002',
    title: 'Drinking Water Contamination near School',
    description: 'We are getting muddy water from municipal taps for the last 3 days near Government Primary School. Children are at risk of waterborne diseases.',
    translatedDescription: 'We are getting muddy water from municipal taps for the last 3 days near Government Primary School. Children are at risk of waterborne diseases.',
    reporter: 'Anjali Sharma',
    ward: 'Ward B: Urban Center',
    sector: 'Water Supply',
    urgency: 'Critical',
    status: 'Pending',
    coordinates: { x: 48, y: 42 },
    timestamp: '2026-06-26T08:15:00Z',
    impact: '80 households'
  },
  {
    id: 'LKD-1003',
    title: 'Garbage Dumping on Canal Road',
    description: 'Waste management trucks are dumping garbage directly on the side of Canal Road. Huge foul smell and stray cattle hazard.',
    translatedDescription: 'Waste management trucks are dumping garbage directly on the side of Canal Road. Huge foul smell and stray cattle hazard.',
    reporter: 'Suresh Patel',
    ward: 'Ward C: Rural Green',
    sector: 'Sanitation',
    urgency: 'Medium',
    status: 'Pending',
    coordinates: { x: 72, y: 58 },
    timestamp: '2026-06-26T14:45:00Z',
    impact: '200 households'
  },
  {
    id: 'LKD-1004',
    title: 'Heritage Archway Pillars Crumbling',
    description: 'Historic gateway pillars are showing signs of structural cracking. Urgent conservation intervention needed to prevent collapse.',
    translatedDescription: 'Historic gateway pillars are showing signs of structural cracking. Urgent conservation intervention needed to prevent collapse.',
    reporter: 'Vikram Dev',
    ward: 'Ward D: Heritage Quarter',
    sector: 'Heritage & Tourism',
    urgency: 'Medium',
    status: 'Investigating',
    coordinates: { x: 55, y: 22 },
    timestamp: '2026-06-24T11:20:00Z',
    impact: 'Heritage preservation conservation'
  },
  {
    id: 'LKD-1005',
    title: 'Low Water Pressure in Suburbia Blocks',
    description: 'Water pressure is extremely low, barely reaching the ground floor taps in block C. Scheduled timing is also erratic.',
    translatedDescription: 'Water pressure is extremely low, barely reaching the ground floor taps in block C. Scheduled timing is also erratic.',
    reporter: 'Preeti Deshmukh',
    ward: 'Ward F: Suburbia East',
    sector: 'Water Supply',
    urgency: 'Low',
    status: 'Resolved',
    coordinates: { x: 80, y: 25 },
    timestamp: '2026-06-23T09:00:00Z',
    impact: '40 households'
  },
  {
    id: 'LKD-1006',
    title: 'Mosquito Breeding in Waterlogged Empty Plot',
    description: 'खाली प्लॉट में बारिश का पानी जमा हो गया है और बहुत सारे मच्छर पैदा हो रहे हैं। डेंगू फैलने का खतरा है।',
    translatedDescription: 'Rainwater has accumulated in the empty plot and a lot of mosquitoes are breeding. There is a risk of dengue spreading.',
    reporter: 'Ramesh Singh',
    ward: 'Ward E: Coastal/Lake District',
    sector: 'Public Health',
    urgency: 'Critical',
    status: 'Pending',
    coordinates: { x: 30, y: 75 },
    timestamp: '2026-06-27T17:10:00Z',
    impact: '120 households'
  },
  {
    id: 'LKD-1007',
    title: 'Lack of Bus Shelter at Main Market',
    description: 'No bus shelter or seating at Main Market stop. Passengers have to stand in the scorching sun and heavy rain.',
    translatedDescription: 'No bus shelter or seating at Main Market stop. Passengers have to stand in the scorching sun and heavy rain.',
    reporter: 'Meena Iyer',
    ward: 'Ward B: Urban Center',
    sector: 'Transport',
    urgency: 'Low',
    status: 'Work Order Created',
    coordinates: { x: 52, y: 48 },
    timestamp: '2026-06-25T16:00:00Z',
    impact: '300+ daily commuters'
  },
  {
    id: 'LKD-1008',
    title: 'Broken Street Lights near Industrial Outer Ring',
    description: 'Street lights are not working for 1km stretch. Shift workers face safety hazards and theft risks during night hours.',
    translatedDescription: 'Street lights are not working for 1km stretch. Shift workers face safety hazards and theft risks during night hours.',
    reporter: 'Amit Verma',
    ward: 'Ward A: Industrial Core',
    sector: 'Infrastructure',
    urgency: 'Medium',
    status: 'Investigating',
    coordinates: { x: 18, y: 28 },
    timestamp: '2026-06-24T21:30:00Z',
    impact: '100+ night workers'
  },
  {
    id: 'LKD-1009',
    title: 'Clogged Drainage Overflowing onto Street',
    description: 'The sewage line is blocked and black drainage water is leaking onto the residential streets, causing extreme health hazard.',
    translatedDescription: 'The sewage line is blocked and black drainage water is leaking onto the residential streets, causing extreme health hazard.',
    reporter: 'Sunita Rao',
    ward: 'Ward B: Urban Center',
    sector: 'Sanitation',
    urgency: 'Critical',
    status: 'Work Order Created',
    coordinates: { x: 45, y: 55 },
    timestamp: '2026-06-27T07:45:00Z',
    impact: '60 households'
  },
  {
    id: 'LKD-1010',
    title: 'Stray Cattle Outbreak Causing Road Traffic',
    description: 'Huge group of cows blocking the bypass highway. Multiple near-miss accidents in the mornings.',
    translatedDescription: 'Huge group of cows blocking the bypass highway. Multiple near-miss accidents in the mornings.',
    reporter: 'Gopal Sen',
    ward: 'Ward C: Rural Green',
    sector: 'Transport',
    urgency: 'Medium',
    status: 'Pending',
    coordinates: { x: 68, y: 65 },
    timestamp: '2026-06-26T12:00:00Z',
    impact: 'High commuter impact'
  },
  // Adding more mock grievances to reach 30+
  {
    id: 'LKD-1011',
    title: 'PHC Clinic Lacks Basic Medicines',
    description: 'Primary Health Center in Ward C has no paracetamol or basic ORS packets. Staff asking patients to buy from private stores.',
    translatedDescription: 'Primary Health Center in Ward C has no paracetamol or basic ORS packets. Staff asking patients to buy from private stores.',
    reporter: 'Babulal Murmu',
    ward: 'Ward C: Rural Green',
    sector: 'Public Health',
    urgency: 'Critical',
    status: 'Investigating',
    coordinates: { x: 78, y: 62 },
    timestamp: '2026-06-25T11:00:00Z',
    impact: 'Village clinic patients'
  },
  {
    id: 'LKD-1012',
    title: 'Vandalism at Lake Park Walkway',
    description: 'Park benches are broken and park lights have been shattered. Antisocial elements gathering after sunset.',
    translatedDescription: 'Park benches are broken and park lights have been shattered. Antisocial elements gathering after sunset.',
    reporter: 'Siddharth Roy',
    ward: 'Ward E: Coastal/Lake District',
    sector: 'Heritage & Tourism',
    urgency: 'Low',
    status: 'Resolved',
    coordinates: { x: 38, y: 82 },
    timestamp: '2026-06-22T19:00:00Z',
    impact: 'Local morning walkers'
  },
  {
    id: 'LKD-1013',
    title: 'Water Logged Sidewalk Near Metro Station',
    description: 'Underpass and sidewalks are flooded with 6 inches of water even after small showers due to blocked rainwater outlets.',
    translatedDescription: 'Underpass and sidewalks are flooded with 6 inches of water even after small showers due to blocked rainwater outlets.',
    reporter: 'Neha Saxena',
    ward: 'Ward B: Urban Center',
    sector: 'Infrastructure',
    urgency: 'Medium',
    status: 'Pending',
    coordinates: { x: 42, y: 46 },
    timestamp: '2026-06-27T08:00:00Z',
    impact: '500+ daily commuters'
  },
  {
    id: 'LKD-1014',
    title: 'High Chemical Smell from Industrial Effluents',
    description: 'Factory releasing strong gaseous chemical smell at late night hours. Residents getting headaches and breathing issues.',
    translatedDescription: 'Factory releasing strong gaseous chemical smell at late night hours. Residents getting headaches and breathing issues.',
    reporter: 'Karan Malhotra',
    ward: 'Ward A: Industrial Core',
    sector: 'Public Health',
    urgency: 'Critical',
    status: 'Investigating',
    coordinates: { x: 22, y: 42 },
    timestamp: '2026-06-27T23:50:00Z',
    impact: '300 households'
  },
  {
    id: 'LKD-1015',
    title: 'Broken High Mast Light at Chowk',
    description: 'The main high-mast lighting at Gandhi Chowk is dead for 2 weeks. The entire intersection is pitch black after 7 PM.',
    translatedDescription: 'The main high-mast lighting at Gandhi Chowk is dead for 2 weeks. The entire intersection is pitch black after 7 PM.',
    reporter: 'Prashant Joshi',
    ward: 'Ward D: Heritage Quarter',
    sector: 'Infrastructure',
    urgency: 'Medium',
    status: 'Pending',
    coordinates: { x: 50, y: 28 },
    timestamp: '2026-06-26T20:10:00Z',
    impact: 'Commercial district'
  },
  {
    id: 'LKD-1016',
    title: 'Broken Lake Side Barrier',
    description: 'The protective steel barrier near the lake walk is broken. Dangerous for playing kids and joggers.',
    translatedDescription: 'The protective steel barrier near the lake walk is broken. Dangerous for residential area.',
    reporter: 'Tina Fernandes',
    ward: 'Ward E: Coastal/Lake District',
    sector: 'Infrastructure',
    urgency: 'Medium',
    status: 'Investigating',
    coordinates: { x: 25, y: 68 },
    timestamp: '2026-06-26T15:30:00Z',
    impact: 'Recreational safety'
  },
  {
    id: 'LKD-1017',
    title: 'Dust Pollution due to Open Construction',
    description: 'Flyover construction crew is not sprinkling water. Heavy dust is causing severe breathing problems for elders.',
    translatedDescription: 'Flyover construction crew is not sprinkling water. Heavy dust is causing severe breathing problems for elders.',
    reporter: 'Jitendra Gupta',
    ward: 'Ward F: Suburbia East',
    sector: 'Public Health',
    urgency: 'Medium',
    status: 'Pending',
    coordinates: { x: 82, y: 35 },
    timestamp: '2026-06-27T10:15:00Z',
    impact: 'Roadside residents'
  },
  {
    id: 'LKD-1018',
    title: 'Open Electric Wire Hanging from Pole',
    description: 'स्कूल के पास बिजली का खंभा टूटा है और खुला तार नीचे लटक रहा है। तुरंत ठीक करने की आवश्यकता है।',
    translatedDescription: 'Electric pole near school is broken and live open wire is hanging down. Needs immediate fixing.',
    reporter: 'Satish Dwivedi',
    ward: 'Ward B: Urban Center',
    sector: 'Infrastructure',
    urgency: 'Critical',
    status: 'Pending',
    coordinates: { x: 46, y: 38 },
    timestamp: '2026-06-28T09:40:00Z',
    impact: 'School children & residents'
  },
  {
    id: 'LKD-1019',
    title: 'Silt Blockage in Drainage Channel',
    description: 'Agricultural drainage channel is blocked with plastic waste and mud. Water might overflow into crop fields if it rains.',
    translatedDescription: 'Agricultural drainage channel is blocked with plastic waste and mud. Water might overflow into crop fields if it rains.',
    reporter: 'Hari Prasad',
    ward: 'Ward C: Rural Green',
    sector: 'Sanitation',
    urgency: 'Medium',
    status: 'Investigating',
    coordinates: { x: 65, y: 72 },
    timestamp: '2026-06-25T13:20:00Z',
    impact: '15 farming families'
  },
  {
    id: 'LKD-1020',
    title: 'Littering and Lack of Dustbins in Fort Pathway',
    description: 'Tourists leaving plastic bottles and chips bags everywhere. No dustbins installed on the fort scenic trail.',
    translatedDescription: 'Tourists leaving plastic bottles and chips bags everywhere. No dustbins installed on the fort scenic trail.',
    reporter: 'Rajiv Mehta',
    ward: 'Ward D: Heritage Quarter',
    sector: 'Heritage & Tourism',
    urgency: 'Low',
    status: 'Work Order Created',
    coordinates: { x: 62, y: 26 },
    timestamp: '2026-06-24T15:45:00Z',
    impact: '1000+ weekly tourists'
  },
  {
    id: 'LKD-1021',
    title: 'Borewell Motor Burnt in Block A',
    description: 'Municipal borewell motor burnt out, leaving 4 street blocks without any water for domestic chores.',
    translatedDescription: 'Municipal borewell motor burnt out, leaving 4 street blocks without any water for domestic chores.',
    reporter: 'Kavitha Swamy',
    ward: 'Ward F: Suburbia East',
    sector: 'Water Supply',
    urgency: 'Critical',
    status: 'Pending',
    coordinates: { x: 75, y: 18 },
    timestamp: '2026-06-28T06:15:00Z',
    impact: '110 households'
  },
  {
    id: 'LKD-1022',
    title: 'Non-Functional Traffic Signal at Bypass',
    description: 'Bypass crossing signal is blinking yellow for a week. Heavy trucks speeding causing chaos.',
    translatedDescription: 'Bypass crossing signal is blinking yellow for a week. Heavy trucks speeding causing chaos.',
    reporter: 'Nikhil Taneja',
    ward: 'Ward A: Industrial Core',
    sector: 'Transport',
    urgency: 'Medium',
    status: 'Pending',
    coordinates: { x: 28, y: 22 },
    timestamp: '2026-06-26T11:40:00Z',
    impact: 'High highway traffic'
  },
  {
    id: 'LKD-1023',
    title: 'Overflowing Septic Tank in Slum Settlement',
    description: 'सामुदायिक शौचालय की टंकी भर गई है और बाहर बह रही है। बदबू और बीमारी का खतरा है।',
    translatedDescription: 'Community toilet septic tank is full and overflowing outside. Risk of foul smell and diseases.',
    reporter: 'Manoj Paswan',
    ward: 'Ward B: Urban Center',
    sector: 'Sanitation',
    urgency: 'Critical',
    status: 'Pending',
    coordinates: { x: 44, y: 50 },
    timestamp: '2026-06-28T11:10:00Z',
    impact: '350 residents'
  },
  {
    id: 'LKD-1024',
    title: 'Broken Steps on Temple Hillpath',
    description: 'Several stairs leading to the hill shrine are broken and cracked. Elderly pilgrims are tripping frequently.',
    translatedDescription: 'Several stairs leading to the hill shrine are broken and cracked. Elderly pilgrims are tripping frequently.',
    reporter: 'Gauri Shinde',
    ward: 'Ward D: Heritage Quarter',
    sector: 'Heritage & Tourism',
    urgency: 'Medium',
    status: 'Investigating',
    coordinates: { x: 58, y: 18 },
    timestamp: '2026-06-25T07:20:00Z',
    impact: '500+ daily pilgrims'
  },
  {
    id: 'LKD-1025',
    title: 'Algae Bloom in Drinking Water Pond',
    description: 'Village drinking water pond has thick green algae cover. Local cattle and residents drink from it. Emergency filtration needed.',
    translatedDescription: 'Village drinking water pond has thick green algae cover. Local cattle and residents drink from it. Emergency filtration needed.',
    reporter: 'Sanjay Hembram',
    ward: 'Ward C: Rural Green',
    sector: 'Public Health',
    urgency: 'Critical',
    status: 'Pending',
    coordinates: { x: 80, y: 70 },
    timestamp: '2026-06-28T14:00:00Z',
    impact: 'Entire tribal hamlet'
  },
  {
    id: 'LKD-1026',
    title: 'Frequent Voltage Fluctuations Burning Appliances',
    description: 'Voltage dropping to 140V repeatedly in afternoon. Multiple refrigerator compressors and TVs damaged.',
    translatedDescription: 'Voltage dropping to 140V repeatedly in afternoon. Multiple refrigerator compressors and TVs damaged.',
    reporter: 'Arun Bhatia',
    ward: 'Ward F: Suburbia East',
    sector: 'Infrastructure',
    urgency: 'Medium',
    status: 'Pending',
    coordinates: { x: 85, y: 28 },
    timestamp: '2026-06-27T15:50:00Z',
    impact: '80 households'
  },
  {
    id: 'LKD-1027',
    title: 'Fisheries Dock Piling Rusted',
    description: 'Concrete dock piling is crumbling. Risk of deck collapse when fishing boats dock during high tide.',
    translatedDescription: 'Concrete dock piling is crumbling. Risk of deck collapse when fishing boats dock during high tide.',
    reporter: 'Joseph Dsouza',
    ward: 'Ward E: Coastal/Lake District',
    sector: 'Infrastructure',
    urgency: 'Critical',
    status: 'Investigating',
    coordinates: { x: 22, y: 78 },
    timestamp: '2026-06-26T09:20:00Z',
    impact: 'Local fishing community'
  },
  {
    id: 'LKD-1028',
    title: 'No Speed Breakers near Children School Lane',
    description: 'Speeding bikes on school lane. Heavy risk for toddlers during morning entry and afternoon disperse.',
    translatedDescription: 'Speeding bikes on school lane. Heavy risk for toddlers during morning entry and afternoon disperse.',
    reporter: 'Nisha Pillai',
    ward: 'Ward B: Urban Center',
    sector: 'Transport',
    urgency: 'Medium',
    status: 'Pending',
    coordinates: { x: 50, y: 44 },
    timestamp: '2026-06-27T12:00:00Z',
    impact: '200+ students'
  },
  {
    id: 'LKD-1029',
    title: 'Stagnant Canal Water Stink',
    description: 'Municipal canal flow blocked near Ward E border. Stagnant black sludge releasing toxic gases.',
    translatedDescription: 'Municipal canal flow blocked near Ward E border. Stagnant black sludge releasing toxic gases.',
    reporter: 'Zafar Iqbal',
    ward: 'Ward E: Coastal/Lake District',
    sector: 'Sanitation',
    urgency: 'Medium',
    status: 'Pending',
    coordinates: { x: 34, y: 72 },
    timestamp: '2026-06-27T18:00:00Z',
    impact: '150 households'
  },
  {
    id: 'LKD-1030',
    title: 'Illegal Sand Mining on River Banks',
    description: 'Tractors loading riverbed sand in rural borders, leading to severe bank erosion and water level drops.',
    translatedDescription: 'Tractors loading riverbed sand in rural borders, leading to severe bank erosion and water level drops.',
    reporter: 'Ramakant Yadav',
    ward: 'Ward C: Rural Green',
    sector: 'Heritage & Tourism',
    urgency: 'Critical',
    status: 'Pending',
    coordinates: { x: 74, y: 52 },
    timestamp: '2026-06-28T16:45:00Z',
    impact: 'Ecology & groundwater supply'
  }
];

const initialProjects = [
  {
    id: 'PROJ-001',
    name: 'Industrial Core Bypass Asphalt Overlay',
    sector: 'Infrastructure',
    ward: 'Ward A: Industrial Core',
    cost: 25, // ₹ Lakhs
    duration: 30, // Days
    materials: 'Bitumen: 40 Tons, Aggregates: 200 Tons, Labor: 400 Man-days',
    status: 'active'
  },
  {
    id: 'PROJ-002',
    name: 'Ward B Secondary School Water Filtration Plant',
    sector: 'Water Supply',
    ward: 'Ward B: Urban Center',
    cost: 15,
    duration: 15,
    materials: 'RO Systems: 2 Units, Storage Tanks: 5000L, Pipes: 120m, Labor: 120 Man-days',
    status: 'queued'
  },
  {
    id: 'PROJ-003',
    name: 'Canal Road Solid Waste segregation Hub',
    sector: 'Sanitation',
    ward: 'Ward C: Rural Green',
    cost: 18,
    duration: 20,
    materials: 'Shredder: 1 Unit, Steel Shed: 1, Fencing: 150m, Labor: 180 Man-days',
    status: 'queued'
  },
  {
    id: 'PROJ-004',
    name: 'Heritage Gate Foundation Grouting & Restoration',
    sector: 'Heritage & Tourism',
    ward: 'Ward D: Heritage Quarter',
    cost: 12,
    duration: 25,
    materials: 'Lime Mortar: 15 Tons, Stone Blocks: 8 Tons, Labor: 300 Specialist Man-days',
    status: 'queued'
  },
  {
    id: 'PROJ-005',
    name: 'Lake Promenade Anti-Rust Guardrails Installation',
    sector: 'Infrastructure',
    ward: 'Ward E: Coastal/Lake District',
    cost: 8,
    duration: 10,
    materials: 'SS Rails: 350m, Concrete mix: 5 cu.m, Labor: 80 Man-days',
    status: 'completed'
  },
  {
    id: 'PROJ-006',
    name: 'Suburbia East Substation Transformer Upgrade',
    sector: 'Infrastructure',
    ward: 'Ward F: Suburbia East',
    cost: 32,
    duration: 12,
    materials: '100kVA Transformer: 1 Unit, High Tension Cables: 150m, Labor: 60 Specialist Man-days',
    status: 'queued'
  }
];

export const AppProvider = ({ children }) => {
  const [grievances, setGrievances] = useState(() => {
    const localData = localStorage.getItem('lokdrishti_grievances');
    return localData ? JSON.parse(localData) : initialGrievances;
  });

  const [projects, setProjects] = useState(() => {
    const localData = localStorage.getItem('lokdrishti_projects');
    return localData ? JSON.parse(localData) : initialProjects;
  });

  const [selectedWard, setSelectedWard] = useState('All');
  const [selectedUrgency, setSelectedUrgency] = useState('All');
  const [selectedSector, setSelectedSector] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  const [activeTab, setActiveTab] = useState('landing'); // 'landing', 'about', 'mp', or 'citizen'
  
  const [geminiApiKey, setGeminiApiKey] = useState(() => {
    return import.meta.env.VITE_GEMINI_API_KEY || localStorage.getItem('gemini_api_key') || '';
  });

  const [googleMapsApiKey, setGoogleMapsApiKey] = useState(() => {
    return import.meta.env.VITE_GOOGLE_MAPS_API_KEY || localStorage.getItem('google_maps_api_key') || '';
  });

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('lokdrishti_logged_in') === 'true';
  });

  const handleLogin = (username, password) => {
    setIsLoggedIn(true);
    localStorage.setItem('lokdrishti_logged_in', 'true');
    return true;
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('lokdrishti_logged_in');
  };

  // Persist Data
  useEffect(() => {
    localStorage.setItem('lokdrishti_grievances', JSON.stringify(grievances));
  }, [grievances]);

  useEffect(() => {
    localStorage.setItem('lokdrishti_projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const rootEl = document.documentElement;
    const bodyEl = document.body;
    if (theme === 'dark') {
      rootEl.classList.add('dark');
      bodyEl.classList.add('dark');
    } else {
      rootEl.classList.remove('dark');
      bodyEl.classList.remove('dark');
    }
  }, [theme]);

  // Action Handlers
  const addGrievance = (newTicket) => {
    setGrievances((prev) => [newTicket, ...prev]);
  };

  const updateGrievanceStatus = (id, status) => {
    setGrievances((prev) =>
      prev.map((g) => (g.id === id ? { ...g, status } : g))
    );
  };

  const addProject = (newProj) => {
    setProjects((prev) => [...prev, newProj]);
  };

  const updateProjectStatus = (id, status) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status } : p))
    );
  };

  const deleteProject = (id) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  // Event Simulator Trigger
  const triggerSimulatorEvent = (eventType) => {
    const nowStr = new Date().toISOString();
    let newTickets = [];

    if (eventType === 'monsoon') {
      newTickets = [
        {
          id: `LKD-${Date.now() + 1}`,
          title: 'Severe Street Flooding at Subway',
          description: 'Rainwater has fully flooded the subway bypass. Vehicles stalled, causing 3km long traffic gridlock.',
          translatedDescription: 'Severe Street Flooding at Subway',
          reporter: 'Simulated Citizen (Monsoon)',
          ward: 'Ward B: Urban Center',
          sector: 'Infrastructure',
          urgency: 'Critical',
          status: 'Pending',
          coordinates: { x: 55, y: 52 },
          timestamp: nowStr,
          impact: '400+ daily commuters'
        },
        {
          id: `LKD-${Date.now() + 2}`,
          title: 'Roof Collapse Risk in Old Slum Area',
          description: 'Heavy rains have damaged the support beams of the community center roof. Water leaking from electrical boxes.',
          translatedDescription: 'Roof Collapse Risk in Old Slum Area',
          reporter: 'Simulated Citizen (Monsoon)',
          ward: 'Ward E: Coastal/Lake District',
          sector: 'Sanitation',
          urgency: 'Critical',
          status: 'Pending',
          coordinates: { x: 38, y: 76 },
          timestamp: nowStr,
          impact: '20 families'
        },
        {
          id: `LKD-${Date.now() + 3}`,
          title: 'Sewer Line Backed Up & Gushing Water',
          description: 'Main drainage pipe near markets overflowing. Raw sewage flooding shop entrances.',
          translatedDescription: 'Sewer Line Backed Up & Gushing Water',
          reporter: 'Simulated Citizen (Monsoon)',
          ward: 'Ward B: Urban Center',
          sector: 'Sanitation',
          urgency: 'Critical',
          status: 'Pending',
          coordinates: { x: 48, y: 50 },
          timestamp: nowStr,
          impact: '50 shops'
        }
      ];
    } else if (eventType === 'water_failure') {
      newTickets = [
        {
          id: `LKD-${Date.now() + 1}`,
          title: 'Water Treatment Plant Valve Malfunction',
          description: 'No supply in municipal lines since morning. Local vendors selling water tanks at double prices.',
          translatedDescription: 'Water Treatment Plant Valve Malfunction',
          reporter: 'Simulated Citizen (Water Crisis)',
          ward: 'Ward A: Industrial Core',
          sector: 'Water Supply',
          urgency: 'Critical',
          status: 'Pending',
          coordinates: { x: 26, y: 38 },
          timestamp: nowStr,
          impact: 'Entire industrial housing'
        },
        {
          id: `LKD-${Date.now() + 2}`,
          title: 'Turbid Water Coming Out of Taps',
          description: 'Water has black particles and high chlorine smell. Unusable for drinking or cooking.',
          translatedDescription: 'Turbid Water Coming Out of Taps',
          reporter: 'Simulated Citizen (Water Crisis)',
          ward: 'Ward F: Suburbia East',
          sector: 'Water Supply',
          urgency: 'Medium',
          status: 'Pending',
          coordinates: { x: 78, y: 22 },
          timestamp: nowStr,
          impact: '90 households'
        }
      ];
    } else if (eventType === 'elections') {
      newTickets = [
        {
          id: `LKD-${Date.now() + 1}`,
          title: 'Demand for Youth Skills Center',
          description: 'Elections are near and we need a local skill center for unemployed graduates in Ward C.',
          translatedDescription: 'Demand for Youth Skills Center',
          reporter: 'Community Representative',
          ward: 'Ward C: Rural Green',
          sector: 'Infrastructure',
          urgency: 'Medium',
          status: 'Pending',
          coordinates: { x: 70, y: 60 },
          timestamp: nowStr,
          impact: '500+ youth'
        },
        {
          id: `LKD-${Date.now() + 2}`,
          title: 'Demand for Community Clinic Extension',
          description: 'Request for expanding hospital hours to 24/7 due to rising constituency population.',
          translatedDescription: 'Request for expanding hospital hours to 24/7 due to rising constituency population.',
          reporter: 'Panchayat Chief',
          ward: 'Ward C: Rural Green',
          sector: 'Public Health',
          urgency: 'Medium',
          status: 'Pending',
          coordinates: { x: 74, y: 64 },
          timestamp: nowStr,
          impact: '2000+ residents'
        }
      ];
    }

    setGrievances((prev) => [...newTickets, ...prev]);
  };

  // Helper values
  const budgetCap = 100; // ₹1.0Cr = 100 Lakhs
  const currentBudgetUsed = projects
    .filter((p) => p.status !== 'deleted')
    .reduce((sum, p) => sum + p.cost, 0);

  return (
    <AppContext.Provider
      value={{
        grievances,
        setGrievances,
        projects,
        setProjects,
        selectedWard,
        setSelectedWard,
        selectedUrgency,
        setSelectedUrgency,
        selectedSector,
        setSelectedSector,
        searchQuery,
        setSearchQuery,
        theme,
        setTheme,
        activeTab,
        setActiveTab,
        geminiApiKey,
        setGeminiApiKey,
        googleMapsApiKey,
        setGoogleMapsApiKey,
        isLoggedIn,
        handleLogin,
        handleLogout,
        budgetCap,
        currentBudgetUsed,
        addGrievance,
        updateGrievanceStatus,
        addProject,
        updateProjectStatus,
        deleteProject,
        triggerSimulatorEvent
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
