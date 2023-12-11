import Styles from "./NotFount.module.css";
import imgNotFound from "../../images/NotFound.svg";

const NotFound = () => {
    return (
        <section className={Styles.errorNotFound} >
            <span className={Styles.errorNotFound__text} >THE PAGE you a looking for can’t be found.</span>
            <img alt="ошибка 404" src={imgNotFound} className={Styles.errorNotFound__img} />
        </section>
    )
};

export default NotFound;