import { useState } from 'react';
import './App.css';

function App() {

  let [Counter, setCounter] = useState(15)

  //let Counter = 15;

  const addValue = () => {
    // console.log("value added", Math.random());   // just for checking it is working or not {check inside inspect console}
    console.log("Clicked", Counter);
    Counter = Counter + 1;
    setCounter(Counter)
  }

  const subValue = () => {
    console.log("Clicked", Counter);
    Counter = Counter - 1;
    setCounter(Counter)
  }


  return (
     <div className="App">
      <header className="App-header">
        <h1>First React Project</h1>
        <h3>Counter Value: {Counter}</h3>

        <button onClick={addValue}>Add Value:</button>
        <button onClick={subValue}>Remove Value:</button>
      </header>
    </div>
  );
}

export default App;
