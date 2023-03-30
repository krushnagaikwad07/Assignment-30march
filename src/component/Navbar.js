import React from 'react'
import navBar from './navbar.module.css'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()
  return (
    <div>
      <nav className={navBar.navbar}>
        <div className={navBar.navbar__logo}>
          <h3 onClick={() => navigate("/")}>GuessLucky Number </h3>
        </div>
        <ul className={navBar.navbar__links}>
          <li onClick={() => navigate("/")} >Game</li>
		  <li onClick={() => navigate("/home")} >Home</li>
          <li onClick={() => navigate("/about")}>About</li>
          <li onClick={() => navigate("/login")}>Log IN</li>
          <li onClick={() => navigate("/register")}>Register</li>
          
        </ul>
      </nav>
    </div>
  )
}