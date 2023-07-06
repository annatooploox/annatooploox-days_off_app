import React, { useState } from 'react';
import InputDate from './inputdate';
import VacationTypedropdown from './vacationtypedropdown';

export default function Sidebar({ startNumber, endNumber, setStartNumber, setEndNumber, vacationType, setVacationType }: {
    startNumber: number,
    endNumber: number,
    setStartNumber: (value: number) => void,
    setEndNumber: (value: number) => void,
    vacationType: string,
    setVacationType: (value: string) => void

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
                <VacationTypedropdown value={vacationType} onChange={setVacationType} />
                <button className="close-button" onClick={closeSidebar}>CLOSE</button>
            </div>
        </>
    );
}