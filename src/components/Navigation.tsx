import * as React from 'react';


interface NavigationProps {
    children: React.ReactNode
}

export const Navigation: React.FC<NavigationProps> = ({ children }) => {
    return (
        <nav className="w-full flex flex-wrap justify-end gap-1">
            {children}
        </nav>
    );
}