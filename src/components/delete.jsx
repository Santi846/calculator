import React from "react";
import './styles/delete.css';

 export const Delete = (props) => {
    return (
        <div className='delete_button'
        onClick={() => props.delete(props.children)}
        >
            {props.children}
        </div>
    );
 }