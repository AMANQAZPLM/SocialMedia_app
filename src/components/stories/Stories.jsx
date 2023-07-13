
import "./stories.scss";
import { useContext } from "react"
import {AuthContext} from "../../context/authContext"

export const Stories = (props) => {
    const {currentUser}=useContext(AuthContext)
    const Stories =[
        {
            id: 1,
            name: "Runner Mike " ,
            imgurl : "https://clipart-library.com/img/2038207.jpg" ,
        },
        {
            id: 2,
            name:"Steven" ,
            imgurl : "http://www.clipartbest.com/cliparts/9cR/LL5/9cRLL5p7i.jpg",
        },
        {
            id: 3,
            name: "George",
            imgurl : "https://clipart-library.com/img/1126369.gif" ,
        },
        {
            id: 4,
            name: "Susan" ,
            imgurl : "https://th.bing.com/th/id/OIP.bXsU8MRS_M01DTKoEuHpvQHaJZ?pid=ImgDet&rs=1" ,
        } ,
        {
            id: 5,
            name: "Kevin",
            imgurl : "https://www.motorbiscuit.com/wp-content/uploads/2019/10/Formula-1-race-1024x683.jpg" ,
        },

    ]
  return (
    <div className="stories">
        <div className="story" style={props.theme ? {backgroundColor:"black",color:"white"}:{backgroundColor:"white",color:"black"}}>
        <img src={currentUser.profilePic}  />
        <span style={props.theme ? {backgroundColor:"black",color:"white"}:{backgroundColor:"white",color:"black"}}>{currentUser.name}</span>
        <br/>
        <button>+</button>
         </div>
         {Stories.map(story=>(<div className="story" key={story.id}>
        <img src={story.imgurl}  />
        <br/>
        <span style={props.theme ? {backgroundColor:"black",color:"white"}:{backgroundColor:"white",color:"black"}}>{story.name} </span>
         </div>))}
         </div>
  )
}

export default Stories;
