import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Sun, Moon, Settings, Shield, User, Bell, Key, Info } from 'lucide-react';

export default function Header() {
  const {
    theme,
    setTheme,
    activeTab,
    setActiveTab,
    geminiApiKey,
    setGeminiApiKey,
    grievances
  } = useApp();

  const [showSettings, setShowSettings] = useState(false);
  const [tempKey, setTempKey] = useState(geminiApiKey);

  // Filter recent critical or pending grievances for the ticker
  const recentAlerts = grievances
    .filter(g => g.urgency === 'Critical' || g.status === 'Pending')
    .slice(0, 5);

  const handleSaveSettings = (e) => {
    e.preventDefault();
    setGeminiApiKey(tempKey);
    localStorage.setItem('gemini_api_key', tempKey);
    setShowSettings(false);
  };

  return (
    <header className="glass-panel" style={{
      margin: '20px 20px 0 20px',
      padding: '12px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      borderRadius: 'var(--radius-md)',
      zIndex: 10
    }}>
      {/* Upper row: Brand, Navigation, Action Buttons */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'between',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        {/* Brand/Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div className="pulse-glow" style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: 'var(--accent)',
            boxShadow: '0 0 10px var(--accent)'
          }}></div>
          <h1 style={{
            fontSize: '1.4rem',
            lineHeight: '1.4rem',
            margin: 0,
            background: 'linear-gradient(135deg, var(--text-primary), var(--accent))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold'
          }}>
            LokDrishti <span style={{ fontWeight: 'normal', color: 'var(--text-secondary)' }}>AI</span>
          </h1>
        </div>

        {/* Tab Switcher */}
        <div className="glass-panel" style={{
          display: 'flex',
          padding: '4px',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-color)',
          background: 'var(--bg-tertiary)'
        }}>
          <button
            onClick={() => setActiveTab('citizen')}
            className="btn"
            style={{
              padding: '6px 16px',
              fontSize: '0.85rem',
              borderRadius: 'var(--radius-sm)',
              border: 'none',
              boxShadow: 'none',
              background: activeTab === 'citizen' ? 'var(--bg-secondary)' : 'transparent',
              color: activeTab === 'citizen' ? 'var(--text-primary)' : 'var(--text-tertiary)',
              fontWeight: activeTab === 'citizen' ? '600' : '400'
            }}
          >
            <User size={14} style={{ marginRight: '6px', verticalAlign: 'middle', display: 'inline' }} />
            Citizen Portal
          </button>
          <button
            onClick={() => setActiveTab('mp')}
            className="btn"
            style={{
              padding: '6px 16px',
              fontSize: '0.85rem',
              borderRadius: 'var(--radius-sm)',
              border: 'none',
              boxShadow: 'none',
              background: activeTab === 'mp' ? 'var(--bg-secondary)' : 'transparent',
              color: activeTab === 'mp' ? 'var(--text-primary)' : 'var(--text-tertiary)',
              fontWeight: activeTab === 'mp' ? '600' : '400'
            }}
          >
            <Shield size={14} style={{ marginRight: '6px', verticalAlign: 'middle', display: 'inline' }} />
            MP Command Center
          </button>
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* API Key Status Pill */}
          <div
            onClick={() => setShowSettings(true)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: 'var(--radius-full)',
              background: geminiApiKey ? 'var(--success-bg)' : 'var(--warning-bg)',
              border: `1px solid ${geminiApiKey ? 'var(--success-border)' : 'var(--warning-border)'}`,
              fontSize: '0.75rem',
              color: geminiApiKey ? 'var(--success)' : 'var(--warning)',
              cursor: 'pointer',
              fontWeight: '500'
            }}
          >
            <div style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: geminiApiKey ? 'var(--success)' : 'var(--warning)'
            }}></div>
            {geminiApiKey ? 'Gemini Live' : 'AI Simulation'}
          </div>

          {/* Theme Toggle */}
          <button
            className="btn btn-icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            title="Toggle dark/light mode"
            style={{ border: '1px solid var(--border-color)', background: 'transparent' }}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Settings button */}
          <button
            className="btn btn-icon"
            onClick={() => setShowSettings(true)}
            title="API Settings"
            style={{ border: '1px solid var(--border-color)', background: 'transparent' }}
          >
            <Settings size={16} />
          </button>
        </div>
      </div>

      {/* Lower row: Live Incident Ticker */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        background: 'var(--bg-tertiary)',
        borderRadius: 'var(--radius-sm)',
        padding: '6px 12px',
        fontSize: '0.8rem',
        overflow: 'hidden',
        border: '1px solid var(--border-color)'
      }}>
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
          LIVE constituency FEED
        </div>
        <div style={{ flexGrow: 1, overflow: 'hidden', position: 'relative' }}>
          <div className="marquee-content" style={{ display: 'flex', gap: '40px' }}>
            {recentAlerts.length > 0 ? (
              // Double the array for seamless scrolling
              [...recentAlerts, ...recentAlerts].map((alert, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className={`badge ${alert.urgency === 'Critical' ? 'badge-danger' : 'badge-warning'}`} style={{ padding: '1px 6px', fontSize: '0.65rem' }}>
                    {alert.id}
                  </span>
                  <span style={{ color: 'var(--text-secondary)' }}>{alert.title}</span>
                  <span style={{ color: 'var(--text-tertiary)' }}>({alert.ward.split(':')[0]})</span>
                  <span style={{ color: 'var(--text-tertiary)' }}>•</span>
                </div>
              ))
            ) : (
              <span style={{ color: 'var(--text-tertiary)' }}>No active critical grievances in the constituency. All quiet.</span>
            )}
          </div>
        </div>
      </div>

      {/* Settings Modal Overlay */}
      {showSettings && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999
        }}>
          <div className="glass-panel-glow" style={{
            width: '90%',
            maxWidth: '500px',
            padding: '24px',
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-color)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2 style={{ fontSize: '1.25rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Key size={18} style={{ color: 'var(--accent)' }} />
                Gemini AI Configuration
              </h2>
              <button
                className="btn btn-icon"
                onClick={() => setShowSettings(false)}
                style={{ border: 'none', background: 'transparent', fontSize: '1.2rem' }}
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleSaveSettings} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="form-group">
                <label className="form-label" htmlFor="api-key-input">Gemini API Key</label>
                <input
                  id="api-key-input"
                  className="form-input"
                  type="password"
                  placeholder="Enter your Gemini API key (AIzaSy...)"
                  value={tempKey}
                  onChange={(e) => setTempKey(e.target.value)}
                />
              </div>

              <div className="glass-panel" style={{
                padding: '12px',
                fontSize: '0.8rem',
                color: 'var(--text-secondary)',
                backgroundColor: 'var(--bg-tertiary)',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                gap: '10px'
              }}>
                <Info size={28} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                <div>
                  <strong>Simulation Mode:</strong> If no API key is provided, the application runs a local Mock AI stream that simulates realistic responses, letters, and timelines. Ideal for demonstrations!
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '10px' }}>
                <button
                  type="button"
                  className="btn"
                  onClick={() => setShowSettings(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Save Settings
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}
