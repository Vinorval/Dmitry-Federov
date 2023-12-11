import Styles from "./NotFount.module.css";

const NotFound = () => {
    return (
        <section className={Styles.errorNotFound} >
            <span className={Styles.errorNotFound__text} >THE PAGE you a looking for can’t be found.</span>
            <p className={Styles.errorNotFound__number} >404</p>
        </section>
    )
};

export default NotFound;