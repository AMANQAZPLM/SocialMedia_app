import { useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./login.scss";
import { AuthContext } from "../../context/authContext";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Login = (props) => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  //dark mode
  let location = useLocation();
  // console.log(location.state?.theme)
  var theme = false;
  if (location.state?.theme != undefined) theme = location.state?.theme;
  const [Theme, setTheme] = useState(theme);
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setErr(err.response.data);
    }
  };
  return (
    <div className="theme">
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "97%",
          marginTop: "15px",
          height: "30px",
          width: "10px",
          padding: "5px",
        }}
      >
        <button
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => setTheme(!Theme)}
        >
          {Theme ? (
            <LightModeIcon style={{ color: "white" }} />
          ) : (
            <DarkModeIcon />
          )}
        </button>
      </div>

      <div
        className="login"
        style={
          Theme
            ? { backgroundColor: "#666666" }
            : { backgroundColor: `rgb(193,190, 255)` }
        }
      >
        <div className="card">
          <div className="left">
            <h1>Hello World!</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem,
              eum.
            </p>
            <span>Don't have an Account ?</span>
            <Link to="/register" state={{ theme: Theme }}>
              <button>Register</button>
            </Link>
          </div>
          <div className="right">
            <h1>Login</h1>
            <form>
              <input
                type="text"
                placeholder="Username"
                name="username"
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
              {err && err}
              <button onClick={handleLogin}>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
