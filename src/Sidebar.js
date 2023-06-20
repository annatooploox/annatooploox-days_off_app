import React, { useState } from 'react';
import './App.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button className="button" onClick={openSidebar}>BOOK DAYS OFF</button>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">SET NEW DAYS OFF</div>
        <input className="input" type="text" placeholder="Enter start date"/>
        <input className="input" type="text" placeholder="Enter end date"/>
        <button className="close-button" onClick={closeSidebar}>CLOSE</button>
      
      </div>
    </div>
  );
};

export default Sidebar;