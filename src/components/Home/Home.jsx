import React from "react";
import { Navbar } from "../Navbar/Navbar";
import languageCircles from '../../images/languagecircles.png'
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

export const Home = () => {
    return (
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
    );
}