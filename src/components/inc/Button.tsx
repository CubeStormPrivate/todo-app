import * as React from 'react';


interface ButtonProps {
    title: String,
    styles?: string,
    handler?: (param?: any) => void,
}

export const Button: React.FC<ButtonProps> = ({ title, styles = '', handler }) => {
    return (
        <button
            className={`${styles} font-bold uppercase rounded-md p-4`}
            onClick={handler}
        > {title} </button>
    );
}