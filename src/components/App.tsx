import React from 'react';
import { Routes, Route } from "react-router-dom";

import { Tasks as TasksView } from './views/Tasks';
import { Create as CreateView } from './views/Create';

import '../css/App.css';


export const App = () => {
    return (
        <div className="min-h-screen flex justify-center bg-gray-600 p-12">
            <Routes>
                <Route path="/" element={<TasksView />} />
                <Route path="/dodaj" element={<CreateView />} />
            </Routes>
        </div>
    );
}