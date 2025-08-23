import React from 'react';
import logoImg from '../../assets/logo.png';
import avatarImg from '../../assets/avatar.png';
import dropdownImg from '../../assets/dropdown.png';
import './header.css';
import { Link } from "react-router-dom";

function Header({ className }) {
  return (
    <header className={`header ${className}`}>
      <div className="navbar">
        <img className="logo" src={logoImg} alt="Logo" />
        
        <nav className="nav-links">
          <ul>
            <li>Series</li>
            <li><Link to="/home">Film</Link></li>
            <li><Link to="/mylist">Daftar Saya</Link></li>
          </ul>
        </nav>

        <div className="profile-menu">
          <img className="avatar" src={avatarImg} alt="Avatar" />
          <span className="dropdown-icon">
            <img src={dropdownImg} alt="Dropdown" />
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
