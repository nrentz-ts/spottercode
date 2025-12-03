import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

function Header() {
  const location = useLocation()

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <span className="logo-icon">🏠</span>
          <span className="logo-text">Property Manager</span>
        </div>
        <nav className="nav">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Properties
          </Link>
          <Link 
            to="/bookings" 
            className={`nav-link ${location.pathname === '/bookings' ? 'active' : ''}`}
          >
            Bookings
          </Link>
          <Link 
            to="/settings" 
            className={`nav-link ${location.pathname === '/settings' ? 'active' : ''}`}
          >
            Settings
          </Link>
        </nav>
        <div className="user-menu">
          <div className="user-avatar">JD</div>
        </div>
      </div>
    </header>
  )
}

export default Header

