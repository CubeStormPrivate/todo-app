import * as React from 'react';


interface ButtonProps {
    title: string,
    bgColor?: string,
    styles?: string,
    handler?: (param?: any) => void,
}

export const Button: React.FC<ButtonProps> = ({ title, bgColor = 'green', styles = '', handler }) => {
    return (
        <button
            className={`h-10 m-1 px-5 text-green-100 transition-colors duration-150 bg-${bgColor}-600 hover:bg-${bgColor}-700 active:bg-${bgColor}-800 rounded-lg focus:shadow-outline ${styles}`}
            onClick={handler}
        > {title} </button>
    );
}