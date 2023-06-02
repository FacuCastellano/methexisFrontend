import { BiSearchAlt } from "react-icons/bi";
import "./css/navbar.css";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export function NavBar() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  function menuToggle() {
    setIsMenuVisible(!isMenuVisible);
  }

  function menuBlur() {
    setIsMenuVisible(false);
  }

  return (
    <div className="navbar">
      <div className="visible-bar">
        <div
          className="button-menu"
          onClick={() => {
            menuToggle();
          }}
        >
          Menu
        </div>
        <div className="buscador">
          <input type="text" placeholder="Buscar.." />
          <BiSearchAlt className="icon-bisearchalt" />
        </div>
      </div>

      <div
        className={isMenuVisible ? "menu-nav visible" : "menu-nav"}
        id="menu-nav"
        onMouseLeave={() => {
          menuBlur();
        }}
      >
        <Link className={"menu-option"} to={"/home"}>
          Programa / Nivel
        </Link>

        <Link className={"menu-option"} to={"/subject"}>
          Materia
        </Link>

        <Link className={"menu-option"} to={"/unit"}>
          Unidades
        </Link>

        <Link className={"menu-option"} to={"/topic"}>
          Tema
        </Link>
      </div>
    </div>
  );
}
