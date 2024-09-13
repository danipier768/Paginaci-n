import React from "react";

const Pagination = ({ currentPage, onPageChange, totalPages }) => {
  return (
    <div className="d-flex justify-content-center">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        &laquo;
      </button>

      {Array.from({ length: 2 }, (_, i) => (
        <button
          key={i + 1}
          className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
          onClick={() => onPageChange(i + 1)}
        >
          {i + 1}
        </button>
        
      ))}

      {currentPage > 3 && currentPage < totalPages - 2 && (
        <span className="mx-2">...</span>
      )}

      {currentPage > 2 && currentPage < totalPages - 1 && (
        <button className="page-item active">{currentPage}</button>
      )}

      {currentPage < totalPages - 2 && <span className="mx-2">...</span>}

      {Array.from({ length: 2 }, (_, i) => (
        <button
          key={totalPages - 1 + i}
          className={`page-item ${
            currentPage === totalPages - 1 + i ? "active" : ""
          }`}
          onClick={() => onPageChange(totalPages - 1 + i)}
        >
          {totalPages - 1 + i}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        &raquo;
      </button>
    </div>
  );
};

export default Pagination;
