import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Shield, Key, Eye, EyeOff, AlertCircle } from 'lucide-react';

export default function LoginPortal() {
  const { handleLogin } = useApp();
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('password');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === '' || password.trim() === '') {
      setError('Please fill in all authorization fields.');
      return;
    }
    // Simple simulation login success
    handleLogin(username, password);
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '60px 20px',
      minHeight: '70vh',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <div className="glass-panel-glow animate-slide-in" style={{
        width: '100%',
        maxWidth: '420px',
        padding: '40px 30px',
        backgroundColor: 'var(--bg-secondary)',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius-lg)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Glow background */}
        <div style={{
          position: 'absolute',
          top: '-15%',
          right: '-15%',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
          zIndex: 0,
          pointerEvents: 'none'
        }}></div>

        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Top Shield Icon */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <div className="pulse-glow" style={{
              display: 'inline-flex',
              padding: '16px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent-glow)',
              color: 'var(--accent)'
            }}>
              <Shield size={36} fill="rgba(var(--accent-rgb), 0.1)" />
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0, textAlign: 'center' }}>
              Admin Portal Login
            </h2>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textAlign: 'center', margin: 0, lineHeight: '1.4' }}>
              Access LokDrishti AI MP Command Dashboard and Resource Planning Optimizer.
            </p>
          </div>

          {error && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 12px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--danger-bg)',
              border: '1px solid var(--danger-border)',
              color: 'var(--danger)',
              fontSize: '0.75rem'
            }}>
              <AlertCircle size={14} style={{ flexShrink: 0 }} />
              <span>{error}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="form-group">
              <label className="form-label" htmlFor="login-username">Officer ID / Username</label>
              <input
                id="login-username"
                className="form-input"
                type="text"
                placeholder="e.g. mp.officer"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="login-password">Access Passcode</label>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <input
                  id="login-password"
                  className="form-input"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter passcode"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ paddingRight: '40px' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-tertiary)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    padding: 0
                  }}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                marginTop: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <Key size={16} />
              Authorize & Sign In
            </button>
          </form>

          {/* Quick Demo Assist */}
          <div style={{
            padding: '12px',
            borderRadius: 'var(--radius-sm)',
            border: '1px dashed var(--border-color)',
            backgroundColor: 'var(--bg-tertiary)',
            fontSize: '0.75rem',
            color: 'var(--text-secondary)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
            <span><strong>Demo Simulation Account:</strong> Use username and passcode prefilled above to quickly enter the dashboard.</span>
            <button
              type="button"
              onClick={() => handleLogin('admin', 'password')}
              className="btn"
              style={{
                padding: '6px 12px',
                fontSize: '0.7rem',
                alignSelf: 'center',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                color: 'var(--accent)',
                fontWeight: '600'
              }}
            >
              1-Click Demo Sign In
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
