import Styles from "./Footer.module.css";
import React from "react";

import Navigation from "../navigation/Navigation";

import { arrSocials } from "../../vendor/utils";

const Footer = () => {
    const arrInfo = [ "Гарантия", "Сертификаты", "Карта сайта", "Подписка на новости" ];
    const createInfoItem = (link, key) => (
        <li key={key} className={Styles.info__link} >{link}</li>
    )

    return (
        <footer className={Styles.footer} >
            <Navigation burger={true} />
            <ul className={Styles.info} >{arrInfo.map((item, index) => createInfoItem(item, index))}</ul>
            <div className={Styles.contact} >
                <p className={Styles.contact__phone} >+7 (999) 808 65 48</p>
                <p className={Styles.contact__workTime} >Пн-пт: с 10:00 до 19:00 ч</p>
                <ul className={Styles.iconsList} >
                    {arrSocials.map((item, index) => (
                        <li key={index} className={Styles.iconsList__item} >
                            <img alt={`иконка соцсети ${item.name}`} src={item.img} className={Styles.iconsList__icon} />
                        </li>
                    ))}
                </ul>
            </div>
            <p className={Styles.footer__author} >© 2020 Дмитрий Федоров</p>
        </footer>
    )
};

export default Footer;