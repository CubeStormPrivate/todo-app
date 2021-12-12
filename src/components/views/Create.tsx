import * as React from 'react';

import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';

import { create } from '../../reducers/task';
import { store } from '../../store/store';
import { TaskSchema } from '../../validation/TaskSchema';

import { Form, Formik } from 'formik';
import { Header } from '../Header';
import { Button } from '../inc/Button';
import { Checkbox } from '../inc/Checkbox';
import { Input } from '../inc/Input';
import { Navigation } from '../Navigation';
import { FormSubmitButton } from '../inc/FormSubmitButton';


export const Create: React.FC = () => {
    const inputNameRef = useRef<HTMLInputElement>(null);
    const navigation = useNavigate();

    const handleSubmit = ({ name, date, isImportant }) => {
        store.dispatch(create({
            id: Date.now().toString(36) + Math.random().toString(36),
            name,
            date,
            isImportant
        }));

        navigation('/');
    }

    useEffect(() => {
        inputNameRef.current && inputNameRef.current.focus();
    }, []);

    const now = new Date();
    const day = ("0" + now.getDate()).slice(-2);
    const month = ("0" + (now.getMonth() + 1)).slice(-2);
    const date = now.getFullYear() + "-" + (month) + "-" + (day);

    const initialValues = { name: '', date: date, isImportant: false };


    return (
        <div className="w-full h-full flex flex-col justify-start">
            <Header title="Dodaj zadanie" />

            <Formik
                initialValues={initialValues}
                validationSchema={TaskSchema}
                onSubmit={(values, actions) => {
                    handleSubmit(values);
                    actions.setSubmitting(false);
                }}
            >
                {({ errors, touched }) => (
                    <>
                        <main className="w-full px-8 flex-1">
                            <Form className="flex flex-col gap-8">
                                <Input
                                    type="text"
                                    name="name"
                                    placeholder="Nazwa zadania"
                                    error={errors.name}
                                    touched={touched.name}
                                />

                                <Input
                                    type="date"
                                    name="date"
                                    placeholder="Termin zadania"
                                    error={errors.date}
                                    touched={touched.date}
                                />

                                <Checkbox
                                    name="isImportant"
                                    label="Priorytet"
                                    styles={''}
                                    error={errors.isImportant}
                                    touched={touched.isImportant}
                                />
                            </Form>
                        </main>

                        <Navigation>
                            <Button
                                title="Wstecz"
                                bgColor="yellow"
                                handler={() => navigation('/')}
                            />

                            <FormSubmitButton>
                                <Button
                                    title="Stwórz"
                                    bgColor="green"
                                    styles="bg-green-500 text-gray-200"
                                />
                            </FormSubmitButton>
                        </Navigation>
                    </>
                )}
            </Formik>
        </div>
    );
}