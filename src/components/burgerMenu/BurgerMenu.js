import Styles from "./BurgerMenu.module.css";
import React from "react";

import Navigation from "../navigation/Navigation";

const BurgerMenu = ({ close }) => {
    return (
        <div className={Styles.menu} >
            <button onClick={close} ><img /></button>
            <Navigation burger={true} />
            <div>
                <p className={Styles.menu__phone} >+7 (999) 808 65 48</p>
                <img />
            </div>
        </div>
    )
}

export default BurgerMenu;