import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Header from "./components/Header/Header.jsx";
import FullPost from "./components/FullPost/FullPost.jsx";
import DisplayTops from "./components/Top/DisplayTops.jsx";
import DisplayDiscussions from "./components/discussions/DisplayDiscussions.jsx";
const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Header />}>
                <Route index element={<App />} />
                <Route path='posts/:id' element={<FullPost />} />
                <Route path='top/:id' element={<DisplayTops />} />
                <Route path='discussions/:id' element={<DisplayDiscussions />} />
            </Route>
        </Routes>
    </BrowserRouter>
);