import React from 'react'
const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8 '>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-5'>
            I'm an Electronics Engineer from MIT Academy of Engineering. Currently I'm working as a Clan Fellow in Blazeclan Technologies. I have a keen interest in coding as well as digital marketing, particularly SEO. Apart from this, my hobbies include making reels for Instagram and travelling. I also love to make DIY things and follow lifestyle and travelling blogging related videos on YouTube.
            </p>
            <br />
            <p className='text-xl'>
            I created this website for applying my learnings. The website isn't completed yet and soon I will add my projects and other content. 

            PS please open the website on a desktop for better UI.
            </p>
        </div>
        <div>
        </div>
    </div>
  )
}

export default About
