import { configureStore } from "@reduxjs/toolkit";
import taskReducer from '../reducers/task';
import { load, save } from "./LocalStorage";

const preloadedState = load();

export const store = configureStore({
    reducer: {
        tasks: taskReducer
    },
    preloadedState
});


store.subscribe(() => {
    save({
        tasks: store.getState().tasks
    });
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch