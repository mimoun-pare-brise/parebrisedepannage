
"use client";

import React from 'react';

const FloatingCTAButton = () => {

  const handleCall = () => {
    window.location.href = 'tel:0751280481';
  };

  return (
    <>
      
      <div className="wrapper"> 
        
        <div className="pulse" onClick={handleCall} style={{ cursor: 'pointer' }}> 
          <div className="phone">
            <i className="fa fa-phone" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingCTAButton;
