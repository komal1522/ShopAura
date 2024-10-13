import React, { useState } from 'react';
import Logo from '/img/Logo.png.jpg'; // Corrected image path
import { IoMdSearch } from 'react-icons/io'; // Search icon
import Search from '../Search/Search'; // Import the Search component
import { FaCartShopping } from 'react-icons/fa6'; // Cart icon
import { FaCaretDown } from 'react-icons/fa'; // Dropdown arrow icon
import DarkMode from '../DarkMode'; // Dark Mode component
import Profile from '../Profile'; // Profile component

const DropdownLinks = [
  {
    id: 1,
    name: 'Trending Products',
    link: '/#',
  },
  {
    id: 2,
    name: 'Best Selling',
    link: '/#',
  },
  {
    id: 3,
    name: 'Top Rated',
    link: '/#',
  },
  {
    id: 4,
    name: 'Old',
    link: '/#',
  },
];

const Menu = [
  {
    id: 1,
    name: 'Home',
    link: '/#',
  },
  {
    id: 2,
    name: 'Top Rated',
    link: '/#TopProduct',
  },
  {
    id: 3,
    name: 'Kids Wear',
    link: '/#',
  },
  {
    id: 4,
    name: 'Mens Wear',
    link: '/#',
  },
  {
    id: 5,
    name: 'Food',
    link: '/#Banner',
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [searchQuery, setSearchQuery] = useState(''); // State for search input

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update search input value
  };

  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
      <div className='bg-red-300/40 py-2'>
        <div className='container flex justify-between items-center'>
          <div className='h-8 w-8'>
            <a href='#' className='font-bold flex items-center'>
              <img src={Logo} alt='Logo' className='h-full w-full object-contain' /> ShopAura
            </a>
          </div>
          <div className='flex justify-between items-center gap-4'>
            {/* Search Bar */}
            <div className="relative group">
              <Search
                searchQuery={searchQuery}
                onChange={handleSearchChange} // Pass searchQuery as a prop
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-4 py-1 focus:outline-none focus:border-1 focus:border-red-300 dark:border-gray-500 dark:bg-gray-800 pr-10" // Padding-right for icon
              />
              <IoMdSearch
                className="absolute text-gray-500 group-hover:text-red-300 top-1/2 right-3 transform -translate-y-1/2"
              />
            </div>

            {/* Order Button */}
            <button
              onClick={() => handleOrderPopup()}
              className='bg-gradient-to-r from-red-400 to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'
            >
              <span className='group-hover:block hidden transition-all duration-200'>Order</span>
              <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer' />
            </button>

            {/* Dark Mode Switch */}
            <div>
              <DarkMode />
            </div>
            
            {/* Profile Icon */}
            <div className='ml-4'>
              <Profile />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div data-aos="zoom-in" className='flex justify-center'>
        <ul className='sm:flex hidden items-center gap-4'>
          {Menu.map((data) => (
            <li key={data.id}>
              <a href={data.link} className='inline-block px-4 hover:text-primary dark:hover:text-primary/50 duration-200'>
                {data.name}
              </a>
            </li>
          ))}
          {/* Trending Items Dropdown */}
          <li className='relative group cursor-pointer'>
            <a href='#' className='flex items-center gap-[2px] py-2'>
              Trending Items
              <span>
                <FaCaretDown className='transition-all duration-200 group-hover:rotate-180' />
              </span>
            </a>
            {/* Dropdown content */}
            <div className='absolute z-[9999] w-[150px] rounded-md text-gray-700 bg-white shadow-md hidden group-hover:block'>
              <ul className='py-2'>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className='inline-block w-full rounded-md px-4 py-2 hover:bg-primary/20 dark:hover:bg-primary/40'
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
