/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../component-styles/index.css'
import '../component-styles/projects_styles.css'
import proj1 from '../images/simplyinterior.jpeg'
import proj2 from '../images/unmask.jpg'
import proj3 from '../images/blockchain.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/free-brands-svg-icons';


export default function Projects() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <div className="pagecontainer1 flex flex-col justify-center">
                <h1 className='text-3xl text-white mx-5 text-center leading-tight font-medium my-3' data-aos="fade-left">Stuff I've Worked On</h1>

                <div className="p-8 flex flex-col justify-evenly sm:flex-row" data-aos="zoom-out-right">
                    <div className="max-w-sm overflow-hidden my-10 shadow-lg pb-6 rounded-xl bg-[#242629]" >
                        <img src={proj1} className="w-fit h-fit" alt="proj1" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-2xl mb-2 text-white">SimplyInterior</div>
                            <p className="text-[#93A0B1] text-xl font-mono">
                                Augmented Reality Interface for Dimension Measurement and Furniture Selection.
                            </p>
                            <a href="https://github.com/alok27a/SimplyInterior-Project" target="_blank" className='text-violet-600 text-xl'>Know more</a>
                        </div>
                    </div>

                    <div className="max-w-sm overflow-hidden my-10 shadow-lg pb-6 rounded-xl bg-[#242629]" >
                        <img src={proj2} className="w-fit h-fit" alt="proj1" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-2xl mb-2 text-white">Unmask</div>
                            <p className="text-[#93A0B1] text-xl font-mono">
                                Purpose of Application is to Improve the security measures in the current COVID scenario The application empties and then fills the area of any person's face that is covered by a mask.
                            </p>
                            <a href="https://github.com/alok27a/Unmaskify" target="_blank" className='text-violet-600 text-xl' rel="noreferrer">Know more</a>
                        </div>
                    </div>
                    <div className="max-w-sm overflow-hidden my-10 shadow-lg pb-6 rounded-xl bg-[#242629]" >
                        <img src={proj3} className="w-fit h-fit" alt="proj1" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-2xl mb-2 text-white">FactChain</div>
                            <p className="text-[#93A0B1] text-xl font-mono">
                                A framework built on AI and Blockchain that could serve as a ledger for determining whether a piece of writing or media was produced by a reliable source.
                            </p>
                            <a href="https://github.com/WebCrawlers-exe/FactChain-Frontend" target="_blank" className='text-violet-600 text-xl'>Know more</a>
                        </div>
                    </div>
                </div>
                <button className=" bg-violet-500 mx-auto my-5 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 p-5 text-xl text-white font-bold rounded-3xl sm:mx-auto sm:my-10 " data-aos="fade-right">
                    <a href="https://github.com/alok27a" target="_blank" rel="noreferrer">
                        View more on GitHub 
                    </a>
                </button>
            </div>
        </>
    )
}
