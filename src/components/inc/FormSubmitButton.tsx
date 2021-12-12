import { useFormikContext } from 'formik';
import * as React from 'react';


interface FormSubmitButtonProps {
    title: string,
    bgColor?: string,
    styles?: string
}

export const FormSubmitButton: React.FC<FormSubmitButtonProps> = ({ title, bgColor = 'green', styles = '' }) => {
    const { submitForm } = useFormikContext();

    const handleSubmit = () => {
        submitForm();
    }


    return (
        <button
            className={`h-10 m-1 px-5 text-green-100 transition-colors duration-150 bg-${bgColor}-600 hover:bg-${bgColor}-700 active:bg-${bgColor}-800 rounded-lg focus:shadow-outline ${styles}`}
            onClick={handleSubmit}
        > {title} </button>
    );
}