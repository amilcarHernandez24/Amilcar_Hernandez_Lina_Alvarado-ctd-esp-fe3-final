import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import iconMoon from "../../assets/icon_moon.svg";
import styles from "./navbar.module.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  return (
    <nav className={styles.nav_light}>
      <img src={logo} className={styles.logo} alt="Logo Dental Studio" />
      <div className={styles.div_links}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.nav_link_active : styles.nav_link
          }
        >
          Inicio
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? styles.nav_link_active : styles.nav_link
          }
        >
          Contacto
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            isActive ? styles.nav_link_active : styles.nav_link
          }
        >
          Favoritos
        </NavLink>
      </div>
      <button className={styles.button_light}>
        <img src={iconMoon} alt="" />
      </button>
    </nav>
  );
};

export default Navbar;
