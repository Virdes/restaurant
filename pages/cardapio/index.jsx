import styles from "../../styles/Cardapio.module.css";
import PizzaCard from "../../components/PizzaCard";

const Cardapio = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>APROVEITE O MELHOR DO NOSSO CARDÁPIO</h1>
            <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className={styles.wrapper}>
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
            </div>
            
        </div>
        
    )
}

export default Cardapio;