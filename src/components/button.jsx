import React from "react";
import '../components/styles/button.css';

export function Button(props) {
    // const [ input, setValue ] = useState('');

    // const setTerminalValue = value => {
    //     setValue(input = '+' | '-' | '*' | '/');
    //    };

    const isOperator = value => {
        return isNaN(value) && (value !== '.') && (value !== '=') 
        //  && (value = (/^[+]|[-]|[*]|[/]$/))
        
        ;
    };
//TODO: *The operations must have 1 operator -> look at some calculators*
    if (isOperator(props.children)) {
        return (
            <button className='calculator_button operator'
            // {`calculator_button ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
             onClick={() => props.manageClick(props.children)}
            >
                {props.children}
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