import { useState } from "react";
import styles from "./AddProduct.module.scss";
import Card from "../../card/Card";

const categories = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Electronics" },
  { id: 4, name: "Fashion" },
];

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    imageURL: "",
    price: null,
    category: "",
    brand: "",
    desc: "",
  });

  const handleInputChange = (e) => {};
  const handleImageChange = (e) => {};

  return (
    <div className={styles.product}>
      <h1>Add New Product</h1>

      <Card cardClass={styles.card}>
        <form>
          <label>Product Name:</label>
          <input
            type="text"
            placeholder="Product Name"
            required
            name="name"
            value={product.name}
            onChange={(e) => handleInputChange(e)}
          />

          <label>Product Image:</label>
          <Card cardClass={styles.group}>
            <div className={styles.progress}>
              <div className={styles["progress-bar"]} style={{ width: "30%" }}>
                Uploading 30%
              </div>
            </div>
            <input
              type="file"
              placeholder="Product image"
              accept="image/*"
              name="image"
              onChange={(e) => handleImageChange(e)}
            />
            <input
              type="text"
              required
              name="imageURL"
              value={product.imageURL}
              onChange={(e) => handleInputChange(e)}
              disabled
            />
          </Card>

          <label>Product Price:</label>
          <input
            type="number"
            placeholder="Product Price"
            required
            name="price"
            value={product.price}
            onChange={(e) => handleInputChange(e)}
          />

          <label>Product Category:</label>
          <select
            name="category"
            required
            value={product.category}
            onChange={(e) => handleInputChange(e)}
          >
            <option value="" disabled>
              --Choose Product Category--
            </option>
            {categories.map((category) => {
              return (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              );
            })}
          </select>

          <label>Product Company / Brand:</label>
          <input
            type="text"
            name="brand"
            placeholder="Product brand"
            required
            value={product.brand}
            onChange={(e) => handleInputChange(e)}
          />

          <label>Product Description: </label>
          <textarea
            name="desc"
            required
            value={product.desc}
            onChange={(e) => handleInputChange(e)}
            cols="30"
            rows="10"
          ></textarea>

          <button type="submit" className="--btn --btn-primary">
            Save Product
          </button>
        </form>
      </Card>
    </div>
  );
};

export default AddProduct;
