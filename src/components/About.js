/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import profile from '../images/profile1.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ac1 from '../images/merit.jpg'
import ac2 from '../images/pr.jpg'
import ac3 from '../images/research.jpg'
import ac4 from '../images/SIH Acceptance.png'
import ac5 from '../images/adg.png'


export default function About() {
  return (
    <>
      <div className="pagecontainer1">
        <div className="about-me flex flex-col text-left justify-between align-center text-center mx-5">

          <div className="about-intro flex flex-col  sm:flex-row sm:mx-48 sm:text-left ">
            <div className="images sm: text-left ">
              <img src={profile} className="place-content-center align-center my-5 rounded-xl h-fit w-fit " />
            </div>

            <div className="intro mx-3 mb-14 sm: basis-3/4 sm:text-left sm:mx-24 sm:p-5">
              <h1 className='text-3xl my-3 text-white font-bold'>About Me</h1>
              <p className='text-xl text-[#93A0B1] font-mono'>
                <span className='text-6xl'>I</span> am Alok Mathur, a tech enthusiast who is enthusiastic about learning new things about coding and development and is determined to doing so. With a passion for mathematics and problem-solving. I'm currently pursuing my Bachelor's degree in Computer Science and Engineering at Vellore Institute of Technology, Vellore.
              </p>
            </div>
          </div>


          <div className="achievemnet-intro mx-5 my-14 flex flex-col justify-items-center justify-between sm:flex-row sm:mx-48">
            <div className="text sm:my-5 sm:mx-15  sm:text-left sm:basis-1/2 sm:p-5">
              <h1 className='text-3xl my-3 text-white font-bold'>Achievements</h1>
              <p className='text-xl text-[#93A0B1] font-mono my-3'>
                I have participated in various events and also represented my department.
              </p>
            </div>
            <div className="certificates sm:basis-1/2">
              <Carousel className="text-center sm:mx-5 w-fit h-fit sm:w-auto" autoPlay="true" infiniteLoop="true" showStatus="false" showIndicators="false" stopOnHover="true" useKeyboardArrows="true">
                <div>
                  <img src={ac1} />
                  <p className="legend">Merit Scholorship from VIT</p>
                </div>
                <div>
                  <img src={ac2} />
                  <p className="legend">Program Representative of SCOPE</p>
                </div>
                <div>
                  <img src={ac3} />
                  <p className="legend">Research Paper publication in IJERT</p>
                </div>
                {/* <div>
                  <img src={ac4} />
                  <p className="legend">SIH Acceptance from VIT</p>
                </div> */}
                <div>
                  <img src={ac5} />
                  <p className="legend">Second Runner's Up at Appathon conducted by ADG VIT</p>
                </div>
              </Carousel>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}
