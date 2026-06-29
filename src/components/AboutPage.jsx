import React from 'react';
import { Shield, BookOpen, Layers, Terminal, Server, Check, Award, AlertTriangle, Target, Lightbulb } from 'lucide-react';

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

      {/* THE HACKATHON TRACK */}
      <section className="glass-panel" style={{ padding: '24px', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
        <div style={{ padding: '10px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--accent-glow)', color: 'var(--accent)', flexShrink: 0 }}>
          <Award size={24} />
        </div>
        <div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', fontWeight: 'bold' }}>
            Official Track Alignment
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
            LokDrishti AI was specifically built to answer <strong>Track 1 — People's Priorities: AI for Constituency Development Planning</strong> of the <strong>Build with AI: Code for Communities</strong> Hackathon (supported by Google Cloud). Our solution represents an end-to-end constituency development planner that bridges the voice of citizens directly with local Members of Parliament (MPs) and municipal administrators.
          </p>
        </div>
      </section>

      {/* THE PROBLEM STATEMENT */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <h3 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--danger)' }}>
          <AlertTriangle size={18} />
          The Problem Statement Addressed
        </h3>
        
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
          Constituency development planning in Indian districts often suffers from three severe bottlenecks:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }} className="form-grid-2col">
          {/* Bottleneck 1 */}
          <div className="glass-panel" style={{ padding: '20px', backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '8px' }}>1. Unstructured Dialects</h4>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
              Grievance reporting is offline or text-heavy. Citizens, particularly in rural villages, prefer using regional languages (e.g. Hindi) and voice notes. Without transcription and translation, their priorities are lost to administrators.
            </p>
          </div>

          {/* Bottleneck 2 */}
          <div className="glass-panel" style={{ padding: '20px', backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '8px' }}>2. Lack of Spatial Clarity</h4>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
              MPs and ward commissioners do not have single-pane command centers. They cannot easily detect geographic clusters of critical complaints (water logging, pipeline failures) or assess satisfaction rates per ward.
            </p>
          </div>

          {/* Bottleneck 3 */}
          <div className="glass-panel" style={{ padding: '20px', backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '8px' }}>3. Ad-hoc Allocations</h4>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
              Constituency funds (MPLADS) are allocated on ad-hoc terms without strict priority rules. Work projects lack material resource estimates, cost controls, or sequential Gantt timelines synced to budget limits.
            </p>
          </div>
        </div>
      </section>

      {/* HOW THE SOLUTION IS MADE */}
      <section className="glass-panel" style={{ padding: '24px', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h3 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--success)' }}>
          <Target size={18} />
          How the Solution is Made & Designed
        </h3>

        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
          LokDrishti AI acts as a smart community bridge, converting citizen priorities into concrete engineering schedules:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.85rem', lineHeight: '1.6' }}>
          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ color: 'var(--success)', marginTop: '3px' }}><Check size={16} /></div>
            <div>
              <strong>Linguistic Accessibility (Speech-to-Text):</strong> Citizens record voice notes in Hindi or English using HTML5 Speech APIs. The AI transcribes the text, translates regional phrases, auto-routes the sector (Infrastructure, Water Supply, Sanitation, Public Health), and scores urgency.
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ color: 'var(--success)', marginTop: '3px' }}><Check size={16} /></div>
            <div>
              <strong>Spatial Intelligence Mapping:</strong> The MP dashboard houses an interactive SVG map representing 6 wards (Urban Center, Industrial Core, Rural Green, etc.). It displays grievance heatmaps and overlays geolocated glowing pins indicating active tickets.
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ color: 'var(--success)', marginTop: '3px' }}><Check size={16} /></div>
            <div>
              <strong>Visual Analytics Grid:</strong> Embedded ECharts display horizontal bar categories, weekly incident spikes, and budget donuts that update dynamically as new simulator incidents are triggered.
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ color: 'var(--success)', marginTop: '3px' }}><Check size={16} /></div>
            <div>
              <strong>Interactive Resource Optimizer & Gantt Scheduler:</strong> The planning workspace lets MPs drag-and-drop sort projects. The engine warning-tags any projects that exceed the ₹1.0Cr budget limit. Active works are sequentially scheduled along a Gantt chart that dynamically shifts timeline timelines as cards are re-ordered.
            </div>
          </div>
        </div>
      </section>

      {/* WHY WE BUILT THIS WEBSITE */}
      <section className="glass-panel" style={{ padding: '24px', backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
        <div style={{ padding: '10px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(245, 158, 11, 0.1)', color: 'var(--warning)', flexShrink: 0 }}>
          <Lightbulb size={24} />
        </div>
        <div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', fontWeight: 'bold' }}>
            Why We Built This Website
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
            Our mission is to bring <strong>transparency, speed, and analytical rigor</strong> to community development. LokDrishti AI ensures that public funds are allocated based on data-backed citizen priorities. By structuring regional voices, providing ward-by-ward visibility, and automating engineering directives, we create a scalable model for smart cities and rural constituencies across India.
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
