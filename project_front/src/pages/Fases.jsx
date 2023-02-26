import React, { useEffect } from 'react'
import { useState } from "react";
import Style from "./Procesos.module.css";
import { axiosInstance } from "../services/axios";
import greyLogo from "../assets/LogoProject.svg";
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
      {/* <Navbar/> */}
      <div className={Style.cont}>
        <img   src={greyLogo} alt="Mi Imagen SVG" className={Style.logo}/>
        <div className={Style.linea}></div>
        <section style={{textAlign: "left", margin:4}}>
         < a href='/proceso/create'>Fase {payload[i].nombre}</a>
         <input type="checkbox" id="status" name="status" value="status" />
        </section>
        
      </div>
      
    </div>
  ));

  return (
    <div className={Style.container}>{cuadros}</div>
  )
}

export default Fases