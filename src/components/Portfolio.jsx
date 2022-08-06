import React from 'react'
import About from '../assets/portfolio/About.jpg'
const Portfolio = () => {

    const portfolios =[
        {
            id: 1,
            src: About
        }
    ]
  return (
    <div name= 'portfolio' className=' bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center '>
        <div className='pb-8 '>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out my work here</p>
            </div> 
        </div>
        <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 '>
        {
            portfolios.map(({id,src}) =>(
                <div className=' shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt="UnderConstruction" className=' rounded-md duration-200 hover:scale-105 '/>
                    <div className='flex items-center justify-center'>
                        <button class="GFG" 
                        onclick="window.location.href = 'https://ide.geeksforgeeks.org';">
                         Click Here </button>
                        <button onClick=href:"https://www.linkedin.com/in/kothari-meet/" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>LinkedIn</button>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Git</button>
                    </div>
                </div>  
            


            ))
        }
        </div>
    </div>
  )
}

export default Portfolio
