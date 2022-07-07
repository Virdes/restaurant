import styles from "../../styles/Contato.module.css";

const Contato = () => {
    return (
        <div className={styles.container}>
            <div className={styles.containermenor}>
            <div className={styles.imagemform}>
                <img src="img/undraw_special_event_-4-aj8.svg" alt="" />
            </div>
            <div className={styles.form}>
                <form action="#">
                    <div className={styles.formheader}>
                        <div className={styles.title}>
                            <h1>Fale conosco</h1>
                        </div>
                        <div className={styles.loginbutton}>
                            <button><a href="#">Entrar</a></button>
                        </div>
                    </div>

                    <div className={styles.inputgroup}>
                        <div className={styles.inputbox}>
                            <label htmlFor="firstname">Primeiro nome</label>
                            <input id="firstname" type="text" name="firstname" placeholder="Digite seu primeiro nome" required/>
                        </div>

                        <div className={styles.inputbox}>
                            <label htmlFor="lastname">Sobrenome</label>
                            <input id="lastname" type="text" name="lasttname" placeholder="Digite seu sobrenome" required/>
                        </div> 

                        <div className={styles.inputbox}>
                            <label htmlFor="email">E-mail</label>
                            <input id="email" type="email" name="email" placeholder="Digite seu email" required/>
                        </div>  

                        <div className={styles.inputbox}>
                            <label htmlFor="number">Celular</label>
                            <input id="number" type="tel" name="number" placeholder="(xx) xxxxx-xxxx" required/>
                        </div>

                        <div className={styles.inputbox}>
                            <label htmlFor="password">Senha</label>
                            <input id="password" type="password" name="password" placeholder="Digite sua senha" required/>
                        </div>   

                        <div className={styles.inputbox}>
                            <label htmlFor="Confirmpassword">Confirme sua senha</label>
                            <input id="Confirmpassword" type="password" name="Confirmpassword" placeholder="Digite sua senha" required/>
                        </div> 
                    </div>

                    <div className={styles.genderinputs}>
                        <div className={styles.gendertitle}>
                            <h6>Gênero</h6>
                        </div>

                        <div className={styles.gendergroup}>
                            <div className={styles.genderinput}>
                                <input type="radio" id="female" name="gender" />
                                <label htmlFor="female">Feminino</label>
                            </div>

                            <div className={styles.genderinput}>
                                <input type="radio" id="male" name="gender" />
                                <label htmlFor="male">Masculino</label>
                            </div>

                            <div className={styles.genderinput}>
                                <input type="radio" id="others" name="gender" />
                                <label htmlFor="others">Outros</label>
                            </div>

                            <div className={styles.genderinput}>
                                <input type="radio" id="none" name="gender" />
                                <label htmlFor="none">Prefiro não dizer</label>
                            </div>
                        </div>
                    </div>

                    <div className={styles.continuebutton}>
                        <button><a href="#">Continuar</a></button>
                    </div>
                </form>
            </div>
            </div>
        </div>
        
    )
}

export default Contato;