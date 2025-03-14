import React from 'react'
import logo from "../../assets/images/logo.png"
import "./PopBox.scss"
function PopBox() {
  return (
    <section className='box'>
        <div className="box__container">
            <a href="/home" className='logo__name'><img src={logo} alt="logo" className='img'/><h2>Autopilot+</h2></a>
        </div>
        <div className="box__user">
            <h1>Welcome User</h1>
        </div>
    </section>
  )
}

export default PopBox