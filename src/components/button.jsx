import React from "react";
import '../components/styles/button.css';

export function Button(props) {

    const isOperator = value => {
        return isNaN(value) && (value !== '.') && (value !== '=');
    };

    if (isOperator(props.children)) {

            return (
                <button className='calculator_button operator'
                 onClick={() => props.manageClick(props.children)
                }
                clicking={() => props.manageClickOperator(props.children)}
                >   
                    {props.children} 
                </button>
                
            );    
            
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