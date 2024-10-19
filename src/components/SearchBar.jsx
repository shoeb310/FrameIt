import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';

const SearchBar = ({ onSearch }) => {
  const searchInput = useRef(null);

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchInput.current.value);
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <Form onSubmit={handleSearch}>
        <input
          type="search"
          placeholder="Type something to search..."
          className="w-full max-w-md p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          ref={searchInput}
        />
      </Form>
    </div>
  );
};

export default SearchBar;
