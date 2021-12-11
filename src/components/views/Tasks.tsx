import * as React from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { RootState } from '../../store/store';
import { Header } from '../Header';

import { Button } from '../inc/Button';
import { Navigation } from '../Navigation';
import { SingleTask } from '../SingleTask';


interface TaskType {
    id: number,
    name: string,
    date: string,
    isImportant: boolean
}

export const Tasks: React.FC = () => {
    const tasks = useSelector((state: RootState) => state.tasks);

    const navigation = useNavigate();

    const TasksComponent = tasks.tasks.map((task: TaskType, i) => (
        <SingleTask key={i} {...task} />
    ));


    return (
        <div className="w-full h-full flex flex-col">
            <Header title="Lista zadań" />

            <main className="w-full px-8 flex flex-col flex-1 gap-2 overflow-y-scroll">
                {TasksComponent}
            </main>

            <Navigation>
                <Button
                    title="Dodaj Zadanie"
                    handler={() => navigation('/dodaj')}
                />
            </Navigation>
        </div>
    );
}