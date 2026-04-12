import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css';
import App from './App';
import OldVersionApp from './OldVersionApp';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom/client';
// import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/old-version" element={<OldVersionApp />} />
        </Routes>
    </BrowserRouter>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
