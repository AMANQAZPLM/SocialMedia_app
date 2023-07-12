import {useState,useContext} from 'react'
import {Link, useLocation} from 'react-router-dom'
import "./login.scss"
import { AuthContext } from '../../context/authContext';
import Brightness4Icon from '@mui/icons-material/Brightness4';
export const Login = (props) => {
  let location=useLocation();
 // console.log(location.state?.theme)
  var theme=false
  if (location.state?.theme != undefined)
  theme=location.state?.theme
  const [Theme,setTheme]=useState(theme);
  const {login}=useContext(AuthContext);

  const handleLogin =()=>{
    login();
  };
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
          <Link to="/register" state={{theme:Theme}}>
          <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="username"></input>
            <input type="password" placeholder="password"></input>
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}
export default Login;
