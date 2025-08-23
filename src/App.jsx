import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage/loginPage';
import RegisterPage from './Pages/RegisterPage/registerPage';
import HomePage from './Pages/HomePage/homePage';
import MyListPage from './Pages/MyListPage/myListPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/mylist" element={<MyListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
