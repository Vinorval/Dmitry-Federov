import Styles from "./BurgerMenu.module.css";
import React from "react";

import Navigation from "../navigation/Navigation";

import Close from "../../images/icons/close.svg";
import WhatsApp from "../../images/icons/WhatsApp.svg";

const BurgerMenu = ({ close }) => {
    return (
        <div className={Styles.menu} >
            <button onClick={close} className={Styles.menu__closeButton} ><img alt="кнокпа закрытия меню" src={Close} className={Styles.menu__iconClose} /></button>
            <Navigation burger={true} />
            <div className={Styles.phone} >
                <img alt="иконка whatsapp" src={WhatsApp} className={Styles.phone__social} />
                <p className={Styles.phone__number} >+7 (999) 808 65 48</p>
            </div>
        </div>
    )
}

export default BurgerMenu;