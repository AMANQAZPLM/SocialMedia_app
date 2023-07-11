
import "./rightbar.scss"
import user from "../../assets/user.png";

export const RightBar = () => {
  return (
    <div className="rightbar"><
      div className="container">
      <div className="item">
        <span>Suggestions for You</span>
      <div className="user">
        <div className="userinfo">
          <img src={user} alt="image of person"/>
        <span>Jack Smith </span>
        </div>
         <div className="buttons">
          <button>Follow</button>
          <button>Dismiss</button>
         </div>
      </div>
      <div className="user">
        <div className="userinfo">
          <img src={user} alt="image of person"/>
        <span>Jack Smith </span>
        </div>
         <div className="buttons">
          <button>Follow</button>
          <button>Dismiss</button>
         </div>
      </div> 
      </div>
      <div className="item">
        <span>Latest Activites</span>
        <div className="user">
        <div className="userinfo">
          <img src={user} alt="image of person"/>
        <p><span>Jack Smith </span>
        changed their profile picture.</p>
        </div>
         <span>1 min ago</span>
      </div> 
      </div>
      <div className="item">
        <span>Online Friends</span>
        <div className="user">
        <div className="userinfo">
          <img src={user} alt="image of person"/>
        
          <div className="online" /> 
           <div className="uname">   Jack Smith </div>
        </div>
            </div> 
            <div className="user">
        <div className="userinfo">
          <img src={user} alt="image of person"/>
        
          <div className="online" /> 
           <div className="uname">   Jack Smith 2 </div>
        </div>
            </div>
     
      </div>
      </div></div>
  )
}

export default RightBar;