//import React from 'react'
import "./home.scss";
import Stories from "../../components/stories/Stories";
import Posts from "../../components/posts/Posts";

const Home = (props) => {
  //

  return (
    <div
      className="home"
      style={
        props.theme
          ? { backgroundColor: "black", color: "white" }
          : { backgroundColor: "white", color: "black" }
      }
    >
      <Stories theme={props.theme} />
      <br />
      <Posts theme={props.theme} />
    </div>
  );
};

export default Home;
