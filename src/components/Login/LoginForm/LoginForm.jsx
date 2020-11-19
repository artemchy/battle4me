import React from "react";
import { Link } from "react-router-dom";
import classes from "./LoginForm.module.scss";

export const LoginForm = () => {
  return (
    <form className={classes.loginForm}>
      <div className={classes.email}>
        <label>Email</label>
        <input type="text" />
      </div>
      <div className={classes.password}>
        <label>Password</label>
        <input type="text" />
      </div>
      <div className={classes.forgotPassword}>
        <Link to="/forgot">Forgot Password?</Link>
      </div>
      <button className="btn__style1 large">Sign In</button>
    </form>
  );
};
