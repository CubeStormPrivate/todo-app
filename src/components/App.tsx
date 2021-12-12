import * as React from 'react';

import { particlesConfig } from '../assets/particlesConfig';

import { Routes, Route } from "react-router-dom";
import Particles from "react-tsparticles";
import { Tasks as TasksView } from './views/Tasks';
import { Create as CreateView } from './views/Create';

import '../css/glass.css';


export const App: React.FC = () => {
    return (
        <div className="min-h-screen flex justify-center bg-background p-3 md:p-8 lg:p-12">
            <div className="w-full max-w-xl relative z-10 p-3 md:p-5 lg:p-8 glass">
                <Routes>
                    <Route path="/" element={<TasksView />} />
                    <Route path="/dodaj" element={<CreateView />} />
                </Routes>
            </div>

            <Particles
                options={particlesConfig}
                canvasClassName="w-full h-full absolute top-0 left-0 z-0"
            />

            <a
                href="https://www.pexels.com/pl-pl/zdjecie/niesamowity-wodospad-z-bujnymi-liscmi-na-skalach-4534200/"
                className="absolute top-full left-0 z-20 text-sm text-gray-100 transition-opacity opacity-25 hover:opacity-70 p-1"
            > Background </a>
        </div>
    );
}