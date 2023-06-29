
import React, { useState } from 'react';
import Grid from './grid';
import Sidebar from './sidebar';

function App() {

  const [startNumber, setStartNumber] = useState(11);
  const [endNumber, setEndNumber] = useState(19);



  return (
    <div className="App">
      <Grid startNumber={startNumber} endNumber={endNumber} />
      <Sidebar startNumber={startNumber} endNumber={endNumber} setStartNumber={setStartNumber} setEndNumber={setEndNumber} />
    </div>
  );
}

export default App;