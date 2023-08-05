import React from "react";
import { useSelector } from "react-redux";
import { selectEmail, selectIsLoggedIn } from "../../redux/slice/authSlice";
import { Link } from "react-router-dom";
import Loader from "../loader/Loader";

const AdminOnlyRoute = ({ children }) => {
  const userEmail = useSelector(selectEmail);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (userEmail === "gyan.mu@gmail.com") {
    return children;
  }
  return (
    <>
      {isLoggedIn === false ? (
        <Loader />
      ) : (
        <section style={{ height: "82vh" }}>
          <div className="container">
            <h2>Permission Denied.</h2>
            <p>This page can only be view by an Admin Users.</p>
            <br />
            <Link to="/">
              <button className="--btn"> &larr; Back to Home</button>
            </Link>
          </div>
        </section>
      )}
    </>
  );
};

export default AdminOnlyRoute;

export const AdminOnlyLink = ({ children }) => {
  const userEmail = useSelector(selectEmail);

  if (userEmail === "gyan.mu@gmail.com") {
    return children;
  }
  return null;
};
