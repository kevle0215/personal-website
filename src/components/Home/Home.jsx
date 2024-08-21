import React from "react";
import { Navbar } from "../Navbar/Navbar";
import languageCircles from '../../images/languagecircles.png'
import { Helmet } from "react-helmet";

export const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className='font-serif'>
                <Navbar/>
                <section className='flex flex-row text-white'>
                    <div className='flex flex-col'>
                        <h1 className='text-8xl mt-[6rem] ml-[6rem]'>Kevin Lee.</h1>
                        <p className='text-3xl ml-[18rem] mt-[5rem]'>
                            A Duke University student experienced in
                            <span className='text-yellow-300'>
                                {" "}
                                frontend 
                                {" "}
                            </span>
                            and
                            <span className='text-yellow-300'>
                                {" "}
                                backend 
                                {" "}
                            </span> 
                            embellished with
                            <span className='text-yellow-300'>
                                {" "}
                                AI 
                            </span>.
                        </p>
                        <p className='text-3xl ml-[10rem] mt-[5rem] text-gray-500'>
                            Passionate about delivering products that balance
                            <span className='text-yellow-300'>
                                {" "}
                                efficiency 
                                {" "}
                            </span>
                            and 
                            <span className='text-yellow-300'>
                                {" "}
                                design 
                            </span>.
                        </p>
                    </div>
                    
                    <img alt="" src={languageCircles} className='w-[36rem] h-[38rem] mt-4 ml-auto'></img>
                </section>
            </div>
        </>
    );
}