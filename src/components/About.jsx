import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8 '>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-10'>
                Graduate electronics engineer from MIT Academy of Engineering Currently Working in blazeclan technologies.
                Apart from coding i also have keen interest in digital marketing, particularly seo.
                Other than tech i do make videos on instagram, like to travel.
                In my free time i like make DIY's and watch some youtube videos, mostly lifestyle and travel content 
            </p>

            <br />

            <p className='text-xl'>
               I Made this website just for practice and to learn, but soon i will connect my all projects and many more content. 
               P.S. Please open this website in desktop for better view, working on mobile view (: 
            </p>
        </div>
    </div>
  )
}

export default About
