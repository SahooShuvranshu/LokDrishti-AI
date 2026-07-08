import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Settings, Key, Shield, CheckCircle, RefreshCw, AlertTriangle, User } from 'lucide-react';

export default function ProfileSettings() {
  const { 
    user, 
    geminiApiKey, 
    setGeminiApiKey, 
    googleMapsApiKey, 
    setGoogleMapsApiKey 
  } = useApp();

  const [geminiKeyInput, setGeminiKeyInput] = useState(geminiApiKey);
  const [mapsKeyInput, setMapsKeyInput] = useState(googleMapsApiKey);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const handleSave = () => {
    setGeminiApiKey(geminiKeyInput.trim());
    setGoogleMapsApiKey(mapsKeyInput.trim());
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleReset = () => {
    setIsResetting(true);
    // Clear custom settings and fall back to env key
    setGeminiKeyInput('');
    setMapsKeyInput('');
    setGeminiApiKey('');
    setGoogleMapsApiKey('');
    
    setTimeout(() => {
      setIsResetting(false);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 2000);
    }, 500);
  };

  return (
    <div className="admin-advisor-container animate-fade-in" style={{ padding: '24px 0', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Header */}
        <div>
          <h3 className="card-title flex items-center gap-2" style={{ color: 'var(--text-primary)', fontSize: '1.5rem', fontWeight: '800' }}>
            <Settings size={26} className="text-indigo-400" />
            Profile & API Configuration
          </h3>
          <p className="text-zinc-400 text-sm mt-2">
            Configure your local environment and manage third-party service credentials. API keys entered here are stored locally in your browser session for secure testing.
          </p>
        </div>

        {saveSuccess && (
          <div className="glass-panel animate-slide-in" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 16px', backgroundColor: 'var(--success-bg)', border: '1px solid var(--success-border)', borderRadius: '10px', color: 'var(--success)' }}>
            <CheckCircle size={18} />
            <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>Configuration updated successfully!</span>
          </div>
        )}

        <div className="optimizer-grid" style={{ gridTemplateColumns: '1fr', gap: '20px', padding: 0, minHeight: 'auto' }}>
          
          {/* User Account Info */}
          {user && (
            <div className="card-outer" style={{ padding: '24px', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '12px' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 'bold', color: 'var(--text-primary)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <User size={18} className="text-indigo-400" />
                Active Administrative Profile
              </h4>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                {user.user_metadata?.avatar_url ? (
                  <img 
                    src={user.user_metadata.avatar_url} 
                    alt="User Profile" 
                    style={{ width: '64px', height: '64px', borderRadius: '50%', border: '2px solid var(--accent)' }}
                  />
                ) : (
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--accent-glow)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <User size={32} />
                  </div>
                )}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                    {user.user_metadata?.full_name || 'Constituency Officer'}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    {user.email}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--accent)', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 'bold' }}>
                    Access Level: Authorized Administrator
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* API Credentials Input Form */}
          <div className="card-outer" style={{ padding: '24px', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 'bold', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px', margin: 0 }}>
              <Key size={18} className="text-indigo-400" />
              API Settings Overrides
            </h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Gemini Key */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-secondary)' }}>
                  Google Gemini API Key
                </label>
                <input
                  type="password"
                  placeholder="Paste your Gemini API Key (e.g. AIzaSy...)"
                  value={geminiKeyInput}
                  onChange={(e) => setGeminiKeyInput(e.target.value)}
                  className="form-input"
                  style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-tertiary)', color: 'var(--text-primary)', boxSizing: 'border-box' }}
                />
                <span style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)' }}>
                  Required for live grievance auto-translations, geocode extraction, and AI strategic briefings.
                </span>
              </div>

              {/* Maps Key */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-secondary)' }}>
                  Google Maps API Key
                </label>
                <input
                  type="password"
                  placeholder="Paste your Google Maps API Key"
                  value={mapsKeyInput}
                  onChange={(e) => setMapsKeyInput(e.target.value)}
                  className="form-input"
                  style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-tertiary)', color: 'var(--text-primary)', boxSizing: 'border-box' }}
                />
                <span style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)' }}>
                  Required for geocoding address searches and centering marker pin drops on the maps.
                </span>
              </div>
            </div>

            {/* Note block */}
            <div className="glass-panel" style={{ display: 'flex', gap: '12px', padding: '12px', borderRadius: '8px', border: '1px solid rgba(245,158,11,0.2)', backgroundColor: 'rgba(245,158,11,0.02)' }}>
              <AlertTriangle size={18} className="text-warning" style={{ flexShrink: 0 }} />
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                <strong>Testing Notice:</strong> Custom keys are stored locally inside your browser's <code>localStorage</code> cache. They are never sent to our server and will only be applied to your active browser session.
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '8px' }}>
              <button
                onClick={handleReset}
                disabled={isResetting}
                className="btn"
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  padding: '10px 16px', 
                  fontSize: '0.85rem',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-secondary)'
                }}
              >
                <RefreshCw size={14} className={isResetting ? 'animate-spin' : ''} />
                Restore Defaults
              </button>

              <button
                onClick={handleSave}
                className="btn btn-primary"
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  padding: '10px 20px', 
                  fontSize: '0.85rem'
                }}
              >
                Save Configuration
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
