import React from "react";
import '../components/styles/button.css';

export function Button(props) {

    const isOperator = value => {
        return isNaN(value) && (value != '.') && (value != '=');
    };

    return (
        <div className={`calculator_button ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}>
            {props.children}
        </div>
    );
}