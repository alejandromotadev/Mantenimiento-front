import React from "react";
import Style from "./formStyle.module.css";
import Nav from "./navbar";

class Formulario extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <div className={Style.formWrapper}>
          <form>
            <div>
              <h1>Proceso de diseno</h1>
            </div>
            <div>
              <p>
                Identificador: <b> a.a.a.a</b>
              </p>
            </div>
            <div>
              <h3>Nombre: </h3>
              <input className={Style.styleInput} placeholder="Nombre"></input>
            </div>
            <div>
              <h3>Fase: </h3>
              <input className={Style.styleInput} placeholder="Fase"></input>
            </div>
            <div>
              <h3>Responsable: </h3>
              <input
                className={Style.styleInput}
                placeholder="Responsable"
              ></input>
            </div>
            <div>
              <h3>Participantes: </h3>
              <input
                className={Style.styleInput}
                placeholder="Participantes"
              ></input>
            </div>
            <div>
              <h3>Proceso relacionado: </h3>
              <input
                className={Style.styleInput}
                placeholder="Proceso relacionado"
              ></input>
            </div>
            <div>
              <table></table>
            </div>
            <div>
              <h3>Evidencia de entrada</h3>
              <table>
                <tr>
                  <td>
                    <label>Evidencia</label>
                  </td>
                  <td>
                    <input type="file"></input>
                  </td>
                </tr>
              </table>
              <h3>Evidencia de salida</h3>
              <table>
                <tr>
                  <td>
                    <label>Evidencia</label>
                  </td>
                  <td>
                    <input type="file"></input>
                  </td>
                </tr>
              </table>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Formulario;
