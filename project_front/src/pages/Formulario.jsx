import { useEffect, useState } from "react";
import Style from "./Formulario.module.css";
import { axiosInstance } from "../services/axios";
import { useParams } from "react-router-dom";

const Formulario = () => {

	const [roles, setRoles] = useState([])
	const [nombre, setNombre] = useState(null)
	const [fase, setFase] = useState(null)
	const [responsable, setResponsable] = useState(null)
	const [participantes, setParticipantes] = useState([])
	const [procesoRelacionado, setProcesoRelacionado] = useState(null)

	const {faseId} = useParams()

	// const getRoles = async () => {
	// 	await axiosInstance.get('/user/')
	// }
	
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
						<input
							className={Style.styleInput}
							placeholder="Nombre"
						></input>
					</div>
					<div>
						<h3>Propósito: </h3>
						<input
							className={Style.styleInput}
							placeholder="Propósito"
						></input>
					</div>
					<div>
						<h3>Objetivo: </h3>
						<input
							className={Style.styleInput}
							placeholder="Objetivo"
						></input>
					</div>
					<div>
						<h3>Responsable: </h3>
						<select defaultValue="rol1" name="responsable" id="responsable" className={Style.styleSelect}>
							<option value="rol1">Ingeniero de requerimientos</option>
							<option value="rol2" disabled>Product Owner</option>
						</select>
					</div>
					<div>
						<h3>Participantes: </h3>
						{/* aca va el dropdown */}
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
};
export default Formulario;
