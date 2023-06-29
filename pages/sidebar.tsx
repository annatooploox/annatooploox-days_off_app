import React, { useState } from 'react';
import InputDate from './inputdate';

export default function Sidebar({ startNumber, endNumber, setStartNumber, setEndNumber }: {
    startNumber: number,
    endNumber: number,
    setStartNumber: (value: number) => void,
    setEndNumber: (value: number) => void,

}) {
    const [isOpen, setIsOpen] = useState(false);

    const openSidebar = () => {
        setIsOpen(!isOpen);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };

    return (
        <>
            <button className="button" onClick={openSidebar}>BOOK DAYS OFF</button>
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-header">SET NEW DAYS OFF</div>
                <InputDate value={startNumber} onChange={setStartNumber} />
                <InputDate value={endNumber} onChange={setEndNumber} />
                <button className="close-button" onClick={closeSidebar}>CLOSE</button>
            </div>
        </>
    );
}