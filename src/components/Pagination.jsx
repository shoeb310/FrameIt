import React from 'react';

const Pagination = ({ page, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center items-center gap-4 mt-12">
      {page > 1 && (
        <button
          onClick={() => onPageChange(page - 1)}
          className="px-4 py-2 bg-primary text-white rounded-md"
        >
          Previous
        </button>
      )}
      {page < totalPages && (
        <button
          onClick={() => onPageChange(page + 1)}
          className="px-4 py-2 bg-primary text-white rounded-md"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
