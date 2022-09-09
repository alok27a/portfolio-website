import React, { useEffect } from 'react'
import '../component-styles/index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import Typing from './Typing'
import { Button, Text, Box } from '@chakra-ui/react';
import { faArrowDown, faScroll } from '@fortawesome/free-solid-svg-icons';

export default function HeroPage() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <Box className="pagecontainer flex text-center justify-center pb-10 sm:pb-20">
                <div className="container flex flex-col justify-center text-center text-white mb-24" >
                    <Box mb="5" mt="-0.5" className="heading" data-aos="fade-right">
                        <Text fontSize="7xl">Hi I'm Alok 👋</Text>
                    </Box>
                    {/* <Text fontSize="xl" data-aos="fade-left">
                        A tech enthusiast who is motivated about learning new things.
                    </Text> */}
                    <Text fontSize={{ base: "4xl", md: "4xl" }} color="gray.300" mb="2.5">
                        <Typing />
                    </Text>
                    <div className="links flex flex-row justify-evenly mt-6 mx-4 sm:justify-items-center sm:justify-center " mb="2.5">
                        <div className="social-links text-4xl ">
                            <a href="https://github.com/alok27a">
                                <FontAwesomeIcon icon={faGithub} className="hover:bg-[#4A5568]  p-3 rounded-md mx-3" />
                            </a>
                        </div>
                        <div className="social-links  text-4xl ">
                            <a href="https://www.linkedin.com/in/alok-mathur-5aab4534/">
                                <FontAwesomeIcon icon={faLinkedin} className="hover:bg-[#4A5568] p-3 rounded-md mx-3" />
                            </a>
                        </div>
                        <div className="social-links text-4xl ">
                            <a href="https://www.instagram.com/alok.mathur27/" >
                                <FontAwesomeIcon icon={faInstagram} className="hover:bg-[#4A5568] p-3 rounded-md mx-3" />
                            </a>
                        </div>
                        <div className="social-links text-4xl ">
                            <a href="https://www.facebook.com/profile.php?id=100001774623462">
                                <FontAwesomeIcon icon={faFacebook} className="hover:bg-[#4A5568] p-3 rounded-md mx-3" />
                            </a>
                        </div>
                    </div>

                    <div className="portfolioandcv flex flex-col mt-6 mx-20 sm:flex-row sm:justify-items-center sm:justify-center" data-aos="fade-up">
                        <Link to="/skills">
                            <Button colorScheme='blue' size="lg" m="5">
                                <FontAwesomeIcon icon={faArrowDown} /> <Text ml={2}>View Portfolio</Text>
                            </Button>
                        </Link>
                        <a href="https://resume.imalok.me" target="_blank" rel="noreferrer">
                                <Button colorScheme='blue' size="lg" m="5">
                                    <FontAwesomeIcon icon={faScroll} /> <Text ml={2}>View Resume</Text>
                                </Button>
                        </a>
                    </div>
                    {/* <div className="skills hidden font-mono sm:flex flex-row text-justify justify-between  text-2xl flex-wrap text-violet-200 p-4 my-10" data-aos="fade-left">
                        <div className="sk1">Web Development</div>
                        <div className="sk2">App Development</div>
                        <div className="sk3">Machine Learning</div>
                        <div className="sk4">Blockchain</div>
                        <div className="sk5">Leadership</div>
                        <div className="sk6">Event Management</div>
                    </div> */}

                </div>
            </Box>
        </>
    )
}
