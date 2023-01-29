import React from "react";
import '../components/styles/button.css';


export function Button(props) {

    const isOperator = value => {
        return isNaN(value) && (value !== '.') && (value !== '=');
    };

    // const operation =[
    //     {
    //         numberOne: input.className='',
    //         operator: 'operator',
    //         numbertwo:input.className=''
    //     },
    // ];

    return (

        <button
        className={`calculator_button ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
        onClick={() => props.manageClick(props.children)}>
          {props.children}
        </button>

    );

//     if (isOperator(props.children)) {

//             return (
//                 <button className='calculator_button operator'
//                  onClick={() => props.manageClick(props.children)}
//                 >
//                     {props.children} 
//                 </button>
                
//             );    

//   }
   
//         return (
//             <button className='calculator_button'
//              onClick={() => props.manageClick(props.children)}>
//                 {props.children}
//             </button>
//         );
    
    

};