import * as React from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { RootState } from '../../store/store';

import { Button } from '../inc/Button';
import { SingleTask } from '../SingleTask';


interface TaskType {
    id: number,
    name: string,
    date: string,
    isImportant: boolean
}

interface TasksProps { }

export const Tasks: React.FC<TasksProps> = () => {
    const tasks = useSelector((state: RootState) => state.tasks);

    const navigation = useNavigate();

    const TasksComponent = tasks.tasks.map((task: TaskType, i) => (
        <SingleTask key={i} {...task} />
    ));


    return (
        <div className="w-full max-w-xl border-2 border-gray-200">
            <header className="w-full flex justify-between p-8">
                <h1 className="text-3xl text-gray-200 font-bold">Todo Lista</h1>

                <Button
                    text="Dodaj Zadanie"
                    styles="bg-green-500 text-gray-200"
                    handler={() => navigation('/dodaj')}
                />
            </header>

            <main className="w-full flex flex-col gap-5 px-8">
                {TasksComponent}
            </main>
        </div>
    );
}