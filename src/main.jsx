import React from "react";
import ReactDOM from "react-dom/client";
import './i18n';
import "./index.css";
import App from "./App.jsx"; 
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext"; // 1. استيراد المزوّد الجديد
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/sky-master">
      <UserProvider> {/* 2. تغليف التطبيق بـ UserProvider */}
        <CartProvider>
          <App />
        </CartProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);