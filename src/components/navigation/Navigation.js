import Styles from "./Navigation.module.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = ({ burger }) => {
    const arrLinks = [ { name: "Мастер", to: "/master" }, { name: "Каталог", to: "/catalog" }, { name: "LIVE", to: "/live" }, { name: "Контакты", to: "/contacts" } ];
    const returnLink = (link, key) => (
        <NavLink to={link.to} className={({ isActive }) => [
            Styles.navigation__text,
            isActive ? Styles.navigation__text_type_active : null
        ].filter(Boolean).join(" ")} key={key}>{link.name}</NavLink>
    )

    return (
        <nav className={`${Styles.navigation} ${burger && Styles.navigation_type_burger}`}>
            {arrLinks.map((link, index) => returnLink(link, index))}
        </nav>
    )
}

export default Navigation;