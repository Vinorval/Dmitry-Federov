import Styles from "./Navigation.module.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    const arrLinks = [ "Мастер", "Каталог", "LIVE", "Контакты" ];
    const returnLink = (link, key) => (
        <NavLink className={({ isActive }) => [
            Styles.navigation__text,
            isActive ? Styles.navigation__text_type_active : null
        ].filter(Boolean).join(" ")} key={key}>{link}</NavLink>
    )

    return (
        <nav className={Styles.navigation}>
            {arrLinks.map((link, index) => returnLink(link, index))}
        </nav>
    )
}

export default Navigation;