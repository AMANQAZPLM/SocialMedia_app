import "./post.scss"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {Link} from "react-router-dom"

import React, { useContext, useState } from 'react'
import { Comments } from "../comments/Comments";
import ThemeContext from "../../context/themeContext"
const Post = (post) => {
    const [comemntOpen,setcommentOpen]=useState(false);
    const Liked= false;

    const theme=useContext(ThemeContext);
return (<div className="post" style={post.theme || theme ? {backgroundColor:"#222",color:"white"}:{backgroundColor:"#f6f6f3",color:"black"}}>
    <div className="container">
    <div className="user">
        <div className="userinfo">
            <img src={post.post.prourl} alt=""/>
            <div className="details">
                <Link to = {`/profile/${post.post.userid}`}  style={{textDecoration:"none"}}> 
                <span className="name" >{post.post.name}</span></Link>
                
                <span className="date">1 min ago</span>
            </div>
        </div>
        <MoreHorizIcon/>
    </div>
    <div className="content">
<p> {post.post.desc}</p>
<img src={post.post.imgurl} alt=""/>

    </div>
    <div className="info">
        <div className="item">
            {Liked ?  <FavoriteOutlinedIcon/> : <FavoriteBorderOutlinedIcon/>}
        12 Likes
        </div>
        <div className="item" onClick={()=>
            { 
            setcommentOpen(!comemntOpen)}}>
          <TextsmsOutlinedIcon />
        12 Comments
        </div>
        <div className="item">
            <ShareOutlinedIcon/>
        Share
        </div>
    </div>
   { comemntOpen &&  <Comments theme={post.theme}/>}
    </div>
</div>)
}

export default Post; 