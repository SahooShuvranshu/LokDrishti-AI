# LokDrishti AI — Smart Constituency Development Planner

<div align="center">

[![React Version](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite Version](https://img.shields.io/badge/Vite-8.1.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![CSS3 Style](https://img.shields.io/badge/CSS3-Vanilla_Zinc-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![Apache ECharts](https://img.shields.io/badge/ECharts-Apache_Visuals-AA0000?style=for-the-badge&logo=apache&logoColor=white)](https://echarts.apache.org/)
[![Web Speech API](https://img.shields.io/badge/Web_Speech_API-HTML5_Speech-EFD81D?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
[![dnd-kit](https://img.shields.io/badge/%40dnd--kit-Drag_--_Drop-FF5722?style=for-the-badge)](https://dndkit.com/)
[![Render Deploy](https://img.shields.io/badge/Render-Live_Static_Site-46E3B7?style=for-the-badge&logo=render&logoColor=white)](https://lokdrishti-ai.onrender.com)
[![License MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

</div>

---

## 🚀 Live Site
Access the hosted simulation here: **[https://lokdrishti-ai.onrender.com](https://lokdrishti-ai.onrender.com)**

---

## 📅 Hackathon Context
LokDrishti AI was specifically built for the **Build with AI: Code for Communities** Hackathon (supported by Google Cloud) on the **Hack2Skill** platform.

*   **Track:** People's Priorities (AI for Constituency Development Planning)

### **The Problem**
> "MPs receive development requests through public meetings, letters, social media, grievance portals, and direct representations — while local development plans contain dozens of competing proposed projects. There's no objective way to consolidate citizen feedback, spot recurring needs, and weigh competing proposals against real demand (for example, comparing requests for school upgrades against enrollment and travel-distance data versus a proposed vocational centre)."

### **The Challenge**
> "Build a multilingual AI platform where citizens can submit development suggestions via voice, text, photos, or messaging apps. The system should analyze submissions to surface recurring themes, map demand hotspots, and combine citizen feedback with demographic data, infrastructure gaps, local development plans, and public datasets — to recommend and rank high-priority development works an MP can act on."

---

## 💡 How LokDrishti AI Solves This
LokDrishti AI bridges the gap between constituency feedback and municipal resource scheduling through four key interfaces:

### 1. Home / Landing Page
*   Provides an immediate summary of the platform's pillars.
*   Enables clear call-to-actions to route users to either the **Citizen Portal** or the secure **MP Command Center**.

### 2. About Page
*   Integrates the hackathon track details, problem statements, and technical details verbatim.
*   Lays out the technical architecture and tech stack choices clearly.

### 3. Citizen Portal (Inclusive Input)
*   **Web Speech Recognition:** Supports voice dictation in **Hindi (हिंदी)** and **English (India)** using HTML5 Speech APIs.
*   **AI Transcription & Translation Refiner:** Automatically transcribes voice complaints. If dictation is done in Hindi, the mock-AI engine translates it into structured English, infers the relevant department/sector (Infrastructure, Water Supply, Sanitation, Public Health, Heritage/Tourism, Transport), and grades the ticket's urgency level.

### 4. Command Center Dashboard (Spatial & Analytic Planning)
*   **Secure Access Gate:** Access to administrative pages is locked behind a glassmorphic simulated login window (`admin` / `password` or a single-click Demo login) to protect official constituency data.
*   **Interactive 6-Ward SVG Map:** Displays color-coded wards indicating grievance density and satisfaction indices. Overlays interactive coordinates representing localized citizen complaints.
*   **Visual Charts Grid (Apache ECharts):** Displays weekly incident trends, department distribution bars, and budget allocation donuts that recalculate live.
*   **Official Directives Generator:** slide-out panel allows the MP to review translations, draft official directives (simulated streaming text), and export complaints into formal projects.
*   **Resource Optimizer:** Utilizes drag-and-drop sequencing (via `@dnd-kit`) to sort projects. Automatically alerts the administrator when projects exceed the ₹1.0Cr MP Local Area Development fund limit and charts active works sequentially on a Gantt timeline.

---

## 🎨 Design System & Aesthetics
*   **Modern Zinc theme:** Styled with dark and light variants that are toggled on the fly.
*   **Glassmorphic components:** Cards utilize a high-quality HSL background blur, transparent border colors, and soft gradient glows.
*   **Micro-animations:** Glow pulses, sliding panels, and streaming characters make the dashboard feel alive.
*   **Responsiveness First:** Custom media queries ensure layouts stack cleanly on mobile viewports:
    *   Secondary table columns hide automatically on mobile, keeping tables clean.
    *   Gantt project names stack vertically on top of progress bars on screens below `600px` to maximize space.
    *   Detail slideouts expand to full-screen overlays to prevent text squishing.

---

## 🛠️ Technical Stack
*   **Core Framework:** React 19 (JavaScript) + Vite
*   **Sensors & Drag-and-Drop:** `@dnd-kit/core` & `@dnd-kit/sortable`
*   **Visualization:** Apache ECharts (`echarts`, `echarts-for-react`)
*   **Icons Suite:** Lucide React
*   **Voice Engine:** HTML5 Web Speech API
*   **Deployment platform:** Render (CI/CD Static Site Hosting)

---

## ⚙️ Getting Started & Setup

### **Prerequisites**
Ensure you have **Node.js** (v18+) and **npm** installed.

### **1. Clone Repository**
```bash
git clone https://github.com/SahooShuvranshu/LokDrishti-AI.git
cd LokDrishti-AI
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Run Development Server**
```bash
npm run dev
```
Open **[http://localhost:5173](http://localhost:5173)** in your browser.

### **4. Compile Production Build**
```bash
npm run build
```
The optimized minified production assets will be output in the `dist/` directory.

---

## 🔒 License
Distributed under the MIT License. See `LICENSE` for more information.
