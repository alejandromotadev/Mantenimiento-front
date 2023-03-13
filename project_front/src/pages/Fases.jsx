import React, { useEffect } from 'react'
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Style from "./Procesos.module.css";
import { axiosInstance } from "../services/axios";
import LogoProject from "../assets/LogoProject.svg";
import Navbar from "../components/NavItems";
import axios from 'axios';

const Fases = () => {
  const [payload, setDatos] = useState([]);
  var token = localStorage.getItem('token')
  console.log(localStorage.getItem('token'))
  useEffect(() => {
    getDatos()
  }, [])

  function getDatos() {
    axiosInstance.get('fases/list/', {
      headers: {
        "Content-type": "application/json",
        "Authorization": 'Bearer ' + token,
      },
    })
      .then((result) => {
        const data = result.data;
        const payLoadArray = data.pay_load;
        const todosLosObjetos = [];
    
        for(let i = 0; i < payLoadArray.length; i++){
          todosLosObjetos.push(payLoadArray[i]);
        }
        console.log(todosLosObjetos[0])
        console.log(todosLosObjetos[0].nombre)
        setDatos(todosLosObjetos);

      })
      .catch((err) => { console.log(err); });
  }
  console.log(payload)
  let cont = 0;

  var numFases = payload.length
  const cuadros = [...Array(numFases)].map((_, i) => (
    
    <div key={i} className={Style.cuadro}>
       
      <div className={Style.cont}>
        <img   src={LogoProject} alt="Mi Imagen SVG" className={Style.logo}/>
        <div className={Style.linea}></div>
        <section style={{textAlign: "left", margin:4}}>
         < Link to='/proceso/create'>Fase {payload[i].nombre}</Link>
         <input type="checkbox" id="status" name="status" value="status" />
        </section>
        
      </div>
      
    </div>
  ));

  return (
    
    <div>
      <Navbar/> 
      <div style={{display: 'flex', flexDirection: 'row'}}>
                    <h1 className={Style.titulo}><Link to ='/inicio'> Proyectos </Link>| <Link to ="/fases"> Fases </Link></h1>
                    <svg style={{marginTop: 'auto', marginBottom: 'auto', cursor: 'pointer'}} width="25" height="25" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35 17.5C35 22.1413 33.1563 26.5925 29.8744 29.8744C26.5925 33.1563 22.1413 35 17.5 35C12.8587 35 8.40752 33.1563 5.12563 29.8744C1.84374 26.5925 0 22.1413 0 17.5C0 12.8587 1.84374 8.40752 5.12563 5.12563C8.40752 1.84374 12.8587 0 17.5 0C22.1413 0 26.5925 1.84374 29.8744 5.12563C33.1563 8.40752 35 12.8587 35 17.5ZM12.0225 13.1972H13.8272C14.1291 13.1972 14.3697 12.95 14.4091 12.6503C14.6059 11.2153 15.5903 10.1697 17.3447 10.1697C18.8453 10.1697 20.2191 10.92 20.2191 12.7247C20.2191 14.1137 19.4009 14.7525 18.1081 15.7238C16.6359 16.7934 15.47 18.0425 15.5531 20.0703L15.5597 20.545C15.562 20.6885 15.6206 20.8254 15.7229 20.9261C15.8252 21.0267 15.963 21.0831 16.1066 21.0831H17.8806C18.0257 21.0831 18.1648 21.0255 18.2673 20.9229C18.3699 20.8204 18.4275 20.6813 18.4275 20.5362V20.3066C18.4275 18.7359 19.0247 18.2787 20.6369 17.0559C21.9691 16.0431 23.3581 14.9188 23.3581 12.5584C23.3581 9.25313 20.5669 7.65625 17.5109 7.65625C14.7394 7.65625 11.7031 8.94687 11.4953 12.6569C11.4923 12.7275 11.5038 12.798 11.5291 12.8641C11.5543 12.9301 11.5928 12.9903 11.6422 13.0409C11.6916 13.0915 11.7508 13.1315 11.8162 13.1583C11.8816 13.1852 11.9518 13.1984 12.0225 13.1972ZM17.1084 27.2913C18.4428 27.2913 19.3594 26.4294 19.3594 25.2634C19.3594 24.0559 18.4406 23.2072 17.1084 23.2072C15.8309 23.2072 14.9012 24.0559 14.9012 25.2634C14.9012 26.4294 15.8288 27.2913 17.1084 27.2913Z" fill="black" fillOpacity="0.3"/>
                    </svg>
                </div>
         <div className={Style.container}>
      {cuadros}
      </div>
    </div>
 
  )
}

export default Fases