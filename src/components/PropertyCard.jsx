import React from 'react'
import './PropertyCard.css'

function PropertyCard({ property, onEdit, onDelete }) {
  return (
    <div className="property-card">
      <div className="property-image-container">
        <img 
          src={property.image} 
          alt={property.name}
          className="property-image"
        />
        <div className="property-status">{property.status}</div>
      </div>
      <div className="property-content">
        <div className="property-header">
          <h3 className="property-name">{property.name}</h3>
          <div className="property-price">${property.price}<span>/night</span></div>
        </div>
        <p className="property-location">📍 {property.location}</p>
        <div className="property-details">
          <span className="detail-item">🛏️ {property.bedrooms} beds</span>
          <span className="detail-item">🚿 {property.bathrooms} baths</span>
          <span className="detail-item">👥 {property.guests} guests</span>
        </div>
        <div className="property-actions">
          <button 
            className="btn-edit"
            onClick={() => onEdit(property)}
          >
            Edit
          </button>
          <button 
            className="btn-delete"
            onClick={() => onDelete(property.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard

