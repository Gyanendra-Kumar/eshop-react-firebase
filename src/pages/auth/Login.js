import React, { useState } from "react";
import styles from "./auth.module.scss";
import loginImg from "../../assets/login.png";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import Card from "../../components/card/Card";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { toast } from "react-toastify";
import { Loader } from "../../components";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const loginUserHandler = (e) => {
    e.preventDefault();
    // console.log(email, password);
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        setIsLoading(false);
        toast.success("Logged in successfully");
        navigate("/");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };

  // login with google
  const provider = new GoogleAuthProvider();

  const signInWithGoogleHandler = () => {
    setIsLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        // const user = result.user;
        setIsLoading(false);
        toast.success("Logged in successful");
        navigate("/");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };

  return (
    <>
      {isLoading ? <Loader /> : null}

      <section className={`container ${styles.auth}`}>
        {/* Image container */}
        <div className={styles.img}>
          <img src={loginImg} alt="Login images" width="400px" />
        </div>

        {/* Form Container */}
        <Card>
          <div className={styles.form}>
            <h2>Login</h2>

            <form onSubmit={loginUserHandler}>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" className="--btn --btn-primary --btn-block">
                Login
              </button>

              <div className={styles.links}>
                <Link to="/reset">Forgot Password</Link>
              </div>
              <p>-- or --</p>
            </form>

            {/* login with google button */}
            <button
              className="--btn --btn-danger --btn-block"
              onClick={signInWithGoogleHandler}
            >
              <FaGoogle color="#fff" />
              Login With Google
            </button>

            <span className={styles.register}>
              <p>Don't have an account?</p>
              <Link to="/register">Register</Link>
            </span>
          </div>
        </Card>
      </section>
    </>
  );
};

export default Login;
