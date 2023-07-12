import "./navbar.scss";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {Link} from 'react-router-dom'
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

 export const NavBar = (props) => {
  //console.log("navbar",props.theme)style={props.theme ?{backgroundColor:"#222" }:{backgroundColor:"#f6f6f3"}}
  const {currentUser}=useContext(AuthContext);
  return (
    <div className="navbar" style={props.theme ? {backgroundColor:"#222",color:"white"}:{ backgroundColor:"#f6f6f3",color:"black"}}>
      <div className="left">
        <Link to="/" style={{textDecoration:"none"}}>
          <span style={props.theme ? {color:"white"}:{ color:"darkblue"}}>WeSocial</span>
        </Link>
        <HomeOutlinedIcon/>
        <GridViewOutlinedIcon/>
        <div className="search" >
          <SearchOutlinedIcon/>
      
         <input type="text" placeholder="Search..." id="srch" style={props.theme ? {backgroundColor:"#222",color:"white"}:{ backgroundColor:"#f6f6f3",color:"black"}}></input> 
        </div>
      </div>
      <div className="right">
<PersonOutlinedIcon/>
<EmailOutlinedIcon/>
<NotificationsOutlinedIcon/>
<div className="user">
  <img src={currentUser.profilePic} alt="Profile image"/>
  <span>{currentUser.name}</span>
</div>

      </div>

    </div>
  )
}

export default NavBar;