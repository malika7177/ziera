import React from 'react'
import './navbar.css'
import logo from "../../assets/logo.png"
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo-box">
        <a href="#">
            <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="navbar"></div>
    </div>
  )
}

export default Navbar
