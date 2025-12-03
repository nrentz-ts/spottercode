import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Properties from './pages/Properties'
import Bookings from './pages/Bookings'
import Settings from './pages/Settings'
import Analytics from './pages/Analytics'
import SpotStayAI from './pages/SpotStayAI'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Properties />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/spotstay-ai" element={<SpotStayAI />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App

