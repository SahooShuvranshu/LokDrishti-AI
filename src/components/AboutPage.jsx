import React from 'react';
import { Shield, BookOpen, Layers, Terminal, Server, Check, Award, AlertTriangle, Target, Lightbulb, HelpCircle } from 'lucide-react';

export default function AboutPage() {
  const stack = [
    { name: 'React 19 & Vite', desc: 'Modern reactive virtual DOM scaffolded for blazing fast page loads and HMR updates.' },
    { name: 'Custom Zinc CSS System', desc: 'Tailored typography (Outfit, Inter), variable-based dark/light toggles, glassmorphism, and responsive grids.' },
    { name: 'Apache ECharts', desc: 'Theme-aware horizontal bars, sparklines, and donuts visualizing grievance sectors and budget limits.' },
    { name: 'HTML5 Web Speech API', desc: 'Client-side speech-to-text supporting Hindi (हिंदी) and English (India) voices.' },
    { name: 'dnd-kit Drag-and-Drop', desc: 'Pointer and keyboard sensors enabling the MP to drag cards and priority-order constituency projects.' },
    { name: 'Render Deployments', desc: 'Automated CI/CD git-commit triggered builds hosting static assets on a global CDN.' }
  ];

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '40px' }}>
      
      {/* HEADER SECTION */}
      <section style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '24px' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '8px', background: 'linear-gradient(135deg, var(--text-primary), var(--accent))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          About LokDrishti AI
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', margin: 0 }}>
          Code for Communities Hackathon — Track 1: People's Priorities (AI for Constituency Development Planning)
        </p>
      </section>

      {/* HACKATHON TRACK CREDENTIALS */}
      <section className="glass-panel" style={{ padding: '24px', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
        <div style={{ padding: '10px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--accent-glow)', color: 'var(--accent)', flexShrink: 0 }}>
          <Award size={24} />
        </div>
        <div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', fontWeight: 'bold' }}>
            Track 1 — People's Priorities (AI for Constituency Development Planning)
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
            LokDrishti AI is a custom-built solution for the <strong>Build with AI: Code for Communities</strong> Hackathon (supported by Google Cloud). Our platform directly aligns with <strong>Track 1</strong>, providing a bridge between the voice of the electorate and local governance.
          </p>
        </div>
      </section>

      {/* THE PROBLEM STATEMENT */}
      <section className="glass-panel" style={{ padding: '24px', backgroundColor: 'var(--bg-tertiary)', border: '1px dashed var(--danger-border)', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <h3 style={{ fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--danger)', margin: 0 }}>
          <AlertTriangle size={18} />
          The Problem
        </h3>
        <blockquote style={{ 
          fontSize: '0.9rem', 
          color: 'var(--text-primary)', 
          lineHeight: '1.6', 
          borderLeft: '4px solid var(--danger)', 
          paddingLeft: '16px', 
          margin: 0,
          fontStyle: 'italic'
        }}>
          "MPs receive development requests through public meetings, letters, social media, grievance portals, and direct representations — while local development plans contain dozens of competing proposed projects. There's no objective way to consolidate citizen feedback, spot recurring needs, and weigh competing proposals against real demand (for example, comparing requests for school upgrades against enrollment and travel-distance data versus a proposed vocational centre)."
        </blockquote>
      </section>

      {/* THE HACKATHON CHALLENGE */}
      <section className="glass-panel" style={{ padding: '24px', backgroundColor: 'var(--bg-tertiary)', border: '1px dashed var(--accent-border)', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <h3 style={{ fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent)', margin: 0 }}>
          <HelpCircle size={18} />
          The Challenge
        </h3>
        <blockquote style={{ 
          fontSize: '0.9rem', 
          color: 'var(--text-primary)', 
          lineHeight: '1.6', 
          borderLeft: '4px solid var(--accent)', 
          paddingLeft: '16px', 
          margin: 0,
          fontStyle: 'italic'
        }}>
          "Build a multilingual AI platform where citizens can submit development suggestions via voice, text, photos, or messaging apps. The system should analyze submissions to surface recurring themes, map demand hotspots, and combine citizen feedback with demographic data, infrastructure gaps, local development plans, and public datasets — to recommend and rank high-priority development works an MP can act on."
        </blockquote>
      </section>

      {/* OUR SOLUTION: HOW LOKDRISHTI SOLVES THIS */}
      <section className="glass-panel" style={{ padding: '24px', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h3 style={{ fontSize: '1.25rem', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--success)' }}>
          <Target size={18} />
          LokDrishti AI Solution Architecture
        </h3>

        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
          LokDrishti AI resolves the track bottlenecks through four unified product modules:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.85rem', lineHeight: '1.6' }}>
          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ color: 'var(--success)', marginTop: '3px' }}><Check size={16} /></div>
            <div>
              <strong>1. Multilingual Submissions (Voice & Regional dialects):</strong> 
              Our Citizen Portal integrates a speech-to-text voice engine (supporting Hindi / regional languages and English) via HTML5 Speech APIs. The AI Refiner transcribes and translates messy voice notes, routes them to correct sectors (Infrastructure, Water Supply, Sanitation, Public Health, Heritage/Tourism, Transport), and grades urgency.
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ color: 'var(--success)', marginTop: '3px' }}><Check size={16} /></div>
            <div>
              <strong>2. Demand Mapping & Hotspots Visualizer:</strong> 
              The interactive SVG Constituency Map maps ward-wise complaints, coloring wards by Grievance Density or Resource Satisfaction. Glow pins indicate exact locations of pending citizen tickets, giving MPs immediate visual feedback on hotspot zones.
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ color: 'var(--success)', marginTop: '3px' }}><Check size={16} /></div>
            <div>
              <strong>3. Analytical Consolidation (Apache ECharts):</strong> 
              Command Center gathers citizen complaints in real-time, showing department-wise tickets, trend lines, and urgency indicators. MPs can filter the entire grid by Sector, Urgency, Ward, or Search query.
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ color: 'var(--success)', marginTop: '3px' }}><Check size={16} /></div>
            <div>
              <strong>4. Prioritization Queue & Gantt Timeline Planner:</strong> 
              Rather than ad-hoc allocations, the Resource Optimizer allows the MP to drag-and-drop sort proposed works. The system alerts when proposals exceed the ₹1.0Cr budget cap and automatically schedules active works sequentially along a dynamic Gantt timeline.
            </div>
          </div>
        </div>
      </section>

      {/* WHY WE BUILT THIS SOLUTION */}
      <section className="glass-panel" style={{ padding: '24px', backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
        <div style={{ padding: '10px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(245, 158, 11, 0.1)', color: 'var(--warning)', flexShrink: 0 }}>
          <Lightbulb size={24} />
        </div>
        <div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', fontWeight: 'bold' }}>
            Why We Built This Website
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
            LokDrishti AI was built to replace arbitrary constituent planning with data-driven decision tools. By structuring unorganized citizen feedback, visualizing demand clusters on digital maps, and calculating priorities relative to budget caps, we empower local administrators to act efficiently and bring maximum impact to their communities.
          </p>
        </div>
      </section>

      {/* TECHNOLOGY STACK */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <h3 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Terminal size={18} style={{ color: 'var(--accent)' }} />
          Technology Stack & Frameworks
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '16px'
        }}>
          {stack.map((item, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: '16px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>{item.name}</span>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: '1.4', margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
