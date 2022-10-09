
import { useState } from 'react';
import './App.css';
import CounterButtonsContainer from './components/CounterButtonsContainer';
import CounterHolder from './components/CounterHolder';

function App() {
  const [counter, setCounter] = useState({
    basic: 0,
    smart: 0,
    dangerous: 0
  });
  const [counterType, setCounterType] = useState('basic');
  
  function handleCounting(amount){
    setCounter(state => {
      return {...state, [counterType]: state[counterType]+amount}
    })
  }
  
  function handleReset(){
    setCounter({
      basic: 0,
      smart: 0,
      dangerous: 0
    })
  }

  return (
    <div className="container">
      <CounterHolder counter={counter} />
      <CounterButtonsContainer 
          counterType={counterType} 
          setCounterType={setCounterType}
          handleCounting={handleCounting}
          handleReset={handleReset}
      />
    </div>
  );
}

export default App;
