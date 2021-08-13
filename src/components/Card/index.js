import React from 'react'
import './styles.css'

export const Card = ({ title = 'Item', price = '200', stars = 3, img }) => {
  const star = new Array(parseInt(stars))
  return (
    <div className='card'>
      <img class='block mx-auto h-24 w-1/4 rounded-full sm:mx-0 sm:flex-shrink-0' src={img} alt={title}></img>

      <div class='text-center space-y-2 sm:text-left'>
        <div class='space-y-0.5'>
          <p class='text-lg text-black font-semibold'>{title}</p>
          <p class='text-gray-500 font-medium'>Rs. {price}</p>
          <p className=''>{star.fill().map((x) => '⭐')}</p>
        </div>
        <button class='btn'>Add to cart</button>
      </div>
    </div>
  )
}
