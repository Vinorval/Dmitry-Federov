import Styles from "./AppHeader.module.css";
import React from "react";

import Navigation from "../navigation/Navigation";
import BurgerMenu from "../burgerMenu/BurgerMenu";

import Logo from "../../images/logo/logo.svg";
import WhatsApp from "../../images/icons/WhatsApp.svg";
import Basket from "../../images/icons/basket.svg";
import Menu from "../../images/icons/menu.svg";

const AppHeader = () => {
    const [ isOpen, setIsOpen ] = React.useState(false);
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpointLarge = 770;
    let screenLarge = width > breakpointLarge;

    React.useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
         window.addEventListener("resize", handleResizeWindow);
         return () => {
           window.removeEventListener("resize", handleResizeWindow);
         };
    }, []);

    const toggleBurger = () => setIsOpen(!isOpen);

    return (
        <header className={Styles.header} >
            <img alt="логотип с именем мастера" src={Logo} className={Styles.header__logo} />
            { screenLarge && <Navigation /> }
            { screenLarge && <p className={Styles.header__phoneNumber} >+7 (999) 808 65 48</p> }
            <div className={Styles.header__icons} >
                { screenLarge && <img alt="иконка whatsApp" src={WhatsApp} className={Styles.icon} /> }
                <img alt="иконка корзины" src={Basket} className={Styles.icon} />
                { !screenLarge && <img alt="иконка открытия меню для малых экранов" src={Menu} className={Styles.icon} onClick={toggleBurger} /> }
            </div>
            {isOpen && <BurgerMenu close={toggleBurger} />}
        </header>
    )
}

export default AppHeader;