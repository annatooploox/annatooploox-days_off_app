import { useState } from 'react';

import Grid from './grid';
import Sidebar from './sidebar';

import { VacationType } from '@/src/models/vacationType';

function App() {
  //stan zewnętrzny dla sidebar

  const [isOpen, setIsOpen] = useState(false);

  const [startNumber, setStartNumber] = useState(1);
  const [endNumber, setEndNumber] = useState(1);
  const [vacationType, setVacationType] = useState<VacationType>('vacation');

  const openSidebar = () => {
    // te trzy zastępuję jednym obiektem - rangem
    //przechowywać muszę RANGE, które są ju ustalone, i te tymczasowy stan, gdy sidebar jest otwarty.
    setStartNumber(startNumber);
    setEndNumber(endNumber);
    setVacationType(vacationType);
    setIsOpen(true);
  };

  const handleSave = () => {
    setStartNumber(startNumber);
    setEndNumber(endNumber);
    setVacationType(vacationType);
    setIsOpen(false);
  };

  //ToDo ma się resetować, a nie czyścić danych.
  const handleCancel = () => {
    setStartNumber(0);
    setEndNumber(0);
    setVacationType('vacation');
    setIsOpen(false);
  };

  return (
    <div className="App">
      <Grid startNumber={startNumber} endNumber={endNumber} vacationType={vacationType} />
      <Sidebar
        openSidebar={openSidebar}
        startNumber={startNumber}
        endNumber={endNumber}
        setStartNumber={setStartNumber}
        setEndNumber={setEndNumber}
        vacationType={vacationType}
        setVacationType={setVacationType}
        isOpen={isOpen}
        handleSave={handleSave}
        handleCancel={handleCancel}
      />
    </div>
  );
}

export default App;
