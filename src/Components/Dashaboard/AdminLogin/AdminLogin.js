import React from 'react'
import './AdminLogin.css'
const AdminLogin = () => {
  return (
    <div className="AdminLogin">

   
    <div className='admin-loginIn'>
        <h2>Admin Login</h2>
        <form>
    <div className="user-box">
      <input type="text" name="" required=""/>
      <label>Username</label>
    </div>
    <div class="user-box">
      <input type="password" name="" required=""/>
      <label>Password</label>
    </div>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Log in
    </a>
  </form>
    </div>
    </div>
  )
}

export default AdminLogin