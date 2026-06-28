# [ENHANCED] LokDrishti AI — Smart Constituency Planning & MP Command Center

LokDrishti AI is a state-of-the-art spatial analytics and civic planning application designed for Members of Parliament (MPs) and local administrators to streamline constituency development, prioritize citizen priorities, and optimize resource allocation.

This enhanced plan incorporates **interactive simulation modes**, **audio translation**, **budget estimation models**, and a concrete **deployment pipeline using Render**.

---

## User Review Required

> [!IMPORTANT]
> **Hosting & Deployment (Render):**
> We will deploy the frontend as a **Render Static Site**. 
> * **Workflow:** We build the React + Vite app locally and initialize a Git repository. We will then guide you to run a quick command to push it to your GitHub repository. Finally, we will use our **Render MCP tool** (`create_static_site`) to deploy it directly to the web, giving you a live, shareable URL!
> * **No Backend Needed:** To keep hosting free, fast, and completely robust, all AI processing is handled in the frontend with a hybrid model:
>   * *Live Mode:* Calls the Google Gemini API directly using a secure client-side API Key (which can be configured via a sleek in-app Settings modal or a `.env` file).
>   * *Simulation Mode:* Runs a local mock-streaming generator that mimics Gemini's thoughts, suggestions, and responses, ensuring the app is immediately interactive for judges even without a key.

> [!TIP]
> **"Going Wild" — Newly Added Advanced Features:**
> 1. **Interactive Event Simulator:** A control panel allowing the MP (or judges) to trigger "Constituency Events" (e.g., *Monsoon Downpour*, *Water Pipeline Rupture*, *Public Health Alert*). This dynamically generates clusters of themed grievances on the map and dashboard in real-time.
> 2. **Voice Grievance & Indic Translation:** A microphone input in the Citizen Portal (using browser Web Speech API) allowing citizens to record voice complaints in regional languages (e.g., Hindi), which the AI automatically transcribes and translates into structured English data.
> 3. **AI Project Planner & Gantt Chart:** The Resource Optimizer will generate not just a text list, but a full project breakdown including a material/labor estimate and a interactive Gantt chart timeline.
> 4. **Deep-Dive SVG Map:** A fully interactive, glowing SVG map with custom paths representing 6 Wards, supporting hover zoom effects, population density heatmaps, and clickable Ward cards.

---

## Proposed Component Architecture

### 1. Header & Navigation (`Header.jsx`)
* Sun/Moon dark-mode toggle (persisted in `localStorage`).
* Switcher between **Citizen Portal** and **MP Command Center**.
* Settings cog to set/verify the Gemini API key.
* Real-time notification ticker showing incoming citizen reports.

### 2. Interactive SVG Map (`ConstituencyMap.jsx`)
* Custom-designed SVG map with 6 distinct wards (e.g., Ward A: Industrial, Ward B: Urban Core, Ward C: Rural Green).
* **Map Views:** Toggle between "Grievance Density" (heatmap) and "Resource Satisfaction Index".
* Click on a ward to filter the entire dashboard data (KPIs, tables, charts) to focus exclusively on that ward.
* Render glowing marker pins on the map at specific coordinate points. Clicking a pin opens the grievance detail card.

### 3. Citizen Portal (`CitizenPortal.jsx`)
* **Natural Language Grievance Form:** Textarea supporting multiline text.
* **Audio Voice Grievance:** Click-to-record voice complaint (supports speech-to-text in Indic languages).
* **AI Assist Refiner:** When typing, clicking "Refine with AI" streams a thought process showing the AI categorization (e.g., Infrastructure, Sanitation), calculating severity (Critical, Medium, Low), estimating local impact (e.g., 50+ households), and rewriting the complaint into a professional, concise ticket.
* Success screen with ticket ID tracking.

### 4. MP Command Dashboard (`App.jsx` + `KpiGrid.jsx` + `GrievanceTable.jsx`)
* **KPI Grid:** Glow-card statistics:
  * *Satisfaction Rate* (74% with positive trend pill)
  * *Pending Grievances* (dynamic count)
  * *Budget Allocated* (e.g. ₹42.5L / ₹1.0Cr cap)
  * *Active Projects* (dynamic count)
* **Visual Charts:**
  * *Grievance Breakdown by Sector* (ECharts Horizontal Bar)
  * *Urgency Matrix* (ECharts Pie Chart)
  * *Weekly Spike Trend* (ECharts Line Chart showing incident surges)
* **Interactive Table:**
  * Displays grievance ID, ward, reporter, title, sector, status, urgency, and timestamp.
  * Filters for Sector, Urgency, Ward, and Search by text.
  * Clicking a row displays the detail side-panel.

