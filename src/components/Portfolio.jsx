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
    <div name= 'portfolio' className=' w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center '>
        <div className='pb-8 '>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out my work here</p>
            </div> 
        </div>
        <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8  py-10 sm:px-20 '>
        {
            portfolios.map(({id,src}) =>(
                <div className=' shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt="UnderConstruction" className=' rounded-md duration-200 hover:scale-105 '/>
                    <div className='flex items-center justify-center'>
                    <button formAction="https://www.linkedin.com/in/kothari-meet/" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' target="_blank" >LinkedIn</button>
                    <button formAction="https://github.com/mskothari07" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' target="_blank" rel="noreferrer">GitHub</button>
                        
                    </div>
                </div>  
            


            ))
        }
        </div>
    </div>
  )
}

export default Portfolio