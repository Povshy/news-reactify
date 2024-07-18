import { formatDate } from "../../helpers/formatDate";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        NEWS REACTIFY <span style={{ color: "#1abfd5" }}>by Vlad Povshy</span>
      </h1>
      <p className={styles.date}>{formatDate(new Date())}</p>
    </header>
  );
};

export default Header;
