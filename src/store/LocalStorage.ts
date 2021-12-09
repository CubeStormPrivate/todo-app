interface TaskType {
    id: number,
    name: string,
    date: string,
    isImportant: boolean
}

interface LocalStorageStateType {
    tasks: {
        tasks: TaskType[]
    }
}

export const load = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) return undefined;

        return JSON.parse(serializedState);
    } catch (error) {
        return error;
    }
}

export const save = (state: LocalStorageStateType) => {
    try {
        localStorage.setItem('state', JSON.stringify(state));
    } catch (error) {
        return error;
    }
}