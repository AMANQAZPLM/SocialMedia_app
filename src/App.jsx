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
import { useState } from "react"
import { createBrowserRouter,Route,RouterProvider, Outlet, Navigate } from "react-router-dom";
import { Height } from "@mui/icons-material"
function App() {
  const [Theme,setTheme]=useState(true);
  const currentUser=true;
  const Layout =()=>{
    return <div style={Theme ? {backgroundColor:"#666666",color:"white"}:{ backgroundColor:"white",color:"black"}}>

<NavBar theme={Theme}/> <div style={{position:"fixed",top:"0",marginTop:"15px",height:"30px",width:"10px",padding:"5px"}} ><button style={{backgroundColor:"white",border:"none",cursor:"pointer"}} onClick={()=>setTheme(!Theme)} ><Brightness4Icon /></button></div>
   
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
  return  <>
 <RouterProvider router={router}/>  </>
}

export default App;
