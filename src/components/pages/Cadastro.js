import React, { useState } from 'react';

import styles from './Cadastro.module.css';

const Cadastro = ({ onShowLogin }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showLogin, setShowLogin] = useState(false);

    const handleCadastroRealizado = (e) => {
        e.preventDefault();
        console.log("conta criada", { name, email, password });

        const user = {
            name,
            email,
            password,
        };

        localStorage.setItem('user', JSON.stringify(user));

        onShowLogin();
    };


    return (
        <form onSubmit={handleCadastroRealizado}>
            <div className={styles.form_1c}>
                <div className={styles.bv}>
                    <h1>Criar conta de acesso!</h1>
                </div>
            </div>
            <div className={styles.form_1c}>
                <label htmlFor="name">Nome:</label>
                <input
                    type="text"
                    placeholder="Insira seu nome completo!"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className={styles.form_1c}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    placeholder="Insira seu e-mail!"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className={styles.form_1c}>
                <label htmlFor="password">Senha:</label>
                <input
                    type="password"
                    placeholder="Insira sua senha!"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className={styles.criar}>
                <button type="submit" className={styles.btn} >Criar conta</button>
                <button className={styles.btn} value={showLogin} onClick={() => setShowLogin(true)}>Voltar</button>
            </div>
            <div>
            </div>
        </form>
    );
};

export default Cadastro;