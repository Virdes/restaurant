import styles from "../styles/Navbar.module.css"
import Image from "next/image";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image src="/img/telephone.png" alt="" width="32" height="32" />
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>CONTATO</div>
                    <div className={styles.text}>(11) 3805-1000 </div>
                </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>Cardápio</li>
                    <li className={styles.listItem}>Produtos</li>
                    <li className={styles.listItem}>Delivery</li>
                    <Image src="/img/logo.png" alt="" width="140px" height="59px" />
                    <li className={styles.listItem}>Lançamentos</li>
                    <li className={styles.listItem}>Promoções</li>
                    <li className={styles.listItem}>Fale Conosco</li>
                </ul>
            </div>
            <div className={styles.item}>
                <div className={styles.cart}>
                    <Image src="/img/cart.png" alt="" width="30px" height="30px" />
                    <div className={styles.counter}>2</div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;