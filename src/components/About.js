import React from 'react'
import profile from '../images/profile1.jpg'

export default function About() {
  return (
    <>
      <div className="pagecontainer1">
        <div className="about-me flex flex-col justify-center align-center text-center">
          <div className="images">
            <img src={profile} className="mx-16 place-content-center align-center my-5 rounded-xl h-[350px] " />
            <h1 className='text-3xl text-white font-bold'>About Me</h1>
          </div>

          <div className="intro mx-3">
            <p className='text-xl text-[#93A0B1] font-mono'>
              <span className='text-6xl'>I</span> am Alok Mathur, a tech enthusiast who is enthusiastic about learning new things about coding and development and is determined to doing so. With a passion for mathematics and problem-solving. I'm currently pursuing my Bachelor's degree in Computer Science and Engineering at Vellore Institute of Technology, Vellore.
            </p>
          </div>




        </div>
      </div>
    </>
  )
}
