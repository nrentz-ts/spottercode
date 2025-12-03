import React from 'react'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <span className="logo-icon">🏠</span>
          <span className="logo-text">Property Manager</span>
        </div>
        <nav className="nav">
          <a href="#" className="nav-link active">Properties</a>
          <a href="#" className="nav-link">Bookings</a>
          <a href="#" className="nav-link">Settings</a>
        </nav>
        <div className="user-menu">
          <div className="user-avatar">JD</div>
        </div>
      </div>
    </header>
  )
}

export default Header

