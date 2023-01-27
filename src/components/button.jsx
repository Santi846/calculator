import React from "react";
import '../components/styles/button.css';
//  import { useState } from "react";

export function Button({props, manageOperatorClick}) {
    // const [ input, setValue ] = useState('');

    // const setTerminalValue = value => {
    //     setValue(input = '+' | '-' | '*' | '/');
    //    };

   

    const isOperator = value => {
        return isNaN(value) && (value !== '.') && (value !== '=');
    };

    // const [operation,setOperation]=useState([props.children,isOperator,props.children]);
    

//TODO: *Put the inputs in an array and if the second position is an operator and the third too, replace it*
    if (isOperator(props.children)) {
        // function Counter() {
        //     // Declare a new state variable, which we'll call "count"
        //     const [count, setCount] = useState(0);
          
            // return (
            //     <button className='calculator_button operator'
            //     // {`calculator_button ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
            //      onClick=
            //         //  manageOperator
            //         //  () => countClicks(props.children)
            //         {() => setCount(count + 1)}
            //         //  () => props.manageClick(props.children)
    
                    
            
            //     >
            //         {props.children} 
                    
            //     </button>
                
            // );

            return (
                <button className='calculator_button operator'
                // {`calculator_button ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
                 onClick={
                    //  manageOperator
                    //  () => countClicks(props.children)
                    // {() => setCount(count + 1)}
                      () => props.manageClick(props.children)
    
                    
                    }
                    operation={manageOperatorClick}
                >
                    {props.children} 
                    
                </button>
                
            );
        //   }

        

  };

        
    

    return (
        <button className='calculator_button'
        // {`calculator_button ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
         onClick={() => props.manageClick(props.children)}
        >
            {props.children}
        </button>
    );

}