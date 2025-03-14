import React from 'react'
import user1 from "../../assets/images/user1.png"
import user2 from "../../assets/images/user2.png"
import user3 from "../../assets/images/user3.png"
import plusone from "../../assets/images/plusOne.png"
import "./OtherUser.scss"
function OtherUsers() {
  return (
    <div className='user__icons'>
        <img src={user1} alt="user one" className='user__images'/><img src={user2} alt="user two" className='user__images'  /><img src={user3} alt="user three" className='user__images' /><img src={plusone} alt="plus one" className='user__image' />
    </div>
  )
}

export default OtherUsers