import styles from "../styles/PizzaCard.module.css";
import Image from "next/image";

const PizzaCard = () => {
    return (
        <div className={styles.container}>
            <Image src="/img/japan.png" alt="" width="250" height="250" />
            <h1 className={styles.title}>SUSHI FILADÉLFIA</h1>
            <span className={styles.price}>R$19.90</span>
            <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
    )
}

export default PizzaCard