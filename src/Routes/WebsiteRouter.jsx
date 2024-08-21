import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../components/Home/Home";
import { Portfolio } from "../components/Portfolio/Portfolio";
import { Contact } from "../components/Contact/Contact";
import { Resume } from "../components/Resume/Resume";
import { About } from "../components/About/About";
import { Submitted } from "../components/Contact/Submitted";


export const WebsiteRouter = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/portfolio' element={<Portfolio/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/resume' element={<Resume/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/submitted' element={<Submitted/>}/>
            </Routes>
        </div>
    )
}