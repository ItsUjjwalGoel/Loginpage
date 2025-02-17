import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthPage from './assets/AuthPage';
import Home from './assets/Home';
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;
