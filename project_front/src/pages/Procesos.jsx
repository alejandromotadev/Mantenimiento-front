import React, { useEffect } from 'react'
import { useState } from "react";
import Style from "./Procesos.module.css";
import { axiosInstance } from "../services/axios";
import greyLogo from "../assets/gray_logo.svg";
import Mas from "../assets/Mas.svg";
import { useNavigate } from "react-router-dom";
import Modal from "../components/VentanaModal";

const Procesos = () => {
  const navigate = useNavigate()
  const [payload, setDatos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
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

        for (let i = 0; i < payLoadArray.length; i++) {
          todosLosObjetos.push(payLoadArray[i]);
        }
        setDatos(todosLosObjetos);

      })
      .catch((err) => { console.log(err); });
  }

  function viewProcess(ID) {
    // Se obtiene el id de cada proceso
    console.log('ID');
  }

  function navigateProcess() {
    navigate('/proceso/2')
  }

  function handleCheckboxChange(event) {
    setIsChecked(event.target.checked);
  }

  function OpenModal() {
    setShowModal(true);
  }

  function CloseModal() {
    setShowModal(false);
  }

  var numProcesos = payload.length
  const cuadros = [...Array(numProcesos)].map((_, i) => (
    <div key={i}>
      <div className={Style.cont}  >
        <div className={Style.imgc} onClick={() => viewProcess(payload[i].id)}>
          <img src={greyLogo} alt='logoProceso' className={Style.icon} />
        </div>
        <div className={Style.textc}>
          <div className={Style.hcontainer}>
            {payload[i].nombre}
          </div>
          <label className={Style.check}>
            <input type="checkbox" />
          </label>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <h1 className={Style.titulo}>Proyectos | Fases | Procesos</h1>
      <hr style={{ marginBottom: '20px', width: 790 }} />
      <div className={Style.container}>
        {/* <div className={Style.cont} >
          <div className={Style.imgc} onClick={OpenModal}>
            <img src={Mas} alt='logoAdd' className={Style.icon} />
          </div>

          <div className={Style.textc}>
            <div className={Style.hcontainer}>
              Crear nuevo proceso
            </div>
          </div>
        </div> */}
        {cuadros}
      </div>

      <div className={Style.buttons}>
        <button className={Style.buttoncreate} onClick={OpenModal}>
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M41.7083 24.2083H24.2083V41.7083H18.375V24.2083H0.875V18.375H18.375V0.875H24.2083V18.375H41.7083V24.2083Z" fill="url(#paint0_linear_92_5)" />
            <defs>
              <linearGradient id="paint0_linear_92_5" x1="21.2917" y1="0.875" x2="21.2917" y2="41.7083" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0085FF" />
                <stop offset="1" stop-color="#00E0FF" />
              </linearGradient>
            </defs>
          </svg>
        </button>
        <h5 className={Style.buttontext}>Nuevo proceso</h5>
      </div>

      <div>
        {showModal && (
          <Modal title="Nuevo proceso" onClose={CloseModal}>
            <p className={Style.titulo2}>Nombre:</p>
            <div className={Style.inputcont}>
              <input className={Style.input} />
            </div>
            <div className={Style.wrapper}>
              <button className={Style.button63} onClick={navigateProcess}>Entrar</button>
            </div>
          </Modal>
        )}
      </div>
    </>

  )
}

export default Procesos

