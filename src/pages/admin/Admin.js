import React from "react";
import styles from "./Admin.module.scss";
import {
  Navbar,
  Home,
  ViewProducts,
  AddProduct,
  Orders,
} from "../../components/admin/";
import { Route, Routes } from "react-router-dom";

const Admin = () => {
  return (
    <div className={styles.admin}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.content}>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="all-products" element={<ViewProducts />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="orders" element={<Orders />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
