import React from 'react'

const About = () => {
    return (
        <div className='h-screen  justify-center 
        items-center bg-teal-700'>
            <div className='mt-20'>
            <h1 className='lg:text-9xl md:text-7xl sm:text-5xl
             text-3xl font-black mb-14 text-black'>
                About project
            </h1>
            </div>
            <div>
                <p className='lg:text-7xl md:text-5xl sm:text-3xl text-1xl'>
                    This is my Web-project.
                    It's a Bookstore website.
                </p>                
                <a href='https://github.com/tamer-3/finalw' 
                className='lg:text-5xl md:text-3xl sm:text-2xl text-1xl text-blue-500'>
                   Link to my project in Github
                </a>
            </div>
        </div>
    )
}

export default About
