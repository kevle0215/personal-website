import React from "react";
import Check from '../../images/check.png'
import { useNavigate } from "react-router-dom";

export const Submitted = () => {

    const navigate = useNavigate();

    const handleDone = () => {
        navigate('/')
    }
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className='flex flex-col bg-white p-5 rounded-md font-serif'>

                <img
                src={Check}
                alt=""
                className='h-[50%] w-[50%] mr-auto ml-auto'
                />

                <h1 className='mr-auto ml-auto font-bold text-[2rem]'>Submitted Successfully</h1>
                <h1 className='mr-auto ml-auto'>Thank You!</h1>

                <button className='text-white bg-green-500 w-[30%] ml-auto mr-auto mt-[1rem] rounded-lg' onClick={handleDone}>Done</button>
            </div>
        </div>
    )
}