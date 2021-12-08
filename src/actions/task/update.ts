import { TYPES } from './types';


interface updateProps {
    id: number,
    name: string,
    date: string,
    isImportant: boolean
}

export const store = (task: updateProps): Object => ({
    type: TYPES.UPDATE,
    payload: {
        id: task.id,
        name: task.name,
        date: task.date,
        isImportant: task.isImportant
    }
});