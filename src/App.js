import './App.css';
import { Button } from './components/button.jsx';
import { Terminal } from './components/terminal.jsx';
import { CleanButton } from './components/clean button.jsx';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

   const [ input, setInput ] = useState(0);

   const addInput = value => {
    setInput(input + value);
   }

   const restart = value => {
    setInput(0);
   }

   const result = () => {
     setInput(evaluate(input));
   }


  return (
    <div className="App">
      <h1 className='title'>Web Calculator</h1>
      <div className='container_calculator'>
        <Terminal input={input} ></Terminal>
        <CleanButton restart={restart}>Clean</CleanButton>
        <div className='calculator_row'>
          <Button manageClick={addInput}>1</Button>
          <Button manageClick={addInput}>2</Button>
          <Button manageClick={addInput}>3</Button>
          <Button manageClick={addInput}>+</Button>
        </div>
        <div className='calculator_row'>
        <Button manageClick={addInput}>4</Button>
        <Button manageClick={addInput}>5</Button>
        <Button manageClick={addInput}>6</Button>
        <Button manageClick={addInput}>-</Button>
        </div>
        <div className='calculator_row'>
        <Button manageClick={addInput}>7</Button>
        <Button manageClick={addInput}>8</Button>
        <Button manageClick={addInput}>9</Button>
        <Button manageClick={addInput}>*</Button>
        </div>
        <div className='calculator_row'>
        <Button manageClick={addInput}>=</Button>
        <Button manageClick={addInput}>0</Button>
        <Button manageClick={addInput}>.</Button>
        <Button manageClick={addInput}>/</Button>
        </div>
        <div className='calculator_row'></div>
        
      </div>
    </div>
  );
}

export default App;
