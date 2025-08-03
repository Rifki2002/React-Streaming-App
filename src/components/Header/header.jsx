import React from 'react';
import logoImg from '../../assets/logo.png';
import avatarImg from '../../assets/avatar.png';
import dropdownImg from '../../assets/dropdown.png';
import './header.css';

function Header({ className }) {
  return (
    <header className={`header ${className}`}>
      <div className="navbar">
        <img className="logo" src={logoImg} alt="Logo" />
        
        <nav className="nav-links">
          <ul>
            <li>Series</li>
            <li>Film</li>
            <li>Daftar Saya</li>
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
