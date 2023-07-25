import "./leftbar.scss";
import book from "../../assets/book.png";
import calendar from "../../assets/calendar.png";
import comments from "../../assets/comments.png";
import courses from "../../assets/courses.png";
import donate from "../../assets/donate.png";
import friends from "../../assets/friends.png";
import gallery from "../../assets/gallery.png";
import group from "../../assets/group.png";
import joystick from "../../assets/joystick.png";
import market from "../../assets/market.png";
import memory from "../../assets/memory.png";
import video from "../../assets/video.png";
import watch from "../../assets/watch.png";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const LeftBar = (props) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div
      className="leftbar"
      style={
        props.theme
          ? { backgroundColor: "black", color: "white" }
          : { backgroundColor: "white", color: "black" }
      }
    >
      <div className="container">
        <div
          className="menu"
          style={
            props.theme
              ? { backgroundColor: "#222" }
              : { backgroundColor: "#f6f6f3" }
          }
        >
          <div className="username">
            <img
              src={currentUser.profilePic}
              width="30px"
              height="30px"
              alt="Profile image"
            />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <span style={{ backgroundColor: "white", borderRadius: "50%" }}>
              <img src={friends} width="30px" height="30px" />{" "}
            </span>
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={group} width="30px" height="30px" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={market} width="30px" height="30px" />
            <span>Market Place</span>
          </div>
          <div className="item">
            <span style={{ backgroundColor: "white", borderRadius: "50%" }}>
              <img src={watch} width="30px" height="30px" />
            </span>
            <span>Watch</span>
          </div>
          <div className="item">
            <span style={{ backgroundColor: "white", borderRadius: "50%" }}>
              <img src={memory} width="30px" height="30px" />{" "}
            </span>
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div
          className="menu"
          style={
            props.theme
              ? { backgroundColor: "#222" }
              : { backgroundColor: "#f6f6f3" }
          }
        >
          <span>Your Shortcuts</span>
          <div className="item">
            <img src={calendar} width="30px" height="30px" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={joystick} width="30px" height="30px" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={gallery} width="30px" height="30px" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <span style={{ backgroundColor: "white", borderRadius: "50%" }}>
              <img src={video} width="30px" height="30px" />
            </span>
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={comments} width="30px" height="30px" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div
          className="menu"
          style={
            props.theme
              ? { backgroundColor: "#222" }
              : { backgroundColor: "#f6f6f3" }
          }
        >
          <span>Others</span>
          <div className="item">
            <span style={{ borderRadius: "70%" }}>
              {" "}
              <img src={donate} width="30px" height="30px" />
            </span>
            <span>Fundraisers</span>
          </div>
          <div className="item">
            <span style={{ borderRadius: "70%" }}>
              <img src={book} width="30px" height="30px" />
            </span>
            <span>Tutorials</span>
          </div>
          <div className="item">
            <span style={{ borderRadius: "70%" }}>
              <img src={courses} width="30px" height="30px" />
            </span>
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
