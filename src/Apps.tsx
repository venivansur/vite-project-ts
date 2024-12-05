import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/auth/HomePage';
import LoginPage from './pages/auth/LoginPage';
import ForgotPage from './pages/auth/ForgotPage';
import ResetPage from './pages/auth/ResetPage';
import RegisterPage from './pages/auth/RegisterPage';
import PrivateRoute from './pages/auth/PrivateRoute';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} /> 
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/forgot" element={<ForgotPage />} />
        <Route path="/reset" element={<ResetPage />} />
        <Route path="/register" element={<RegisterPage />} /> 

     
        <Route
          path="/home"
          element={<PrivateRoute home={<HomePage />} />} 
        />
      </Routes>
    </Router>
  );
};

export default App;
