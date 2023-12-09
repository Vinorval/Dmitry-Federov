import Styles from "./AppHeader.module.css";
import React from "react";

import Logo from "../../images/logo/logo.svg";
import WhatsApp from "../../images/icons/WhatsApp.svg";
import Basket from "../../images/icons/basket.svg";

const AppHeader = () => {
    return (
        <header className={Styles.header} >
            <img alt="логотип с именем мастера" src={Logo} className={Styles.header__logo} />
            <div />
            <p className={Styles.header__phoneNumber} >+7 (999) 808 65 48</p>
            <div className={Styles.header__icons} >
                <img alt="иконка whatsApp" src={WhatsApp} className={Styles.icon} />
                <img alt="иконка корзины" src={Basket} className={Styles.icon} />
            </div>
        </header>
    )
}

export default AppHeader;