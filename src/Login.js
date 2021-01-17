import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <img
        src="https://2672686a4cf38e8c2458-2712e00ea34e3076747650c92426bbb5.ssl.cf1.rackcdn.com/2019-02-06-06-11-02.png"
        alt="spotify logo"
      />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
      {/* button */}
    </div>
  );
}

export default Login;
