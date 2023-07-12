import React,{useState} from 'react'
import  "./register.scss"
import {Link,useLocation} from 'react-router-dom'
import Brightness4Icon from '@mui/icons-material/Brightness4';
export const  Register = (props) => {
  let location=useLocation();
  //console.log(location.state?.theme)
  var theme=false
 if (location.state?.theme!= undefined)
  theme=location.state?.theme
  const [Theme,setTheme]=useState(theme);
  return ( <div className="theme" >
     <div style={{position:"fixed",top:"0",marginTop:"15px",height:"30px",width:"10px",padding:"5px"}} >
      <button style={{backgroundColor:"white",border:"none",cursor:"pointer"}} onClick={()=>setTheme(!Theme)} ><Brightness4Icon /></button></div>

  <div className='register' style={Theme ? {backgroundColor:"#666666"}:{ backgroundColor:`rgb(193,190, 255)`}}>
     <div className="card">
    <div className="left">
      <h1>Love Social</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, eum.</p>
      <span>Do you have an Account ?</span>
      <Link to="/login" state={{theme:Theme}}>
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
</div>
)
}
