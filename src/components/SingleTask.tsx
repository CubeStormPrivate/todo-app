import * as React from 'react';

import { useState } from 'react';

import { faTimes, faPencilAlt, faCheck, faExclamation } from '@fortawesome/free-solid-svg-icons';
import { remove, updateIsImportant, update } from '../reducers/task';
import { store } from '../store/store';
import { TaskSchema } from '../validation/TaskSchema';

import { Form, Formik } from 'formik';
import { IconButton } from './inc/IconButton';
import { Input } from './inc/Input';
import { FormSubmitButton } from './inc/FormSubmitButton';


interface SingleTaskProps {
    id: number,
    name: string,
    date: string,
    isImportant: boolean
}

export const SingleTask: React.FC<SingleTaskProps> = ({ id, name, date, isImportant }) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleRemoveTask = () => store.dispatch(remove({ id }));
    const handleUpdateIsImportant = () => store.dispatch(updateIsImportant({ id }));

    const handleSubmit = ({ name, date }) => {
        setIsEditing(false);
        store.dispatch(update({ id, name, date }));
    }


    return (
        <div
            className={`w-full flex justify-between items-center gap-8 p-3 ${isImportant && 'border-l-4 border-red-400'} glass-2`}
        >
            <Formik
                initialValues={{ name: name, date: date, isImportant: isImportant }}
                validationSchema={TaskSchema}
                onSubmit={(values, actions) => {
                    handleSubmit(values);
                    actions.setSubmitting(false);
                }}
            >
                {({ errors, touched }) => (
                    <>
                        {isEditing ? (
                            <div className="flex flex-col gap-2">
                                <Form className="flex flex-col gap-4 md:gap-6 lg:gap-8">
                                    <Input
                                        type="text"
                                        name="name"
                                        placeholder="Nazwa zadania"
                                        styles="text-sm w-44 md:w-unset"
                                        error={errors.name}
                                        touched={touched.name}
                                    />

                                    <Input
                                        type="date"
                                        name="date"
                                        placeholder="Termin zadania"
                                        styles="text-sm w-44 md:w-unset"
                                        error={errors.date}
                                        touched={touched.date}
                                    />
                                </Form>

                            </div>
                        ) : (
                            <div className="flex flex-col">
                                <span className="text-gray-200 md:text-lg"> {name} </span>
                                <span className="text-gray-200 md:font-bold text-xs"> {date} </span>
                            </div>
                        )}

                        <div className="flex justify-center items-center gap-1">
                            {isEditing ? (
                                <>
                                    <IconButton
                                        icon={faExclamation}
                                        styles={'text-yellow-300'}
                                        handler={handleUpdateIsImportant}
                                    />

                                    <FormSubmitButton>
                                        <IconButton
                                            icon={faCheck}
                                            styles={'text-green-500'}
                                        />
                                    </FormSubmitButton>
                                </>
                            ) : (
                                <>
                                    <IconButton
                                        icon={faPencilAlt}
                                        styles={'text-yellow-300'}
                                        handler={() => setIsEditing(true)}
                                    />

                                    <IconButton
                                        icon={faTimes}
                                        styles={'text-red-500'}
                                        handler={handleRemoveTask}
                                    />
                                </>
                            )}
                        </div>
                    </>
                )}
            </Formik>
        </div>
    );
}