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
  //stan wewnętrzny, zewnętrzny jest z APP stan aplikacji - stan na kalendarzu
  //zmiany są widocznie na GRID dopieor jak klikniemy SAVE. A Grid powinien o tym wiedzieć w trakcie eydcji
  // trzeba te edycje wyciagnac do App
  // jeśki Sidebar jest OPEN to chcemy uyć edited, a jak nie jest OPen to zwykłych
  //wyciągamy isOpen do App'a
  //będzie duo propów do Sidebar - 7 wystarczy (teraz jest 14)

  // const closeSidebar = () => {
  //   setIsOpen(false);
  // };

  return (
    <>
      <button
        className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] absolute m-[100] px-5 py-[15px] rounded-[10px] border-0 right-[100px] 
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
        <InputDate value={startNumber} onChange={setStartNumber} />
        <InputDate value={endNumber} onChange={setEndNumber} />
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
      </div>
    </>
  );
}
