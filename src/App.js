import './App.css';
import { Button } from './components/button.jsx';
import { Terminal } from './components/terminal.jsx';

function App() {
  return (
    <div className="App">
      <h1 className='title'>Web Calculator</h1>
      <div className='container_calculator'>
        <Terminal></Terminal>
        <div className='calculator_row'>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
        </div>
        <div className='calculator_row'>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>-</Button>
        </div>
        <div className='calculator_row'>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>*</Button>
        </div>
        <div className='calculator_row'>
        <Button>=</Button>
        <Button>0</Button>
        <Button>.</Button>
        <Button>/</Button>
        </div>
        <div className='calculator_row'></div>
        
      </div>
    </div>
  );
}

export default App;
