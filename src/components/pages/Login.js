import React, { useState, useContext } from 'react'

import { AuthContext } from '../contexts/Auth'

import styles from './Login.module.css'


const Login = ({ onShowCadastro }) => {

    const { login } = useContext(AuthContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("login success", {email, password})

        login(email, password)
    }

    const handleCreateAccount = (e) => {
        e.preventDefault()
        console.log("create account")
        onShowCadastro()
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.form_1}>
                <div className={styles.bv_login}>
                    <h2>Olá! <br />
                        Seja bem vindo!
                    </h2>
                    <p>Faça seu login</p>
                </div>
                <label htmlFor="email">E-mail:</label>
                <input
                    name="email"
                    id="email"
                    type="email"
                    placeholder="Insira seu e-mail!"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className={styles.form_1}>
                <label htmlFor="password">Senha:</label>
                <input
                    name="password"
                    id="password"
                    type="password"
                    placeholder="Insira sua senha!"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className={styles.btns}>
                <button type='button' onClick={handleCreateAccount} className={styles.btn} >Criar Conta</button>
                <button type='submit' className={styles.btn}>Entrar</button> 
            </div>
        </form>
    )
}

export default Login

