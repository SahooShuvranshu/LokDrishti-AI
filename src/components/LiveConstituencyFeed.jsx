import React from 'react';
import { useApp } from '../context/AppContext';
import { Bell, MapPin, Calendar, Activity, AlertCircle } from 'lucide-react';

export default function LiveConstituencyFeed({ title = "Live Constituency Incident Feed" }) {
  const { grievances } = useApp();

  // Get the 5 most recent grievances (latest first)
  const recentFeed = [...grievances]
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
    .slice(0, 5);

  return (
    <div className="glass-panel" style={{ padding: '24px', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', margin: 0, display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)' }}>
          <Bell size={18} className="pulse-glow text-danger" style={{ color: 'var(--danger)' }} />
          {title}
        </h3>
        <span style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981', display: 'inline-block' }}></span>
          Live Database Connection
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {recentFeed.length > 0 ? (
          recentFeed.map((item) => (
            <div 
              key={item.id} 
              className="glass-panel table-row-hover" 
              style={{ 
                padding: '12px 16px', 
                border: '1px solid var(--border-color)', 
                borderRadius: '8px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                gap: '12px',
                backgroundColor: 'var(--bg-tertiary)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0 }}>
                {/* Severity Dot Indicator */}
                <span className="relative flex h-2 w-2" style={{ flexShrink: 0 }}>
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${item.urgency === 'Critical' ? 'bg-red-500' : item.urgency === 'Medium' ? 'bg-amber-500' : 'bg-green-500'}`} style={{ backgroundColor: item.urgency === 'Critical' ? 'var(--danger)' : item.urgency === 'Medium' ? 'var(--warning)' : 'var(--success)', borderRadius: '50%', width: '8px', height: '8px', position: 'absolute' }}></span>
                  <span className={`relative inline-flex rounded-full h-2 w-2 ${item.urgency === 'Critical' ? 'bg-red-500' : item.urgency === 'Medium' ? 'bg-amber-500' : 'bg-green-500'}`} style={{ backgroundColor: item.urgency === 'Critical' ? 'var(--danger)' : item.urgency === 'Medium' ? 'var(--warning)' : 'var(--success)', borderRadius: '50%', width: '8px', height: '8px', display: 'block' }}></span>
                </span>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: 0 }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {item.translatedDescription || item.description}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.7rem', color: 'var(--text-tertiary)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                      <MapPin size={10} />
                      {item.sector}
                    </span>
                    <span>•</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                      <Calendar size={10} />
                      {new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              </div>

              <span className={`badge ${item.status === 'Resolved' ? 'badge-success' : item.status === 'In Progress' ? 'badge-warning' : 'badge-danger'}`} style={{ fontSize: '0.65rem', flexShrink: 0 }}>
                {item.status}
              </span>
            </div>
          ))
        ) : (
          <div style={{ textAlign: 'center', padding: '20px', color: 'var(--text-tertiary)', fontSize: '0.8rem' }}>
            <AlertCircle size={24} style={{ margin: '0 auto 8px auto', display: 'block' }} />
            No reports in the constituency database.
          </div>
        )}
      </div>

    </div>
  );
}
