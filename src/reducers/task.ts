import { AnyAction } from 'redux';
import { createSlice } from '@reduxjs/toolkit'

interface TaskType {
    id: number,
    name: string,
    date: string,
    isImportant: boolean
}

const taskSlice = createSlice({
    name: 'task',
    initialState: [],
    reducers: {
        create: (state: TaskType[], action) => {
            state.push(action.payload);
        },
        remove: (state: TaskType[], action: AnyAction) => {
            state.filter(task => task.id !== action.payload.id)
        }
    }
});

export const { create, remove } = taskSlice.actions;
export default taskSlice.reducer;



// import { TYPES } from '../actions/task/types';

// export const taskReducer = (state: TaskType[] = [], action: AnyAction) => {
//     switch (action.type) {
//         case TYPES.STORE:
//             return [state, ...action.payload];

//         case TYPES.DELETE:
//             return state.filter((task: TaskType) => task.id !== action.payload.id)

//         default:
//             console.error('Ooops! Something went wrong!');
//     }
// }