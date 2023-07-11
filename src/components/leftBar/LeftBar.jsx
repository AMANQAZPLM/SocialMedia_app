import "./leftbar.scss"
import book  from "../../assets/book.png"
import calendar  from "../../assets/calendar.png"
import  comments from "../../assets/comments.png"
import courses  from "../../assets/courses.png"
import  donate from "../../assets/donate.png"
import  friends from "../../assets/friends.png"
import gallery  from "../../assets/gallery.png"
import group  from "../../assets/group.png"
import joystick  from "../../assets/joystick.png"
import market  from "../../assets/market.png"
import memory  from "../../assets/memory.png"
import video  from "../../assets/video.png"
import watch  from "../../assets/watch.png"


export const LeftBar = () => {
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="username">
          <img src="https://www.pngrepo.com/png/275200/180/man-people.png" width="30px" height="30px"  alt="Profile image"/>
  <span>John Baker</span>
          </div>
          <div className="item">
<img src={friends} width="30px" height="30px" />
<span>Friends</span></div>
<div className="item">
<img src={group} width="30px" height="30px" />
<span>Groups</span></div>
<div className="item">
<img src={market} width="30px" height="30px" />
<span>Market Place</span></div>
<div className="item">
<img src={watch} width="30px" height="30px" />
<span>Watch</span></div>
<div className="item">
<img src={memory} width="30px" height="30px" />
<span>Memories</span></div>
        </div>
        <hr/>
        <div className="menu">
          <span>Your Shortcuts</span>
          <div className="item">
<img src={calendar} width="30px" height="30px" />
<span>Events</span></div>
<div className="item">
<img src={joystick} width="30px" height="30px" />
<span>Gaming</span></div>
<div className="item">
<img src={gallery} width="30px" height="30px" />
<span>Gallery</span></div>
<div className="item">
<img src={video} width="30px" height="30px" />
<span>Videos</span></div>
<div className="item">
<img src={comments} width="30px" height="30px" />
<span>Messages</span></div>
        </div>
        <hr/>
      <div className="menu">
<span>Others</span>
<div className="item">
<img src={donate} width="30px" height="30px" />
<span>Fundraisers</span></div>
<div className="item">
<img src={book} width="30px" height="30px" />
<span>Tutorials</span></div>
<div className="item">
<img src={courses} width="30px" height="30px" />
<span>Courses</span></div>



      </div>
      </div>
    </div>
  )
}

export default LeftBar;