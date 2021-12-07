import * as React from 'react';

import { Task } from './Task';


const TASKS = [
    { id: 0, name: 'Zrób śniadanie', date: 'Wtorek', isClose: true },
    { id: 1, name: 'Zrób obiad', date: 'Środa', isClose: false },
    { id: 2, name: 'Zrób kolacje', date: 'Czwartek', isClose: false },
    { id: 3, name: 'Zrób podwieczorek', date: 'Piątek', isClose: true },
]

interface TaskListProps {

}

export const TaskList: React.FC<TaskListProps> = () => {
    const TasksComponent = TASKS.map(task => (
        <Task key={task.id} {...task} />
    ));


    return (
        <main className="w-full flex flex-col gap-5 px-8">
            {TasksComponent}
        </main>
    );
}