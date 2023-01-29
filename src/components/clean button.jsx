import React from "react";
import './styles/clean button.css';

 export const CleanButton = (props) => {
    return (
        <div className='clean_button'
        onClick={() => props.restart(props.children)}>
            {props.children}
        </div>
    );
 }