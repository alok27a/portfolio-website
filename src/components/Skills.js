import React, { useEffect } from 'react'
import '../component-styles/index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faAndroid, faBootstrap, faJava, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons';

export default function Skills() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <div className="pagecontainer1 sm: flex flex-col  ">
                <h1 className='text-3xl text-white mx-5 text-center leading-tight font-medium my-3 sm:' data-aos="flip-left">Skills</h1>

                <div className="items sm:flex flex-col p-14 sm:pt-5">

                    <div className="dev-skills flex flex-col justify-center align-center sm:flex sm:flex-row sm:justify-self-center	sm:mb-6">

                        <div className="block p-8 rounded-lg shadow-lg bg-[#242629] max-w-sm my-5 mx-5 sm:mx-16 sm:ml-0" data-aos="flip-down">
                            <div className="heading-container flex flex-row text-white text-3xl leading-tight font-medium mb-2 justify-center">
                                <FontAwesomeIcon icon={faGlobe} className="mx-5 my-5 text-4xl" />
                                <h5 className="">Web Development</h5>
                            </div>
                            <p className="text-[#93A0B1] text-xl m-4">
                                Developing websites using HTML, CSS, JS, React.js as frontend frameworks and Node.js, MongoDB, PHP, MySQL for backend.
                            </p>
                        </div>

                        <div className="block p-8 rounded-lg shadow-lg bg-[#242629] max-w-sm my-5 mx-5 sm:ml-6" data-aos="flip-down">
                            <div className="heading-container flex flex-row text-white text-3xl leading-tight font-medium mb-2 justify-center">
                                <FontAwesomeIcon icon={faAndroid} className="mx-5 my-5 text-4xl" />
                                <h5 className="">App Development</h5>
                            </div>
                            <p className="text-[#93A0B1]  text-xl m-4">
                                Mostly into Native Android Development using Java, but also open to other avenues if needed to.
                            </p>
                        </div>

                    </div>

                    <div className="tech-stack-logo sm:mb-12">
                        <h1 className=' text-3xl text-white mx-5 my-3 text-center leading-tight font-medium sm:p-2' data-aos="flip-right">Tech Stack</h1>

                        <div className="tech-stack grid grid-cols-2 gap-4 text-white text-3xl leading-tight font-medium mb-2 justify-around sm:flex flex-row sm:justify-evenly" data-aos="fade-right">
                            <div className="stack1 flex flex-col justify-center text-center justify-items-center align-center">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faReact} className="my-2 text-6xl hover: text-[#5ED4F3]" />
                                </div>
                                <div className="text">
                                    <p className="font-mono text-xl">React.js</p>
                                </div>
                            </div>
                            <div className="stack1 flex flex-col justify-center text-center justify-items-center align-center">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faBootstrap} className="my-2 text-6xl hover: text-[#7410F0]" />
                                </div>
                                <div className="text">
                                    <p className="font-mono text-xl">Bootstrap</p>
                                </div>
                            </div>
                            <div className="stack1 flex flex-col justify-center text-center justify-items-center align-center">
                                <FontAwesomeIcon icon={faNodeJs} className="my-2 text-6xl hover: text-[#3A8338]" />
                                <p className="font-mono text-xl">Node.js</p>
                            </div>
                            <div className="stack1 flex flex-col justify-center text-center justify-items-center align-center">
                                <FontAwesomeIcon icon={faJava} className="my-2 text-6xl hover: text-[#507E9C]" />
                                <p className="font-mono text-xl">Java</p>
                            </div>
                            <div className="stack1 flex flex-col justify-center text-center justify-items-center align-center">
                                <FontAwesomeIcon icon={faPython} className="my-2 text-6xl hover: text-[#507E9C]" />
                                <p className="font-mono text-xl">Python</p>
                            </div>
                            <div className="stack1 flex flex-col justify-center text-center justify-items-center align-center">
                                <div className="icon flex flex-center align-center justify-center hover: text-[#38BDF8]">
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="72" height="72" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4a3.23 3.23 0 0 1 3.5-1.49a4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4a3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4a3.23 3.23 0 0 1-3.5 1.49a4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4a3.2 3.2 0 0 1 3.5-1.51z"></path></svg>
                                </div>
                                <p className="font-mono text-xl">Tailwind CSS</p>

                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
