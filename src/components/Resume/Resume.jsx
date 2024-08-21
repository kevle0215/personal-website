import React from "react";
import { Navbar } from "../Navbar/Navbar";
import ResumePdf from './Lee2024Resume_2.pdf';
import { Helmet } from "react-helmet";

export const Resume = () => {
    return (
        <>
            <Helmet>
                <title>Resume</title>
            </Helmet>
            <Navbar/>
            <div className='flex flex-col'>
                <embed 
                src={ResumePdf}
                type='application/pdf'
                className='h-[85vh] w-[85vh] mr-auto ml-auto mt-[3rem]'/>
            </div>
        </>
    )
}