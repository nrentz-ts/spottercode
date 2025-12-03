import React, { useState } from 'react'
import '../App.css'
import PropertyCard from '../components/PropertyCard'
import PropertyModal from '../components/PropertyModal'

function Properties() {
  const [properties, setProperties] = useState([
    {
      id: 1,
      name: 'Charming Montmartre Apartment',
      location: 'Montmartre, Paris',
      bedrooms: 2,
      bathrooms: 1,
      guests: 4,
      price: 120,
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      status: 'active'
    },
    {
      id: 2,
      name: 'Elegant Marais Loft',
      location: 'Le Marais, Paris',
      bedrooms: 3,
      bathrooms: 2,
      guests: 6,
      price: 200,
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop',
      status: 'active'
    },
    {
      id: 3,
      name: 'Cozy Latin Quarter Studio',
      location: 'Latin Quarter, Paris',
      bedrooms: 1,
      bathrooms: 1,
      guests: 2,
      price: 85,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
      status: 'active'
    }
  ])

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingProperty, setEditingProperty] = useState(null)

  const handleAddProperty = () => {
    setEditingProperty(null)
    setIsModalOpen(true)
  }

  const handleEditProperty = (property) => {
    setEditingProperty(property)
    setIsModalOpen(true)
  }

  const handleSaveProperty = (propertyData) => {
    if (editingProperty) {
      // Update existing property
      setProperties(properties.map(p => 
        p.id === editingProperty.id ? { ...propertyData, id: editingProperty.id } : p
      ))
    } else {
      // Add new property
      const newProperty = {
        ...propertyData,
        id: Date.now(),
        status: 'active'
      }
      setProperties([...properties, newProperty])
    }
    setIsModalOpen(false)
    setEditingProperty(null)
  }

  const handleDeleteProperty = (id) => {
    if (window.confirm('Are you sure you want to delete this property?')) {
      setProperties(properties.filter(p => p.id !== id))
    }
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setEditingProperty(null)
  }

  const totalRevenue = properties.reduce((sum, p) => sum + (p.price * 30), 0)
  const activeProperties = properties.filter(p => p.status === 'active').length

  return (
    <>
      <div className="dashboard-header">
        <div>
          <h1>My Properties</h1>
          <p className="subtitle">Manage your Airbnb listings</p>
        </div>
        <button className="btn-primary" onClick={handleAddProperty}>
          + Add Property
        </button>
      </div>

      <div className="stats-container">
        <div className="stat-card">
          <div className="stat-value">{properties.length}</div>
          <div className="stat-label">Total Properties</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{activeProperties}</div>
          <div className="stat-label">Active Listings</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">${totalRevenue.toLocaleString()}</div>
          <div className="stat-label">Est. Monthly Revenue</div>
        </div>
      </div>

      {properties.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">🏠</div>
          <h2>No properties yet</h2>
          <p>Get started by adding your first property</p>
          <button className="btn-primary" onClick={handleAddProperty}>
            Add Your First Property
          </button>
        </div>
      ) : (
        <div className="properties-grid">
          {properties.map(property => (
            <PropertyCard
              key={property.id}
              property={property}
              onEdit={handleEditProperty}
              onDelete={handleDeleteProperty}
            />
          ))}
        </div>
      )}

      {isModalOpen && (
        <PropertyModal
          property={editingProperty}
          onSave={handleSaveProperty}
          onClose={handleCloseModal}
        />
      )}
    </>
  )
}

export default Properties
