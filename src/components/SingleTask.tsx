import * as React from 'react';
import { useState } from 'react';

import { remove, updateIsImportant, update } from '../reducers/task';
import { store } from '../store/store';

import { IconButton } from './inc/IconButton';
import { faTimes, faPencilAlt, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Input } from './inc/Input';


interface SingleTaskProps {
    id: number,
    name: string,
    date: string,
    isImportant: boolean
}

export const SingleTask: React.FC<SingleTaskProps> = ({ id, name, date, isImportant }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [nameEdited, setNameEdited] = useState(name);
    const [dateEdited, setDateEdited] = useState(date);

    const handleChangeName = (name: string) => setNameEdited(name);
    const handleChangeDate = (date: string) => setDateEdited(date);

    const handleRemoveTask = () => store.dispatch(remove({ id }));
    const handleUpdateIsImportant = () => store.dispatch(updateIsImportant({ id }));

    const handleUpdate = () => {
        setIsEditing(false);

        store.dispatch(update({
            id,
            name: nameEdited,
            date: dateEdited
        }));
    }


    return (
        <div
            onClick={handleUpdateIsImportant}
            className={`w-full flex justify-between items-center gap-8 cursor-pointer p-3 ${isImportant && 'border-l-4 border-red-400'} glass-2`}
        >
            {isEditing ? (
                <div className="flex flex-col gap-2">
                    {/* <Input
                        type="text"
                        name="Nazwa"
                        value={nameEdited}
                        setValue={handleChangeName}
                    />

                    <Input
                        type="date"
                        name="Termin zadania"
                        styles={''}
                        value={dateEdited}
                        setValue={handleChangeDate}
                    /> */}
                </div>
            ) : (
                <div className="flex flex-col">
                    <span className="text-gray-200 text-lg"> {name} </span>
                    <span className="text-gray-200 font-bold text-xs"> {dateEdited} </span>
                </div>
            )}

            <div className="flex justify-center items-center gap-1">
                <IconButton
                    icon={isEditing ? faCheck : faPencilAlt}
                    styles={isEditing ? 'text-green-500' : 'text-yellow-300'}
                    handler={isEditing ? handleUpdate : () => setIsEditing(true)}
                />

                <IconButton
                    icon={faTimes}
                    styles={'text-red-500'}
                    handler={handleRemoveTask}
                />
            </div>
        </div >
    );
}