import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import FilterButtons from './components/FilterButtons';
import ImageGallery from './components/ImageGallery';
import Loading from './components/Loading';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';

const API_URL = 'https://api.unsplash.com/search/photos';
const IMAGES_PER_PAGE = 20;

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false); // State for theme

  const fetchImages = useCallback(async (query) => {
    try {
      if (query) {
        setErrorMsg('');
        setLoading(true);
        const { data } = await axios.get(
          `${API_URL}?query=${query}&page=${page}&per_page=${IMAGES_PER_PAGE}&client_id=${import.meta.env.VITE_API_KEY}`
        );
        setImages(data.results);
        setTotalPages(data.total_pages);
      }
    } catch (error) {
      setErrorMsg('Error fetching images. Try again later.');
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchImages(''); // Fetch images when the component mounts
  }, [fetchImages]);

  const handleSearch = (query) => {
    setPage(1);
    fetchImages(query);
  };

  const handleSelection = (selection) => {
    handleSearch(selection);
  };

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev); // Toggle theme
  };

  return (
    <div className={`container mx-auto flex flex-col min-h-screen justify-center items-center ${isDarkTheme ? 'dark' : ''}`}>
      <h1 className={`text-center text-4xl font-bold mt-8 ${isDarkTheme ? 'text-white' : 'text-primary'}`}>FrameIt</h1>
      {errorMsg && <p className="text-red-500 text-center">{errorMsg}</p>}

      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 px-4 py-2 rounded bg-primary text-white"
      >
        {isDarkTheme ? 'Light Mode' : 'Dark Mode'}
      </button>

      <SearchBar onSearch={handleSearch} />
      <FilterButtons onSelect={handleSelection} />

      {loading ? (
        <Loading />
      ) : (
        <>
          <ImageGallery images={images} />
          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </>
      )}
    </div>
  );
}

export default App;
