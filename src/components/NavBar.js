import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';


export default function NavBar() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <nav className="sticky top-0 z-10 bg-neutral-900" data-aos="fade-right" >
                <div className="max-w-5xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <span className="text-2xl text-white font-semibold">Logo</span>
                        <div className="flex space-x-4 text-white font-semibold text-l">
                            <Link to="/skills">Portfolio</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/">About Me</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}