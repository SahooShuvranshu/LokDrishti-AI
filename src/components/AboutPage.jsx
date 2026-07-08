import React from 'react';
import { 
  Shield, BookOpen, Layers, Terminal, Server, Check, Award, AlertTriangle, 
  Target, Lightbulb, HelpCircle, MapPin, Brain, Sliders, Database, Users,
  Activity, Landmark, Lock, Globe
} from 'lucide-react';

export default function AboutPage() {
  const stack = [
    { 
      name: 'React 19 & Vite', 
      desc: 'Modern reactive virtual DOM scaffolded for blazing fast page loads and HMR updates with optimized manual chunk compiling.' 
    },
    { 
      name: 'Google Gemini 2.5 Flash-Lite API', 
      desc: 'Drives our translation, letter writers, and strategic roadmaps. Integrates context demographics directly to evaluate prioritization trade-offs (e.g. school travel times vs. youth unemployment).' 
    },
    { 
      name: 'Supabase PostgreSQL Database', 
      desc: 'Hosted cloud database syncing grievances (including geocoded coordinate pairs), work projects queue, and timelines in real-time.' 
    },
    { 
      name: 'Supabase Auth & Google OAuth', 
      desc: 'Premium SSO (Single Sign-On) authentication guarding administrative access with OAuth redirection.' 
    },
    { 
      name: 'Google Maps JavaScript API', 
      desc: 'Interactive geolocated map of Bhubaneswar, Odisha featuring address/landmark searches, live GPS tracking, and spatial pin plots.' 
    },
    { 
      name: 'Apache ECharts', 
      desc: 'Theme-aware horizontal bars, sparklines, and donuts visualizing grievance sectors and budget limits.' 
    },
    { 
      name: 'HTML5 Web Speech API', 
      desc: 'Client-side speech-to-text supporting Hindi (हिंदी) and English (India) voices.' 
    },
    { 
      name: 'dnd-kit Drag-and-Drop', 
      desc: 'Pointer and keyboard sensors enabling the MP to drag cards and priority-order constituency projects.' 
    },
    { 
      name: 'Custom Zinc CSS System', 
      desc: 'Tailored typography (Outfit, Inter), variable-based dark/light toggles, glassmorphic card containers, and responsive layouts.' 
    }
  ];

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '50px' }}>
      
      {/* HEADER SECTION */}
      <section style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '24px' }}>
        <h2 style={{ fontSize: '2.2rem', marginBottom: '8px', background: 'linear-gradient(135deg, var(--text-primary), var(--accent))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: '800' }}>
          About LokDrishti AI
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', margin: 0 }}>
          MPLAD Strategic Resource Planning & Citizen Grievance Portal
        </p>
      </section>

      {/* DIGITAL GOVERNANCE CREDENTIALS */}
      <section className="glass-panel" style={{ padding: '24px', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
        <div style={{ padding: '10px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--accent-glow)', color: 'var(--accent)', flexShrink: 0 }}>
          <Award size={24} />
        </div>
        <div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', fontWeight: 'bold' }}>
            National Informatics Centre — Smart Civic Planning Initiative
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
            LokDrishti AI is a pilot digital governance system deployed for the <strong>Bhubaneswar Parliamentary Constituency</strong>. The platform acts as a secure bridge between the electorate and localized municipal administrations, enabling transparent MPLAD budget utilization.
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

      {/* MPLADS SCHEME CONTEXT */}
      <section className="glass-panel" style={{ padding: '24px', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
        <div style={{ padding: '10px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(168, 85, 247, 0.1)', color: 'rgb(168, 85, 247)', flexShrink: 0 }}>
          <Landmark size={24} />
        </div>
        <div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', fontWeight: 'bold' }}>
            Understanding the MPLADS Framework
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
            Under the **Member of Parliament Local Area Development Scheme (MPLADS)**, each MP is allocated ₹5 Crore annually to execute local developmental projects. However, administrative planning is often hindered by delayed reports and subjective lobbying. LokDrishti AI enforces strict visual audits and budget tracking against a ₹1.00 Crore pilot cap, introducing absolute financial rigor to constituency planning.
          </p>
        </div>
      </section>

      {/* PLATFORM MANDATE */}
      <section className="glass-panel" style={{ padding: '24px', backgroundColor: 'var(--bg-tertiary)', border: '1px dashed var(--accent-border)', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <h3 style={{ fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent)', margin: 0 }}>
          <HelpCircle size={18} />
          Platform Mandate
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
          "Establish a digital-first, multilingual citizen planning portal enabling constituents to register civic development requests via voice transcripts or coordinate mapping. The system shall autonomously categorize incoming grievances, resolve them to spatial heatmaps, and correlate citizen reports against regional demographic data to compile executive roadmap priorities for MPLAD fund allocations."
        </blockquote>
      </section>

      {/* OUR SOLUTION: SYSTEM IMPLEMENTATION */}
      <section className="glass-panel" style={{ padding: '24px', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <h3 style={{ fontSize: '1.25rem', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--success)' }}>
          <Target size={18} />
          System Implementation Highlights
        </h3>

        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
          LokDrishti AI resolves the track bottlenecks through a unified, data-driven architecture:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px', marginTop: '10px' }}>
          
          <div style={{ display: 'flex', gap: '16px' }}>
            <div style={{ padding: '8px', borderRadius: '50%', backgroundColor: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent)', flexShrink: 0, height: '40px', width: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Users size={18} />
            </div>
            <div>
              <h4 style={{ fontWeight: 'bold', fontSize: '0.95rem', marginBottom: '4px' }}>1. Multilingual Citizen Intake with Geocoded Pinning</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
                Citizens submit issues via text or voice. Integrated HTML5 Speech APIs translate local dialects (like Hindi/Oriya tokens) into English summaries. Citizens select the location by searching local landmarks or using their device's current GPS location, dropping a pin on Google Maps.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px' }}>
            <div style={{ padding: '8px', borderRadius: '50%', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--success)', flexShrink: 0, height: '40px', width: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Brain size={18} />
            </div>
            <div>
              <h4 style={{ fontWeight: 'bold', fontSize: '0.95rem', marginBottom: '4px' }}>2. AI Strategic Advisor & Demographic Gaps Analytics</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
                Our AI Strategic Advisor consolidates active grievances and pending projects, correlating them with whole-constituency demographics. Google Gemini performs objective trade-off analyses—for instance, evaluating whether to fund a school upgrade based on travel-distance and enrollment metrics vs. establishing a vocational training center to tackle youth unemployment.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px' }}>
            <div style={{ padding: '8px', borderRadius: '50%', backgroundColor: 'rgba(239, 68, 68, 0.1)', color: 'var(--danger)', flexShrink: 0, height: '40px', width: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <MapPin size={18} />
            </div>
            <div>
              <h4 style={{ fontWeight: 'bold', fontSize: '0.95rem', marginBottom: '4px' }}>3. Live MP Command Center & GIS Diagnostic Map</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
                Visualizes hotspots and department backlogs on an interactive Google Map centered on Bhubaneswar, Odisha. MPs can review details, filter by sector/severity, and generate AI-powered official directive letters and notices instantly.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px' }}>
            <div style={{ padding: '8px', borderRadius: '50%', backgroundColor: 'rgba(245, 158, 11, 0.1)', color: 'var(--warning)', flexShrink: 0, height: '40px', width: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Sliders size={18} />
            </div>
            <div>
              <h4 style={{ fontWeight: 'bold', fontSize: '0.95rem', marginBottom: '4px' }}>4. MPLAD Fund Resource Optimizer & Gantt Planner</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
                Enforces strict budget constraints against the ₹1.0Cr fund cap. Administrators can drag-and-drop sort proposed work orders, and the system automatically calculates start/end timelines, rendering them on a responsive Gantt chart.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECURITY & DATA INTEGRITY SECTION */}
      <section className="glass-panel" style={{ padding: '24px', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
        <div style={{ padding: '10px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(220, 38, 38, 0.1)', color: 'rgb(220, 38, 38)', flexShrink: 0 }}>
          <Lock size={24} />
        </div>
        <div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', fontWeight: 'bold' }}>
            Data Integrity & Security Standards
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
            LokDrishti AI secures public submissions and MP command controls. Citizen portal submissions and administrative settings require verified SSO Google OAuth sessions. In addition, custom developer credentials and key overrides are cached exclusively on the client's local storage sandbox, protecting credentials from network interception.
          </p>
        </div>
      </section>

      {/* ENTERPRISE SCALABILITY BLUEPRINT */}
      <section className="glass-panel" style={{ padding: '24px', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
        <div style={{ padding: '10px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(59, 130, 246, 0.1)', color: 'rgb(59, 130, 246)', flexShrink: 0 }}>
          <Globe size={24} />
        </div>
        <div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', fontWeight: 'bold' }}>
            National Scale & Google Cloud Blueprint
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
            To expand beyond the Bhubaneswar pilot, LokDrishti AI is designed for containerized deployment on **Google Cloud Run** connected to a managed **Google Cloud SQL (PostgreSQL)** database or **AlloyDB**. Integration with Pub/Sub and Cloud Functions allows for streaming telemetry directly to BigQuery for state-wide developmental forecasting.
          </p>
        </div>
      </section>

      {/* DETAILED TECH STACK */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <h3 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Terminal size={18} style={{ color: 'var(--accent)' }} />
          Detailed Technology Stack
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '16px'
        }}>
          {stack.map((item, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: '20px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Check size={14} style={{ color: 'var(--accent)' }} />
                {item.name}
              </span>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
