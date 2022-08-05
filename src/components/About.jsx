import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8 '>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-10'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non tenetur, voluptas dicta omnis nulla, repudiandae reiciendis quod quo magni necessitatibus soluta possimus architecto quam maiores voluptate ipsam fuga eaque. Perferendis.
            </p>

            <br />

            <p className='text-xl'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit maiores, aperiam obcaecati quae veniam aliquam veritatis beatae reprehenderit, iure dolores cum. Enim debitis amet explicabo, nihil earum ipsam nostrum sequi.
            </p>
        </div>
    </div>
  )
}

export default About