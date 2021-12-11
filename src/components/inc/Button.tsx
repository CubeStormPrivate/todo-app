import * as React from 'react';


interface ButtonProps {
    text: String,
    styles: string | null
    handler?: (param?: any) => void,
}

export const Button: React.FC<ButtonProps> = ({ text, styles, handler }) => {
    return (
        <button
            className={`${styles} font-bold uppercase rounded-md p-4`}
            onClick={handler}
        > {text} </button>
    );
}