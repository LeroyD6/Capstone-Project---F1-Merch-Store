# F1 Merch Store - React App

## 📌 Project Overview

The **F1 Merch Store** is a responsive e-commerce web application built with **React**. It allows users to browse **Ferrari F1 merchandise**, register/login, add items to a shopping cart, and simulate checkout with various shipping options. It uses **Redux Toolkit** for state management and **React-Bootstrap** for the UI.

This project demonstrates core React concepts including state management, routing, form handling, and responsive design.

---

## ✨ Features

- **User Authentication**: Registration and login with Formik validation and protected routes.
- **Product Catalog**: Displays F1 merchandise with color selection.
- **Shopping Cart**: Add, view, modify quantities, remove items, and calculate total price.
- **Shipping Options**: Choose from Standard, Express, or Overnight shipping. Includes a "Help" modal with explanations.
- **Order Placement**: Simulates order completion with confirmation.
- **Intuitive UI**: Built with React-Bootstrap and custom CSS for a responsive, modern look.
- **Global State Management**: Uses Redux Toolkit for efficient cart state management.
- **Client-Side Routing**: Seamless navigation with `react-router-dom`.

---

## 🛠 Technologies Used

- React.js
- React Router DOM
- Redux Toolkit
- React-Bootstrap
- Formik
- CSS

---

## 🚀 Installation

To run this project locally:

### ✅ Prerequisites

- [Node.js](https://nodejs.org/) & npm

### 🧭 Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/LeroyD6/Capstone-Project---F1-Merch-Store.git
   ```

2. **Navigate into the project directory**:

   ```bash
   cd Capstone-Project---F1-Merch-Store
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

Open in your browser: [http://localhost:5173](http://localhost:5173)

---

## 🧭 Usage

| Route       | Description                                                       |
| ----------- | ----------------------------------------------------------------- |
| `/`         | Home page - Login/Register or browse products (if logged in).     |
| `/register` | Create an account with form validation.                           |
| `/login`    | Access the store with your credentials.                           |
| `/products` | Browse Ferrari F1 items, choose colors, add to cart.              |
| `/cart`     | Manage cart items, choose shipping, and simulate order placement. |
| `/about`    | Learn about the store and find contact information.               |

---
