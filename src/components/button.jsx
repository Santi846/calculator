import React from "react";
import '../components/styles/button.css';
// import { useState } from "react";
// import { number } from "mathjs";


export function Button(props) {
   
//     const [numberClick, setNumClicks ] = useState(0);

//     const manageClickOperator = () => {
//      setNumClicks(numberClick + 1);
//      return numberClick;
//    };

    const isOperator = value => {
        return isNaN(value) && (value !== '.') && (value !== '=');
    };

    // const rejex = (/^([-+]? ?(\d+|\(\g<1>\))( ?[-+*\/] ?\g<1>)?)/$);

    // const isOperation = value => {
    //     return value == rejex;
    // };

    // const [operator, setOperatorValue ] = useState(isOperator);

    // const operation = () => {
    //     if ( numberClick > 1) {
    //         setOperatorValue(props.children=operator);   
    //     }
    //     else {
    //       alert('Por favor ingrese valores para realizar los calculos, gracias');
    //     }
    //    };

    // const operation =[
    //     {
    //         numberOne: input.className='',
    //         operator: 'operator',
    //         numbertwo:input.className=''
    //     },
    // ];

    // return (

    //     <button
    //     className={`calculator_button ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
    //     onClick={() => props.manageClick(props.children)}>
    //       {props.children}
    //     </button>

    // );

    if (isOperator(props.children)) {

        // const operator =[props.children];

        // for (let i = 0; i < operator.length; i++) {
        //     const element = array[i];
        //     if (element==props.children) {
                
        //     }
            
        // }
            return (
                <button className='calculator_button operator'
                 onClick={() => props.manageClick(props.children)
                    // ,
                    // manageClickOperator()
                    // ,
                    // operation()
                }
                clicking={() => props.manageClickOperator(props.children)}
                >   
                    {props.children} 
                </button>
                
            );    
            
            // const [ operator, setOperatorValue ] = useState(props.children);
  }
   
        else {
            return (
                <button className='calculator_button'
                 onClick={() => props.manageClick(props.children)}>
                    {props.children}
                </button>
            );
        }
        
        
       

};