import React, { useEffect } from 'react'
import '../component-styles/index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import NavBar from './NavBar';

export default function HeroPage() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <div className="pagecontainer flex text-center justify-center pb-10 sm:pb-20">
                <div className="container flex flex-col justify-center text-center text-white" >
                    <div className="heading" data-aos="fade-right">
                        <h1 className='text-4xl font-extrabold my-4'>Hi I'm Alok</h1>
                    </div>
                    <div className="description text-xl my-4 font-sans text-violet-200 " data-aos="fade-left">
                        A tech enthusiast who is enthusiastic about learning new things.
                    </div>
                    <div className="links flex flex-row justify-evenly mx-4 sm:justify-items-center sm:justify-center ">
                        <div className="social-links text-4xl  ">
                            <a href="https://github.com/alok27a">
                                <FontAwesomeIcon icon={faGithub} className="hover:bg-violet-600 p-3 rounded-md mx-3" />
                            </a>
                        </div>
                        <div className="social-links  text-4xl ">
                            <a href="https://www.linkedin.com/in/alok-mathur-5aab4534/">
                                <FontAwesomeIcon icon={faLinkedin} className="hover:bg-violet-600 p-3 rounded-md mx-3" />
                            </a>
                        </div>
                        <div className="social-links text-4xl ">
                            <a href="https://www.instagram.com/alok.mathur27/">
                                <FontAwesomeIcon icon={faInstagram} className="hover:bg-violet-600 p-3 rounded-md mx-3" />
                            </a>
                        </div>
                        <div className="social-links text-4xl ">
                            <a href="https://www.facebook.com/profile.php?id=100001774623462">
                                <FontAwesomeIcon icon={faFacebook} className="hover:bg-violet-600 p-3 rounded-md mx-3" />
                            </a>
                        </div>
                    </div>

                    <div className="portfolioandcv flex flex-col mx-20 sm:flex-row sm:justify-items-center sm:justify-center" data-aos="fade-up">
                        <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 p-5  my-10 text-xl font-bold rounded-3xl sm:mx-4" >
                            👇 View Portfolio
                        </button>
                        <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 p-5 text-xl font-bold rounded-3xl sm:mx-4 sm:my-10" >
                            <a href="https://drive.google.com/file/d/1gtFE3NG5_L00q2wh3eF3omWmIXcf0Pxx/view?usp=sharing" target="_blank" rel="noreferrer">
                                📃View Resume
                            </a>
                        </button>
                    </div>
                    <div className="skills hidden font-mono sm:flex flex-row text-justify justify-between  text-2xl flex-wrap text-violet-200 p-4 my-10" data-aos="fade-left">
                        <div className="sk1">Web Development</div>
                        <div className="sk2">App Development</div>
                        <div className="sk3">Machine Learning</div>
                        <div className="sk4">Blockchain</div>
                        <div className="sk5">Leadership</div>
                        <div className="sk6">Event Management</div>
                    </div>
                </div>
            </div>
        </>
    )
}
