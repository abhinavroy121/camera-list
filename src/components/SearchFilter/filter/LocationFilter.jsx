import React from 'react'
import './Filter.css'
import locationPin from '../../../assets/camerTableIcons/filter/locationPin.svg'

const LocationFilter = ({ onLocationChange, locations }) => {
  return (
    <div className="filter-container">
        <img className='location-icon' src={locationPin} alt="locationPin" />
      <select 
        className="filter-select"
        onChange={(e) => onLocationChange(e.target.value)}
        defaultValue=""
      >
        <option  value="">Location</option>
        {locations.map((location, index) => (
          <option key={index} value={location}>
            {location}
          </option>
        ))}
      </select>
    </div>
  )
}

export default LocationFilter
