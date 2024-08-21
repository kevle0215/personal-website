import React, { useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import linkedin from '../../images/linkedin.jpg';

export const Contact = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        reason: ""
    })

    const handleContact = (e) => {

        e.preventDefault();

        console.log(formData.reason);
        
        fetch("/api/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });

        navigate('/submitted');
    }

    const handleLinkedin = () => [
        window.open('https://www.linkedin.com/in/kevl0215', '_blank')
    ]

    return (
        <>
            <Navbar/>
            <div className='bg-white font-serif text-black flex flex-col ml-[5rem] mr-[5rem] mt-[5rem] pr-[2rem] border rounded-md'>
                <div className='flex flex-row mt-10 ml-[2rem]'> 
                    <h1 className='text-4xl font-bold mr-auto'>Let's Get In Touch!</h1>
                    <img
                    onClick={handleLinkedin}
                    src={linkedin}
                    alt=""
                    className='w-12 h-12'
                    />
                </div>
                <form onSubmit={handleContact} className='flex flex-col ml-[2rem]'>
                    <section className='flex flex-col w-[100%] mt-5 mb-5'>
                        <input 
                        onChange={(e) => setFormData({
                            ...formData,
                            name: e.target.value
                        })}
                        type='text' 
                        className='w-[100%] bg-gray-200 focus:border-blue-400 rounded-md h-[3rem]' 
                        placeholder="Enter Your Name"
                        />
                    </section>
                    <section className='flex flex-col w-[100%] mb-5'>
                        <input 
                        onChange={(e) => setFormData({
                            ...formData,
                            email: e.target.value
                        })}
                        type='email' 
                        className='bg-gray-200 focus:border-blue-400 rounded-md h-[3rem]' 
                        placeholder="Enter Your Email Address"
                        />
                    </section>
                    <section className='flex flex-col w-[100%]'>
                        <textarea 
                        onChange={(e) => setFormData({
                            ...formData,
                            reason: e.target.value
                        })}
                        rows="8"
                        className= 'bg-gray-200 focus:border-blue-400 rounded-md'
                        placeholder="Enter Any Reason!"
                        />
                    </section>
                    <button type="submit" className='w-[100%] mt-5 mb-5 p-3 rounded-md text-white bg-black'>Submit</button>
                </form>
            </div>
        </>
    );
}