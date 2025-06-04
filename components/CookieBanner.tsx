"use client";

import React, { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  const handleButtonClick = () => {
    setIsExiting(true);
  };

  useEffect(() => {
    if (isExiting) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 700); // Match animation duration
      return () => clearTimeout(timer);
    }
  }, [isExiting]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50 shadow-lg transform transition-all duration-700 ease-in-out ${
        isExiting ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
      }`}
    >
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
        <p className="text-center text-xs sm:text-sm md:text-base max-w-lg md:max-w-2xl">
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
        </p>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
          <button
            onClick={handleButtonClick}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition text-sm sm:text-base w-full sm:w-auto"
          >
            Accept
          </button>
          <button
            onClick={handleButtonClick}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition text-sm sm:text-base w-full sm:w-auto"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;