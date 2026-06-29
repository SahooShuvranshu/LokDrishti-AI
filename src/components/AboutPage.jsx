import React from 'react';
import { Shield, BookOpen, Layers, Terminal, Server, Check } from 'lucide-react';

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
          Code for Communities Hackathon — Submission Case Study & Architecture Review
        </p>
      </section>

      {/* THE HACKATHON CONTEXT */}
      <section className="glass-panel" style={{ padding: '24px', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent)' }}>
          <BookOpen size={18} />
          The Hackathon Challenge
        </h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
          The <strong>Code for Communities</strong> hackathon by <strong>Hack2Skill</strong> challenges developers to build innovative technology solutions that empower local communities, improve citizen engagement, and streamline municipal governance. 
          LokDrishti AI addresses this directly by creating a single-pane digital interface bridging citizens and constituency administrators.
        </p>
      </section>

      {/* THE PROBLEM STATEMENT */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="form-grid-2col">
        {/* Pain Point 1 */}
        <div className="glass-panel" style={{ padding: '20px', border: '1px dashed var(--danger-border)', backgroundColor: 'var(--bg-tertiary)' }}>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 'bold', color: 'var(--danger)', marginBottom: '8px' }}>
            Problem 1: The Civic Feedback Loop Gap
          </h4>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
            Citizens reporting issues often face linguistic barriers, particularly in regional dialects (like Hindi), or submit chaotic, unstructured reports. Municipal channels struggle to categorize these complaints or assign severity.
          </p>
        </div>

        {/* Pain Point 2 */}
        <div className="glass-panel" style={{ padding: '20px', border: '1px dashed var(--danger-border)', backgroundColor: 'var(--bg-tertiary)' }}>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 'bold', color: 'var(--danger)', marginBottom: '8px' }}>
            Problem 2: Blind Budgeting & Project Delays
          </h4>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
            Members of Parliament (MPs) and local bodies manage developmental budgets (such as MP Local Area Development Funds) without a structured framework. Projects are funded on ad-hoc terms without Gantt tracking or priority sequencing.
          </p>
        </div>
      </section>

      {/* THE SOLUTION ARCHITECTURE */}
      <section className="glass-panel" style={{ padding: '24px', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h3 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--success)' }}>
          <Shield size={18} />
          The LokDrishti AI Solution
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.85rem', lineHeight: '1.6' }}>
          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ color: 'var(--success)', marginTop: '3px' }}><Check size={16} /></div>
            <div>
              <strong>Inclusive Citizen Reporting:</strong> Citizen Portal integrates multi-lingual voice transcription. If reported in Hindi, the local AI mock-translator rewrites the description in professional English, automatically categorizes the sector, and scores urgency.
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ color: 'var(--success)', marginTop: '3px' }}><Check size={16} /></div>
            <div>
              <strong>Spatial Command & Visual Analytics:</strong> Visualizes constituency health using an interactive SVG map representing 6 wards. Displays density heatmaps, satisfaction rates, and EChart KPI analytics side-by-side.
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ color: 'var(--success)', marginTop: '3px' }}><Check size={16} /></div>
            <div>
              <strong>Official Directives & Work Exporting:</strong> Inspector panel streams official compliance orders to ward commissioners and citizen updates. Converts tickets into formal works and exports them directly to the planning queue.
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ color: 'var(--success)', marginTop: '3px' }}><Check size={16} /></div>
            <div>
              <strong>Prioritized Resource Allocation:</strong> Optimizer utilizes drag-and-drop sorting. Moves items that exceed the ₹1.0Cr budget cap into suspension and schedules active works sequentially along a dynamic Gantt timeline.
            </div>
          </div>
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
