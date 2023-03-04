import './App.css';
import React, { useState } from 'react';
import Counter from './components/Counter';

function App() {

  const [showCounter, setShowCounter] = useState(true)

  const handleShow =()=>{
    setShowCounter(prev=>!prev)
  }
  return (
    <div className="App">
      <h1>Hello world</h1>
      <button onClick={handleShow}>{showCounter ? 'Hide counter' : 'Show counter'}</button>
      {showCounter && <Counter />}
    </div>
  );
}

export default App;
