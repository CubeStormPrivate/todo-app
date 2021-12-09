import { createSlice } from '@reduxjs/toolkit'


interface TaskType {
    id: number,
    name: string,
    date: string,
    isImportant: boolean
}

interface StateType {
    tasks: TaskType[]
}

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [
            { id: 0, name: 'Zrób śniadanie', date: '2021-12-09', isImportant: true }
        ]
    },
    reducers: {
        create: (state: StateType, action) => {
            state.tasks = [...state.tasks, action.payload];
        },
        remove: (state: StateType, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload.id);
        },
        updateIsImportant: (state: StateType, action) => {
            state.tasks = state.tasks.filter(task => {
                if (task.id === action.payload.id) {
                    task.isImportant = !task.isImportant
                }

                return task
            })
        },
        update: (state: StateType, action) => {
            state.tasks = state.tasks.filter(task => {
                if (task.id === action.payload.id) {
                    task.name = action.payload.name
                    task.date = action.payload.date
                }

                return task
            })
        }
    }
});

export const { create, remove, updateIsImportant, update } = taskSlice.actions;
export default taskSlice.reducer;