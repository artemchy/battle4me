import React from "react";
import classes from "./Login.module.scss";
import logo from "../../assets/logo.svg";
import fb from "../../assets/fb.svg";
import google from "../../assets/google.svg";
import vk from "../../assets/vk.svg";
import { LoginForm } from "./LoginForm/LoginForm";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className={classes.login}>
      <div className={classes.wrapper}>
        <div className={classes.modal}>
          <div className={classes.borderTop}></div>
          <div className={classes.borderBottom}></div>
          <div className={classes.body}>
            <div className="center">
              <img src={logo} alt="logo" />
            </div>
            <h2>Sign In</h2>
            <div className={classes.icons}>
              <button>
                <img src={fb} alt="facebook" />
              </button>
              <button>
                <img src={google} alt="google" />
              </button>
              <button>
                <img src={vk} alt="vk" />
              </button>
            </div>
            <div className={classes.hr}>or</div>
            <LoginForm />
            <div className={classes.signUp}>
              Not yet in battle?
              <Link to="/sign-up">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
