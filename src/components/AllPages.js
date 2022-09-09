import React from 'react'
import HeroPage from './HeroPage'
import Projects from './Projects'
import Skills from './Skills'
import About from './About'

function AllPages() {
  return (
    <>
        <HeroPage/>
        <Skills/>
        <Projects/>
        <About/>
    </>
  )
}

export default AllPages