import { useState } from "react";

import Style from "./FormularioManual.module.css";
import { axiosInstance } from "../services/axios";

const FormularioManual = () => {
  //Datos
  const [identificador, setIdentificador] = useState(null);
  const [historia, setHistoria] = useState(null);
  const [alcance, setAlcance] = useState(null);
  const [vision, setVision] = useState(null);
  const [mision, setMision] = useState(null);
  const [politicas, setPoliticas] = useState(null);

  //Documentos
  const [organizacionEmpresa, setOrganizacionEmpresa] = useState(null);
  const [organigrama, setOrganigrama] = useState(null);
  const [vocabulario, setVocabulario] = useState(null);
  const [funciones, setFunciones] = useState(null);

  const postManual = async () => {
    let formData = new FormData();

    formData.append("id_manual", identificador);
    formData.append("historia", historia);
    formData.append("alcance", alcance);
    formData.append("vision", vision);
    formData.append("mision", mision);
    formData.append("organizacion_empresa", organizacionEmpresa);
    formData.append("organigrama", organigrama);
    formData.append("categoria", vocabulario);
    formData.append("funciones_puestos", funciones);
    formData.append("politicas", politicas);

    console.log(formData)
    await axiosInstance
      .post("manual/list/", formData, {
        headers: {
          "Content-type": "multipart/form-data",
          Authorization: "Token" + localStorage.getItem("token"),
        },
      })
      .then((result) => {
        console.log(result);
        alert("Manual creado");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className={Style.formWrapper}>
        <form onSubmit={onSubmit}>
          <div>
            <h1>Manual</h1>
          </div>
          <div>
            {identificador ? (
              <h3>
                Identificador: <b>{identificador}</b>
              </h3>
            ) : (
              <div>
                <h3>
                  Identificador: <b>__.__.__.__</b>
                </h3>
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
            <h3>Organizacion de la empresa:</h3>
            <table>
              <tbody>
                {organizacionEmpresa ? (
                  <tr>
                    <td>{organizacionEmpresa.name}</td>
                    <td className={Style.file}>
                      <label htmlFor={"docOrganizacion"}>Elegir archivo</label>
                      <input
                        id={"docOrganizacion"}
                        type="file"
                        accept=".pdf"
                      ></input>
                    </td>
                  </tr>
                ) : (
                  <tr>
                    <td>Sin archivos seleccionados</td>
                    <td className={Style.file}>
                      <label htmlFor="docOrganizacion">Elegir archivo</label>
                      <input
                        id="docOrganizacion"
                        type="file"
                        accept=".pdf"
                        onChange={({ target }) =>
                          setOrganizacionEmpresa(...target.files)
                        }
                      ></input>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div>
            <h3>Organigrama:</h3>
            <table>
              <tbody>
                {organigrama ? (
                  <tr>
                    <td>{organigrama.name}</td>
                    <td className={Style.file}>
                      <label htmlFor={"docOrganigrama"}>Elegir archivo</label>
                      <input
                        id={"docOrganigrama"}
                        type="file"
                        accept=".pdf"
                      ></input>
                    </td>
                  </tr>
                ) : (
                  <tr>
                    <td>Sin archivos seleccionados</td>
                    <td className={Style.file}>
                      <label htmlFor="docOrganigrama">Elegir archivo</label>
                      <input
                        id="docOrganigrama"
                        type="file"
                        accept=".pdf"
                        onChange={({ target }) =>
                          setOrganigrama(...target.files)
                        }
                      ></input>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div>
            <h3>Vocabulario:</h3>
            <table>
              <tbody>
                {vocabulario ? (
                  <tr>
                    <td>{vocabulario.name}</td>
                    <td className={Style.file}>
                      <label htmlFor={"docVocabulario"}>Elegir archivo</label>
                      <input
                        id={"docVocabulario"}
                        type="file"
                        accept=".pdf"
                      ></input>
                    </td>
                  </tr>
                ) : (
                  <tr>
                    <td>Sin archivos seleccionados</td>
                    <td className={Style.file}>
                      <label htmlFor="docVocabulario">Elegir archivo</label>
                      <input
                        id="docVocabulario"
                        type="file"
                        accept=".pdf"
                        onChange={({ target }) =>
                          setVocabulario(...target.files)
                        }
                      ></input>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div>
            <h3>Funciones de los puestos:</h3>
            <table>
              <tbody>
                {funciones ? (
                  <tr>
                    <td>{funciones.name}</td>
                    <td className={Style.file}>
                      <label htmlFor={"docFunciones"}>Elegir archivo</label>
                      <input
                        id={"docFunciones"}
                        type="file"
                        accept=".pdf"
                      ></input>
                    </td>
                  </tr>
                ) : (
                  <tr>
                    <td>Sin archivos seleccionados</td>
                    <td className={Style.file}>
                      <label htmlFor="docFunciones">Elegir archivo</label>
                      <input
                        id="docFunciones"
                        type="file"
                        accept=".pdf"
                        onChange={({ target }) => setFunciones(...target.files)}
                      ></input>
                    </td>
                  </tr>
                )}
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
