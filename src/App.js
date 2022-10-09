import './App.css';
import CounterButtonsContainer from './components/CounterButtonsContainer';
import CounterHolder from './components/CounterHolder';

function App() {
  return (
    <div className="container">
      <CounterHolder />
      <CounterButtonsContainer />
    </div>
  );
}

export default App;
