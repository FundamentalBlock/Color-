import React from 'react'



const White = () => {

  const color = 'white'

  return (

    <div className='h-screen' id={color}>

      <div>
            <div className='w-full bg-white 0 flex justify-between px-4'>
            <h1 className='text-4xl text-black font-bold'>{color}</h1>
      </div>

    </div>

        <h1 className=' w-full text-center underline py-16 description'>{color} is not a single color.</h1>

        <p className='text-center p-2'>"White is the lightest color and is achromatic (having no hue). It is the color of objects such as snow, chalk, and milk, and is the opposite of black. White objects fully reflect and scatter all the visible wavelengths of light.." - <span className='color-gradient '>Wikipedia</span></p>

        <p className='text-center p-2'>"White is achromatic, meaning it has no hue. The only other color with this property is black. In many western cultures, the color white symbolizes cleanliness, purity, and virginity. It's because of this that wedding dresses are white." - <span className='color-gradient'>thefactsite.com</span></p>
    </div>


 
  )
}

export default White
