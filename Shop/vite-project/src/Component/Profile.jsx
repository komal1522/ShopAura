import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Profile = () => {
  // State to manage the user's profile data
  const [userName, setUserName] = useState('UserName');
  const [profilePhoto, setProfilePhoto] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState('');
  const [newPhoto, setNewPhoto] = useState('');

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Handle profile update
  const handleProfileUpdate = () => {
    if (newName) setUserName(newName);
    if (newPhoto) setProfilePhoto(newPhoto);
    setEditing(false); // Close the editing mode after updating
  };

  // Handle Logout
  const handleLogout = () => {
    alert('Logging out...');
    // Add your logout logic here, like clearing tokens, redirecting, etc.
  };

  return (
    <div className='relative'>
      {/* Profile Icon */}
      <div onClick={toggleDropdown} className='cursor-pointer'>
        {profilePhoto ? (
          <img
            src={profilePhoto}
            alt='Profile'
            className='h-10 w-10 rounded-full object-cover'
          />
        ) : (
          <FaUserCircle className='text-3xl' />
        )}
      </div>

      {/* Profile Dropdown */}
      {isDropdownOpen && (
        <div className='absolute right-0 mt-2 w-48 bg-red-300/40 dark:bg-red-300/40 shadow-lg rounded-lg p-4 z-50'>
          {!editing ? (
            <>
              {/* Display profile info */}
              <div className='flex items-center'>
                {profilePhoto ? (
                  <img
                    src={profilePhoto}
                    alt='Profile'
                    className='h-12 w-12 rounded-full object-cover mr-3'
                  />
                ) : (
                  <FaUserCircle className='text-4xl mr-3' />
                )}
                <div>
                  <p className='font-semibold'>{userName}</p>
                </div>
              </div>
              <div className='flex justify-between mt-3'>
                <button
                  onClick={() => setEditing(true)}
                  className='bg-blue-800 hover:bg-blue-300 text-white px-4 py-1 rounded-md'
                >
                  Edit
                </button>
                <button
                  onClick={handleLogout}
                  className='bg-green-800 hover:bg-green-300 text-white px-2 py-1 rounded-md'
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <div className='flex flex-col'>
              {/* Editing Mode */}
              <label className='text-sm mt-2'>Change Name</label>
              <input
                type='text'
                placeholder='Enter new name'
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className='border border-gray-300 px-2 py-1 rounded-md'
              />
              
              <label className='text-sm mt-2'>Change Photo URL</label>
              <input
                type='text'
                placeholder='Enter new photo URL'
                value={newPhoto}
                onChange={(e) => setNewPhoto(e.target.value)}
                className='border border-gray-300 px-2 py-1 rounded-md'
              />
              
              <div className='flex justify-between mt-3'>
                <button
                  onClick={handleProfileUpdate}
                  className='bg-green-500 text-white px-4 py-1 rounded-md'
                >
                  Save
                </button>
                <button
                  onClick={() => setEditing(false)}
                  className='bg-red-500 text-white px-4 py-1 rounded-md'
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;
