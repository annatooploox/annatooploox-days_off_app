import { useState } from 'react';

import { VacationType } from './grid';
import InputDate from './inputdate';
import VacationTypedropdown from './vacationtypedropdown';

export default function Sidebar({
  startNumber,
  endNumber,
  setStartNumber,
  setEndNumber,
  vacationType,
  setVacationType,
}: {
  startNumber: number;
  endNumber: number;
  setStartNumber: (value: number) => void;
  setEndNumber: (value: number) => void;
  vacationType: VacationType;
  setVacationType: (value: VacationType) => void;
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
      <button
        className="bg-mediumgrey hover:bg-blue-500 text-blue-700 font-semibold 
        hover:text-white py-2 px-4 border border-blue-500 
        cursor-pointer inline-block 
        text-sm leading-5 text-center transition-all duration-200 
        align-baseline whitespace-nowrap touch-manipulation 
        absolute m-[100] px-5 py-[15px] rounded-[10px] border-0 right-[100px] 
        top-[100px]"
        onClick={openSidebar}
      >
        BOOK DAYS OFF
      </button>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div
          className="bg-[#f0f0f0] text-xl font-[bold] text-[#333] text-center 
        whitespace-nowrap overflow-hidden 
        text-ellipsis m-1 p-10 border-b-[#ccc] border-b border-solid"
        >
          SET NEW DAYS OFF
        </div>
        <InputDate value={startNumber} onChange={setStartNumber} />
        <InputDate value={endNumber} onChange={setEndNumber} />
        <VacationTypedropdown value={vacationType} onChange={setVacationType} />
        <button
          className="bg-mediumgrey hover:bg-blue-500 text-blue-700 font-semibold 
          hover:text-white py-2 px-4 border border-blue-500 
          cursor-pointer inline-block 
          text-sm font-extrabold leading-5 text-center transition-all duration-200 
          align-baseline whitespace-nowrap touch-manipulation 
          absolute m-[100] px-5 py-[15px] rounded-[10px] border-0 right-[60px] 
          top-[800px]"
          onClick={closeSidebar}
        >
          CLOSE
        </button>
        <button
          className="bg-mediumgrey hover:bg-blue-500 text-blue-700 font-semibold 
          hover:text-white py-2 px-4 border border-blue-500 
          cursor-pointer inline-block 
          text-sm font-extrabold leading-5 text-center transition-all duration-200 
          align-baseline whitespace-nowrap touch-manipulation 
          absolute m-[100] px-5 py-[15px] rounded-[10px] border-0 right-[150px] 
          top-[800px]"
          onClick={closeSidebar}
        >
          SAVE
        </button>
      </div>
    </>
  );
}
