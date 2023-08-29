import React, { useState } from 'react';

import styles from './Sistema.module.css';

import logo from '../../img/logo.png';
import pet from '../../img/cat-dog.png';

import Login from './Login';
import Cadastro from './Cadastro';

const Sistema = () => {

    const [showLogin, setShowLogin] = useState(true); // Estado para controlar a exibição dos componentes

    return (
        <section className={styles.body}>
            <section className={styles.container}>
                {showLogin ? <Login onShowCadastro={() => setShowLogin(false)} /> : <Cadastro onShowLogin={() => setShowLogin(true)} />}
                <div className={styles.logo}>
                    <img className={styles.logoimg} src={logo} alt="logo" />
                    <img className={styles.pet} src={pet} alt="catdog" />
                </div>
            </section>
        </section>
    );
};

export default Sistema;