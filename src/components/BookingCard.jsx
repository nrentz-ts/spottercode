import React from 'react'
import './BookingCard.css'

function BookingCard({ booking, onEdit, onDelete }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  return (
    <div className="booking-card">
      <div className="booking-content">
        <div className="booking-header">
          <div>
            <h3 className="booking-guest-name">{booking.guestName}</h3>
            <p className="booking-property">{booking.propertyName}</p>
          </div>
          <div className="booking-status">{booking.status}</div>
        </div>
        <div className="booking-details">
          <div className="booking-detail-item">
            <span className="detail-label">📅 Check-in:</span>
            <span className="detail-value">{formatDate(booking.checkIn)}</span>
          </div>
          <div className="booking-detail-item">
            <span className="detail-label">📅 Check-out:</span>
            <span className="detail-value">{formatDate(booking.checkOut)}</span>
          </div>
          <div className="booking-detail-item">
            <span className="detail-label">👥 Guests:</span>
            <span className="detail-value">{booking.guests}</span>
          </div>
          <div className="booking-detail-item">
            <span className="detail-label">💰 Total:</span>
            <span className="detail-value">${booking.total}</span>
          </div>
        </div>
        <div className="booking-actions">
          <button 
            className="btn-edit"
            onClick={() => onEdit(booking)}
          >
            Edit
          </button>
          <button 
            className="btn-delete"
            onClick={() => onDelete(booking.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default BookingCard

