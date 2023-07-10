import "./navbar.scss";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {Link} from 'react-router-dom'


 export const NavBar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{textDecoration:"none"}}><span>WeSocial</span>
        </Link>
        <HomeOutlinedIcon/>
        <DarkModeOutlinedIcon/>
        <GridViewOutlinedIcon/>
        <div className="search">
          <SearchOutlinedIcon/>
          <input type="text" placeholder="Search..."></input>
        </div>
      </div>
      <div className="right">
<PersonOutlinedIcon/>
<EmailOutlinedIcon/>
<NotificationsOutlinedIcon/>
<div className="user">
  <img src="https://www.pngrepo.com/png/275200/180/man-people.png" alt="Profile image"/>
  <span>John Baker</span>
</div>

      </div>

    </div>
  )
}

export default NavBar;