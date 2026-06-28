import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { Mic, MicOff, Sparkles, Send, CheckCircle2, RotateCcw, AlertTriangle, Languages } from 'lucide-react';

export default function CitizenPortal() {
  const { addGrievance, geminiApiKey } = useApp();

  // Form states
  const [reporterName, setReporterName] = useState('');
  const [ward, setWard] = useState('Ward B: Urban Center');
  const [sector, setSector] = useState('Infrastructure');
  const [urgency, setUrgency] = useState('Medium');
  const [description, setDescription] = useState('');
  
  // Voice state
  const [isListening, setIsListening] = useState(false);
  const [speechLanguage, setSpeechLanguage] = useState('hi-IN'); // Default to Hindi
  const [speechError, setSpeechError] = useState('');

  // AI Refinement state
  const [isRefining, setIsRefining] = useState(false);
  const [refinementLogs, setRefinementLogs] = useState([]);
  const [refinedOutput, setRefinedOutput] = useState('');
  const [showRefinedResult, setShowRefinedResult] = useState(false);

  // Submission success state
  const [submittedTicket, setSubmittedTicket] = useState(null);

  const recognitionRef = useRef(null);

  // Initialize Speech Recognition
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const rec = new SpeechRecognition();
      rec.continuous = false;
      rec.interimResults = false;
      
      rec.onstart = () => {
        setIsListening(true);
        setSpeechError('');
      };

      rec.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setDescription((prev) => (prev ? prev + ' ' + transcript : transcript));
        setIsListening(false);
      };

      rec.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setSpeechError(`Voice Error: ${event.error === 'not-allowed' ? 'Microphone permission blocked.' : event.error}`);
        setIsListening(false);
      };

      rec.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = rec;
    }
  }, []);

  // Set Language whenever selected language changes
  useEffect(() => {
    if (recognitionRef.current) {
      recognitionRef.current.lang = speechLanguage;
    }
  }, [speechLanguage]);

  const toggleListening = () => {
    if (!recognitionRef.current) {
      setSpeechError('Web Speech API is not supported in this browser. Try Chrome or Edge.');
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
    } else {
      try {
        recognitionRef.current.start();
      } catch (err) {
        console.error('Start error:', err);
        recognitionRef.current.stop();
      }
    }
  };

  // Mock stream AI refiner
  const refineWithAI = async () => {
    if (!description.trim()) {
      alert('Please enter a description first.');
      return;
    }

    setIsRefining(true);
    setRefinementLogs([]);
    setRefinedOutput('');
    setShowRefinedResult(true);

    const logs = [
      'Establishing connection to Gemini-1.5-Flash...',
      'Analyzing text characteristics and semantic patterns...',
      'Translating and parsing dialect tokens...',
      'Extracting entities (Location, Impact size, Subject)...',
      'Determining optimal department route...',
      'Synthesizing professional English citation...'
    ];

    // Simulate logs printing out one-by-one
    for (let i = 0; i < logs.length; i++) {
      await new Promise((r) => setTimeout(r, 600));
      setRefinementLogs((prev) => [...prev, `[system] ${logs[i]}`]);
    }

    // Determine mock outputs based on keywords in user input
    const lowerInput = description.toLowerCase();
    let sectorSuggestion = 'Infrastructure';
    let urgencySuggestion = 'Medium';
    let impactSuggestion = '50 households';
    let englishTranslation = description;
    let refinedText = '';

    if (lowerInput.includes('पानी') || lowerInput.includes('water') || lowerInput.includes('nal')) {
      sectorSuggestion = 'Water Supply';
      urgencySuggestion = lowerInput.includes('गंदा') || lowerInput.includes('muddy') || lowerInput.includes('leak') ? 'Critical' : 'Medium';
      impactSuggestion = '80 households';
      englishTranslation = lowerInput.includes('पानी') ? 'Our drinking water contains mud particles and bad odour. Children are unable to consume it.' : description;
      refinedText = `REPORT: Potable Water Supply Impurity\nSTATUS: Unfit for consumption\nSECTOR: Water Supply\nEST. IMPACT: ${impactSuggestion}\n\nSUMMARY: Residents are experiencing contaminated water supply with visible turbidity and heavy odour. Poses immediate enteric public health risk. Urgent sanitization and filter flushing required at local supply mains.`;
    } else if (lowerInput.includes('कचरा') || lowerInput.includes('garbage') || lowerInput.includes('gandagi')) {
      sectorSuggestion = 'Sanitation';
      urgencySuggestion = 'Medium';
      impactSuggestion = '120 households';
      englishTranslation = lowerInput.includes('कचरा') ? 'Garbage is dumped openly on the main street and it smells horrible.' : description;
      refinedText = `REPORT: Unauthorized Open Garbage Dumping\nSTATUS: Hazardous municipal blockage\nSECTOR: Sanitation\nEST. IMPACT: ${impactSuggestion}\n\nSUMMARY: Heavy accumulation of household and commercial waste on public roadways, attracting stray pests and releasing toxic biogases. Demands immediate sanitation crew dispatch for waste relocation and installation of standard public bins.`;
    } else if (lowerInput.includes('मच्छर') || lowerInput.includes('mosquito') || lowerInput.includes('phc') || lowerInput.includes('health') || lowerInput.includes('doctor')) {
      sectorSuggestion = 'Public Health';
      urgencySuggestion = 'Critical';
      impactSuggestion = '250 residents';
      englishTranslation = lowerInput.includes('मच्छर') ? 'A lot of mosquitoes are breeding in stagnant drainage water. Dengue threat is high.' : description;
      refinedText = `REPORT: Vector-Borne Breeding Hazard\nSTATUS: Epidemic threat risk\nSECTOR: Public Health\nEST. IMPACT: ${impactSuggestion}\n\nSUMMARY: Severe stagnation of rainy surface runoff causing accelerated breeding of mosquitoes. High local reports of febrile illnesses. Demands rapid action involving chemical anti-larval fogging and immediate water pumping.`;
    } else {
      // General infrastructure
      refinedText = `REPORT: Public Infrastructure Maintenance Request\nSTATUS: General wear\nSECTOR: Infrastructure\nEST. IMPACT: 50+ households\n\nSUMMARY: User reported the following: "${description}". The infrastructure is broken or damaged, leading to local commuting difficulties. Recommend physical audit by municipality engineers.`;
    }

    setSector(sectorSuggestion);
    setUrgency(urgencySuggestion);

    // Typewriter effect for refined output
    let currentIdx = 0;
    const interval = setInterval(() => {
      if (currentIdx < refinedText.length) {
        setRefinedOutput((prev) => prev + refinedText[currentIdx]);
        currentIdx++;
      } else {
        clearInterval(interval);
        setIsRefining(false);
      }
    }, 15);
  };

  const handleApplyRefinement = () => {
    if (refinedOutput) {
      setDescription(refinedOutput);
      setShowRefinedResult(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!reporterName.trim() || !description.trim()) {
      alert('Please fill in both Name and Description.');
      return;
    }

    const ticketId = `LKD-${Math.floor(1031 + Math.random() * 1000)}`;
    const newTicket = {
      id: ticketId,
      title: description.split('\n')[0].replace('REPORT: ', '') || 'Citizen Grievance Report',
      description: description,
      translatedDescription: description,
      reporter: reporterName,
      ward: ward,
      sector: sector,
      urgency: urgency,
      status: 'Pending',
      coordinates: { x: 30 + Math.random() * 40, y: 30 + Math.random() * 40 },
      timestamp: new Date().toISOString(),
      impact: 'Est. 50 households'
    };

    addGrievance(newTicket);
    setSubmittedTicket(newTicket);
  };

  const handleResetForm = () => {
    setReporterName('');
    setWard('Ward B: Urban Center');
    setSector('Infrastructure');
    setUrgency('Medium');
    setDescription('');
    setSubmittedTicket(null);
    setRefinementLogs([]);
    setRefinedOutput('');
    setShowRefinedResult(false);
  };

  if (submittedTicket) {
    return (
      <div style={{ padding: '40px 20px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <div className="glass-panel" style={{ padding: '40px', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)' }}>
          <CheckCircle2 size={64} style={{ color: 'var(--success)', margin: '0 auto 20px auto' }} />
          <h2 style={{ marginBottom: '10px', fontSize: '1.8rem' }}>Ticket Registered Successfully</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>
            Thank you for raising your concern. The LokDrishti AI system has categorized and routed your ticket to the ward administrator.
          </p>

          <div className="glass-panel" style={{ padding: '20px', backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', textAlign: 'left', marginBottom: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', marginBottom: '10px' }}>
              <span style={{ fontWeight: 'bold' }}>Ticket Reference:</span>
              <span className="badge badge-info">{submittedTicket.id}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Sector:</span>
              <span>{submittedTicket.sector}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Urgency:</span>
              <span className={`badge ${submittedTicket.urgency === 'Critical' ? 'badge-danger' : submittedTicket.urgency === 'Medium' ? 'badge-warning' : 'badge-success'}`}>
                {submittedTicket.urgency}
              </span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Ward Area:</span>
              <span>{submittedTicket.ward}</span>
            </div>
            <div style={{ marginTop: '12px', borderTop: '1px solid var(--border-color)', paddingTop: '10px' }}>
              <span style={{ fontWeight: '500', display: 'block', marginBottom: '4px' }}>Ticket Description:</span>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', whiteSpace: 'pre-wrap' }}>{submittedTicket.description}</p>
            </div>
          </div>

          <button onClick={handleResetForm} className="btn btn-primary" style={{ width: '100%' }}>
            <RotateCcw size={16} /> Submit Another Grievance
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
      <div className="glass-panel" style={{ padding: '32px', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)' }}>
        
        {/* Banner Info */}
        <div style={{ marginBottom: '28px' }}>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '8px', background: 'linear-gradient(135deg, var(--text-primary), var(--accent))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Submit Citizen Grievance
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Report constituency issues directly. Voice complaints are transcribed and translated instantly using client-side AI modules.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {/* Reporter Name */}
            <div className="form-group">
              <label className="form-label" htmlFor="reporter-name">Your Full Name</label>
              <input
                id="reporter-name"
                className="form-input"
                type="text"
                placeholder="Enter your name"
                value={reporterName}
                onChange={(e) => setReporterName(e.target.value)}
                required
              />
            </div>

            {/* Ward Selector */}
            <div className="form-group">
              <label className="form-label" htmlFor="ward-select">Ward Area</label>
              <select
                id="ward-select"
                className="form-select"
                value={ward}
                onChange={(e) => setWard(e.target.value)}
              >
                <option>Ward A: Industrial Core</option>
                <option>Ward B: Urban Center</option>
                <option>Ward C: Rural Green</option>
                <option>Ward D: Heritage Quarter</option>
                <option>Ward E: Coastal/Lake District</option>
                <option>Ward F: Suburbia East</option>
              </select>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {/* Sector Category */}
            <div className="form-group">
              <label className="form-label" htmlFor="sector-select">Complaint Sector</label>
              <select
                id="sector-select"
                className="form-select"
                value={sector}
                onChange={(e) => setSector(e.target.value)}
              >
                <option>Infrastructure</option>
                <option>Water Supply</option>
                <option>Sanitation</option>
                <option>Public Health</option>
                <option>Heritage & Tourism</option>
                <option>Transport</option>
              </select>
            </div>

            {/* Urgency */}
            <div className="form-group">
              <label className="form-label" htmlFor="urgency-select">Severity Level</label>
              <select
                id="urgency-select"
                className="form-select"
                value={urgency}
                onChange={(e) => setUrgency(e.target.value)}
              >
                <option>Low</option>
                <option>Medium</option>
                <option>Critical</option>
              </select>
            </div>
          </div>

          {/* Description Text Area with voice controls */}
          <div className="form-group" style={{ position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <label className="form-label" htmlFor="grievance-desc">Describe your Grievance</label>
              
              {/* Speech recognition buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {/* Language Select */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                  <Languages size={14} />
                  <select 
                    style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', outline: 'none', cursor: 'pointer' }}
                    value={speechLanguage}
                    onChange={(e) => setSpeechLanguage(e.target.value)}
                  >
                    <option value="hi-IN">Hindi (हिंदी)</option>
                    <option value="en-IN">English (India)</option>
                  </select>
                </div>

                <button
                  type="button"
                  onClick={toggleListening}
                  className="btn"
                  style={{
                    padding: '4px 10px',
                    fontSize: '0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: isListening ? 'var(--danger-bg)' : 'var(--bg-tertiary)',
                    borderColor: isListening ? 'var(--danger)' : 'var(--border-color)',
                    color: isListening ? 'var(--danger)' : 'var(--text-primary)'
                  }}
                >
                  {isListening ? (
                    <>
                      <MicOff size={12} style={{ marginRight: '4px', verticalAlign: 'middle', display: 'inline' }} />
                      Stop Mic
                    </>
                  ) : (
                    <>
                      <Mic size={12} style={{ marginRight: '4px', verticalAlign: 'middle', display: 'inline' }} />
                      Record Voice
                    </>
                  )}
                </button>
              </div>
            </div>

            <textarea
              id="grievance-desc"
              className="form-textarea"
              rows="6"
              placeholder="Explain the problem. You can type in Hindi/English, or click 'Record Voice' to speak."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>

            {speechError && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: 'var(--danger)', marginTop: '6px' }}>
                <AlertTriangle size={12} />
                <span>{speechError}</span>
              </div>
            )}
          </div>

          {/* AI Assist Refinement Panel */}
          <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '10px' }}>
            <button
              type="button"
              onClick={refineWithAI}
              disabled={isRefining || !description.trim()}
              className="btn btn-primary"
              style={{
                background: 'linear-gradient(135deg, var(--accent), #4f46e5)',
                color: '#ffffff',
                border: 'none',
                opacity: description.trim() ? 1 : 0.6
              }}
            >
              <Sparkles size={16} /> {isRefining ? 'Refining...' : 'Refine with AI Assist'}
            </button>
          </div>

          {/* AI Terminal Output Drawer */}
          {showRefinedResult && (
            <div className="glass-panel" style={{ padding: '20px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-tertiary)', marginTop: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px', marginBottom: '12px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent)' }}>
                  <Sparkles size={14} className="pulse-glow" /> LOKDRISHTI AI PROCESSING CORE
                </span>
                {!isRefining && (
                  <button 
                    type="button" 
                    className="btn" 
                    style={{ padding: '2px 8px', fontSize: '0.75rem' }}
                    onClick={() => setShowRefinedResult(false)}
                  >
                    Close
                  </button>
                )}
              </div>

              {/* Console Logs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontFamily: 'Consolas, monospace', fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '16px', maxHeight: '100px', overflowY: 'auto' }}>
                {refinementLogs.map((log, idx) => (
                  <div key={idx} style={{ borderLeft: '2px solid var(--accent)', paddingLeft: '8px' }}>{log}</div>
                ))}
                {isRefining && <div className="pulse-glow" style={{ color: 'var(--accent)', fontWeight: 'bold' }}>&gt; Core Processing...</div>}
              </div>

              {/* Typewritten Refined Text Box */}
              {(refinedOutput || isRefining) && (
                <div className="glass-panel" style={{
                  padding: '12px',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  maxHeight: '220px',
                  overflowY: 'auto'
                }}>
                  <p style={{
                    fontFamily: 'Consolas, monospace',
                    fontSize: '0.85rem',
                    whiteSpace: 'pre-wrap',
                    color: 'var(--text-primary)',
                    margin: 0
                  }}>
                    {refinedOutput}
                  </p>
                </div>
              )}

              {/* Apply/Keep Button */}
              {!isRefining && refinedOutput && (
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '16px' }}>
                  <button
                    type="button"
                    className="btn"
                    style={{ padding: '6px 12px', fontSize: '0.8rem' }}
                    onClick={() => setShowRefinedResult(false)}
                  >
                    Discard
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ padding: '6px 12px', fontSize: '0.8rem' }}
                    onClick={handleApplyRefinement}
                  >
                    Apply AI Refined Text
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Form Actions */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid var(--border-color)', paddingTop: '20px', marginTop: '10px' }}>
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '1rem',
                fontWeight: 'bold',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <Send size={18} /> Submit Ticket to Command Center
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
