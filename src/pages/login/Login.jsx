import {useState} from 'react'
import {Link} from 'react-router-dom'
import "./login.scss"
import Brightness4Icon from '@mui/icons-material/Brightness4';
export const Login = () => {
  const [Theme,setTheme]=useState(true);
  return (
    <div className='theme'>
       <div style={{position:"fixed",top:"0",marginTop:"15px",height:"30px",width:"10px",padding:"5px"}} >
      <button style={{backgroundColor:"white",border:"none",cursor:"pointer"}} onClick={()=>setTheme(!Theme)} ><Brightness4Icon /></button></div>

    <div className='login' style={Theme ? {backgroundColor:"#666666"}:{ backgroundColor:`rgb(193,190, 255)`}}>
      <div className="card">
        <div className="left">
          <h1>Hello World!</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, eum.</p>
          <span>Don't have an Account ?</span>
          <Link to="/register">
          <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="username"></input>
            <input type="password" placeholder="password"></input>
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}
export default Login;
