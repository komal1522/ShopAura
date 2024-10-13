import React, { useState, useEffect } from 'react';

const Search = () => {
  const [products, setProducts] = useState([]); // Store all products
  const [filteredProducts, setFilteredProducts] = useState([]); // Store filtered products
  const [searchTerm, setSearchTerm] = useState(''); // Track the search input

  // Fetch data on component mount
  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch('https://dummyjson.com/products');
        let data = await response.json();
        setProducts(data.products); // Store all products
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  // Handle search functionality
  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue); // Set the search term

    // Filter products based on the search input
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchValue)
    );
    setFilteredProducts(filtered); // Update the filtered products
  };

  return (
    <div>
      {/* Search Input */}
      <input
        type='text'
        id='searchbox'
        placeholder='Search'
        value={searchTerm}
        onChange={handleSearch}
        className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-red-300 dark:border-gray-500 dark:bg-gray-800'
      />

      {/* Product Cards - only show if there are filtered products */}
      <div id='products'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} id='product-card' className='product-card'>
              <h3>{product.title}</h3>
              <img src={product.images[0]} alt={product.title} className='w-full h-[200px] object-contain' />
              <p>{product.description}</p>
            </div>
          ))
        ) : (
          searchTerm && <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default Search;
