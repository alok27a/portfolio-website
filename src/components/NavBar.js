import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import amlogo from '../images/AMLogo1.png'


export default function NavBar() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <nav className="sticky top-0 z-10 bg-neutral-900" data-aos="fade-right" >
                <div className="max-w-5xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <Link to="/"><img src={amlogo} href="/" className="h-20 w-20" />
                        </Link>
                        <div className="flex space-x-4 text-white font-semibold text-l">
                            <Link to="/skills">Portfolio</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/about">About Me</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}