import styles from "../../styles/Delivery.module.css";
import Image from "next/image";

const Delivery = () => {
    return (
        <div className={styles.container}>
                    <img className={styles.ImagemFundo} src="/img/delivery.png" alt="Fundo" layout="fill" />

                    <h1 className={styles.title}>PEÇA PELO DELIVERY!</h1>
                    <p className={styles.desc}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                    culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <div className={styles.buttonClass}>
                        <button className={styles.buttonDelivery}>Digitar meu endereço</button>
                    </div>
        </div>
        
    )
}

export default Delivery;