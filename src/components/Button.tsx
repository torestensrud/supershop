import React from 'react';

const ButtonInline = ({
    onClick, 
    type = 'button', 
    children
}: any) => {
    return (
        <button 
            className="button-inline"
            type={ type }
            onClick={ onClick } >
            { children }                
        </button>
    );
}

const Button = ({
    onClick, 
    className, 
    type = 'button', 
    children
}: any) => {
    return (
        <button 
            className="button-inline"
            type={ type }
            onClick={ onClick } >
            { children }                
        </button>
    );
}

export { 
    ButtonInline 
};