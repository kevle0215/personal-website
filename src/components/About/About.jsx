import React from "react";
import { Navbar } from "../Navbar/Navbar";
import selfPort from '../../images/meblack.jpg'
import { SkillsCard } from "./SkillsCard";
import java from '../../images/java.jpg';
import python from '../../images/python.jpg';
import js from '../../images/javascript.jpg';
import r from '../../images/r.jpg';
import sql from '../../images/sql.jpg';
import django from '../../images/django.jpg';
import docker from '../../images/docker.jpg';
import figma from '../../images/figma.png';
import fusion from '../../images/fusion.jpg';
import github from '../../images/github.png';
import jupyter from '../../images/jupyter.jpg';
import pandas from '../../images/pandas.png';
import postman from '../../images/postman.jpg';
import react from '../../images/react.png';
import spring from '../../images/spring.jpg';
import htmlcss from '../../images/htmlcss.jpg';
import { Helmet } from "react-helmet";

const languages = [
    [java, "Java", "2", 75],
    [python, "Python", "2", 60],
    [js, "JavaScript", "1", 50],
    [htmlcss, "HTML/CSS", "1", 50],
    [r, "R", "1.5", 50],
    [sql, "SQL", "1", 30],

];

const libraries = [
    [spring, "Spring", "1", 60],
    [django, "Django", "1", 60],
    [react, "React/Redux", "1", 60],
    [pandas, "Pandas", "1.5", 60]
]

const tools = [
    [github, "Git/Github", 2, 80],
    [jupyter, "Jupyter Notebooks", 1.5, 70],
    [docker, "Docker", 1, 50],
    [fusion, "Fusion 360", 1, 50],
    [figma, "Figma", 1.5, 70],
    [postman, "Postman", 1, 70]
]

export const About = () => {
    return (
        <>
            <Helmet>
                <title>About</title>
            </Helmet>
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
                <section className='pb-[2rem]'>
                    <h1 className='text-3xl ml-[5rem] mt-[5rem] text-white font-bold'>Languages</h1>
                    <div className='grid grid-cols-3'>

                        {languages.map((item, i) => (
                            <SkillsCard
                                id={i}
                                picture={item[0]}
                                language={item[1]}
                                years={item[2]}
                                experience={item[3]}
                            />
                        ))}

                    </div>
                    <h1 className='text-3xl ml-[5rem] mt-[5rem] text-white font-bold'>Popular Libraries + Frameworks</h1>
                    <div className='grid grid-cols-3'>

                        {libraries.map((item, i) => (
                            <SkillsCard
                                id={i}
                                picture={item[0]}
                                language={item[1]}
                                years={item[2]}
                                experience={item[3]}
                            />
                        ))}

                    </div>
                    <h1 className='text-3xl ml-[5rem] mt-[5rem] text-white font-bold'>Tools</h1>
                    <div className='grid grid-cols-3'>
                        {tools.map((item, i) => (
                            <SkillsCard
                                id={i}
                                picture={item[0]}
                                language={item[1]}
                                years={item[2]}
                                experience={item[3]}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </>
    )
}