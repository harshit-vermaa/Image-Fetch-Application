import React from 'react'
import { Routes, Route } from "react-router-dom";
import css from "./App.css";
import Menu from './Menu';
import Contact from './Contact';
import About from './About';
import Home from './Home';
import Subscription from './Subscription';
import Search from './Search';
import Error from './Error';


function App() {
    return (
        <>
            <Menu />
            <Routes>
                <Route path='/about' element={<About />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/subscription' element={<Subscription />}></Route>
                <Route path='/search' element={<Search />}></Route>
                <Route path='*' element={<Error />}></Route>
            </Routes>
        </>
    )
}

export default App
