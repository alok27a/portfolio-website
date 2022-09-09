import React from 'react'
import Typed from 'react-typed';

function Typing() {
    return (
        <>
            <Typed
                strings={['Web Development', 'App Development', 'Machine Learning', 'Blockchain', 'Leadership','Event Management']}
                typeSpeed={40}
                backSpeed={50}
                width={100}
                loop
            />

        </>
    )
}

export default Typing