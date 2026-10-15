# 📊 Data Science Digital Library

An interactive, multi-page web platform and digital lab notebook developed for the **Data Science Digital Library** course at **Mohan Babu University (MBU)**.

🌐 **Live Production Website (Vercel):** [https://data-science-digital-library.vercel.app](https://data-science-digital-library.vercel.app)  
📦 **Secondary Mirror (GitHub Pages):** [https://thanmai0902.github.io/Data-Science-Subject-Laboratory/](https://thanmai0902.github.io/Data-Science-Subject-Laboratory/)  

---

## 🚀 Features

- **🎓 Student Profile & Performance Dashboard (`index.html`)**:
  - Digital Student ID card with dynamic image upload and local persistence.
  - Student academic details, roll number, section, and faculty advisor (**S.Bosubabu**).
  - Performance tracking: Practical marks, Total marks, Attendance percentage, and interactive semester growth charts built with Chart.js.

- **🛠️ Tools & Technologies (`tools.html`)**:
  - Complete curriculum tool stack overview (Python, Pandas, NumPy, Matplotlib, Scikit-Learn, Seaborn, Jupyter).


- **📚 Course Modules (`modules.html`)**:
  - Master-detail interactive split layout with left sidebar and embedded viewer on the right.
  - **Course Handout Outline (CHO)** placed above Module 1, covering the comprehensive syllabus and sub-topics for all modules.
  - Core curriculum modules:
    - **Curriculum Module 01**: Introduction to Data Science
    - **Curriculum Module 02**: Data Extraction & Wrangling
    - **Curriculum Module 03**: Data Visualization
    - **Curriculum Module 04**: Statistical Thinking & Inference
    - **Curriculum Module 05**: Time Series Analysis and Predictive Modeling
  - One-click PDF download buttons and interactive document readers for each module.

- **🔬 Lab Experiments (`experiments.html` & `experiment.html`)**:
  - Browse all laboratory experiments.
  - Add new experiments dynamically with form modals.
  - Detailed experiment pages featuring Aim, Objective, Theory, Requirements, Dataset, Procedure, Implementation, Output visualization graphs, and Results.
  - Built-in interactive code editor on each experiment page to execute and test experiment scripts.

- **🎨 Modern Visual Design**:
  - Minimalist Lavender aesthetic with fluid animated mesh gradient background.
  - Subtle data science grid pattern overlay.
  - Fully responsive, accessible, and fast multi-page architecture.

---

## 📂 Project Structure

```
├── index.html            # Profile & Academic Dashboard
├── tools.html            # Tools & Tech Stack
├── modules.html          # Course Modules with PDFs
├── experiments.html      # Experiments Catalog
├── experiment.html       # Individual Experiment View
├── css/
│   └── style.css         # Styling & Animated Mesh Gradient
├── js/
│   ├── config.js         # Student & Laboratory Configurations
│   ├── experiment-details.js # Individual Experiment Logic & Editor
│   ├── experiments.js    # Preloaded & User Lab Experiments Data
│   └── main.js           # Navigation, Photo Upload & State Management
├── assets/
│   ├── exp1_output.png   # Time Series Output Visualization
│   ├── exp2_output.png   # Data Cleaning Heatmap Visualization
│   └── pdfs/             # Course Module Study PDFs & CHO Outline
│       ├── cho.pdf           # Course Handout Outline (All Modules & Sub-topics)
│       ├── module1.pdf       # Curriculum Module 01
│       ├── module2.pdf       # Curriculum Module 02
│       ├── module3.pdf       # Curriculum Module 03
│       ├── module4.pdf       # Curriculum Module 04
│       └── module5.pdf       # Curriculum Module 05
├── backend/
│   ├── database.py       # Database connection setup
│   ├── main.py           # FastAPI server endpoints
│   ├── models.py         # SQLAlchemy models
│   └── schemas.py        # Pydantic schemas
├── .gitignore
└── README.md
```

---

## 💻 How to Run Locally

### 1. Website (Frontend)
Serve the web application with any local HTTP server:

```bash
python -m http.server 8000
```
Then open **[http://localhost:8000](http://localhost:8000)** in your web browser.

### 2. Backend (Optional API)
Run the FastAPI backend:

```bash
cd backend
pip install fastapi uvicorn sqlalchemy
uvicorn main:app --reload --port 8001
```

---

## ▲ Deployment to Vercel

The project is configured for instantaneous 1-click deployment to **Vercel** via [`vercel.json`](vercel.json):

1. **One-Click Deploy**:
   Click the **[Deploy with Vercel](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FThanmai0902%2FData-Science-Subject-Laboratory)** button.
2. **Import via Vercel Dashboard**:
   - Go to [vercel.com/new](https://vercel.com/new).
   - Sign in with your GitHub account (**Thanmai0902**).
   - Select `Data-Science-Subject-Laboratory` and click **Deploy**.
3. **Features on Vercel**:
   - Automatic global Edge CDN caching and clean URLs (`/modules`, `/experiments`).
   - Seamless PDF inline streaming headers for all course modules.
   - Continuous automatic deployment on every `git push`.

---

## 👤 Author

- **Student**: S. Thanmai
- **Roll Number**: 24102A030121
- **Branch**: CSE (Data Science)
- **University**: Mohan Babu University (MBU)
- **Faculty**: S.Bosubabu
- **GitHub**: [@Thanmai0902](https://github.com/Thanmai0902)
