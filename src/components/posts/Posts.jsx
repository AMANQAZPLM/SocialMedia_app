import "./posts.scss"
import Post  from "../post/Post";
import React, { useContext } from 'react'
import ThemeContext from "../../context/themeContext";
const Posts = (props) => {
    const tempost=[  {
    id: 1,
    userid:1,
    name: "Runner Mike " ,
    prourl : "https://clipart-library.com/img/2038207.jpg" ,
imgurl :"https://th.bing.com/th/id/OIP.JW-1Xub8NAFzoEfX-T0GfQHaJc?pid=ImgDet&rs=1",
desc:"Recently took part in the Lansdale marathon and was runner up ."
},
{id: 2,
    userid:2,
name: "George",
prourl : "https://clipart-library.com/img/1126369.gif" ,
imgurl : "",
desc :"If Anyone is planing to watch either Oppenheimer or Barbie in upcoming weekend, do hit me Up  "
},
{
    id: 3,
    userid:3,
    name:"Steven" ,
    prourl : "http://www.clipartbest.com/cliparts/9cR/LL5/9cRLL5p7i.jpg",
imgurl :"https://clipground.com/images/argentina-clipart-football-5.jpg",
desc : "Recently I travelled to Argentina , and was fortune enough to meet Lionel Messi during club football "
}, 
];
const theme=useContext(ThemeContext);
return <div className="posts"  style={props.theme || theme ? {backgroundColor:"black",color:"white"}:{backgroundColor:"white",color:"black"}}>
      { 
      tempost.map(post=>(  
        <Post post={post} theme={props.theme} key={post.id}/>
    ))}
    </div>;
};


export default Posts;