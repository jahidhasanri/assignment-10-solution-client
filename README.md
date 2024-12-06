# EquiSports: A Sports Equipment Store

[Live Site URL](https://equisports.web.app)

EquiSports is a modern, responsive e-commerce platform for purchasing and managing sports equipment. Designed with simplicity and user experience in mind, it caters to sports enthusiasts looking for a seamless online shopping experience.

---

## Features

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

## Pages and Functionalities

### Public Pages  
- **Home Page**  
  - Banner with a slider showcasing meaningful sports content.  
  - Product and sports categories sections.  
  - Two additional sections for extra information.  

- **All Sports Equipment**  
  - Displays all equipment in a table with sorting by price functionality.  
  - View Details button for more information about products.  

- **Login and Register Pages**  
  - User authentication with validation messages using React Toastify.  

- **404 Page**  
  - A custom-designed page for non-existing routes.  

### Private Pages  
- **Add Equipment Page**  
  - A secure form to add new products with fields like image, name, price, category, and more.  

- **View Details Page**  
  - Displays all details of a selected product in a visually appealing design.  

- **My Equipment List**  
  - Shows all items added by the logged-in user in a card format with options to update or delete.  

- **Update Page**  
  - Editable form to update existing product details with validation and success messages.  

---

## Tech Stack

- **Frontend**: React, Tailwind CSS, React Toastify, React Router, React Tooltip, Lottie React  
- **Backend**: Node.js, Express.js, MongoDB  
- **Authentication**: Firebase Authentication (Email/Password and Google Login)  
- **Hosting**: Firebase (Client-side), Vercel (Server-side)  

---

## Installation and Setup

1. Clone the repository.  
   ```bash
   git clone https://github.com/yourusername/equisports.git
   cd equisports
