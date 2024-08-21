import React from "react";
import { Navbar } from "../Navbar/Navbar";
import selfPort from '../../images/meblack.jpg'

export const About = () => {
    return (
        <div className='font-serif'>
            <Navbar/>
            

            <section className='flex flex-row pl-[3rem] mt-[5rem] pb-[2rem] pr-2 gap-[8rem]'>

                <section className='flex flex-col gap-[2.5rem] text-white'>

                    <h1 className='text-yellow-300 text-6xl font-bold'>Hi, I'm Kevin!</h1>

                    <p>
                        My passion for programming started with Codecademy in third grade, 
                        when I would sprint through lessons without learning anything 
                        (but I still posted answers on the forums). I was so fascinated by 
                        programming because it offered a blank slate with so many possibilities.
                    </p>
                    <p>
                    As someone who has had an opportunity to work with and for people of nearly every background 
                    -- from elementary school students to decade-old retirees -- I bring a seasoned perspective. 
                    These opportunities have provided me communication skills that encourage strong team chemistry
                    and allow me to adapt to nearly any team. 
                    </p>

                    <p>
                    Outside of programming, I love yapping to people. You will also often see 
                    me playing pickleball and tennis, and even more often, you will see me at 
                    the gym.
                    </p>

                </section>

                <img
                src={selfPort}
                alt=""
                className='mr-[3rem]'
                />

            </section>
        </div>
        
    )
}