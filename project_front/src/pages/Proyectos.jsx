import Style from "./Proyectos.module.css";
import "./Proyectos.module.css";
import { axiosInstance } from "../services/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUser, faUnlock } from '@fortawesome/free-solid-svg-icons'

const Proyectos = () => {

	const navigate = useNavigate()

    const generate = () => {
        alert('Manual generado alert')
    }

    const create = () => {
        alert('Crear manual modal')
    }

	return (
		<div className={Style.main}>
            <div className={Style.content}>
                <h1 className={Style.titulo}>Proyectos</h1>
                <hr style={{marginBottom: '20px'}} />
                <div className={Style.buttons}>
                    <button className={Style.buttongenerate} onClick={generate}></button>
                    <h5 className={Style.buttontext}>Generar manual</h5>
                    <button className={Style.buttoncreate} onClick={create}></button>
                    <h5 className={Style.buttontext}>Nuevo proyecto</h5>
                </div>
                
                {/* Este texto solo aparecerá cuando no haya proyectos por mapear */}
                <div style={{marginLeft: 'auto', marginRight: 'auto', width: '25%', alignItems: 'center', justifyContent: 'center', textAlign: 'center', display: 'flex', flexDirection: 'column'}}>
                    <h2 style={{margin: '0', fontWeight: '500', color: 'grey'}}>Aquí estarán todos tus proyectos</h2>
                    <h2 style={{margin: '0', color: 'grey', fontWeight: '700'}}>¡Prueba a crear uno!</h2>
                </div>
            </div>
		</div>
	);
};

export default Proyectos;
