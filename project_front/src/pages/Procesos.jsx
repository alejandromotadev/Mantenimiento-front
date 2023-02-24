import React, { useEffect } from 'react'
import { useState } from "react";
import Style from "./Procesos.module.css";
import { axiosInstance } from "../services/axios";
import greyLogo from "../assets/gray_logo.svg";
import axios from 'axios';

const Procesos = () => {
  const [payload, setDatos] = useState([]);
  var token = localStorage.getItem('token')
  console.log(localStorage.getItem('token'))
  useEffect(() => {
    getDatos()
  }, [])

  function getDatos() {
    axiosInstance.get('proceso/list/', {
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

  var numProcesos = payload.length
  const cuadros = [...Array(numProcesos)].map((_, i) => (
    <div key={i} className={Style.cuadro}>
      <div className={Style.cont}>
        <img src={greyLogo} alt="Mi Imagen SVG" className={Style.logo}/>
        {payload[i].nombre}
      </div>
    </div>
  ));

  return (
    <div className={Style.container}>{cuadros}</div>
  )
}

export default Procesos