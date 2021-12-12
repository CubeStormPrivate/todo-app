import * as React from 'react';

import { Field } from 'formik';


interface CheckboxProps {
    name: string,
    label: string,
    styles?: string,
    error?: string,
    touched?: boolean | undefined
}

export const Checkbox: React.FC<CheckboxProps> = ({ name, label, styles, error, touched }) => {
    const uniqid = Date.now().toString(36) + Math.random().toString(36);

    return (
        <div className="flex flex-col gap-3">
            {(error && touched) && (
                <div className="bg-red-400 text-xs font-bold text-gray-100 rounded-lg opacity-70 p-2"> {error} </div>
            )}

            <div className="flex items-center gap-3">
                <label
                    htmlFor={uniqid}
                    className="text-gray-100 font-bold tracking-wide cursor-pointer"
                > {label} </label>

                <Field
                    id={uniqid}
                    type="checkbox"
                    name={name}
                    className={`w-4 h-4 text-green-500 rounded-full border-transparent focus:border-transparent outline-none focus:outline-none focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-0 cursor-pointer ${styles}`}
                    onFocus={event => event.target.placeholder = ''}
                    onBlur={event => event.target.placeholder = name}
                />
            </div>
        </div>
    );
}
