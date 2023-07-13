import React from 'react'
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts"
import "./profile.scss"
import { useLocation } from 'react-router-dom';
export const Profile = () => {
  return (
    <div className='profile'  >
      <div className="images">
        <img src="https://th.bing.com/th/id/OIP.bJrzQNfLwxFUFiQM4E0EQwHaEK?pid=ImgDet&rs=1" alt="" className='coverPic'/>
        <img src="https://th.bing.com/th/id/OIP.CEUVTFPpQtg_5H4ReQhIigHaE7?pid=ImgDet&rs=1" alt="" className='profilePic'/>
      </div>
    <div className="profileContainer">
      <div className="userproinfo">
        <div className="left">
        <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <PinterestIcon fontSize="large" />
            </a>
        </div>
        <div className="center">
          <span>John Baker</span>
          <div className="info">
            <div className="item">
              <PlaceIcon/>
              <span>Radiator Spring</span>
            </div>
            <div className="item">
<LanguageIcon/>
<span>English</span>
            </div>
       
          </div>
          <button>Follow</button>
        </div>
        <div className="right">
          <EmailOutlinedIcon/>
          <MoreVertIcon/>
        </div>
      </div>
      <Posts />
    </div>
    </div>
  );
}  ;

export default Profile;
