import styles from "./Footer.module.css";

export const Footer = () => {
  const currYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>Some company</p>
      <br />
      <p>{currYear}</p>
    </footer>
  );
};
