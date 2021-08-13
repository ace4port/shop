import React from 'react'
import './styles.css'

export const Head = () => {
  return (
    <nav className='nav'>
      <div className='nav__right'>
        <Responsive />
        <div className='nav__center'>
          <Navlink />
          <NavRight />
        </div>
      </div>
    </nav>
  )
}

export default Head

const Responsive = () => {
  const toggleNav = () => {}
  return (
    <div className='nav__res'>
      <a href='#home' className='link'>
        Home
      </a>
      <button className='nav__res__btn' type='button' onClick={toggleNav}>
        <i className='text-white fas fa-bars'></i>
      </button>
    </div>
  )
}

const Navlink = () => (
  <ul className='nav__center__links'>
    <li className='flex items-center'>
      <a href='/' className='icon__contain'>
        <i className='icon fas fa-tablet'></i>
        Tablet
      </a>
    </li>
    <li className='flex items-center'>
      <a href='/' className='icon__contain'>
        <i className='icon fas fa-laptop'></i>
        Laptop
      </a>
    </li>
    <li className='flex items-center'>
      <a href='/' className='icon__contain'>
        <i className='icon fas fa-mobile'></i>
        Phone
      </a>
    </li>
  </ul>
)

const NavRight = () => (
  <div className='nav__left'>
    <h4 className='icon__contain'>Icon | Search bar</h4>
    <h4 className='icon__contain'>Sign In</h4>
    <h4 className='icon__contain'>Basket Icon | 0</h4>
  </div>
)
