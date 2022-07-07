import styles from "../styles/Navbar.module.css"
import Image from "next/image";
import React from 'react';
import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false)
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
                    <li className={styles.listItem}><a href="/cardapio">Cardápio</a></li>
                    <li className={styles.listItem}><a href="/restaurantes">Restaurantes</a></li>
                    <li className={styles.listItem}><a href="/delivery">Delivery</a></li>
                    <a href="/"><Image src="/img/logo.png" alt="" width="140px" height="59px" /></a>
                    <li className={styles.listItem}><a href="/lancamentos">Lançamentos</a></li>
                    <li className={styles.listItem}><a href="/promocoes">Promoções</a></li>
                    <li className={styles.listItem}><a href="/contato">Fale conosco</a></li>
                </ul>
            </div>
            <div className={styles.hamburguer} onClick={() => setOpen(!open)}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            <ul onClick={()=>setOpen(false)} className={styles.menu} style={{right: open ? "0px" : "-50vw"}}>
            <li className={styles.listItem}><a href="/cardapio">Cardápio</a></li>
                    <li className={styles.menuItem}><a href="/restaurantes">Restaurantes</a></li>
                    <li className={styles.menuItem}><a href="/delivery">Delivery</a></li>
                    <li className={styles.menuItem}><a href="/lancamentos">Lançamentos</a></li>
                    <li className={styles.menuItem}><a href="/promocoes">Promoções</a></li>
                    <li className={styles.menuItem}><a href="/contato">Fale conosco</a></li>
                    <li className={styles.menuItem}><a href="/">Início</a></li>
            </ul>
        </div>
    );
};

export default Navbar;