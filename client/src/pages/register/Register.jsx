import React, { useState } from "react";
import "./register.scss";
import { Link, useLocation } from "react-router-dom";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import axios from "axios";

export const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  let location = useLocation();

  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
    } catch (err) {
      setErr(err.response.data);
    }
  };

  console.log(err);

  //console.log(location.state?.theme)
  var theme = false;
  if (location.state?.theme != undefined) theme = location.state?.theme;
  const [Theme, setTheme] = useState(theme);

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
          )}{" "}
        </button>
      </div>

      <div
        className="register"
        style={
          Theme
            ? { backgroundColor: "#666666" }
            : { backgroundColor: `rgb(193,190, 255)` }
        }
      >
        <div className="card">
          <div className="left">
            <h1>Love Social</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem,
              eum.
            </p>
            <span>Do you have an Account ?</span>
            <Link to="/login" state={{ theme: Theme }}>
              <button>Login</button>
            </Link>
          </div>
          <div className="right">
            <h1>Register</h1>
            <form>
              <input
                type="text"
                placeholder="Username"
                name="username"
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={handleChange}
              />
              {err && err}
              <button onClick={handleClick}>Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
