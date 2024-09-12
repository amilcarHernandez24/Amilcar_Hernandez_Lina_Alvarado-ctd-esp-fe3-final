import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import iconMoon from "../../assets/icon_moon.svg";
import iconSun from "../../assets/icon_sun.svg";
import styles from "./navbar.module.css";
import { useDentistStates } from "../utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useDentistStates();

  const handleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <nav className={styles.nav_light}>
      <Link to={"/"}>
        <img src={logo} className={styles.logo} alt="Logo Dental Studio" />
      </Link>
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
      <button
        className={state.theme ? styles.button_light : styles.button_dark}
        onClick={handleTheme}
      >
        <img src={state.theme ? iconMoon : iconSun} alt="" />
      </button>
    </nav>
  );
};

export default Navbar;
