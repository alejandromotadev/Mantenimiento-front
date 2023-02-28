import { useEffect, useState } from 'react';
import Style from "./FormularioManual.module.css";
import { axiosInstance } from "../services/axios";
import Navbar from "../components/NavItems";

const FormularioManual = () => {
  //Datos
  const [identificadorProyecto, setIdentificadorProyecto] = useState(null);
  const [identificador, setIdentificador] = useState("");
  const [historia, setHistoria] = useState(null);
  const [alcance, setAlcance] = useState(null);
  const [vision, setVision] = useState(null);
  const [mision, setMision] = useState(null);
  const [politicas, setPoliticas] = useState(null);

  //Documentos
  const [organizacionEmpresa, setOrganizacionEmpresa] = useState([]);
  const [organigrama, setOrganigrama] = useState([]);
  const [vocabulario, setVocabulario] = useState([]);
  const [funciones, setFunciones] = useState([]);

  const getProyecto = async() => {
    await axiosInstance
    .get("proyectos/list", { 
      headers: {
      "Content-type": "multipart/form-data",
      "Authorization": "Bearer " + localStorage.getItem("token"),
      },
    })
    .then(({data}) => {
      console.log(data);
      setIdentificadorProyecto(data.pay_load[data.pay_load.length-1].id);
      setIdentificador(data.pay_load[data.pay_load.length-1].name);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const postManual = async () => {
    let formData = new FormData();
    console.log(identificadorProyecto)
    formData.append("proyecto", identificadorProyecto);
    formData.append("id_manual", identificador);
    formData.append("historia", historia);
    formData.append("alcance", alcance);
    formData.append("vision", vision);
    formData.append("mision", mision);
    formData.append("organizacion_empresa", organizacionEmpresa[0]);
    formData.append("organigrama", organigrama[0]);
    formData.append("vocabulario", vocabulario[0]);
    formData.append("funciones_puestos", funciones[0]);
    formData.append("politicas", politicas);

    console.log(formData);
    await axiosInstance
      .post("manual/list/", formData, {
        headers: {
          "Content-type": "multipart/form-data",
          "Authorization": "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((result) => {
        console.log(result);
        alert("Manual creado");
        window.location = '/proceso/create'
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    getProyecto();
  }, []);

  return (
    <div>
      <Navbar/>
      <div className={Style.formWrapper}>
        <form onSubmit={onSubmit}>
          <div>
            <h1>Creación de manual de calidad</h1>
          </div>
          <div>
            {identificador ? (
              <h2>
                <b>{identificador}</b>
              </h2>
            ) : (
              <div>
                <h2>
                  Nombre: <b>_________</b>
                </h2>
                <input
                  className={Style.styleInput}
                  placeholder="Identificador"
                  onBlur={(e) => setIdentificador(e.target.value)}
                  onSubmit={(e) => setIdentificador(e.target.value)}
                ></input>
              </div>
            )}
          </div>
          <div>
            <h3>Historia: </h3>
            <input
              className={Style.styleInput}
              placeholder="Historia"
              onChange={(e) => setHistoria(e.target.value)}
              onBlur={(e) => setHistoria(e.target.value)}
            ></input>
          </div>
          <div>
            <h3>Alcance: </h3>
            <input
              className={Style.styleInput}
              placeholder="Alcance"
              onChange={(e) => setAlcance(e.target.value)}
              onBlur={(e) => setAlcance(e.target.value)}
            ></input>
          </div>
          <div>
            <h3>Visión: </h3>
            <input
              className={Style.styleInput}
              placeholder="Visión"
              onChange={(e) => setVision(e.target.value)}
              onBlur={(e) => setVision(e.target.value)}
            ></input>
          </div>
          <div>
            <h3>Misión: </h3>
            <input
              className={Style.styleInput}
              placeholder="Misión"
              onChange={(e) => setMision(e.target.value)}
              onBlur={(e) => setMision(e.target.value)}
            ></input>
          </div>
          <div>
            <h3>Organización de la empresa:</h3>
            <table>
              <tbody>
                {organizacionEmpresa.length >= 1 ? (
                  organizacionEmpresa.map((ev, index) => {
                    return (
                      <tr key={ev.number}>
                        <td>{ev.name}</td>
                        <td className={Style.file}>
                          <label htmlFor={"docOrganizacion"}>
                            Elegir archivo
                          </label>
                          <input
                            id={"docOrganizacion"}
                            type="file"
                            accept=".pdf"
                          ></input>
                        </td>
                      </tr>
                    );
                  })
                ) : 
                  <tr>
                    <td>Sin archivos seleccionados</td>
                    <td className={Style.file}>
                      <label htmlFor="docOrganizacion">Elegir archivo</label>
                      <input
                        id="docOrganizacion"
                        type="file"
                        accept=".pdf"
                        onChange={({ target }) =>
                          setOrganizacionEmpresa([...target.files])
                        }
                      ></input>
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
          <div>
            <h3>Organigrama:</h3>
            <table>
              <tbody>
                {organigrama.length >= 1 ? (
                  organigrama.map((ev, index) => {
                    return (
                      <tr key={ev.number}>
                        <td>{ev.name}</td>
                        <td className={Style.file}>
                          <label htmlFor={"docOrganigrama"}>
                            Elegir archivo
                          </label>
                          <input
                            id={"docOrganigrama"}
                            type="file"
                            accept=".pdf"
                          ></input>
                        </td>
                      </tr>
                    );
                  })
                ) : 
                  <tr>
                    <td>Sin archivos seleccionados</td>
                    <td className={Style.file}>
                      <label htmlFor="docOrganigrama">Elegir archivo</label>
                      <input
                        id="docOrganigrama"
                        type="file"
                        accept=".pdf"
                        onChange={({ target }) =>
                          setOrganigrama([...target.files])
                        }
                      ></input>
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
          <div>
            <h3>Vocabulario:</h3>
            <table>
              <tbody>
                {vocabulario.length >= 1 ? (
                  vocabulario.map((ev, index) => {
                    return (
                      <tr key={ev.number}>
                        <td>{ev.name}</td>
                        <td className={Style.file}>
                          <label htmlFor={"docVocabulario"}>
                            Elegir archivo
                          </label>
                          <input
                            id={"docVocabulario"}
                            type="file"
                            accept=".pdf"
                          ></input>
                        </td>
                      </tr>
                    );
                  })
                ) : 
                  <tr>
                    <td>Sin archivos seleccionados</td>
                    <td className={Style.file}>
                      <label htmlFor="docVocabulario">Elegir archivo</label>
                      <input
                        id="docVocabulario"
                        type="file"
                        accept=".pdf"
                        onChange={({ target }) =>
                          setVocabulario([...target.files])
                        }
                      ></input>
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
          <div>
            <h3>Funciones de los puestos:</h3>
            <table>
              <tbody>
                {funciones.length >= 1 ? (
                  funciones.map((ev, index) => {
                    return (
                      <tr key={ev.number}>
                        <td>{ev.name}</td>
                        <td className={Style.file}>
                          <label htmlFor={"docFunciones"}>
                            Elegir archivo
                          </label>
                          <input
                            id={"docFunciones"}
                            type="file"
                            accept=".pdf"
                          ></input>
                        </td>
                      </tr>
                    );
                  })
                ) : 
                  <tr>
                    <td>Sin archivos seleccionados</td>
                    <td className={Style.file}>
                      <label htmlFor="docFunciones">Elegir archivo</label>
                      <input
                        id="docFunciones"
                        type="file"
                        accept=".pdf"
                        onChange={({ target }) =>
                          setFunciones([...target.files])
                        }
                      ></input>
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
          <div>
            <h3>Políticas: </h3>
            <input
              className={Style.styleInput}
              placeholder="Políticas"
              onChange={(e) => setPoliticas(e.target.value)}
              onBlur={(e) => setPoliticas(e.target.value)}
            ></input>
          </div>
          <div className={Style.btnContainer}>
            <button className={Style.btnSubmit} onClick={postManual}>
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormularioManual;
