import { useEffect, useState } from "react";
//import Select from "react-select";
import Style from "./Formulario.module.css";
import { axiosInstance } from "../services/axios";
import { useParams } from "react-router-dom";
import { MultiSelect } from "react-multi-select-component";

const Formulario = () => {
  const [roles, setRoles] = useState([]);
  const [nombre, setNombre] = useState(null);
  const [fase, setFase] = useState(null);
  const [responsable, setResponsable] = useState(null);
  const [participantes, setParticipantes] = useState([]);
  const [procesoRelacionado, setProcesoRelacionado] = useState(null);
  const { faseId } = useParams();
  //opciones para participantes con multiselect
  const options = [
    { label: "Participante 1", value: 1 },
    { label: "Participante 2", value: 2 },
    { label: "Participante 3", value: 3 },
  ];
  const [selected, setSelected] = useState([]);

  return (
    <div>
      <div className={Style.formWrapper}>
        <form>
          <div>
            <h1>Proceso de diseño</h1>
          </div>
          <div>
            <h3>
              Identificador: <b>x.x.x.x</b>
            </h3>
          </div>
          <div>
            <h3>
              Fase: <b>{faseId}</b>
            </h3>
          </div>
          <div>
            <h3>Nombre: </h3>
            <input className={Style.styleInput} placeholder="Nombre"></input>
          </div>
          <div>
            <h3>Propósito: </h3>
            <input className={Style.styleInput} placeholder="Propósito"></input>
          </div>
          <div>
            <h3>Objetivo: </h3>
            <input className={Style.styleInput} placeholder="Objetivo"></input>
          </div>
          <div>
            <h3>Responsable: </h3>
            <select
              defaultValue="rol1"
              name="responsable"
              id="responsable"
              className={Style.styleSelect}
            >
              <option value="rol1">Ingeniero de requerimientos</option>
              <option value="rol2" disabled>
                Product Owner
              </option>
            </select>
          </div>
          <div className={Style.multi_select}>
            <h3>Participantes: </h3>
            <MultiSelect
              options={options}
              showCheckbox
              value={selected}
              onChange={setSelected}
              overrideStrings={{
                selectAll: "Escoger todos los participantes",
                search: "Buscar participante",
                allItemsAreSelected: "Todos los participantes",
                selectSomeItems: "Selecciona a los participantes"
              }}
            />
          </div>
          <div>
            <h3>Proceso relacionado: </h3>
            <input
              className={Style.styleInput}
              placeholder="Proceso relacionado"
            ></input>
          </div>
          <div></div>
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
};
export default Formulario;
