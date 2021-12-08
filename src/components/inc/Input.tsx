import * as React from 'react';


interface InputProps {
    type: string,
    name: string,
    styles?: string,
    value: string,
    setValue: (value: string) => void
}

export const Input: React.FC<InputProps> = ({ type, name, styles, value, setValue }) => {
    const uniqid = Date.now().toString(36) + Math.random().toString(36).substr(2);

    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={uniqid}> {name} </label>

            <input
                id={uniqid}
                type={type}
                value={value}
                className={`bg-gray-500 border-none ${styles}`}
                onChange={event => setValue(event.target.value)}
            />
        </div>
    );
}