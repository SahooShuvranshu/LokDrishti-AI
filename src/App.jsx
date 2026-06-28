import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Header from './components/Header';
import ConstituencyMap from './components/ConstituencyMap';
import CitizenPortal from './components/CitizenPortal';
import KpiGrid from './components/KpiGrid';
import GrievanceTable from './components/GrievanceTable';
import DetailPanel from './components/DetailPanel';
import Optimizer from './components/Optimizer';
import EventSimulator from './components/EventSimulator';
import { Shield, Sparkles, Sliders } from 'lucide-react';

function MainAppContent() {
  const { activeTab } = useApp();
  const [mpSubTab, setMpSubTab] = useState('grievances'); // 'grievances' or 'optimizer'
  const [selectedGrievance, setSelectedGrievance] = useState(null);

  return (
    <div className="layout-container">
      {/* Brand Header */}
      <Header />

      {/* Citizen View */}
      {activeTab === 'citizen' && (
        <main style={{ flexGrow: 1 }}>
          <CitizenPortal />
        </main>
      )}

      {/* MP / Zonal Command View */}
      {activeTab === 'mp' && (
        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          
          {/* Sub Navigation Bar for MP Workspace */}
          <div className="glass-panel" style={{
            margin: '16px 20px 0 20px',
            padding: '10px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-color)',
            background: 'var(--bg-secondary)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Shield size={18} style={{ color: 'var(--accent)' }} />
              <span style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Constituency Admin Workspace</span>
            </div>

            {/* Sub-tab selectors */}
            <div style={{ display: 'flex', gap: '6px' }}>
              <button
                onClick={() => setMpSubTab('grievances')}
                className="btn"
                style={{
                  padding: '6px 12px',
                  fontSize: '0.8rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: mpSubTab === 'grievances' ? 'var(--accent)' : 'transparent',
                  color: mpSubTab === 'grievances' ? 'var(--accent-text)' : 'var(--text-secondary)',
                  borderColor: mpSubTab === 'grievances' ? 'var(--accent)' : 'transparent',
                  fontWeight: '600',
                  boxShadow: 'none'
                }}
              >
                Grievance Command Panel
              </button>
              <button
                onClick={() => setMpSubTab('optimizer')}
                className="btn"
                style={{
                  padding: '6px 12px',
                  fontSize: '0.8rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: mpSubTab === 'optimizer' ? 'var(--accent)' : 'transparent',
                  color: mpSubTab === 'optimizer' ? 'var(--accent-text)' : 'var(--text-secondary)',
                  borderColor: mpSubTab === 'optimizer' ? 'var(--accent)' : 'transparent',
                  fontWeight: '600',
                  boxShadow: 'none'
                }}
              >
                <Sparkles size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
                Resource Optimizer
              </button>
            </div>
          </div>

          {/* Sub Workspace Routing */}
          {mpSubTab === 'grievances' ? (
            <main style={{
              display: 'flex',
              gap: '20px',
              padding: '16px 20px 20px 20px',
              flexGrow: 1,
              overflow: 'hidden'
            }}>
              {/* Map & Table Left column */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                flexGrow: 1,
                minWidth: 0,
                width: selectedGrievance ? 'calc(100% - 400px)' : '100%',
                transition: 'width 0.3s ease'
              }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1.1fr 1.4fr',
                  gap: '16px',
                  height: '100%',
                  alignItems: 'stretch'
                }}>
                  {/* Map Widget */}
                  <div style={{ minHeight: '450px' }}>
                    <ConstituencyMap onSelectGrievance={setSelectedGrievance} />
                  </div>
                  
                  {/* KPIs and Table List */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <KpiGrid />
                    <GrievanceTable
                      onSelectGrievance={setSelectedGrievance}
                      selectedGrievanceId={selectedGrievance?.id}
                    />
                  </div>
                </div>
              </div>

              {/* Inspector slide-out right side */}
              {selectedGrievance && (
                <div className="animate-slide-in" style={{
                  width: '380px',
                  flexShrink: 0,
                  height: 'auto'
                }}>
                  <DetailPanel
                    grievance={selectedGrievance}
                    onClose={() => setSelectedGrievance(null)}
                  />
                </div>
              )}
            </main>
          ) : (
            <main style={{ flexGrow: 1 }}>
              <Optimizer />
            </main>
          )}
        </div>
      )}

      {/* Floating Demo Event Simulator */}
      <EventSimulator />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainAppContent />
    </AppProvider>
  );
}
