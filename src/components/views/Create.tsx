import * as React from 'react';

import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';

import { create } from '../../reducers/task';
import { store } from '../../store/store';
import { Header } from '../Header';

import { Button } from '../inc/Button';
import { Checkbox } from '../inc/Checkbox';
import { Input } from '../inc/Input';
import { Navigation } from '../Navigation';


export const Create: React.FC = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [isImportant, setIsImportant] = useState(false);

    const inputNameRef = useRef<HTMLInputElement>(null);

    const navigation = useNavigate();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const id = Date.now().toString(36) + Math.random().toString(36).substr(2);;

        store.dispatch(create({ id, name, date, isImportant }));
        navigation('/');
    }

    useEffect(() => {
        inputNameRef.current && inputNameRef.current.focus();
    }, []);


    return (
        <div className="w-full h-full flex flex-col justify-start">
            <Header title="Dodaj zadanie" />

            <main className="w-full px-8 flex-1">
                <form
                    className="flex flex-col gap-8"
                    onSubmit={event => handleSubmit(event)}
                >
                    <Input
                        type="text"
                        name="Nazwa zadania"
                        styles={''}
                        refProp={inputNameRef}
                        value={name}
                        setValue={setName}
                    />

                    <Input
                        type="date"
                        name="Termin zadania"
                        styles={''}
                        value={date}
                        setValue={setDate}
                    />

                    <Checkbox
                        name="Priorytet"
                        styles={''}
                        value={String(isImportant)}
                        setValue={setIsImportant}
                    />
                </form>
            </main>

            <Navigation>
                <Button
                    title="Wstecz"
                    bgColor="yellow"
                    handler={() => navigation('/')}
                />

                <Button
                    title="Stwórz"
                    bgColor="green"
                    styles="bg-green-500 text-gray-200"
                    handler={event => handleSubmit(event)}
                />
            </Navigation>
        </div>
    );
}