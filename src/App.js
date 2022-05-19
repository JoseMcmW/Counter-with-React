import React, {useState} from 'react'
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  let countStart = 0;

  return (
    <div className="App">
      <div className='title'>
        <h1 className='title-2'>Counter</h1>
      </div>
      <div className='counterNumber'>{count}</div>
      <div className='buttons'>
        <button className='button' onClick={() => setCount(count + 1)}>Suma</button>
        <button className='button' onClick={() => setCount(count - 1)}>Resta</button>
        <button className='button' onClick={() => setCount(countStart)}>Reset</button>
      </div>
    </div>
  )
}

export default App;
