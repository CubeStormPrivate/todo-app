import * as React from 'react';


interface CheckboxProps {
    name: string,
    styles?: string,
    value: string,
    setValue: (value: boolean) => void
}

export const Checkbox: React.FC<CheckboxProps> = ({ name, styles, value, setValue }) => {
    const uniqid = Date.now().toString(36) + Math.random().toString(36).substr(2);

    return (
        <div className="flex items-center gap-3">
            <label
                htmlFor={uniqid}
                className="text-gray-100 font-bold tracking-wide cursor-pointer"
            > {name} </label>

            <input
                id={uniqid}
                type="checkbox"
                value={value}
                onChange={event => setValue(event.target.checked)}
                className={`w-4 h-4 text-green-500 rounded-full border-transparent focus:border-transparent outline-none focus:outline-none focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-0 cursor-pointer ${styles}`}
            />
        </div>
    );
}
