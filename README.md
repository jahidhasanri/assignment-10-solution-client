# EquiSports: A Sports Equipment Store

## 🌐 Live Link URL
[EquiSports Live Demo](https://assignment-10-solution.web.app/)

![Screenshot](https://github.com/user-attachments/assets/a6c6fb05-0baa-4c86-8efb-d37cba98b97c)

---

## 📋 Project Overview
EquiSports is a modern, responsive e-commerce platform for purchasing and managing sports equipment. Designed with simplicity and user experience in mind, it caters to sports enthusiasts looking for a seamless online shopping experience. The platform offers smooth navigation, efficient cart management, and secure transactions, ensuring a hassle-free shopping experience.

---

## 🛠️ Technologies Used
- **Frontend:** React, Tailwind CSS, React Toastify, React Router, React Tooltip, Lottie React
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** Firebase Authentication (Email/Password and Google Login)
- **Hosting:** Firebase (Client-side), Vercel (Server-side)

---

## 🚀 Core Features
1. **Responsive Design**  
   - Optimized for mobile, tablet, and desktop devices for a seamless browsing experience.

2. **User Authentication**  
   - Supports login and registration with Email/Password and Google authentication.  
   - Conditional navbar rendering based on user status.

3. **Comprehensive Product Management**  
   - Add, update, and delete sports equipment through private routes.  
   - Logged-in users can view and manage their personal equipment list.

4. **Interactive User Experience**  
   - Includes features like dark/light mode toggle and sort functionality by price.  
   - Integration of Lottie React animations and React Tooltip for enhanced interactivity.

5. **Error-Free Navigation**  
   - Handles private routes gracefully and ensures no errors upon reloading any page.

---

## 🗂️ Pages and Functionalities

### Public Pages
- **Home Page:** Banner with a slider, product categories, and extra information sections.
- **All Sports Equipment:** Displays all equipment with sorting by price and view details functionality.
- **Login/Register Pages:** User authentication with validation using React Toastify.
- **404 Page:** Custom-designed page for non-existing routes.

### Private Pages
- **Add Equipment Page:** Secure form for adding products with necessary fields.
- **View Details Page:** Detailed view of selected products.
- **My Equipment List:** Displays items added by the user with update and delete options.
- **Update Page:** Editable form to update product details with validation and success messages.

---

## 📦 Project Dependencies
```json
{
  "name": "assignment-10-solution-client",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@emailjs/browser": "^4.4.1",
    "@emotion/react": "^11.13.5",
    "@react-icons/all-files": "^4.1.0",
    "emailjs-com": "^3.2.0",
    "firebase": "^11.0.2",
    "localforage": "^1.10.0",
    "match-sorter": "^8.0.0",
    "react": "^18.3.1",
    "react-awesome-reveal": "^4.2.14",
    "react-dom": "^18.3.1",
    "react-icons": "^5.4.0",
    "react-lottie": "^1.2.10",
    "react-router-dom": "^7.0.2",
    "react-toastify": "^10.0.6",
    "react-tooltip": "^5.28.0",
    "sort-by": "^1.2.0",
    "sweetalert2": "^11.14.5",
    "swiper": "^11.1.15"
  },
  "devDependencies": {
    "@eslint/js": "^9.15.0",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "daisyui": "^4.12.14",
    "eslint": "^9.15.0",
    "eslint-plugin-react": "^7.37.2",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.14",
    "globals": "^15.12.0",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.15",
    "vite": "^6.0.1"
  }
}
```

---

## 💻 How to Run Locally
1. **Clone the Repository:**  
   ```bash
   git clone https://github.com/your-username/equi-sports.git
   ```
2. **Navigate to the Project Directory:**  
   ```bash
   cd equi-sports
   ```
3. **Install Dependencies:**  
   ```bash
   npm install
   ```
4. **Run the Development Server:**  
   ```bash
   npm run dev
   ```
5. **Open in Browser:**  
   Go to [http://localhost:5173](http://localhost:5173) to view the project locally.

---

## 🔗 Relevant Resources
- [Live Demo](https://assignment-10-solution.web.app/)
- [Firebase Documentation](https://firebase.google.com/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs/installation)

---

