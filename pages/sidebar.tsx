import React, { useState } from 'react';
import InputDate from './inputdate';

export default function Sidebar() {
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
                <InputDate />
                <InputDate />
                <button className="close-button" onClick={closeSidebar}>CLOSE</button>
            </div>
        </div>
    );
}