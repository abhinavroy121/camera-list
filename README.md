# Camera List Dashboard

A modern camera management dashboard built with React that allows users to efficiently manage, filter, and monitor camera devices.

<img width="1920" height="884" alt="cameraListDashboard" src="https://github.com/user-attachments/assets/b11f1365-1dc4-4f86-af27-fdc4160353ae" />


## Features

### 📋 Camera Management
- **View Cameras**: Display all cameras in a clean, organized table layout
- **Real-time Status**: Monitor camera status (Active/Inactive) with visual indicators
- **Health Monitoring**: Visual health indicators for each camera device

### 🔍 Search & Filtering
- **Global Search**: Search across all camera properties instantly
- **Location Filter**: Filter cameras by location with dropdown selection
- **Status Filter**: View cameras by status (Active/Inactive only)
- **Case-insensitive**: Smart filtering that works regardless of text case

### 📄 Pagination
- **Responsive Pagination**: Navigate through large camera lists efficiently
- **Page Size Options**: Choose between 5, 10, 20, or 50 items per page
- **Smart Navigation**: First, previous, next, and last page controls
- **Item Counter**: Shows current range and total items (e.g., "1-10 of 350")

### 🎨 User Interface
- **Modern Design**: Clean, professional interface with consistent styling
- **Responsive Layout**: Works seamlessly on desktop and mobile devices
- **Sticky Headers**: Table headers stay visible while scrolling
- **Hover Effects**: Interactive feedback for better user experience
- **Color-coded Status**: Visual distinction between active and inactive cameras

### ⚡ Performance
- **Frontend-only Operations**: All filtering, searching, and pagination happen client-side
- **Optimized Rendering**: Efficient state management for smooth interactions
- **No API Refetching**: Initial data load only, all operations work on cached data

## Technology Stack

- **Frontend**: React.js with hooks (useState, useEffect, useMemo)
- **Styling**: CSS with flexbox and responsive design
- **API Integration**: RESTful API endpoints for data fetching and updates
- **State Management**: React state with optimized re-rendering

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Open [http://localhost:3000](http://localhost:3000) to view the application

## Key Components

- **CameraTableDashboard**: Main dashboard component managing overall state
- **CameraTable**: Renders the camera list with interactive features
- **Pagination**: Reusable pagination component with customizable options
- **Searchbar**: Global search functionality
- **LocationFilter**: Location-based filtering dropdown
- **StatusFilter**: Status-based filtering dropdown

## User Experience

The application provides an intuitive interface for managing camera devices with:
- Instant search results as you type
- One-click status toggling
- Smooth pagination between pages
- Responsive design that adapts to any screen size
- Professional visual feedback for all interactions

Perfect for administrators who need to efficiently monitor and manage camera devices across multiple locations.
