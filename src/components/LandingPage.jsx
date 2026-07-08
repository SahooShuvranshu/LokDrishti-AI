import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import LiveConstituencyFeed from './LiveConstituencyFeed';
import { 
  Shield, User, Info, ArrowRight, Map, Languages, BarChart3, Sliders, 
  Activity, FileText, CheckCircle, Database, HelpCircle, Landmark, Users, 
  ChevronDown, ChevronUp 
} from 'lucide-react';

export default function LandingPage() {
  const { setActiveTab } = useApp();
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqData = [
    {
      q: "What is the primary objective of LokDrishti AI?",
      a: "LokDrishti AI is designed to help Members of Parliament (MPs) optimize the allocation of MPLADS (Member of Parliament Local Area Development Scheme) funds. It bridges the gap between chaotic public feedback and structured planning by geocoding grievances and using AI to evaluate municipal priorities."
    },
    {
      q: "How does the multilingual voice transcription work?",
      a: "The Citizen Portal utilizes the HTML5 Web Speech API to record regional dialects (such as Hindi or Odia) directly in the browser. The transcript is processed by Google Gemini 2.5 Flash-Lite, which translates it into English, categorizes it into a municipal sector, and assesses urgency."
    },
    {
      q: "What budget limit does the platform enforce?",
      a: "The Resource Optimizer audits project prioritizations against a ₹1.00 Crore MPLADS budget ceiling. If active projects exceed the cap, the system triggers visual warnings and halts dispatch generation to ensure strict compliance."
    },
    {
      q: "Can this system scale to other parliamentary constituencies?",
      a: "Yes. LokDrishti AI uses a modern React and serverless Supabase PostgreSQL architecture. It is fully mapped to migrate onto Google Cloud (Cloud Run, AlloyDB, and Pub/Sub) to scale across all constituencies state-wide."
    }
  ];

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '80px' }}>
      
      {/* HERO SECTION */}
      <section className="glass-panel-glow animate-fade-in" style={{
        padding: '80px 30px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary))',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius-lg)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Glowing Background Orbs */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          left: '10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
          zIndex: 0,
          pointerEvents: 'none'
        }}></div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Government Portal Tag */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 16px',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'var(--accent-glow)',
            border: '1px solid var(--border-color)',
            fontSize: '0.8rem',
            color: 'var(--accent)',
            fontWeight: '600',
            marginBottom: '28px'
          }}>
            <Shield size={12} fill="var(--accent)" />
            Bhubaneswar Parliamentary Constituency Command
          </div>

          <h1 style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            lineHeight: '1.2',
            fontWeight: '800',
            marginBottom: '16px',
            background: 'linear-gradient(135deg, var(--text-primary) 30%, var(--accent) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.03em'
          }}>
            Smart Constituency Planning & Command Center
          </h1>
          
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            color: 'var(--text-secondary)',
            maxWidth: '800px',
            margin: '0 auto 40px auto',
            lineHeight: '1.6'
          }}>
            LokDrishti AI bridges the gap between citizens and local administrators. Empowering citizens with multi-lingual voice grievances and equipping MPs with predictive spatial dashboards and budget resource optimizers.
          </p>

          {/* Action Cards Grid */}
          <div className="form-grid-2col" style={{ maxWidth: '800px', margin: '0 auto', gap: '20px' }}>
            {/* Citizen Action */}
            <div 
              onClick={() => setActiveTab('citizen')}
              className="glass-panel table-row-hover animate-slide-in" 
              style={{
                padding: '28px',
                textAlign: 'left',
                cursor: 'pointer',
                border: '1px solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                borderRadius: 'var(--radius-md)'
              }}
            >
              <div style={{ display: 'inline-flex', padding: '10px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--success-bg)', color: 'var(--success)', alignSelf: 'flex-start' }}>
                <User size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Citizen Portal</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                File civic reports using regional voice notes. AI automatically transcribes, translates, and filters tickets directly to municipal units.
              </p>
              <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--success)', display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: 'auto' }}>
                Report Grievance <ArrowRight size={14} />
              </span>
            </div>

            {/* MP Action */}
            <div 
              onClick={() => setActiveTab('mp')}
              className="glass-panel table-row-hover animate-slide-in" 
              style={{
                padding: '28px',
                textAlign: 'left',
                cursor: 'pointer',
                border: '1px solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                borderRadius: 'var(--radius-md)'
              }}
            >
              <div style={{ display: 'inline-flex', padding: '10px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--accent-glow)', color: 'var(--accent)', alignSelf: 'flex-start' }}>
                <Shield size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Command Dashboard</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                Access the MP Command Center. Monitor spatial heatmaps, review live grievance feeds, and optimize constituency developmental budgets.
              </p>
              <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--accent)', display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: 'auto' }}>
                Access Command Center <ArrowRight size={14} />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CONSTITUENCY STATS SECTION */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '8px' }}>Bhubaneswar Constituency At-A-Glance</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Pilot metrics running under current MPLADS allocations.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '20px'
        }}>
          <div className="glass-panel" style={{ padding: '24px', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ padding: '12px', borderRadius: '8px', backgroundColor: 'var(--accent-glow)', color: 'var(--accent)' }}>
              <Map size={24} />
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>21 Wards</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Full Municipal Coverage</div>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '24px', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ padding: '12px', borderRadius: '8px', backgroundColor: 'var(--success-bg)', color: 'var(--success)' }}>
              <Landmark size={24} />
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>₹1.00 Cr</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>MPLAD Fund Ceiling</div>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '24px', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ padding: '12px', borderRadius: '8px', backgroundColor: 'rgba(236, 72, 153, 0.1)', color: 'rgb(236, 72, 153)' }}>
              <Sliders size={24} />
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>6 Sectors</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Tracked Budget Channels</div>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '24px', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ padding: '12px', borderRadius: '8px', backgroundColor: 'rgba(168, 85, 247, 0.1)', color: 'rgb(168, 85, 247)' }}>
              <Database size={24} />
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>Real-time</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Supabase Sync Engine</div>
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW PIPELINE SECTION */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '8px' }}>Platform Processing Workflow</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>See how LokDrishti AI streamlines constituent issues into resolved public works.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          {/* Step 1 */}
          <div className="glass-panel" style={{ padding: '24px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '12px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '16px', right: '16px', fontSize: '1.8rem', fontWeight: '900', color: 'var(--border-color)', opacity: 0.5 }}>01</div>
            <div style={{ color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Languages size={24} />
              <h4 style={{ margin: 0, fontWeight: 'bold', fontSize: '1.1rem' }}>Citizen Intake</h4>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
              Citizens voice grievances in regional dialects or drag a pin on the map. Speech is transcribed and geocoded locally.
            </p>
          </div>

          {/* Step 2 */}
          <div className="glass-panel" style={{ padding: '24px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '12px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '16px', right: '16px', fontSize: '1.8rem', fontWeight: '900', color: 'var(--border-color)', opacity: 0.5 }}>02</div>
            <div style={{ color: 'var(--success)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Activity size={24} />
              <h4 style={{ margin: 0, fontWeight: 'bold', fontSize: '1.1rem' }}>Gemini Refinement</h4>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
              Gemini AI translates unstructured dialect reports to English, extracts sector categories, and evaluates ticket priority.
            </p>
          </div>

          {/* Step 3 */}
          <div className="glass-panel" style={{ padding: '24px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '12px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '16px', right: '16px', fontSize: '1.8rem', fontWeight: '900', color: 'var(--border-color)', opacity: 0.5 }}>03</div>
            <div style={{ color: 'var(--warning)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Map size={24} />
              <h4 style={{ margin: 0, fontWeight: 'bold', fontSize: '1.1rem' }}>Command Mapping</h4>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
              Grievances populate a central administrative GIS command panel, highlighting hotspots and category backlog distributions.
            </p>
          </div>

          {/* Step 4 */}
          <div className="glass-panel" style={{ padding: '24px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '12px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '16px', right: '16px', fontSize: '1.8rem', fontWeight: '900', color: 'var(--border-color)', opacity: 0.5 }}>04</div>
            <div style={{ color: 'rgb(168, 85, 247)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sliders size={24} />
              <h4 style={{ margin: 0, fontWeight: 'bold', fontSize: '1.1rem' }}>Resource Optimization</h4>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
              Administrators prioritize projects using drag-and-drop Gantt charts audited against the ₹1.00 Crore budget ceiling.
            </p>
          </div>

          {/* Step 5 */}
          <div className="glass-panel" style={{ padding: '24px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '12px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '16px', right: '16px', fontSize: '1.8rem', fontWeight: '900', color: 'var(--border-color)', opacity: 0.5 }}>05</div>
            <div style={{ color: 'rgb(236, 72, 153)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FileText size={24} />
              <h4 style={{ margin: 0, fontWeight: 'bold', fontSize: '1.1rem' }}>Dispatch Printer</h4>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
              Generate and print official municipal work orders complete with government emblems and red stamps to execute repairs.
            </p>
          </div>
        </div>
      </section>

      {/* CORE FUNCTIONAL PILLARS */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '8px' }}>Core Platform Features</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Discover the analytical mechanisms powering constituency planning.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px'
        }}>
          {/* Feature 1 */}
          <div className="glass-panel" style={{ padding: '24px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ color: 'var(--accent)', marginBottom: '4px' }}>
              <Map size={24} />
            </div>
            <h4 style={{ fontSize: '1rem', fontWeight: 'bold', margin: 0 }}>Interactive SVG Map</h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
              Color-coded ward regions displaying real-time grievance density and satisfaction indices, complete with geolocated pin-drops.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="glass-panel" style={{ padding: '24px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ color: 'var(--accent)', marginBottom: '4px' }}>
              <Languages size={24} />
            </div>
            <h4 style={{ fontSize: '1rem', fontWeight: 'bold', margin: 0 }}>Multi-Lingual Voice Translation</h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
              HTML5 speech recognition supporting Indic dialects (Hindi/English), translating messy voice notes into clean structured tickets.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="glass-panel" style={{ padding: '24px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ color: 'var(--accent)', marginBottom: '4px' }}>
              <BarChart3 size={24} />
            </div>
            <h4 style={{ fontSize: '1rem', fontWeight: 'bold', margin: 0 }}>Visual Analytics Dashboard</h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
              Embedded, responsive Apache ECharts widgets displaying weekly incident spikes and categorical department metrics.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="glass-panel" style={{ padding: '24px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ color: 'var(--accent)', marginBottom: '4px' }}>
              <Sliders size={24} />
            </div>
            <h4 style={{ fontSize: '1rem', fontWeight: 'bold', margin: 0 }}>Budget Resource Optimizer</h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
              Dnd-kit prioritized scheduling matching resource estimates to a ₹1.0Cr budget cap, complete with responsive Gantt charts.
            </p>
          </div>
        </div>
      </section>

      {/* COMPARE BENEFITS SECTION */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '8px' }}>Mutual Benefits Ecosystem</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>How LokDrishti AI serves both public servants and the electorate.</p>
        </div>

        <div className="form-grid-2col" style={{ gap: '30px' }}>
          {/* MP Office Column */}
          <div className="glass-panel" style={{ padding: '30px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '8px', margin: 0 }}>
              <Shield size={20} /> For MP & Administrators
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingLeft: '20px', margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              <li><strong>Objective Allocations:</strong> Replace subjective planning with demographic and travel distance data gap assessments.</li>
              <li><strong>ECharts Diagnostics:</strong> Track ward workload levels and sector backlogs in real-time.</li>
              <li><strong>Audited Budgets:</strong> Maintain absolute financial accountability under the ₹1.00 Crore MPLADS ceiling.</li>
              <li><strong>Instant Work Orders:</strong> Output PDF compliance dispatches directly to contractors with one click.</li>
            </ul>
          </div>

          {/* Citizen Column */}
          <div className="glass-panel" style={{ padding: '30px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--success)', display: 'flex', alignItems: 'center', gap: '8px', margin: 0 }}>
              <Users size={20} /> For Citizens & Constituents
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingLeft: '20px', margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              <li><strong>Low-Literacy Friendly:</strong> Record reports using local speech dialects without writing complex text forms.</li>
              <li><strong>Coordinate Precision:</strong> Drop GPS markers directly onto Google Maps to mark exact potholes or leaks.</li>
              <li><strong>Transparent Tracking:</strong> Monitor ticket progression status (Pending, In Progress, Resolved) on the live board.</li>
              <li><strong>Anti-Spam Security:</strong> Register secure grievances via Google OAuth login credentials.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* STRATEGIC DECISION HEURISTICS */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '8px' }}>Strategic Advisor Analytics Heuristics</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>How our AI engine ranks competing public works proposals objectively.</p>
        </div>

        <div className="glass-panel" style={{ padding: '30px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '24px', backgroundColor: 'var(--bg-secondary)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent)', fontWeight: 'bold' }}>
                <Brain size={18} />
                <span>Constituency Health Score</span>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
                Calculates an aggregate score (0-100) by combining active ticket volume, average resolution times, and the ratio of Critical to Low-severity civic reports.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--success)', fontWeight: 'bold' }}>
                <Activity size={18} />
                <span>Demographic Gap Index</span>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
                Weighs civic grievances against real demographic data: for example, checking local school drop-out rates when prioritizing school upgrades vs. assessing unemployment rates when prioritizing training centers.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--warning)', fontWeight: 'bold' }}>
                <Sliders size={18} />
                <span>MPLADS Cap Check</span>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
                Runs real-time client-side audits to check that the combined Lakhs estimate of all active priority projects does not exceed the ₹1.00 Crore limit.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* LIVE DATABASE GRIEVANCE FEED */}
      <section style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <LiveConstituencyFeed title="Live Incident Stream (Database Connected)" />
      </section>

      {/* FAQ SECTION */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '30px', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '8px' }}>Frequently Asked Questions</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Find quick answers about the platform capabilities.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className="glass-panel" 
              style={{ 
                border: '1px solid var(--border-color)', 
                borderRadius: '8px', 
                overflow: 'hidden',
                transition: 'background-color 0.2s ease'
              }}
            >
              <button 
                onClick={() => toggleFaq(index)}
                style={{ 
                  width: '100%', 
                  padding: '16px 20px', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  background: 'none', 
                  border: 'none', 
                  color: 'var(--text-primary)', 
                  fontWeight: '600', 
                  fontSize: '0.95rem',
                  textAlign: 'left',
                  cursor: 'pointer'
                }}
              >
                <span>{faq.q}</span>
                {activeFaq === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              
              {activeFaq === index && (
                <div style={{ 
                  padding: '0 20px 20px 20px', 
                  fontSize: '0.85rem', 
                  color: 'var(--text-secondary)', 
                  lineHeight: '1.6',
                  borderTop: '1px solid var(--border-color)',
                  paddingTop: '16px'
                }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* QUICK STATS & CALL TO ACTION */}
      <section className="glass-panel" style={{
        padding: '30px',
        backgroundColor: 'var(--bg-tertiary)',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius-md)',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '24px'
      }}>
        <div style={{ flexGrow: 1, minWidth: '250px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '4px' }}>Ready to explore the dashboard?</h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
            Read the problem statement and methodology on the project details page, or jump directly into Command Mode.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button 
            onClick={() => setActiveTab('about')}
            className="btn"
            style={{ fontSize: '0.8rem', padding: '10px 16px' }}
          >
            <Info size={14} style={{ marginRight: '6px', display: 'inline' }} /> Learn About Project
          </button>
          
          <button 
            onClick={() => setActiveTab('mp')}
            className="btn btn-primary"
            style={{ fontSize: '0.8rem', padding: '10px 16px' }}
          >
            Access MP Command Dashboard <ArrowRight size={14} style={{ marginLeft: '6px', display: 'inline' }} />
          </button>
        </div>
      </section>
    </div>
  );
}