### 5. AI Grievance Inspector Side-Panel (`DetailPanel.jsx`)
* Slides out from the right (`w-1/3`), shrinking the table (`w-2/3`) with smooth CSS transitions.
* Displays original and AI-translated description.
* **AI Actions:**
  * *Draft Official Notice:* Streams a formal letter to the local municipal commissioner demanding repairs.
  * *Draft Citizen Response:* Streams an update email to the citizen.
  * *Create Work Order:* Adds this ticket to the Resource Optimizer queue.

### 6. AI Resource Optimizer & Gantt Workspace (`Optimizer.jsx`)
* A dedicated workspace where the MP can select a Ward and set a target budget.
* Clicking "Generate Development Plan" streams the reasoning process and details:
  * Proposes a checklist of concrete infrastructure sub-projects (e.g., "Install water filtration unit", "Repair Main St. Potholes").
  * **Material & Labor Breakdown:** AI calculates estimated bricks, cement, pipes, and labor days.
  * **Gantt Chart:** Generates an interactive visual timeline showing horizontal project duration bars.
  * **Drag-and-Drop Sortable list:** Powered by `@dnd-kit/core` and `@dnd-kit/sortable` to let the user drag cards to re-arrange priorities, which dynamically recalculates budget allocation and timeline sequencing!

### 7. Interactive Event Simulator (`EventSimulator.jsx`)
* A sticky bottom-left utility drawer for presentation judges.
* Buttons to trigger events:
  * **"Heavy Monsoon Storm":** Simulates 5 new grievances about water logging and roof leaks in Wards B & C, and triggers a map-wide alert.
  * **"Water Treatment Plant Failure":** Simulates water contamination complaints in Ward A.
  * **"Elections Announced":** Surges citizen demands and increases average grievance urgency.

---

## Technology Stack

* **Frontend:** React (Vite, JS)
* **Styling:** Custom CSS (modern dark/light theme, custom animations, glowing gradients, glassmorphism)
* **Icons:** `lucide-react`
* **Data Visualization:** Apache ECharts (`echarts` and `echarts-for-react`)
* **Drag-and-Drop:** `@dnd-kit/core` and `@dnd-kit/sortable`
* **Markdown:** `react-markdown` + `remark-gfm`
* **Deployment Platform:** Render (Static Site hosting)

---

## Implementation Checklist

### Phase 1: Initialize Project & Setup Styles
* [ ] Initialize Vite + React project in `D:\Hackathon`.
* [ ] Install dependencies (`lucide-react`, `echarts`, `echarts-for-react`, `@dnd-kit/core`, `@dnd-kit/sortable`, `react-markdown`, `remark-gfm`).
* [ ] Create global `index.css` with color variables (Zinc palette), smooth transitions, scrollbar customization, glassmorphic card classes, and glowing animations.
* [ ] Setup `AppContext.jsx` to hold initial mock data (30+ rich mock grievances) and manage filters/states.

### Phase 2: Create Core Layout & Citizen Portal
* [ ] Build `Header.jsx` with dark mode support.
* [ ] Build `CitizenPortal.jsx` with input refiner, Speech-to-Text translation support, and submit workflow.
* [ ] Build the interactive SVG `ConstituencyMap.jsx` with Ward hover states and clickable regions.

### Phase 3: Create MP Admin Dashboard
* [ ] Build `KpiGrid.jsx` and configure ECharts for category and trend visualizers.
* [ ] Build `GrievanceTable.jsx` with paginated rows and search/filter.
* [ ] Build `DetailPanel.jsx` with interactive AI streaming letter-drafting tools.

### Phase 4: Create AI Optimizer & Simulator
* [ ] Build `Optimizer.jsx` with `@dnd-kit` sortable list, dynamic budget calculator, and CSS Gantt bars.
* [ ] Build `EventSimulator.jsx` to inject live grievances into global context state.

### Phase 5: Verification & Hosting Deployment
* [ ] Verify building works locally (`npm run build`).
* [ ] Initialize Git repository locally and commit files.
* [ ] Ask user to push to GitHub, then run the Render deployment MCP command to host it.
* [ ] Verify the hosted page.

---

## Verification Plan

### Automated Checks
* Execute `npm run build` locally to verify zero build errors.

### Manual Verification Checklist
* Check that toggling dark/light mode applies variables instantly.
* Test Event Simulator buttons: verify new pins appear on the map, list, and charts recalculate.
* Test dragging projects in the Optimizer: confirm ordering changes and re-prioritizes budget.
* Test Voice Refiner: speak or type a messy complaint and confirm AI refines it cleanly.
