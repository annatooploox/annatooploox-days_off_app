import { Dispatch, SetStateAction, useState } from 'react';

import { InputDate } from './inputDate';
import { OverwriteCheckbox } from './overwriteCheckbox';
import { VacationTypeDropdown } from './vacationTypeDropdown';

import { Range } from '@/src/models/range';

export function Sidebar({
  newRange,
  setNewRange,
  handleSave,
  handleCancel,
  isOpen,
  openSidebar,
  overwrite,
  setOverwrite,
}: {
  newRange: Range;
  setNewRange: Dispatch<SetStateAction<Range>>;
  handleCancel: () => void;
  handleSave: () => void;
  isOpen: boolean;
  openSidebar: () => void;
  overwrite: boolean;
  setOverwrite: (value: boolean) => void;
}) {
  const [errorMessage, setErrorMessage] = useState('');

  const validateEndDate = () => {
    if (newRange.end < newRange.start) {
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
        <InputDate
          value={newRange.start}
          onChange={(newValue) => {
            setNewRange((newRange) => ({ ...newRange, start: newValue }));
          }}
        />
        <InputDate
          value={newRange.end}
          onChange={(newValue) => {
            setNewRange((newRange) => ({ ...newRange, end: newValue }));
            validateEndDate();
          }}
        />
        <VacationTypeDropdown
          value={newRange.type}
          onChange={(newValue) => {
            setNewRange((newRange) => ({ ...newRange, type: newValue }));
          }}
        />
        <OverwriteCheckbox overwrite={overwrite} setOverwrite={setOverwrite} />
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
