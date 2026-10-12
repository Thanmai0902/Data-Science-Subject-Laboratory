# 📊 Data Science Subject Laboratory

An interactive, multi-page web platform and digital lab notebook developed for the **Data Science Subject Laboratory** course at **Mohan Babu University (MBU)**.

![Laboratory Theme](theme_image.jpg)

---

## 🚀 Features

- **🎓 Student Profile & Performance Dashboard (`index.html`)**:
  - Digital Student ID card with dynamic image upload and local persistence.
  - Student academic details, roll number, section, and faculty advisor (**S.Bosu Babu**).
  - Performance tracking: Practical marks, Total marks, Attendance percentage, and interactive semester growth charts built with Chart.js.

- **🛠️ Tools & Technologies (`tools.html`)**:
  - Complete curriculum tool stack overview (Python, Pandas, NumPy, Matplotlib, Scikit-Learn, Seaborn, Jupyter).

- **💻 Interactive Code Sandbox (`editor.html`)**:
  - Full-featured browser Python code editor powered by Ace Editor (Dracula theme).
  - Simulated terminal output to test and run Python code directly in the browser.

- **📚 Course Modules (`modules.html`)**:
  - Comprehensive 4-module curriculum with permanently embedded 10-chapter study materials:
    - **Module 01**: Introduction to Data Science
    - **Module 02**: Data Extraction
    - **Module 03**: Data Visualization
    - **Module 04**: Statistical Thinking
  - One-click PDF download for each module.

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
mbu_ds_lab/
├── frontend/
│   ├── assets/
│   │   ├── exp1_output.png
│   │   ├── exp2_output.png
│   │   └── pdfs/
│   │       ├── module1.pdf
│   │       ├── module2.pdf
│   │       ├── module3.pdf
│   │       └── module4.pdf
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── config.js
│   │   ├── experiment-details.js
│   │   ├── experiments.js
│   │   └── main.js
│   ├── index.html        # Profile & Academic Dashboard
│   ├── tools.html        # Tools & Tech Stack
│   ├── editor.html       # Python Sandbox Editor
│   ├── modules.html      # Course Modules with PDFs
│   ├── experiments.html  # Experiments Catalog
│   └── experiment.html   # Individual Experiment View
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

### 1. Frontend
Serve the static web application with any local HTTP server:

```bash
cd frontend
python -m http.server 8000
```
Open **[http://localhost:8000](http://localhost:8000)** in your web browser.

### 2. Backend (Optional API)
Run the FastAPI backend:

```bash
cd backend
pip install fastapi uvicorn sqlalchemy
uvicorn main:app --reload --port 8001
```

---

## 👤 Author

- **Student**: S. Thanmai
- **Roll Number**: 24102A030121
- **Branch**: CSE (Data Science)
- **University**: Mohan Babu University (MBU)
- **Faculty**: S.Bosu Babu
- **GitHub**: [@Thanmai0902](https://github.com/Thanmai0902)
