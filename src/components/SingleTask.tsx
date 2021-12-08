import * as React from 'react';

import { Button } from './inc/Button';


interface SingleTaskProps {
    id: number,
    name: string,
    date: string,
    isImportant: boolean
}

export const SingleTask: React.FC<SingleTaskProps> = ({ name, date, isImportant }) => {
    return (
        <div className={`w-full flex justify-between items-center gap-8 bg-gray-500 p-4 ${isImportant && 'border-l-4 border-red-400'}`}>
            <div className="flex flex-col">
                <span className="text-gray-200 font-bold uppercase"> {name} </span>
                <span className="text-gray-200 text-xs uppercase"> {date} </span>
            </div>

            <Button
                text="X"
                styles="text-red-400"
                handler={() => console.log('Removing')}
            />
        </div>
    );
}