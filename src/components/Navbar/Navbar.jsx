import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className='flex flex-row text-white font-averia pt-4'>
            <h1 className=' text-3xl pl-3'>KL</h1>
            <div className='flex flex-row ml-auto text-2xl gap-[5rem] pr-5'>
                <Link to="/" className='relative pb-1 group'>
                    Home
                    <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full'></span>
                </Link>
                <Link to="/portfolio" className='relative pb-1 group'>
                    Portfolio
                    <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full'></span>
                </Link>
                <Link to="/resume" className='relative pb-1 group'>
                    Resume
                    <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full'></span>
                </Link>
                <Link to="/about" className='relative pb-1 group'>
                    About
                    <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full'></span>
                </Link>
                <Link to="/contact" className='relative pb-1 group'>
                    Contact
                    <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full'></span>
                </Link>
            </div>
        </div>
    )
}