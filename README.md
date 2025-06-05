# 🏥 MediSurge — Modern Medical Supply Web App

**MediSurge** is a professional, responsive React web application crafted for the medical supply industry. Built with **Vite**, **Tailwind CSS**, and **Flowbite**, it ensures performance, modern UI/UX, and a modular structure ideal for hospitals, clinics, pharmacies, and distributors.

---

## 🛠️ Tech Stack

- ⚛️ React (Vite)
- 💨 Tailwind CSS
- 💡 Flowbite UI Components
- 🔁 React Router DOM
- 🎨 React Icons
- 📁 JSON-based dynamic content
---

## 🚀 Features

- ✨ Clean hero & landing sections
- 👨‍⚕️ Dynamic leadership/team section (from JSON)
- 🧾 Client testimonials (driven by JSON)
- 📫 Contact & footer data modularized
- ❌ Custom creative error page
- 🧩 Modular reusable components
- 📱 Fully responsive design
- ⚡ Blazing fast Vite dev server

---

## 📁 Folder Structure

```
MediSurge/
├── node_modules/
├── public/
├── services/               # API and service handlers
├── src/
│   ├── assets/
│   │   └── Images/         # Project media files
│   ├── Components/         # UI components (Team, Footer, Testimonials, etc.)
│   ├── constants/          # Constant values or configs
│   ├── Data/               # JSON files for dynamic content (team, testimonials, footer)
│   ├── App.css
│   ├── App.jsx             # Main application component
│   ├── index.css           # Tailwind & global styles
│   ├── main.jsx            # ReactDOM entry
│   ├── UserContext.jsx     # Context API setup
│   └── utils.js            # Utility functions
├── .gitignore
├── .hintrc
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── vercel.json             # Vercel deployment config
├── vite.config.js          # Vite project config
└── README.md
```

---

## 📦 Getting Started

### 🔧 Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/sebastian-sultz/MediSurge.git
cd MediSurge
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to preview the app.

---

## ✏️ Customization

- 🎨 **Colors**: Update in `tailwind.config.js` under `theme.extend.colors`
- 🧩 **Team / Testimonials / Footer**: Edit corresponding JSON files in `src/Data/`
- 🖼 **Images**: Place in `src/assets/Images/`
- 🧠 **User context logic**: Modify in `src/UserContext.jsx`

---

## 🤝 Contributing

Contributions are welcome!  
Fork the repository, create a branch, make your changes, and submit a pull request.

---

## 👨‍💻 Author

**Adarsh Tripathi**  
🔗 [LinkedIn](https://linkedin.com/in/adarsh-tripathi-321b7a257)  
💻 [GitHub](https://github.com/sebastian-sultz)
