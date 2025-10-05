import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Header from "./components/Header/Header.jsx";
import FullPost from "./components/FullPost/FullPost.jsx";

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <Routes>
            <Route element={<Header />}>
                <Route path='/' element={<App />} />
                <Route path='/posts/:id' element={<FullPost />} />
            </Route>
        </Routes>
    </BrowserRouter>
);