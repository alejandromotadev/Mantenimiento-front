import React, { useEffect } from "react";
import { useState } from "react";
import Style from "./Procesos.module.css";
import { axiosInstance } from "../services/axios";
import greyLogo from "../assets/gray_logo.svg";
import Mas from "../assets/Mas.svg";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import { validateToken } from "../services/verifyToken";
import Navbar from "../components/NavItems";

const Procesos = () => {
  const navigate = useNavigate();
  const [payload, setDatos] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  var token = localStorage.getItem("token");
  console.log(localStorage.getItem("token"));
  useEffect(() => {
    getDatos();
  }, []);

  async function getDatos() {
    await validateToken();

    await axiosInstance
      .get("proceso/list/", {
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + token,
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
      .catch((err) => {
        console.log(err);
      });
  }

  async function viewProcess(ID) {
    // Se obtiene el id de cada proceso
    console.log(ID);
    await validateToken();
    localStorage.setItem("proceso_id", ID);
    navigate("/proceso_form/");
  }

  async function navigateProcess() {
    await validateToken();

    let formData = new FormData();
    formData.append(
      "nombre",
      document.getElementById("nombre_proceso_nuevo").value
    );

    await axiosInstance
      .post("proceso/crear/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((result) => {
        console.log(result.data.id);
        alert("Proceso creado");
        viewProcess(result.data.id);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCheckboxChange(event) {
    setIsChecked(event.target.checked);
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  var numProcesos = payload.length;
  const cuadros = [...Array(numProcesos)].map((_, i) => (
    <div key={i}>
      <div className={Style.cont}>
        <div className={Style.imgc} onClick={() => viewProcess(payload[i].id)}>
          <img src={greyLogo} alt="logoProceso" className={Style.icon} />
        </div>
        <div className={Style.textc}>
          <div className={Style.hcontainer}>{payload[i].nombre}</div>
          <label className={Style.check}>
            <input type="checkbox" />
          </label>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <Navbar />
      <div className={Style.main}>
        <div className={Style.content}>
          <h1 className={Style.titulo}> <Link to ='/inicio'> Proyectos </Link>| <Link to ="/fases"> Fases </Link> | Procesos</h1>
          <hr style={{ marginBottom: "20px" }} />
          <div className={Style.container}>{cuadros}</div>

          <div className={Style.buttons}>
            <button className={Style.buttoncreate} onClick={handleOpenModal}>
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M41.7083 24.2083H24.2083V41.7083H18.375V24.2083H0.875V18.375H18.375V0.875H24.2083V18.375H41.7083V24.2083Z"
                  fill="url(#paint0_linear_92_5)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_92_5"
                    x1="21.2917"
                    y1="0.875"
                    x2="21.2917"
                    y2="41.7083"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#0085FF" />
                    <stop offset="1" stop-color="#00E0FF" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
            <h5 className={Style.buttontext}>Nuevo proceso</h5>
          </div>

          <div>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
              <h2>Nuevo proceso</h2>
              <p className={Style.titulo2}>Nombre:</p>
              <div className={Style.inputcont}>
                <input className={Style.input} id="nombre_proceso_nuevo" />
              </div>
              <div className={Style.wrapper}>
                <button className={Style.button63} onClick={navigateProcess}>
                  Crear proceso
                </button>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

export default Procesos;
