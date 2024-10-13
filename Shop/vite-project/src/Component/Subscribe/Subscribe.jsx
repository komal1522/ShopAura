import React, { useState } from 'react';
import Background from '/img/Background.png';
import { FaPaperPlane } from 'react-icons/fa'; // Import the send icon

const BackgroundImg = {
  backgroundImage: `url(${Background})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100%',
  width: '100%',
};

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value); // Update email state when typing in input
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default behavior of form submission (no page reload)
    setIsSubmitted(true); // Trigger email submission
    window.location.reload(); // Refresh the page after clicking the button
  };

  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-blue-950"
      style={BackgroundImg}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <div className="text-2xl text">
            <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
              Get Notified About New Products
            </h1>
            <form onSubmit={handleSubmit} className='flex justify-between'>
              <input
                data-aos="fade-up"
                type="email" // Set input type to email for validation
                placeholder="Enter your email"
                value={email}
                onChange={handleInputChange} // Handle email input change
                className="w-full p-2 mt-3"
                required
              />
              {email && (
                <button
                  type="submit" // Submit button
                  className="w-10 p-2 mt-3 ml-2 bg-blue-900 text-white rounded flex items-center justify-center gap-2"
                >
                   <FaPaperPlane className="text-lg" /> {/* Send icon */}
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
