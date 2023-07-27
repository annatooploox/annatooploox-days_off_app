import { useState } from 'react';

import Grid, { VacationType } from './grid';
import Sidebar from './sidebar';

function App() {
  //stan zewnętrzny dla sidebar
  const [startNumber, setStartNumber] = useState(1);
  const [endNumber, setEndNumber] = useState(1);
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
