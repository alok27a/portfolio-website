import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import amlogo from '../images/AMLogo1.png'
import '../component-styles/projects_styles.css'


export default function NavBar() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <nav className="sticky top-0 z-10 bg-neutral-900 bg-[#242629]" data-aos="fade-right" >
                <div className="max-w-5xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <Link to="/"><img src={amlogo} href="/" className="h-20 w-20" />
                        </Link>
                        <div className="flex space-x-4 text-white font-semibold text-l">
                            <Link href="/skills" className="ul relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-black
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 decoration-green">Portfolio</Link>
                            <Link to="/projects" className="ul relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-black
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 decoration-green">Projects</Link>
                            <Link to="/about" className="ul relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-black
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 decoration-green">About Me</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}