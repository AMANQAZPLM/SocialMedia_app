import "./posts.scss";
import Post from "../post/Post";
import React, { useContext } from "react";
import ThemeContext from "../../context/themeContext";
import { useQuery } from "react-query";
import { makeRequest } from "../../axios";

const Posts = (props) => {
  const { isLoading, error, data } = useQuery(["posts"], () =>
    makeRequest.get("/posts?userId=" + userId).then((res) => {
      return res.data;
    })
  );

  const theme = useContext(ThemeContext);
  return (
    <div
      className="posts"
      style={
        props.theme || theme
          ? { backgroundColor: "black", color: "white" }
          : { backgroundColor: "white", color: "black" }
      }
    >
      {error
        ? "Something went wrong!"
        : isLoading
        ? "loading"
        : data.map((post) => (
            <Post post={post} theme={props.theme} key={post.id} />
          ))}
    </div>
  );
};

export default Posts;
