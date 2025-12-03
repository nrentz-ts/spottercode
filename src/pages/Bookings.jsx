import React, { useState } from 'react'
import '../App.css'
import BookingCard from '../components/BookingCard'

function Bookings() {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      guestName: 'Sarah Johnson',
      propertyName: 'Charming Montmartre Apartment',
      checkIn: '2024-12-15',
      checkOut: '2024-12-20',
      guests: 2,
      total: 600,
      status: 'confirmed'
    },
    {
      id: 2,
      guestName: 'Michael Chen',
      propertyName: 'Elegant Marais Loft',
      checkIn: '2024-12-18',
      checkOut: '2024-12-25',
      guests: 4,
      total: 1400,
      status: 'confirmed'
    },
    {
      id: 3,
      guestName: 'Emma Williams',
      propertyName: 'Cozy Latin Quarter Studio',
      checkIn: '2024-12-10',
      checkOut: '2024-12-14',
      guests: 1,
      total: 340,
      status: 'completed'
    },
    {
      id: 4,
      guestName: 'David Martinez',
      propertyName: 'Charming Montmartre Apartment',
      checkIn: '2024-12-22',
      checkOut: '2024-12-28',
      guests: 3,
      total: 720,
      status: 'pending'
    },
    {
      id: 5,
      guestName: 'Lisa Anderson',
      propertyName: 'Elegant Marais Loft',
      checkIn: '2024-12-05',
      checkOut: '2024-12-08',
      guests: 2,
      total: 600,
      status: 'cancelled'
    }
  ])

  const handleEditBooking = (booking) => {
    // Handle edit booking logic here
    console.log('Edit booking:', booking)
  }

  const handleDeleteBooking = (id) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      setBookings(bookings.filter(b => b.id !== id))
    }
  }

  const confirmedBookings = bookings.filter(b => b.status === 'confirmed').length
  const totalRevenue = bookings
    .filter(b => b.status === 'confirmed' || b.status === 'completed')
    .reduce((sum, b) => sum + b.total, 0)

  return (
    <>
      <div className="dashboard-header">
        <div>
          <h1>Bookings</h1>
          <p className="subtitle">Manage your property bookings</p>
        </div>
      </div>

      <div className="stats-container">
        <div className="stat-card">
          <div className="stat-value">{bookings.length}</div>
          <div className="stat-label">Total Bookings</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{confirmedBookings}</div>
          <div className="stat-label">Confirmed</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">${totalRevenue.toLocaleString()}</div>
          <div className="stat-label">Total Revenue</div>
        </div>
      </div>

      {bookings.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">📅</div>
          <h2>No bookings yet</h2>
          <p>Your upcoming bookings will appear here</p>
        </div>
      ) : (
        <div className="properties-grid">
          {bookings.map(booking => (
            <BookingCard
              key={booking.id}
              booking={booking}
              onEdit={handleEditBooking}
              onDelete={handleDeleteBooking}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default Bookings

