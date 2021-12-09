import * as React from 'react';

import { useState } from 'react';
import { useNavigate } from 'react-router';
import { create } from '../../reducers/task';
import { store } from '../../store/store';

import { Button } from '../inc/Button';
import { Checkbox } from '../inc/Checkbox';
import { Input } from '../inc/Input';


export const Create: React.FC = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [isImportant, setIsImportant] = useState(false);

    const navigation = useNavigate();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const id = Date.now().toString(36) + Math.random().toString(36).substr(2);;

        store.dispatch(create({ id, name, date, isImportant }));

        navigation('/');
    }


    return (
        <div className="w-full max-w-xl border-2 border-gray-200">
            <header className="w-full flex justify-between p-8">
                <h1 className="text-3xl text-gray-200 font-bold">Dodaj zadanie</h1>
            </header>

            <main className="w-full flex flex-col gap-5 px-8">
                <form
                    className="flex flex-col gap-8"
                    onSubmit={event => handleSubmit(event)}
                >
                    <Input
                        type="text"
                        name="Nazwa zadania"
                        styles={''}
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
                        name="Ważne"
                        styles={''}
                        value={String(isImportant)}
                        setValue={setIsImportant}
                    />

                    <div className="w-full flex justify-end gap-8">
                        <Button
                            text="Dodaj"
                            styles="bg-green-500 text-gray-100 text-xs"
                        />

                        <Button
                            text="Wstecz"
                            styles="bg-yellow-500 text-black text-xs text-red"
                            handler={() => navigation('/')}
                        />
                    </div>
                </form>
            </main>
        </div>
    );
}