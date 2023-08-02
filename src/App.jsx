import React from 'react'
import { Routes, Route } from "react-router-dom";
import css from "./App.css";
import Menu from './Menu';
import Search from './Search.jsx';

function App() {
    return (
        <>
            <Menu />
            <Routes>
                <Route path='/' element={<Search />}></Route>
            </Routes>
        </>
    )
}

export default App
