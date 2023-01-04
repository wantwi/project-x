import React from 'react'
import { userLogin } from '../../config/config'

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
LOGO
      </div>
      <div className='nav'>
        <button onClick={userLogin}>Login</button>
      </div>
    </header>
  )
}

export default Header