"use client"
import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white z-50">
      <div className="loader">Loading...</div>
    </div>
  );
};

export default Loading;