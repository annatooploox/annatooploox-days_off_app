import { useState } from 'react';

import InputDate from './inputdate';
import Overwrite_checkbox from './overwrite_checkbox';
import VacationTypedropdown from './vacationtypedropdown';

import { VacationType } from '@/src/models/vacationType';

export default function Sidebar({
  startNumber,
  endNumber,
  setStartNumber,
  setEndNumber,
  vacationType,
  setVacationType,
  handleSave,
  handleCancel,
  isOpen,
  openSidebar,
}: {
  startNumber: number;
  endNumber: number;
  setStartNumber: (value: number) => void;
  setEndNumber: (value: number) => void;
  vacationType: VacationType;
  setVacationType: (value: VacationType) => void;
  handleCancel: () => void;
  handleSave: () => void;
  isOpen: boolean;
  openSidebar: () => void;
}) {
  const [errorMessage, setErrorMessage] = useState('');

  const validateEndDate = () => {
    if (endNumber < startNumber) {
      setErrorMessage('End date is incorrect');
    } else {
      setErrorMessage('');
    }
  };

  return (
    <>
      <button
        className="bg-mediumgrey hover:bg-blue-500 text-blue-700 font-semibold
        hover:text-white py-2 px-4 border border-blue-500
        cursor-pointer inline-block
        text-sm font-extrabold leading-5 text-center transition-all duration-200
        align-baseline whitespace-nowrap touch-manipulation
        absolute m-[100] px-5 py-[15px] rounded-[10px] border-0 right-[150px]
        top-[500px]"
        onClick={openSidebar}
      >
        BOOK DAYS OFF
      </button>
      <div
        className={`sidebar ${
          isOpen
            ? 'bg-lightgrey w-[300px] h-full absolute translate-x-[0%] transition-transform duration-100 ease-[ease] right-0 top-0'
            : 'w-[300px] h-full absolute translate-x-full transition-transform duration-100 ease-[ease] right-0 top-0'
        } `}
      >
        <div
          className="bg-[#f0f0f0] text-xl font-[bold] text-[#333] text-center 
        whitespace-nowrap overflow-hidden 
        text-ellipsis m-1 p-10 border-b-[#ccc] border-b border-solid"
        >
          SET NEW DAYS OFF
        </div>
        <InputDate value={startNumber} onChange={setStartNumber} />
        <InputDate
          value={endNumber}
          onChange={(newValue) => {
            setEndNumber(newValue);
            validateEndDate();
          }}
        />
        <VacationTypedropdown value={vacationType} onChange={setVacationType} />
        <Overwrite_checkbox></Overwrite_checkbox>
        <button
          className="bg-mediumgrey hover:bg-blue-500 text-blue-700 font-semibold 
          hover:text-white py-2 px-4 border border-blue-500 
          cursor-pointer inline-block 
          text-sm font-extrabold leading-5 text-center transition-all duration-200 
          align-baseline whitespace-nowrap touch-manipulation 
          absolute m-[100] px-5 py-[15px] rounded-[10px] border-0 right-[60px] 
          top-[500px]"
          onClick={handleCancel}
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
          top-[500px]"
          onClick={handleSave}
        >
          SAVE
        </button>
        {errorMessage && (
          <div style={{ color: 'red', textAlign: 'center', fontFamily: 'OpenSans' }}>
            {errorMessage}
          </div>
        )}
      </div>
    </>
  );
}
