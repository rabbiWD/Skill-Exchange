# 🎓 SkillSwap – A Local Skill Exchange Platform

An interactive platform for individuals to **offer, learn, and exchange skills** within their local community.  
Whether it’s guitar lessons, coding help, yoga training, or language practice — SkillSwap connects learners with skilled providers nearby.

---

## 🌐 Live Demo
🔗 **Live URL:** [https://skill-swap-platform.netlify.app/](#)  
🔗 **GitHub Repository:** [https://github.com/your-username/skill-exchange-platform](#)

---

## 🚀 Project Purpose

The main goal of **Skill Exchange Platform** is to build a community-driven learning environment where users can:
- Offer their own skills as services.
- Learn new skills from others.
- Connect locally and grow together.

This project demonstrates **React.js SPA behavior**, **Firebase Authentication**, **Responsive Design**, and **Modern UI Components** using Tailwind CSS & other npm packages.

---

## 🧩 Key Features

### 🔑 Authentication
- **Sign Up / Login / Google Login** system (Firebase Auth)
- **Password validation** (Uppercase, Lowercase, Minimum 6 chars)
- **Forget Password** page (redirects to Gmail)
- **User Profile** page with editable info

### 🏠 Home Page
- **Hero Slider** using Swiper.js
- **Popular Skills Section** (Dynamic from JSON)
- **Top Rated Providers Section**
- **How It Works Section**
- Extra section showing “Why Choose SkillSwap?”

### 📋 Skill Details (Protected Route)
- Displays all info (name, provider, rating, description, etc.)
- Accessible only when logged in
- Includes a simple **Booking Form** with success toast

### 👤 My Profile
- Displays user’s photo, name, and email
- Includes **Update Profile** feature (update name & image using `updateProfile()`)

### 🧱 Layout
- **Responsive Navbar** (User avatar, Login/Logout)
- **Footer** with social links & contact info
- SPA Routing using **React Router**
- Fully **Responsive** for desktop, tablet, and mobile

---

## 📦 Technologies & Tools Used

| Category | Technology |
|-----------|-------------|
| Frontend | React.js (Vite) |
| Styling | Tailwind CSS, DaisyUI |
| Animation | AOS, Framer Motion, Swiper.js |
| State Management | React Context API |
| Authentication | Firebase Authentication |
| Notifications | react-hot-toast |
| Hosting | Netlify / Firebase Hosting |
| Version Control | Git & GitHub |

---

## ⚙️ Environment Variables

Make sure to create a `.env.local` file in your project root and include the following keys:

```bash
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_project.firebaseapp.com
VITE_projectId=your_project_id
VITE_storageBucket=your_project.appspot.com
VITE_messagingSenderId=your_sender_id
VITE_appId=your_app_id


