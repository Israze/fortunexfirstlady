import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Home from "./pages/home";
import Reward from "./pages/reward";
import Register from "./pages/Register";
import Payment from "./pages/payment";
import { PlanProvider } from "./context/PlanContext";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <PlanProvider>
      <Router>
        <ScrollToTop />
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rewards" element={<Reward />} />
          <Route path="/register" element={<Register />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </Router>
    </PlanProvider>
  );
}
