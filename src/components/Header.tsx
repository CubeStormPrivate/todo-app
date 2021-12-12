import * as React from 'react';


interface HeaderProps {
    title: string
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <header className={`w-full mb-6 md:mb-8`}>
            <h1 className="text-3xl text-gray-100 font-bold text-right"> {title} </h1>
        </header>
    );
}