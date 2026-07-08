import React from 'react';
import { useApp } from '../context/AppContext';
import { Bell } from 'lucide-react';

export default function LiveIncidentTicker() {
  const { grievances } = useApp();

  // Filter recent critical or pending grievances for the ticker
  const recentAlerts = grievances
    .filter(g => g.urgency === 'Critical' || g.status === 'Pending')
    .slice(0, 5);

  return (
    <div className="marquee-container animate-fade-in">
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        fontWeight: 'bold',
        color: 'var(--danger)',
        marginRight: '16px',
        borderRight: '1px solid var(--border-color)',
        paddingRight: '16px',
        flexShrink: 0
      }}>
        <Bell size={14} className="pulse-glow" style={{ color: 'var(--danger)' }} />
        LIVE CONSTITUENCY FEED
      </div>
      <div className="marquee-wrapper">
        <div className="marquee-content">
          {recentAlerts.length > 0 ? (
            // Duplicate the list to ensure seamless infinite looping scroll
            [...recentAlerts, ...recentAlerts].map((alert, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className={`badge ${alert.urgency === 'Critical' ? 'badge-danger' : 'badge-warning'}`} style={{ padding: '1px 6px', fontSize: '0.65rem' }}>
                  {alert.id}
                </span>
                <span style={{ color: 'var(--text-secondary)' }}>{alert.translatedDescription || alert.description}</span>
                <span style={{ color: 'var(--text-tertiary)' }}>({alert.sector})</span>
                <span style={{ color: 'var(--text-tertiary)' }}>•</span>
              </div>
            ))
          ) : (
            <span style={{ color: 'var(--text-tertiary)' }}>All quiet across Bhubaneswar wards. No active critical grievances in database.</span>
          )}
        </div>
      </div>
    </div>
  );
}
