
import React from 'react'
import st from './style.module.css'



function Header() {
  return (
    <div className={st.header}>
        <div className={st.header2}>
      <img src='./pic/user.png' style={{width:'20px' , height:'20px'}} alt='user.png'/>
      <h3>Welcome to Music Festival 2023</h3>
        </div>
    </div>
  )
}

export default Header
