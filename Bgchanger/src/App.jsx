import React, { useState } from 'react'
function App() {
  const [color, setColor] = useState('pink')
  function changeColor(event) {
    setColor(event.target.style.backgroundColor)
  }
  return (
    <>
      <div className='w-full h-screen duration-200'
        style={{ backgroundColor: color }}>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"red"}} onClick={changeColor}>Red</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"green"}} onClick={changeColor}>Green</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"blue"}} onClick={changeColor}>Blue</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"yellow"}} onClick={changeColor}>Yellow</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"purple"}} onClick={changeColor}>Purple</button>

        </div>

      </div>
      </div>
    </>
  )
}

export default App
