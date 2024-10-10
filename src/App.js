import './App.css';
import { useState } from 'react';
import img from './img/icream.png';

function App() {
  let [count, setCount] = useState(0);

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("You can't have negative ice cream!");
    }
  };

  return (
    <div className='container'>
      <h1>ICE CREAM COUNT</h1>
      <p className="count-text">{count}</p> 
      <div className="App" style={{ backgroundImage: `url(${img})`, opacity: 0.8 }}>
        <div className="middle-content">
          
        </div>
      </div>
      <div className="button-container">
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={handleDecrease}>Decrease</button>
          </div>
    </div>
  );
}

export default App;
