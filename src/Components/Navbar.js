import React from 'react'
import logo from "../image/logo.jpg"

function Navbar() {
  return (
    <div className='navbar'>
        <img  className="logo" alt="logo" src={logo}/>
        <ul>
            <li>Home</li>
            <li>about</li>
            <li>contact</li>
            <li>Kart</li>
        </ul>
    </div>
  )
}

export default Navbar