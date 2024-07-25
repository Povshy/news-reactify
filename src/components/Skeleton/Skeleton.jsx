import styles from "./styles.module.css";

const Skeleton = ({ count = 1, type = "banner" }) => {
  return (
    <>
      {count > 1 ? (
        <ul className={styles.list}>
          {[...Array(count)].map((_, index) => (
            <li
              key={index}
              className={type === "item" ? styles.item : styles.banner}
            ></li>
          ))}
        </ul>
      ) : (
        <ul className={styles.list}>
          <li className={type === "banner" ? styles.banner : styles.item}></li>
        </ul>
      )}
    </>
  );
};

export default Skeleton;
