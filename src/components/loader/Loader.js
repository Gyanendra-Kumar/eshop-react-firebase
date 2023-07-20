import ReactDom from "react-dom";
import loaderImg from "../../assets/loader.gif";
import styles from "./Loader.module.scss";

const Loader = () => {
  return ReactDom.createPortal(
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <img src={loaderImg} alt="Loading..." />
      </div>
    </div>,
    document.getElementById("loader")
  );
};

export default Loader;
