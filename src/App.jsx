import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Home from "./components/home";
import Products from "./components/Products";
import About from "./components/About";
import Login from "./components/login";
import Register from "./components/register";
import Cart from "./components/Cart";
import { useEffect, useState } from "react";

const getStoredTotal = () => {
  const saved = sessionStorage.getItem("total");
  return saved ? parseFloat(saved) : 0;
};

function App() {
  const [total, setTotal] = useState(getStoredTotal);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  // Get cart total from Redux
  const cartTotal = useSelector((state) => state.cart.totalPrice);

  useEffect(() => {
    sessionStorage.setItem("total", total);
  }, [total]);

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");
    setTotal(0);
    sessionStorage.removeItem("total");
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
              setLoggedIn={setLoggedIn}
              username={username}
              setUsername={setUsername}
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
