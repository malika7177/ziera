import React from 'react'
import './header.css'
import logo from "../../assets/logo.png"
const Navbar = () => {
  return (
    <div className='header'>
      <div className="logo-box">
        <a href="#">
            <img src={logo} alt="logo" />
        </a>
      </div>
    </div>
  )
}

export default Navbar
