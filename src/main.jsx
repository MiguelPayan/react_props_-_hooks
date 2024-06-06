import React from 'react';
import {createRoot} from 'react-dom/client';
// import { App } from './HelloWorld';
// import { FirstApp } from './FirstApp';
import './styles.css';
import { CounterApp } from './CounterApp';

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* Aqui se manda el prop counter a los hijos*/}
        <CounterApp value={20} />
    </React.StrictMode>
)