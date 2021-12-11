import * as React from 'react';


interface HeaderProps {
    title: string,
    styles?: string
}

export const Header: React.FC<HeaderProps> = ({ title, styles = '' }) => {
    return (
        <header className={`w-full p-8 ${styles}`}>
            <h1 className="text-3xl text-gray-200 font-bold"> {title} </h1>
        </header>
    );
}