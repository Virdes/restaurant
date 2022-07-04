import styles from "../../styles/Restaurantes.module.css";

const Restaurantes = () => {
    return (

        <div className={styles.container}>
            <h1 className={styles.title}>ENCONTRE NOSSOS RESTAURANTES</h1>
            <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div className={styles.featured}>
                <div className={styles.featuredItem}>
                    <img 
                        src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/321867241.jpg?k=0c745bfdc9f973f5af798a568c5c7557724f475399b9a5bb99fbd83034f0cdbc&o=&hp=1" 
                        alt="" 
                        className={styles.featuredImg} />
                    <div className={styles.featuredTitles}>
                        <h1>São Paulo - Brasil</h1>
                        <h2>2 restaurantes</h2>
                    </div>
                </div>
                <div className={styles.featuredItem}>
                    <img 
                        src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/249049951.jpg?k=d28d55130ec95a821b20b8b4349c2d240531ab0d7a5534a718959aaf243f3339&o=&hp=1" 
                        alt="" 
                        className={styles.featuredImg} 
                    />
                    <div className={styles.featuredTitles}>
                        <h1>Bariloche - Argentina</h1>
                        <h2>1 restaurante</h2>
                    </div>
                </div>
                <div className={styles.featuredItem}>
                    <img 
                        src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/338420609.jpg?k=4b2f7dbf7faa9be68c8029551747edba2ff0a9fb5e8880a7895128a106c300fc&o=&hp=1" 
                        alt="" 
                        className={styles.featuredImg} 
                    />
                    <div className={styles.featuredTitles}>
                        <h1>Orlando - USA</h1>
                        <h2>3 restaurantes</h2>
                    </div>
                </div>
            </div>

            <h2 className={styles.subtitle}>AVALIE NOSSOS ESTABELECIMENTOS</h2>
            <p className={styles.descmenor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum.
            </p>

        </div> 
        
    )
}

export default Restaurantes;