import "./comments.scss"
import {AuthContext} from "../../context/authContext"
import React, { useContext } from 'react'
import ThemeContext from "../../context/themeContext";
export const Comments = (props) => {
 const theme=useContext(ThemeContext);
    const {currentUser}=useContext(AuthContext);
    const comments =[
        {   userid:1,
            id: 1,
            name: "Runner Mike " ,
            prourl : "https://clipart-library.com/img/2038207.jpg" ,
            desc: "Amazing made us proud."
        },
        {   userid:2,
            id: 2,
            name:"Steven" ,
            prourl : "http://www.clipartbest.com/cliparts/9cR/LL5/9cRLL5p7i.jpg",
        desc:"Kinda jealous ,NGL"
        },
        {   userid:3,
            id: 3,
            name: "George",
            prourl : "https://clipart-library.com/img/1126369.gif" ,
        desc: "Give me a treat when we meet next time"
        },
        {   userid:4,
            id: 4,
            name: "Susan" ,
            prourl : "https://th.bing.com/th/id/OIP.bXsU8MRS_M01DTKoEuHpvQHaJZ?pid=ImgDet&rs=1" ,
       desc : " Looking forward to more positive news in the future" 
        } ,
       

    ]
  
    return (
    <div className="comments">
        <div className="write" style={props.theme ||theme ? {backgroundColor:"#222",color:"white"}:{backgroundColor:"#f6f6f3",color:"black"}}>
            <img src={currentUser.profilePic} />
            <input placeholder="Write a comment" style={props.theme ||theme ? {backgroundColor:"#222",color:"white"}:{backgroundColor:"#f6f6f3",color:"black"}}/>
            <button>Send</button>
        </div>
        {comments.map(comment=>(
<div className="comment" style={props.theme ||theme ? {backgroundColor:"#222",color:"white"}:{backgroundColor:"#f6f6f3",color:"black"}} key={comment.id}>
    <img src={comment.prourl} alt=""/>
    <div className="info">
<span>{comment.name}</span>
<p>{comment.desc}</p>
    </div>
    <span className="date">1 hour ago</span>
</div>

    ))}</div>
  )
}
