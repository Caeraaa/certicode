import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Auth
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// Public
import LandingPage from "./pages/public/LandingPage";

// Admin
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminInventory from "./pages/admin/AdminInventory";
import AdminSales from "./pages/admin/AdminSales";
import AdminCustomers from "./pages/admin/AdminCustomers";
import AdminSetting from "./pages/admin/AdminSetting";
import PlatformSetting from "./pages/admin/PlatformSetting";
import SupportDesk from "./pages/admin/SupportDesk"; 
import TicketDetail from "./pages/admin/TicketDetail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />

        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/inventory" element={<AdminInventory />} />
        <Route path="/sales" element={<AdminSales />} />
        <Route path="/customers" element={<AdminCustomers />} />

        
        <Route path="/settings" element={<AdminSetting />} />
        <Route path="/platform-settings" element={<PlatformSetting />} />

        
        <Route path="/support" element={<SupportDesk />} />
        <Route path="/ticket" element={<TicketDetail />} />

      
        <Route path="" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;