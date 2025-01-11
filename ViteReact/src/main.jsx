import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>I wanna be Rich</h1>
      <h1>BatMan</h1>
    </div>
  )
}
const anotherElement=(
  <a href="https://youtube.com" target='_blank'>Youtube pe ja</a>
)
const user="IronMan"
const reactElement=React.createElement(
  'a',
  {href:'https://youtube.com',target:'_blank'},
  'Sale Youtube pe chala ja',
  user
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    {/* <MyApp /> */}
   {/* {anotherElement} */}
   {/* {reactElement} */}
  </StrictMode>,
)
