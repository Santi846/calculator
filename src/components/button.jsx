import React from "react";
import '../components/styles/button.css';


export function Button({props}) {

   

    const isOperator = value => {
        return isNaN(value) && (value !== '.') && (value !== '=');
    };

    
    

//TODO: *Put the inputs in an array and if the second position is an operator and the third too, replace it*
    if (isOperator(props.children)) {

            return (
                <button className='calculator_button operator'
                 onClick={() => props.manageClick(props.children)}
                >
                    {props.children} 
                </button>
                
            );    

  };

        
    

    return (
        <button className='calculator_button'
         onClick={() => props.manageClick(props.children)}
        >
            {props.children}
        </button>
    );

}