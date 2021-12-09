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
        <div className="flex gap-2">
            <label htmlFor={uniqid}> {name} </label>

            <input
                id={uniqid}
                type="checkbox"
                value={value}
                className={`bg-gray-500 border-none ${styles}`}
                onChange={event => setValue(event.target.checked)}
            />
        </div>
    );
}