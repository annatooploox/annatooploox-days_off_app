import { useState } from 'react';

import Grid, { VacationType } from './grid';
import Sidebar from './sidebar';

function App() {
  //stan zewnętrzny dla sidebar
  // const [startNumber, setStartNumber] = useState(1);
  // const [endNumber, setEndNumber] = useState(1);
  // const [vacationType, setVacationType] = useState<VacationType>('vacation');

  const [isOpen, setIsOpen] = useState(false);

  const [startNumber, setStartNumber] = useState(1);
  const [endNumber, setEndNumber] = useState(1);
  const [vacationType, setVacationType] = useState<VacationType>('vacation');

  const openSidebar = () => {
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
