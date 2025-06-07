import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import ExecutiveDashboard from './pages/ExecutiveDashboard';
import ManagerDashboard from './pages/ManagerDashboard';

const userRole = 'Executive'; 

const App = () => {
  const getDashboardRoute = () => {
    switch (userRole) {
      case 'Admin':
        return <AdminDashboard />;
      case 'Executive':
        return <ExecutiveDashboard />;
      case 'Manager':
        return <ManagerDashboard />;
      default:
        return <Navigate to="/login" />;
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={getDashboardRoute()} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
};

export default App;
