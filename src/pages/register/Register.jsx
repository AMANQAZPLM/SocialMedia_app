import React from 'react'
import  "./register.scss"
import {Link} from 'react-router-dom'
export const  Register = () => {
  return (<div className='register'>
  <div className="card">
    <div className="left">
      <h1>Love Social</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, eum.</p>
      <span>Do you have an Account ?</span>
      <Link to="/login">
      <button>Login</button>
      </Link>
    </div>
    <div className="right">
      <h1>Register</h1>
      <form>
        <input type="text" placeholder="Username"></input>
        <input type="email" placeholder="E-mail"></input>
        <input type="password" placeholder="Password"></input>
        <input type="text" placeholder="Name"></input>
        <button>Register</button>
      </form>
    </div>
  </div>
</div>
)
}
