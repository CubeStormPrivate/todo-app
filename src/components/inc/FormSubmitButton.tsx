import * as React from 'react';

import { useFormikContext } from 'formik';


interface FormSubmitButtonProps {
    children: React.ReactNode
}

export const FormSubmitButton: React.FC<FormSubmitButtonProps> = ({ children }) => {
    const { submitForm } = useFormikContext();

    return (
        <div onClick={submitForm}>
            {children}
        </div>
    );
}