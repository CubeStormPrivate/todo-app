import * as React from 'react';


interface InputProps {
    type: string,
    name: string,
    refProp?: React.RefObject<HTMLInputElement>,
    styles?: string,
    value: string,
    setValue: (value: string) => void
}

export const Input: React.FC<InputProps> = ({ type, name, refProp, styles, value, setValue }) => {
    return (
        <div className="flex flex-col gap-2">
            <input
                type={type}
                value={value}
                ref={refProp}
                placeholder={name}
                className={`text-gray-100 font-bold tracking-wide placeholder-opacity-50 placeholder-gray-100 bg-transparent border-0 border-b-2 border-gray-200 focus:border-gray-200 focus:ring-0 p-1 ${styles}`}
                onChange={event => setValue(event.target.value)}
                onFocus={event => event.target.placeholder = ''}
                onBlur={event => event.target.placeholder = name}
            />
        </div>
    );
}