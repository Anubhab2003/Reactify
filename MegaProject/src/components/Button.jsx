import React from 'react'

function Button({
    text,
    type='button',
    bgColor='bg-blue-500',
    textColor='text-white',
    className='',
    ...props

}) {
  return (
    <button className={`px-4 py-2 rounded ${bgColor} ${textColor} ${className}`} type={type} {...props}>
        {text}
    </button>
  )
}

export default Button
