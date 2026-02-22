# My Portfolio

This is my personal portfolio showcasing my skills, projects, and a contact form.  
It uses **React + Vite** for frontend and **Spring Boot** for backend.

---

## Features

- Dynamic **About Me** section
- Skills list fetched from backend API
- Contact form with **mobile number validation** (starts with 6,7,8,9)
- Responsive and modern UI
- Built with React, Vite, Tailwind CSS, Spring Boot, MySQL

---

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, react-icons  
- **Backend:** Spring Boot, REST API, MySQL  
- **Icons used:** FaJava, FaReact, SiSpringboot, SiMysql, SiHibernate  

---

## Folder Structure

### Frontend


Portfolio_frontend/
├─ src/
│ ├─ components/ (About.jsx, Contact.jsx, etc.)
│ ├─ App.jsx
│ └─ main.jsx
├─ public/
├─ package.json
├─ vite.config.js
└─ .gitignore


### Backend


Portfolio_backend/
├─ src/main/java/com/yourname/portfolio/
│ ├─ PortfolioApplication.java
│ ├─ controller/
│ ├─ model/
├─ src/main/resources/application.properties
├─ pom.xml
└─ .gitignore


---

## Local Setup

### 1. Clone Repositories

**Frontend:**

```bash
git clone https://github.com/<your-username>/Portfolio_frontend.git

Backend:

git clone https://github.com/<your-username>/Portfolio_backend.git
2. Run Backend
cd Portfolio_backend
./mvnw spring-boot:run   # Windows: .\mvnw spring-boot:run

Backend runs on http://localhost:8080

3. Run Frontend
cd Portfolio_frontend
npm install
npm run dev

Open http://localhost:5173
 in browser

Make sure backend is running for dynamic features

Deployment

Frontend: Deployed on Vercel

Backend: Deployed on Railway / Heroku

Environment Variables (Frontend):

REACT_APP_BACKEND_URL=https://your-backend-live-url.com

Frontend fetches API dynamically from backend

Contact

Users can send messages using contact form

Mobile validation ensures numbers start with 6,7,8, or 9

Notes

Always run npm install before npm run dev for frontend

Backend should run before frontend for dynamic content

.gitignore ensures node_modules and build files are not pushed


---

### ✅ How to add & push to GitHub

```powershell
git add README.md
git commit -m "Add project README"
git push