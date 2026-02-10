import React from 'react'
import searchIcon from '../../../assets/camerTableIcons/searchIcon.png'
import './Searchbar.css'

const Searchbar = ({ onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="search-container">
        <input 
          className='search-input' 
          type="text" 
          placeholder="Search" 
          onChange={handleInputChange}
        />
        <img className='search-icon' src={searchIcon} alt="searchIcon" />
    </div>
  )
}

export default Searchbar
