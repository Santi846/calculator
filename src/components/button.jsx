import React from "react";
import '../components/styles/button.css';
// import { useState } from "react";

export function Button(props) {
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
        // const [operation,setOperation]=useState([props.children]);
        // const initialOperation = [
        //     { id: 0, operator: props.children}
        //   ];
          
        // const [operator, setOperator] = useState(initialOperation);

        // const updateOperator = () => {
        //     const updateOperator = operator.map((operator) => {
        //       // If id equals 2 replace object
        //       if (operator.id != 0) {
        //         return operator;
        //       }
        
        //       // Otherwise return object
        //       return operator;
        //     });
        
        //     setData(updateOperator);
        //   };
        const [numberClick, setNumClicks ] = useState(0);

        const manageOperatorClicks = () => {
            setNumClicks(numberClick);
                if (numberClick>1) {
                    alert('No bro');
            } else {
                    alert('efe');
            }

  };

        return (
            <button className='calculator_button operator'
            // {`calculator_button ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
             onClick={manageOperator
                //  () => countClicks(props.children)
                 
                // () => props.manageClick(props.children)

                
            }
            >
                {/* {props.children} */}
                
            </button>
            
        );
    }

    return (
        <button className='calculator_button'
        // {`calculator_button ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
         onClick={() => props.manageClick(props.children)}
        >
            {props.children}
        </button>
    );

}