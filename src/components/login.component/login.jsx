import styles from "./login.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom/dist";

function Login() {
  const [showpassword, setShowPassword] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.contain}>
        <h1 className={styles.createh1}>Elect.NG</h1>
        <h3 className={styles.createh3}>Welcome Back !</h3>
        <p className={styles.createp}>
          Welcome to <span style={{ color: "#0CBB5C" }}>Elect.NG</span> Online Voting Platform
        </p>
        <form className={styles.createform}>
          <input className={styles.createforminputs} type="text" placeholder="Phone Number" />
          <div className={styles.createformpassword}>
            <input
              className={styles.createforminputs}
              type={showpassword ? "text" : "password"}
              placeholder="Password"
            />
            {showpassword ? (
              <FaEye
                onClick={() => setShowPassword(false)}
                className={styles.showicon}
              />
            ) : (
              <FaEyeSlash
                onClick={() => setShowPassword(true)}
                className={styles.showicon}
              />
            )}
          </div>
          <div className={styles.recoveryactions}>
            <label className={styles.remember}> <input type="checkbox" /> Remember Me</label>
            <p>Forgot Password?</p>
          </div>
          <button type="submit">Log In</button>
          <p className={styles.createp}>
            Don't have an account?
            <Link to='/signup' style={{ color: "#0CBB5C" }}> Create Account</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
