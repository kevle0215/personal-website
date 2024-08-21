import React from "react";
import { Navbar } from "../Navbar/Navbar";
import mistralss from "../../images/mistralss.png"
import foodorderingss from "../../images/foodorderingss.png"
import mlss from "../../images/mlss.png";
import githublogo from '../../images/githublogo.jpg';
import { Helmet } from "react-helmet";

export const Portfolio = () => {

    const handleGit = () => {
        window.open('https://github.com/kevle0215', '_blank')
    }

    return (
        <>
            <Helmet>
                <title>Portfolio</title>
            </Helmet>
            <div className='flex flex-col'>
                <Navbar/>
                    <h1 className='text-white font-serif text-5xl mt-5 font-bold ml-auto mr-auto'>My Portfolio</h1>
                    <div className='flex flex-row gap-2'>
                        <h2 className='text-gray-400 font-serif ml-auto mt-6'>
                            You can check out my projects on GitHub: 
                        </h2>
                        <img
                            onClick={handleGit}
                            src={githublogo}
                            alt=""
                            className='w-[2rem] h-[2rem] mt-5 mr-auto rounded-md cursor-pointer'
                        />
                    </div>
                    <section className='flex flex-row mt-5 gap-10 bg-gray-300 p-10'>
                        <img src={mistralss} alt=""/>
                        <div className='w-[100%] font-serif text-black font-xs'>
                            <h1 className='font-bold text-3xl'>
                                CISCO/Duke OIT/NSF-Sponsored MISTRAL Project (2024) {" "}
                                <a 
                                href="https://mistral-plus.security.duke.edu/" 
                                target="_blank" rel="noopener noreferrer"
                                className='text-[1rem] text-blue-500 underline'>
                                    https://mistral-plus.security.duke.edu/
                                </a>
                            </h1>
                            <p className='mt-1'>
                                Full-stack project that engineers a solution to 
                                efficiently extract and query trillions of rows from an Amazon S3
                                through a <span className='font-bold'>Splunk-like interface</span>.
                            </p>

                            <p className="font-bold mt-2">What Does It Utilize?</p>
                            <ul className='list-disc pl-5'>
                                <li>RESTful API</li>
                                <li>MySQL/MariaDB: Indexing, query optimizations, and complex querying logic including parantheses and operations</li>
                                <li>Authentication through Duke SSO</li>
                                <li><span className='font-bold'>Technologies: </span>  Python (Django framework), Javascript (React library), HTML/CSS, Git/Github, Docker, SQLAlchemy, MySQL/MariaDB</li>
                            </ul>
                        </div>
                    </section>
                    <section className='flex flex-row mt-5 gap-10 bg-gray-300 p-10'>
                        <img src={foodorderingss} alt=""/>
                        <div className='w-[100%] font-serif text-black font-xs'>
                            <h1 className='font-bold text-3xl'>
                                Food Ordering Full-Stack Project (2023)
                            </h1>
                            <p className='mt-1'>
                                Full-stack project functioning as a platform for online ordering and
                                restaurant reviews. Includes user features that include a customer cart, 
                                favorite restaurants, and past orders. 
                            </p>

                            <p className="font-bold mt-2">What Does It Utilize?</p>
                            <ul className='list-disc pl-5'>
                                <li>Spring Security/Authentication (JSON token login verification)</li>
                                <li>Explores the use of roles for different users, restricting and granting different types of users access</li>
                                <li><span className='font-bold'>Technologies: </span> Java (SprintBoot framework), Javascript (React and Redux Libraries), HTML/CSS, Git/Github, MySQL</li>
                                
                            </ul>
                        </div>
                    </section>
                    <section className='flex flex-row mt-5 gap-10 mb-5 bg-gray-300 p-10'>
                        <img src={mlss} alt=""/>
                        <div className='w-[100%] font-serif text-black font-xs'>
                            <h1 className='font-bold text-3xl'>
                                Machine Learning Regression Models (2023)
                            </h1>
                            <p className='mt-1'>
                                Performed data wrangling, polynomial regressions, tree regressions, and ensemble 
                                algorithms on Fantasy Football data and NSF-gathered data on coalition governments
                            </p>

                            <p className="font-bold mt-2">What Does It Utilize?</p>
                            <ul className='list-disc pl-5'>
                                <li>Polynomial regression</li>
                                <li>Tree regressions</li>
                                <li>Ensemble algorithms including random forests, bagging, and XGBoost</li>
                                <li><span className='font-bold'>Technologies: </span> Python (scikit-learn) </li>
                                
                            </ul>
                        </div>
                    </section>
            </div>
        </>
    )
}