import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Sun, Moon, Shield, User, Menu, LogOut, Home, BookOpen, Settings } from 'lucide-react';

export default function Header() {
  const {
    theme,
    setTheme,
    activeTab,
    setActiveTab,
    geminiApiKey,
    isLoggedIn,
    user,
    handleLogout
  } = useApp();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setMenuOpen(false); // Close mobile menu on click
  };

  return (
    <header className="glass-panel" style={{
      margin: '20px 20px 0 20px',
      padding: '12px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-color)',
      background: 'var(--bg-secondary)',
      boxShadow: 'var(--shadow-sm)'
    }}>
      {/* Brand row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div className="logo-sparkle" style={{
            display: 'inline-flex',
            padding: '8px',
            borderRadius: '50%',
            backgroundColor: 'var(--accent-glow)',
            color: 'var(--accent)'
          }}>
            <Shield size={20} fill="rgba(var(--accent-rgb), 0.1)" />
          </div>
          <div>
            <h1 style={{ fontSize: '1.15rem', fontWeight: 'bold', margin: 0, tracking: '-0.02em', display: 'flex', alignItems: 'center', gap: '6px' }}>
              LokDrishti <span style={{ color: 'var(--accent)', fontWeight: '800' }}>AI</span>
            </h1>
            <span style={{ fontSize: '0.65rem', color: 'var(--text-tertiary)' }}>Constituency Development & Priority Planner</span>
          </div>
        </div>

        {/* Navigation - Desktop */}
        <nav className="header-nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={() => handleTabClick('landing')}
            className={`btn ${activeTab === 'landing' ? 'btn-primary' : ''}`}
            style={{ padding: '6px 14px', fontSize: '0.8rem', background: activeTab === 'landing' ? '' : 'transparent', border: 'none', boxShadow: 'none' }}
          >
            Home
          </button>
          <button
            onClick={() => handleTabClick('about')}
            className={`btn ${activeTab === 'about' ? 'btn-primary' : ''}`}
            style={{ padding: '6px 14px', fontSize: '0.8rem', background: activeTab === 'about' ? '' : 'transparent', border: 'none', boxShadow: 'none' }}
          >
            About
          </button>
          <button
            onClick={() => handleTabClick('citizen')}
            className={`btn ${activeTab === 'citizen' ? 'btn-primary' : ''}`}
            style={{ padding: '6px 14px', fontSize: '0.8rem', background: activeTab === 'citizen' ? '' : 'transparent', border: 'none', boxShadow: 'none' }}
          >
            Citizen Portal
          </button>
          <button
            onClick={() => handleTabClick('mp')}
            className={`btn ${activeTab === 'mp' ? 'btn-primary' : ''}`}
            style={{ padding: '6px 14px', fontSize: '0.8rem', background: activeTab === 'mp' ? '' : 'transparent', border: 'none', boxShadow: 'none' }}
          >
            Command Center
          </button>
          {isLoggedIn && (
            <button
              onClick={() => handleTabClick('settings')}
              className={`btn ${activeTab === 'settings' ? 'btn-primary' : ''}`}
              style={{ padding: '6px 14px', fontSize: '0.8rem', background: activeTab === 'settings' ? '' : 'transparent', border: 'none', boxShadow: 'none' }}
            >
              API Settings
            </button>
          )}
        </nav>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* API Key Status Pill */}
          <div
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
              fontWeight: '500'
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: geminiApiKey ? 'var(--success)' : 'var(--warning)', display: 'inline-block' }}></span>
            <span>{geminiApiKey ? 'AI Active' : 'AI Offline'}</span>
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

          {/* Sign Out Button & User Details */}
          {isLoggedIn && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {/* Clickable Profile Trigger (goes to Settings tab) */}
              <button
                onClick={() => handleTabClick('settings')}
                title="View Profile Settings"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'none',
                  border: 'none',
                  padding: '4px 8px',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer',
                  color: 'inherit',
                  transition: 'background-color 0.2s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-tertiary)'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                {user?.user_metadata?.avatar_url && (
                  <img
                    src={user.user_metadata.avatar_url}
                    alt="Avatar"
                    style={{ width: '24px', height: '24px', borderRadius: '50%', border: '1px solid var(--border-color)' }}
                  />
                )}
                <span style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-secondary)', maxWidth: '90px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={user?.email}>
                  {user?.user_metadata?.full_name || user?.email?.split('@')[0]}
                </span>
              </button>

              {/* Log Out Button */}
              <button
                className="btn btn-icon"
                onClick={handleLogout}
                title="Sign Out of Command Center"
                style={{ border: '1px solid var(--danger-border)', background: 'var(--danger-bg)', color: 'var(--danger)' }}
              >
                <LogOut size={16} />
              </button>
            </div>
          )}

          {/* Mobile Menu Toggle Button */}
          <button
            className="btn btn-icon header-nav-mobile-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            title="Toggle Menu"
            style={{ border: '1px solid var(--border-color)', background: 'transparent' }}
          >
            <Menu size={16} />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu (rendered below brand row on mobile) */}
      {menuOpen && (
        <div className="header-nav-mobile-dropdown animate-slide-in">
          <button
            onClick={() => handleTabClick('landing')}
            className="btn"
            style={{
              width: '100%',
              justifyContent: 'flex-start',
              background: activeTab === 'landing' ? 'var(--bg-secondary)' : 'transparent',
              color: activeTab === 'landing' ? 'var(--text-primary)' : 'var(--text-tertiary)',
              border: 'none',
              boxShadow: 'none'
            }}
          >
            <Home size={14} style={{ marginRight: '8px' }} />
            Home
          </button>

          <button
            onClick={() => handleTabClick('about')}
            className="btn"
            style={{
              width: '100%',
              justifyContent: 'flex-start',
              background: activeTab === 'about' ? 'var(--bg-secondary)' : 'transparent',
              color: activeTab === 'about' ? 'var(--text-primary)' : 'var(--text-tertiary)',
              border: 'none',
              boxShadow: 'none'
            }}
          >
            <BookOpen size={14} style={{ marginRight: '8px' }} />
            About
          </button>
          
          <button
            onClick={() => handleTabClick('citizen')}
            className="btn"
            style={{
              width: '100%',
              justifyContent: 'flex-start',
              background: activeTab === 'citizen' ? 'var(--bg-secondary)' : 'transparent',
              color: activeTab === 'citizen' ? 'var(--text-primary)' : 'var(--text-tertiary)',
              border: 'none',
              boxShadow: 'none'
            }}
          >
            <User size={14} style={{ marginRight: '8px' }} />
            Citizen Portal
          </button>
          
          <button
            onClick={() => handleTabClick('mp')}
            className="btn"
            style={{
              width: '100%',
              justifyContent: 'flex-start',
              background: activeTab === 'mp' ? 'var(--bg-secondary)' : 'transparent',
              color: activeTab === 'mp' ? 'var(--text-primary)' : 'var(--text-tertiary)',
              border: 'none',
              boxShadow: 'none'
            }}
          >
            <Shield size={14} style={{ marginRight: '8px' }} />
            Command Center
          </button>
          
          {isLoggedIn && (
            <button
              onClick={() => handleTabClick('settings')}
              className="btn"
              style={{
                width: '100%',
                justifyContent: 'flex-start',
                background: activeTab === 'settings' ? 'var(--bg-secondary)' : 'transparent',
                color: activeTab === 'settings' ? 'var(--text-primary)' : 'var(--text-tertiary)',
                border: 'none',
                boxShadow: 'none'
              }}
            >
              <Settings size={14} style={{ marginRight: '8px' }} />
              API Settings
            </button>
          )}
        </div>
      )}
    </header>
  );
}
