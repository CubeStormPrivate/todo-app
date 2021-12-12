import * as React from 'react';

import { Field } from 'formik';


interface InputProps {
    type: string,
    name: string,
    placeholder?: string,
    styles?: string,
    error?: string,
    touched?: boolean | undefined
}

export const Input: React.FC<InputProps> = ({ type, name, placeholder = '', styles = '', error, touched }) => {
    return (
        <div className="flex flex-col gap-2">
            {(error && touched) && (
                <div className="bg-red-400 text-xs font-bold text-gray-100 rounded-lg opacity-70 p-2"> {error} </div>
            )}

            <Field
                type={type}
                name={name}
                placeholder={placeholder}
                className={`text-gray-100 font-bold tracking-wide placeholder-opacity-70 placeholder-gray-100 bg-transparent border-0 border-b-2 border-gray-200 focus:border-gray-200 focus:ring-0 p-1 ${styles}`}
                onFocus={event => event.target.placeholder = ''}
                onBlur={event => event.target.placeholder = name}
            />
        </div>
    );
}