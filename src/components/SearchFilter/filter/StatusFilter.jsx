import React from 'react'
import './Filter.css'

const StatusFilter = ({ onStatusChange }) => {
  return (
    <div className="filter-container status-filter">
      <select 
        className="filter-select"
        onChange={(e) => onStatusChange(e.target.value)}
        defaultValue=""
      >
        <option value="">All Status</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>
    </div>
  )
}

export default StatusFilter
