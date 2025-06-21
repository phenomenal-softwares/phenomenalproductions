'use client';

import { useState } from 'react';
import '@/styles/navbar.css'; // We’ll create this CSS file next

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Phenomenal</div>

        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/client-form">Create App</a></li>
        </ul>
      </div>
    </nav>
  );
}
