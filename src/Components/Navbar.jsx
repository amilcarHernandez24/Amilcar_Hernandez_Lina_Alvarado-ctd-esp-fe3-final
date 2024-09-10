import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Logo.svg";
import iconMoon from "../assets/icon_moon.svg";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  return (
    <nav className="nav-light">
      <img src={logo} className="logo" alt="Logo Dental Studio" />
      <div className="div-links">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}>
          Inicio
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}>
          Contacto
        </NavLink>
        <NavLink to="/favorites" className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}>
          Favoritos
        </NavLink>
      </div>
      <button className="button-light">
        <img src={iconMoon} alt="" />
      </button>
    </nav>
  );
};

export default Navbar;
