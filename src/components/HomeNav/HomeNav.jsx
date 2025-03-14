import React from 'react'
import home from "../../assets/images/home.png"
import menu from "../../assets/images/sidebar.png"
import "./HomeNav.scss"
function HomeNav() {
  return (
    <nav className='nav'>
        <div className="nav__home">
            <a href="/home"><img src={home} alt="home icon" className='homeimage' /></a>
        </div>
        <div className="nav__menu">
            <a href="/home"><img src={menu} alt="sidebar icon" className='homeimage' /></a>
        </div>
    </nav>
  )
}

export default HomeNav