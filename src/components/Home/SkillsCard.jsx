import React from "react";

export const SkillsCard = ({picture, language, years, experience}) => {
    return (
        <div className='text-white font-serif col-span-1 ml-[5rem] mr-[2rem] mt-[3rem]'>
            <section className='flex flex-row mb-1 gap-3'>
                <img
                src={picture}
                alt=""
                className='h-[3rem] w-[4rem] rounded-[1rem]'
                >
                </img>
                <h1 className='text-[1.3rem] mt-auto'>{language} {" "} ({years} {" "} {"years"}) </h1>
            </section>
            <section>
                <div className='relative z-0 w-100% h-[1rem] bg-gray-300'>
                    <div 
                    className='absolute top-0 z-100 h-[1rem] bg-yellow-300'
                    style={{ width: `${experience}%`}}
                    ></div>
                </div>
            </section>
        </div>
    )
}