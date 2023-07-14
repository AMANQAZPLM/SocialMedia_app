import Login from "./pages/login/Login"
import {Home} from "./pages/home/Home"
import {NavBar} from "./components/navBar/NavBar"
import {LeftBar} from "./components/leftBar/LeftBar"
import {RightBar} from "./components/rightBar/RightBar"
import { Register } from "./pages/register/Register";
import {Profile} from "./pages/profile/Profile"
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import "./style.scss";
import { AuthContext } from "./context/authContext"
import { useContext, useState } from "react"
import { createBrowserRouter,Route,RouterProvider, Outlet, Navigate } from "react-router-dom";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Height } from "@mui/icons-material"
import ThemeContext from "./context/themeContext"
import LightModeIcon from '@mui/icons-material/LightMode';
import React from "react"
function App() {
  const [Theme,setTheme]=useState(true);
  const {currentUser}=useContext(AuthContext);
  //const them=useSelector(theme=>theme);import { useSelector,useDispatch } from "react-redux";dispatchEvent(CHANGE(Theme));
  //console.log(them);
////<div style={{position:"absolute",top:"0",left:"100",marginTop:"15px",height:"30px",width:"10px",padding:"5px"}} >  //</div> 
  
  const Layout =()=>{
    return <div style={Theme ? {backgroundColor:"black",color:"white"}:{ backgroundColor:"#f6f6f3",color:"black"}}>
<div >
<NavBar theme={Theme}/> 
  <button style={{position:"absolute",top:"20px",left:"97vw",border:"none", cursor:"pointer",backgroundColor:"transparent"}} onClick={()=>{setTheme(!Theme);
  }} > {Theme ? <LightModeIcon style={{color:"white"}}/>  :<DarkModeIcon   />}</button>
 
</div>
<div style={{display:"flex"}}>
  <LeftBar theme={Theme}/>
  <div style={{flex:6}}>
  <Outlet/>
  </div>

<RightBar theme={Theme}/>

</div>

        
    </div>
  };

  const ProtectedRoute =({children})=>{
if(!currentUser)
{return <Navigate to="/login"/>;}
return children;
  };
  const router=createBrowserRouter([
    {
      path: "/",
      element:(<ProtectedRoute> <Layout/></ProtectedRoute> ) ,
      children : [
{path: "/",
element: <Home theme={Theme}/>},
{path:"/profile/:id",
  element: <Profile/> }

      ]  },
    ,{
path: "/login",
element: <Login/> ,
  },
  {
    path: "/register",
    element: <Register/> ,
      }

]);
  return  <ThemeContext.Provider value={Theme}>

 <RouterProvider router={router}/>  </ThemeContext.Provider>
}

export default App;
