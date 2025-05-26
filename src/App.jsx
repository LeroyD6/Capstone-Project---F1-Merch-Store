import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "./components/CartSlice";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Register";
import Cart from "./components/Cart";

const getStoredTotal = () => {
  const saved = sessionStorage.getItem("total");
  return saved ? parseFloat(saved) : 0;
};

// Functions to manage authentication state in localStorage
const getStoredAuthState = () => {
  const loggedIn = localStorage.getItem("loggedIn") === "true";
  const username = localStorage.getItem("username") || "";
  return { loggedIn, username };
};

const setStoredAuthState = (loggedIn, username) => {
  localStorage.setItem("loggedIn", loggedIn.toString());
  localStorage.setItem("username", username);
};

const clearStoredAuthState = () => {
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("username");
};

const clearStoredCartState = () => {
  localStorage.removeItem("cartState");
};

function App() {
  const storedAuth = getStoredAuthState();
  const [loggedIn, setLoggedIn] = useState(storedAuth.loggedIn);
  const [username, setUsername] = useState(storedAuth.username);
  const [total, setTotal] = useState(getStoredTotal);
  // Get cart total from Redux
  const cartTotal = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  useEffect(() => {
    sessionStorage.setItem("total", total);
  }, [total]);

  // Update localStorage whenever authentication state changes
  useEffect(() => {
    setStoredAuthState(loggedIn, username);
  }, [loggedIn, username]);
  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");
    setTotal(0);
    clearStoredAuthState();
    clearStoredCartState();
    dispatch(clearCart());
  };

  return (
    <div>
      <Navbar loggedIn={loggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              loggedIn={loggedIn}
              username={username}
              handleLogout={handleLogout}
              setTotal={setTotal}
            />
          }
        />
        <Route
          path="/login"
          element={
            loggedIn ? (
              <Navigate to="/products" />
            ) : (
              <Login setLoggedIn={setLoggedIn} setUsername={setUsername} setTotal={setTotal} />
            )
          }
        />
        <Route path="/register" element={loggedIn ? <Navigate to="/products" /> : <Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={loggedIn ? <Cart /> : <Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
