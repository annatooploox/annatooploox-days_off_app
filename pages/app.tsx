import { useState } from 'react';

import Grid, { VacationType } from './grid';
import Sidebar from './sidebar';

function App() {
  const [startNumber, setStartNumber] = useState(11);
  const [endNumber, setEndNumber] = useState(19);
  const [vacationType, setVacationType] = useState<VacationType>('vacation');

  return (
    <div className="App">
      <Grid startNumber={startNumber} endNumber={endNumber} vacationType={vacationType} />
      <Sidebar
        startNumber={startNumber}
        endNumber={endNumber}
        setStartNumber={setStartNumber}
        setEndNumber={setEndNumber}
        vacationType={vacationType}
        setVacationType={setVacationType}
      />
    </div>
  );
}

export default App;
