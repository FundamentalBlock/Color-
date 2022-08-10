import React from 'react'

const Black = () => {
    const color = 'black'
  return (
    <div className='h-screen bg-black text-white ' id={color}>
      <div className='mx-10'>
        <h1 className='flex text-4xl text-white align-baseline font-bold'>b</h1>
        <h1 className='flex text-4xl text-white align-baseline font-bold'>l</h1>
        <h1 className='flex text-4xl text-white align-baseline font-bold'>a</h1>
        <h1 className='flex text-4xl text-white align-baseline font-bold'>c</h1>
        <h1 className='flex text-4xl text-white align-baseline font-bold'>k</h1>
      </div>
        
      <h1 className='w-full text-center underline py-16 description'>{color} is not a color.</h1>
      <p className='text-center p-2'>Instead, {color} is the abscenece of color - <span className='color-gradient'>me</span></p>
    </div>
  )
}

export default Black
