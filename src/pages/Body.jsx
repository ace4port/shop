import React from 'react'
import { Card } from '../components/Card'
import './styles.css'

export const Body = () => {
  return (
    <div>
      <div className='hero' id='home'><p>Hero text</p></div>
      <div className='body__container'>
        <Card title='Item name' price='420' stars='4' img />
        <Card />
      </div>
     
      <div className='body__container'>
        <Card />
        <Card />
        <Card />
      </div>

      <div className='body__container'>
        <Card />
      </div>
    </div>
  )
}
