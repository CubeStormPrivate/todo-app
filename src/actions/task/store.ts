import { TYPES } from './types';


interface storeProps {
    id: number,
    name: string,
    date: string,
    isImportant: boolean
}

export const store = (task: storeProps): Object => ({
    type: TYPES.STORE,
    payload: {
        id: task.id,
        name: task.name,
        date: task.date,
        isImportant: task.isImportant
    }
});