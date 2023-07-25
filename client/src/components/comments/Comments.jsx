import "./comments.scss";
import { AuthContext } from "../../context/authContext";
import ThemeContext from "../../context/themeContext";
import { useContext, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { makeRequest } from "../../axios";
import moment from "moment";

const Comments = (props) => {
  const theme = useContext(ThemeContext);
  const [desc, setDesc] = useState("");
  const { currentUser } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery(["comments"], () =>
    makeRequest.get("/comments?postId=" + postId).then((res) => {
      return res.data;
    })
  );

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newComment) => {
      return makeRequest.post("/comments", newComment);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["comments"]);
      },
    }
  );

  const handleClick = async (e) => {
    e.preventDefault();
    mutation.mutate({ desc, postId });
    setDesc("");
  };

  return (
    <div className="comments">
      <div
        className="write"
        style={
          props.theme || theme
            ? { backgroundColor: "#222", color: "white" }
            : { backgroundColor: "#f6f6f3", color: "black" }
        }
      >
        <img src={"/upload/" + currentUser.profilePic} />
        <input
          type="text"
          placeholder="write a comment"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          style={
            props.theme || theme
              ? { backgroundColor: "#222", color: "white" }
              : { backgroundColor: "#f6f6f3", color: "black" }
          }
        />
        <button onClick={handleClick}>Send</button>
      </div>
      {error
        ? "Something went wrong"
        : isLoading
        ? "loading"
        : data.map((comment) => (
            <div
              className="comment"
              style={
                props.theme || theme
                  ? { backgroundColor: "#222", color: "white" }
                  : { backgroundColor: "#f6f6f3", color: "black" }
              }
              key={comment.id}
            >
              <img src={"/upload/" + comment.profilePic} alt="" />
              <div className="info">
                <span>{comment.name}</span>
                <p>{comment.desc}</p>
              </div>
              <span className="date">
                {moment(comment.createdAt).fromNow()}
              </span>
            </div>
          ))}
    </div>
  );
};

export default Comments;
