import "./rightbar.scss";
import user from "../../assets/user.png";

const RightBar = (props) => {
  //console.log("right",props.theme)
  return (
    <div
      className="rightbar"
      style={
        props.theme
          ? { backgroundColor: "black", color: "white" }
          : { backgroundColor: "white", color: "black" }
      }
    >
      <div className="container">
        <div
          className="item"
          style={
            props.theme
              ? { backgroundColor: "#222" }
              : { backgroundColor: "#f6f6f3" }
          }
        >
          <span>Suggestions for You</span>
          <div className="user">
            <div className="userinfo">
              <img src={user} alt="image of person" />
              <span>Jack Smith </span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src={user} alt="image of person" />
              <span>Jack Smith </span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>
        <hr
          style={{
            height: "0.5px",
            backgroundColor: "#666666",
            marginBottom: "15px",
          }}
        />
        <div
          className="item"
          style={
            props.theme
              ? { backgroundColor: "#222" }
              : { backgroundColor: "#f6f6f3" }
          }
        >
          <span>Latest Activites</span>
          <div className="user">
            <div className="userinfo">
              <img src={user} alt="image of person" />
              <p>Jack Smith changed their profile picture.</p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <hr
          style={{
            height: "0.5px",
            backgroundColor: "#666666",
            marginBottom: "15px",
          }}
        />
        <div
          className="item"
          style={
            props.theme
              ? { backgroundColor: "#222" }
              : { backgroundColor: "#f6f6f3" }
          }
        >
          <span>Online Friends</span>
          <div className="user">
            <div className="userinfo">
              <img src={user} alt="image of person" />

              <div className="online" />
              <div className="uname"> Jack Smith </div>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src={user} alt="image of person" />

              <div className="online" />
              <div className="uname"> Jack Smith 2 </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
