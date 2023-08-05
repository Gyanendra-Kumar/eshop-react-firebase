import React from "react";
import styles from "./Navbar.module.scss";

import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectUserName } from "../../../redux/slice/authSlice";
import { NavLink } from "react-router-dom";
import Loader from "../../loader/Loader";

const Navbar = () => {
  const userName = useSelector(selectUserName);
  // console.log(userName);
  const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.user}>
          <FaUserCircle size={40} color="#fff" />
          <h4>{userName}</h4>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="home" className={activeLink}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="all-products" className={activeLink}>
                All Products
              </NavLink>
            </li>
            <li>
              <NavLink to="add-product" className={activeLink}>
                Add Product
              </NavLink>
            </li>
            <li>
              <NavLink to="orders" className={activeLink}>
                Orders
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
