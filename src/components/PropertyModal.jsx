import React, { useState, useEffect } from 'react'
import './PropertyModal.css'

function PropertyModal({ property, onSave, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    bedrooms: '',
    bathrooms: '',
    guests: '',
    price: '',
    image: ''
  })

  useEffect(() => {
    if (property) {
      setFormData({
        name: property.name || '',
        location: property.location || '',
        bedrooms: property.bedrooms || '',
        bathrooms: property.bathrooms || '',
        guests: property.guests || '',
        price: property.price || '',
        image: property.image || ''
      })
    }
  }, [property])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'bedrooms' || name === 'bathrooms' || name === 'guests' || name === 'price' 
        ? (value === '' ? '' : Number(value))
        : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.location && formData.price) {
      onSave(formData)
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{property ? 'Edit Property' : 'Add New Property'}</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        <form onSubmit={handleSubmit} className="property-form">
          <div className="form-group">
            <label htmlFor="name">Property Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="e.g., Cozy Downtown Apartment"
            />
          </div>

          <div className="form-group">
            <label htmlFor="location">Location *</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              placeholder="e.g., Montmartre, Paris"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="bedrooms">Bedrooms</label>
              <input
                type="number"
                id="bedrooms"
                name="bedrooms"
                value={formData.bedrooms}
                onChange={handleChange}
                min="1"
                placeholder="2"
              />
            </div>

            <div className="form-group">
              <label htmlFor="bathrooms">Bathrooms</label>
              <input
                type="number"
                id="bathrooms"
                name="bathrooms"
                value={formData.bathrooms}
                onChange={handleChange}
                min="1"
                step="0.5"
                placeholder="1"
              />
            </div>

            <div className="form-group">
              <label htmlFor="guests">Max Guests</label>
              <input
                type="number"
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                min="1"
                placeholder="4"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="price">Price per Night ($) *</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              min="1"
              placeholder="150"
            />
          </div>

          <div className="form-group">
            <label htmlFor="image">Image URL</label>
            <input
              type="url"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-save">
              {property ? 'Update Property' : 'Add Property'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PropertyModal

