import Style from "./Proyectos.module.css";
import "./Proyectos.module.css";
import { axiosInstance } from "../services/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
                    <button className={Style.buttongenerate} onClick={generate}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 28.9375C19.6667 28.9375 19.3542 28.885 19.0625 28.78C18.7708 28.6767 18.5 28.5 18.25 28.25L9.25 19.25C8.79167 18.7917 8.5625 18.2083 8.5625 17.5C8.5625 16.7917 8.79167 16.2083 9.25 15.75C9.70833 15.2917 10.3017 15.0517 11.03 15.03C11.76 15.01 12.3542 15.2292 12.8125 15.6875L17.5 20.375V2.5C17.5 1.79167 17.74 1.1975 18.22 0.7175C18.6983 0.239167 19.2917 0 20 0C20.7083 0 21.3025 0.239167 21.7825 0.7175C22.2608 1.1975 22.5 1.79167 22.5 2.5V20.375L27.1875 15.6875C27.6458 15.2292 28.24 15.01 28.97 15.03C29.6983 15.0517 30.2917 15.2917 30.75 15.75C31.2083 16.2083 31.4375 16.7917 31.4375 17.5C31.4375 18.2083 31.2083 18.7917 30.75 19.25L21.75 28.25C21.5 28.5 21.2292 28.6767 20.9375 28.78C20.6458 28.885 20.3333 28.9375 20 28.9375ZM5 40C3.625 40 2.44833 39.5108 1.47 38.5325C0.49 37.5525 0 36.375 0 35V30C0 29.2917 0.239167 28.6975 0.7175 28.2175C1.1975 27.7392 1.79167 27.5 2.5 27.5C3.20833 27.5 3.8025 27.7392 4.2825 28.2175C4.76083 28.6975 5 29.2917 5 30V35H35V30C35 29.2917 35.24 28.6975 35.72 28.2175C36.1983 27.7392 36.7917 27.5 37.5 27.5C38.2083 27.5 38.8017 27.7392 39.28 28.2175C39.76 28.6975 40 29.2917 40 30V35C40 36.375 39.5108 37.5525 38.5325 38.5325C37.5525 39.5108 36.375 40 35 40H5Z" fill="white"/>
                    </svg>
                    </button>
                    <h5 className={Style.buttontext}>Generar manual</h5>
                    <button className={Style.buttoncreate} onClick={create}>
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M41.7083 24.2083H24.2083V41.7083H18.375V24.2083H0.875V18.375H18.375V0.875H24.2083V18.375H41.7083V24.2083Z" fill="url(#paint0_linear_92_5)"/>
                    <defs>
                    <linearGradient id="paint0_linear_92_5" x1="21.2917" y1="0.875" x2="21.2917" y2="41.7083" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#0085FF"/>
                    <stop offset="1" stop-color="#00E0FF"/>
                    </linearGradient>
                    </defs>
                    </svg>
                    </button>
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
