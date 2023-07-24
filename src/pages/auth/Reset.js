import React, { useState } from "react";
import styles from "./auth.module.scss";
import resetImg from "../../assets/forgot.png";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/config";
import { toast } from "react-toastify";
import { Loader } from "../../components";

const Reset = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const resetPasswordHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        setIsLoading(false);
        toast.success("Check your email for reset link");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
        // ..
      });
    setEmail("");
  };

  return (
    <>
      {isLoading ? <Loader /> : null}

      <section className={`container ${styles.auth}`}>
        <div className={styles.img}>
          <img src={resetImg} alt="reset page" width="400" />
        </div>
        <Card>
          <div className={styles.form}>
            <h2>Reset Password</h2>
            <form onSubmit={resetPasswordHandler}>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="--btn --btn-primary --btn-block">
                Reset Password
              </button>
              <div className={styles.links}>
                <p>
                  <Link to="/login">- Login</Link>
                </p>
                <p>
                  <Link to="/register">- Register</Link>
                </p>
              </div>
            </form>
          </div>
        </Card>
      </section>
    </>
  );
};

export default Reset;
