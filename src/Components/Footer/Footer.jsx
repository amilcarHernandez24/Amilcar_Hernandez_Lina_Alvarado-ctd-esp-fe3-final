import logo from "../../assets/logo-white.svg";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_section}>
        <span className={styles.subtitle}>Proyecto</span>
        <span>Examen Frontend | Digital House</span>
      </div>
      <div className={styles.footer_section}>
        <img
          src={logo}
          alt="Logo Dental Studio"
          className={styles.footer_logo}
        />
      </div>
      <div className={styles.footer_section}>
        <span className={styles.subtitle}>Desarrollado por</span>
        <span>
          @Amilcar Hernandez & @Lina Alvarado</span>
      </div>
    </footer>
  );
};

export default Footer;
