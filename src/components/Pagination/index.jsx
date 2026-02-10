import React from 'react'
import './Pagination.css'

const Pagination = ({ currentPage, totalPages, onPageChange, pageSize, onPageSizeChange, totalItems, itemsPerPage }) => {
  const validCurrentPage = Math.min(currentPage, Math.max(1, Math.ceil(totalItems / pageSize)));
  const startItem = totalItems === 0 ? 0 : (validCurrentPage - 1) * pageSize + 1;
  const endItem = Math.min(validCurrentPage * pageSize, totalItems);

  const handleFirst = () => {
    if (currentPage > 1) {
      onPageChange(1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handleLast = () => {
    if (currentPage < totalPages) {
      onPageChange(totalPages);
    }
  };

  const handlePageSizeChange = (e) => {
    const newPageSize = parseInt(e.target.value);
    onPageSizeChange(newPageSize);
    onPageChange(1); // Reset to first page
  };

 
  return (
    <div className="pagination-container">
      <div className="pagination-info">
      <span ></span>
      </div>
      
      <div className="pagination-controls">
        <div className="page-size-selector">
          <select value={pageSize} onChange={handlePageSizeChange}>        
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </div>

        <div>
             <div className="page-numbers">
            
              <span>
                {startItem} - {endItem} of {totalItems}
              </span>
         
          </div>

        </div>

        <div className="pagination-nav">
          <button 
            className="pagination-btn first-btn" 
            onClick={handleFirst}
            disabled={currentPage === 1}
          >
            &lt;&lt;
          </button>

          <button 
            className="pagination-btn prev-btn" 
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            &lt;
          </button>

         
          <button 
            className="pagination-btn next-btn" 
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>

          <button 
            className="pagination-btn last-btn" 
            onClick={handleLast}
            disabled={currentPage === totalPages}
          >
            &gt;&gt;
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pagination
