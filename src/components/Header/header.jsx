import React from 'react';
import logoImg from '../../assets/logo.png';
import avatarImg from '../../assets/avatar.png';
import dropdownImg from '../../assets/dropdown.png';
import { Link } from "react-router-dom";

function Header({ className }) {
  return (
    <header className={`w-full h-20 bg-[#121212] fixed top-0 left-0 z-50 flex items-center shadow-md ${className}`}>
      <div className="w-full max-w-[1440px] mx-auto px-6 flex items-center justify-between">
        <img className="h-10 object-contain" src={logoImg} alt="Logo" />

        <nav className="">
          <ul className="flex gap-8 text-white text-base">
            <li className="cursor-pointer hover:text-[#1f80e0]">Series</li>
            <li>
              <Link to="/home" className="hover:text-[#1f80e0]">Film</Link>
            </li>
            <li>
              <Link to="/mylist" className="hover:text-[#1f80e0]">Daftar Saya</Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <img className="h-8 w-8 rounded-full object-cover" src={avatarImg} alt="Avatar" />
          <span>
            <img className="w-3 h-3" src={dropdownImg} alt="Dropdown" />
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
