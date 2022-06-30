import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />

            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>
                        AAAH SIM, NÓS FAZEMOS CULINÁRIA JAPONESA DE QUALIDADE.
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>ENCONTRE NOSSOS RESTAURANTES</h1>
                    <p className={styles.text}>
                        Av. Amador Bueno da Veiga, 1546
                        <br /> Penha de França
                        <br /> São Paulo - SP, 03636-000
                    </p>
                    <p className={styles.text}>
                        Estrada Dom João Nery, 131
                        <br /> Jardim Silva Teles
                        <br /> São Paulo - SP, 08160-620
                    </p>
                    <p className={styles.text}>
                        2565 R. Me gusta #104.
                        <br /> Bogota, 25654
                        <br /> (52) 6589-1010
                    </p>
                    <p className={styles.text}>
                        1654 R. Jean Prato #125.
                        <br /> Rio de Janeiro, 45246
                        <br /> (55) 1125-1212
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>HORÁRIO DE FUNCIONAMENTO</h1>
                    <p className={styles.text}>
                        SEGUNDA A SEXTA-FEIRA
                        <br /> 9:00 - 22:00
                    </p>
                    <p className={styles.text}>
                        SÁBADOS E DOMINGOS
                        <br /> 18:30 - 01:00
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer