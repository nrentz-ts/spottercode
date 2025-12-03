import React, { useState } from 'react'
import '../App.css'
import './Settings.css'

function Settings() {
  const [accountName, setAccountName] = useState('')
  const [email, setEmail] = useState('')

  const handleSaveChanges = (e) => {
    e.preventDefault()
    // Handle save changes logic here
    alert('Changes saved successfully!')
  }

  const handleClearAllData = () => {
    if (window.confirm('Are you sure you want to clear all data? This action cannot be undone.')) {
      // Handle clear all data logic here
      alert('All data cleared!')
    }
  }

  return (
    <>
      <div className="dashboard-header">
        <div>
          <h1>Settings</h1>
          <p className="subtitle">Manage your account and preferences</p>
        </div>
      </div>

      <div className="settings-container">
        <div className="settings-section">
          <h2 className="settings-section-title">Account Settings</h2>
          <form onSubmit={handleSaveChanges} className="settings-form">
            <div className="form-group">
              <label htmlFor="accountName">Account Name</label>
              <input
                type="text"
                id="accountName"
                value={accountName}
                onChange={(e) => setAccountName(e.target.value)}
                className="settings-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="settings-input"
              />
            </div>
            <button type="submit" className="btn-primary">
              Save Changes
            </button>
          </form>
        </div>

        <div className="settings-section">
          <h2 className="settings-section-title">Data Management</h2>
          <p className="settings-description">Clear all your data and start fresh</p>
          <button 
            onClick={handleClearAllData} 
            className="btn-danger"
          >
            Clear All Data
          </button>
        </div>
      </div>
    </>
  )
}

export default Settings

