import styles from "./Footer.module.css";

export const Footer = () => {
  const currYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>God Sutta Kuruvi company</p>
      <p>{currYear}</p>
    </footer>
  );
};
