import './App.css';
import { Button } from './components/button.jsx';
import { Terminal } from './components/terminal.jsx';
import { CleanButton } from './components/clean button.jsx';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import { Delete } from './components/delete';

function App() {

   const [ input, setInput ] = useState('');

   const addInput = value => {
    setInput(input + value);
   };

   const deleteInput = value => {  
      setInput(input.slice(0,-1));
   };

   const restart = value => {
    setInput('');
   };

   const result = () => {
    if (input) {
      setInput(evaluate(input));
    }
    else {
      alert('Por favor ingrese valores para realizar los calculos, gracias');
    }
   };

  //  state = {
  //   count: 0
  // };

  // handleClick = e => {
  //   const count = this.state.count;
  //   this.setState({ count: count + 1 });
  // };
  const [numberOperator, setNumCOperators ] = useState(0);

  const manageOperatorClick = () => {
    setNumCOperators(numberOperator + 1);
   console.log('Counting...');
 };
  

  return (
    <div className="App">
      <h1 className='title'>Web Calculator</h1>
      <div className='container_calculator'>
        <Terminal input={input} ></Terminal>
        <div className='calculator_row'>
        <CleanButton restart={restart}>Clean</CleanButton>
        <Delete delete={deleteInput}>Delete</Delete>
        </div>
        <div className='calculator_row'>
          <Button manageClick={addInput}>1</Button>
          <Button manageClick={addInput}>2</Button>
          <Button manageClick={addInput}>3</Button>
          <Button manageClick={addInput} operation={manageOperatorClick}>+</Button>
        </div>
        <div className='calculator_row'>
        <Button manageClick={addInput}>4</Button>
        <Button manageClick={addInput}>5</Button>
        <Button manageClick={addInput}>6</Button>
        <Button manageClick={addInput} operation={manageOperatorClick}>-</Button>
        </div>
        <div className='calculator_row'>
        <Button manageClick={addInput}>7</Button>
        <Button manageClick={addInput}>8</Button>
        <Button manageClick={addInput}>9</Button>
        <Button manageClick={addInput} operation={manageOperatorClick}>*</Button>
        </div>
        <div className='calculator_row'>
        <Button manageClick={result}>=</Button>
        <Button manageClick={addInput}>0</Button>
        <Button manageClick={addInput}>.</Button>
        <Button manageClick={addInput} operation={manageOperatorClick}>/</Button>
        </div>
        <div className='calculator_row'></div>
        
      </div>
    </div>
  );
}

export default App;
