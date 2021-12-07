import React from 'react';
import '../css/App.css';
import { Button } from './inc/Button';
import { TaskList } from './TaskList';

export const App = () => {
    return (
        <div className="min-h-screen flex justify-center bg-gray-600 p-12">
            <div className="w-full max-w-xl border-2 border-gray-200">
                <header className="w-full flex justify-between p-8">
                    <h1 className="text-3xl text-gray-200 font-bold">Todo Lista</h1>

                    <Button
                        text="Dodaj Zadanie"
                        styles="bg-red-400 text-gray-200"
                        handler={() => console.log('Clicked!')}
                    />
                </header>

                <TaskList />
            </div>
        </div>
    );
}