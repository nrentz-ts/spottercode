# SpotStay

A simple homepage for Airbnb owners to manage their properties. Built with React and Vite.

## Features

- 📋 View all your properties in a beautiful grid layout
- ➕ Add new properties with a simple form
- ✏️ Edit existing properties
- 🗑️ Delete properties
- 📊 Dashboard statistics (total properties, active listings, estimated monthly revenue)
- 📱 Responsive design for mobile and desktop

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
  ├── components/
  │   ├── Header.jsx          # Navigation header
  │   ├── PropertyCard.jsx    # Property card component
  │   └── PropertyModal.jsx   # Add/Edit property modal
  ├── App.jsx                 # Main application component
  ├── App.css                 # App styles
  ├── main.jsx                # Application entry point
  └── index.css               # Global styles
```

## Technologies Used

- React 18
- Vite
- CSS3 (no external UI libraries)

