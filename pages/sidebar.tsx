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
  //stan wewnętrzny, zewnętrzny jest z APP stan aplikacji - stan na kalendarzu
  //zmiany są widocznie na GRID dopieor jak klikniemy SAVE. A Grid powinien o tym wiedzieć w trakcie eydcji
  // trzeba te edycje wyciagnac do App
  // jeśki Sidebar jest OPEN to chcemy uyć edited, a jak nie jest OPen to zwykłych
  //wyciągamy isOpen do App'a
  //będzie duo propów do Sidebar - 7 wystarczy (teraz jest 14)
  const [isOpen, setIsOpen] = useState(false);
  const [editedStartNumber, setEditedStartNumber] = useState(startNumber);
  const [editedEndNumber, setEditedEndNumber] = useState(endNumber);
  const [editedVacationType, setEditedVacationType] = useState(vacationType);

  const openSidebar = () => {
    setEditedStartNumber(startNumber);
    setEditedEndNumber(endNumber);
    setEditedVacationType(vacationType);
    setIsOpen(true);
  };

  // const closeSidebar = () => {
  //   setIsOpen(false);
  // };

  const handleSave = () => {
    setStartNumber(editedStartNumber);
    setEndNumber(editedEndNumber);
    setVacationType(editedVacationType);
    setIsOpen(false);
  };

  const handleCancel = () => {
    console.log('cancel', { startNumber, endNumber });
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
        <InputDate value={editedStartNumber} onChange={setEditedStartNumber} />
        <InputDate value={editedEndNumber} onChange={setEditedEndNumber} />
        <VacationTypedropdown value={editedVacationType} onChange={setEditedVacationType} />
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
      </div>
    </>
  );
}
