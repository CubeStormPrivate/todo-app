import { TYPES } from './types';


interface deleteProps {
    id: number
}

export const store = (task: deleteProps): Object => ({
    type: TYPES.DELETE,
    payload: {
        id: task.id
    }
});