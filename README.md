# 🎓 Career Guidance Web Application

## 🧩 Project Overview
The **Career Guidance Portal** helps students and parents explore colleges based on their **field of interest (Engineering/Management)**, **preferred location (India/Abroad)**, and **aptitude performance**.  
It provides information on college fees, rankings, eligibility, and scholarships, assisting students in choosing the most suitable institution.

---

## 🚀 Features / Modules

### 👩‍🎓 Student Modules
1. **Student Login & Signup** – Secure authentication using Firebase.  
2. **Career Selection Page** – Choose a stream (Engineering / Management).  
3. **Location Selection Page** – Choose preferred study location (India / Abroad).  
4. **College List Page** – Displays college options filtered by stream and location.  
5. **Aptitude Test Module** – 5-question test (Verbal, Quant, GK) to evaluate eligibility.  
6. **Test Completion Page** – Shows final score and selected preferences.  
7. **Dashboard** – Displays summary of student choices and aptitude score.  
8. **Logout & Restart** – Secure logout and restart workflow.

### 🧑‍💻 Admin Module (Future Scope)
- Manage college database (add, update, or delete entries).
- Monitor user activity and logs.

---

## 🛠️ Technologies Used
| Component | Technology |
|------------|-------------|
| Frontend   | HTML5, CSS3, JavaScript (Vanilla JS) |
| Backend / Auth | Firebase Authentication |
| Database | Firebase Firestore (optional for future use) |
| Hosting | Firebase Hosting / Local Live Server |
| Logging | Console logging for all key actions |

---

## 🧮 Project Flow

```
Login / Signup 
    ↓
Career Selection (Engineering / Management)
    ↓
Location Selection (India / Abroad)
    ↓
College List Display (Filtered by Choice)
    ↓
Aptitude Test (Verbal + Quant + GK)
    ↓
Test Completion (Score Display)
    ↓
Dashboard (Summary + Logout + Restart)
```

---

## 🧰 Folder Structure
```
career-guidance/
│
├── index.html
├── login.html
├── signup.html
├── career-selection.html
├── location-selection.html
├── college-list.html
├── aptitude-test.html
├── test-completion.html
├── dashboard.html
│
├── js/
│   └── firebase-config.js
└── auth.js
└── login.js
└── logging.js


│
├── style.css
└── README.md
```

---

## 🔥 Firebase Configuration
In every page that uses Firebase (login, dashboard, etc.), include:
```js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
```

---

## 🧾 Logging Implementation
Each user action (login, selection, test submission, logout) is logged using:
```js
function logAction(action, userId = "Guest") {
  console.log(`[LOG] ${new Date().toISOString()} - ${action} - User: ${userId}`);
}
```

---

## ⚙️ How to Run the Project Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/Phaninder12/career-guidance.git
   cd career-guidance
   ```

2. **Open in VS Code**

3. **Install Live Server extension**  
   - Go to Extensions → search “Live Server” → Install  
   - Right-click on `login.html` → **Open with Live Server**

4. **Set up Firebase**  
   - Create a new Firebase project → Enable **Email/Password Authentication**
   - Copy your Firebase config → Paste in all pages that use Firebase.

5. **Run the app**  
   - Access via: `http://localhost:5500/login.html`

---

## 🧩 Project Evaluation Metrics
| Criteria | Description |
|-----------|-------------|
| **Code** | Modular, well-commented, and maintainable |
| **Database** | Firebase for authentication and future scalability |
| **Logging** | Every action logged using console/Firebase |
| **Design** | Responsive and simple UI |
| **Optimization** | Efficient use of localStorage and modular JS |

---

## 🧠 System Design Overview
- **Frontend**: Handles UI and user interactions.  
- **Firebase Authentication**: Validates users securely.  
- **LocalStorage**: Temporarily stores selections and scores.  
- **Dashboard**: Displays summarized data and allows session restart/logout.

---

## 🧪 Testing & Validation
✅ Verify all navigation links.  
✅ Check that all selections (stream, location, college) persist correctly.  
✅ Ensure aptitude test score and details appear on dashboard.  
✅ Confirm logout clears all localStorage data.

---

## ☁️ Deployment
You can deploy the app using:
- **Firebase Hosting**
  ```bash
  firebase login
  firebase init
  firebase deploy
  ```
- or simply host via **GitHub Pages**.

---

## 👨‍💻 Developer
**Name:** Phaninder Karri  
**Role:** Full Stack Developer (HTML, CSS, JS, Firebase)  
**Project Type:** Educational Web Application  
**Difficulty Level:** Medium  
