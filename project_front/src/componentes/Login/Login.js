import React from 'react'
import style from './styleLogin.module.css'
import logo from './assets/Qualitor.png'
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className={style.main}>
            <div className={style.head}>
                <div classname={style.headcontent}>
                    <img src={logo} alt="logo" className={style.headerimage} />
                </div>
            </div>
            <div className={style.block}>
                <h1 className={style.titulo}>Iniciar sesión</h1>

                <h1 className={style.titlo2}>Usuario</h1>

                <div className={style.inputcont}>
                    <i class="fa fa-user icon"></i>
                    <input className={style.input} type="email" placeholder='Usuario' />
                </div>

                <h1 className={style.titulo2}>Contraseña</h1>

                <div className={style.inputcont}>
                    <i class="fa fa-unlock-alt"></i>
                    <input className={style.input} type="password" placeholder='Password'/>
                </div>

                <div className={style.wrapper}>
                    <Link to='/proceso'> <button className={style.button63}>Entrar</button> </Link>
                </div>
            </div>
        </div>
    )
}

export default Login