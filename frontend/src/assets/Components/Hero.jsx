import React from 'react'
import bgImage from '../bgimage.jpg'
import Navbar from './Navbar'
function Hero() {
    return (
        <div className='relative h-screen w-full bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${bgImage})` }}>
            <Navbar/>
            <div className='relative z-20 flex flex-col items-center justify-center h-full text-center text-brown px-4 -mt-10'>
                <h2 className='text-lg md:text-xl mb-4 -tracking-widest uppercase'>Good Meals heals</h2>
                <h1 className='text-4xl md:text-6xl font-bold mb-6'>Good Meal Resturant</h1>
                <button className='bg-amber-800 text-black py-3 px-10 hover:bg-blue transition'>Book a table</button></div>
        </div>
    )
}

export default Hero
