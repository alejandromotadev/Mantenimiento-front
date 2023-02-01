import { useState } from "react";

import Style from "./Formulario.module.css";
import { axiosInstance } from "../services/axios";
import { useParams } from "react-router-dom";
import { MultiSelect } from "react-multi-select-component";

const Formulario = () => {
	const [roles, setRoles] = useState([])
	//Proceso
	const [nombre, setNombre] = useState(null)
	const [proposito, setProposito] = useState(null)
	const [objetivo, setObjetivo] = useState([])
	const [descripcion, setDescripcion] = useState([])
	const [responsable, setResponsable] = useState(null)
	const [categoria, setCategoria] = useState(null)
	const [participantes, setParticipantes] = useState(["Sin participantes"])
	const [procesoRelacionado, setProcesoRelacionado] = useState(null)
	const [frecuencia, setFrecuencia] = useState(null)
	//Documentos
	const [documento, setDocumento] = useState(null)

	const {faseId} = useParams()

	//opciones para participantes con multiselect
	const options = [
		{ label: "Participante 1", value: 1 },
		{ label: "Participante 2", value: 2 },
		{ label: "Participante 3", value: 3 },
	];
	const [selected, setSelected] = useState([]);

	const postProccess = async () => {
		let formData = new FormData();

		formData.append("nombre", nombre)
		formData.append("id_proceso", faseId)
		formData.append("proposito", proposito)
		formData.append("objetivo",  objetivo)
		formData.append("descripcion", descripcion)
		formData.append("responsable", responsable)
		formData.append("categoria", categoria)
		formData.append("participantes", participantes)
		formData.append("procesoRelacionado", procesoRelacionado)
		formData.append("frecuencia", frecuencia)
		formData.append("nombre_documento", documento.name)
		formData.append("documento", documento)
		
		await axiosInstance.post('proceso/list/',formData, { headers:{
			"Content-type" : "multipart/form-data",
			"Authorization" : 'Token' + localStorage.getItem('token')
		}	
		})
		.then((result) => {
			console.log(result);
			alert("Proceso creado")
			
		})
		.catch((err) => {console.log(err); });
	}

	const onSubmit = (e) => {
		e.preventDefault();
	}
	
	return (
		<div>
			<div className={Style.formWrapper}>
				<form onSubmit={onSubmit}>
					<div>
						<h1>Proceso de diseño</h1>
					</div>
					<div>
						<h3>
							Identificador: <b>__.__.__.__</b>
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
							onChange={(e) => setNombre(e.target.value)}
							onBlur={(e) => setNombre(e.target.value)}
						></input>
					</div>
					<div>
						<h3>Descripción: </h3>
						<input
							className={Style.styleInput}
							placeholder="Descripción"
							onChange={(e) => setDescripcion([e.target.value])}
							onBlur={(e) => setDescripcion([e.target.value])}
						></input>
					</div>
					<div>
						<h3>Propósito: </h3>
						<input
							className={Style.styleInput}
							placeholder="Propósito"
							onChange={(e) => setProposito(e.target.value)}
							onBlur={(e) => setProposito(e.target.value)}
						></input>
					</div>
					<div>
						<h3>Objetivo: </h3>
						<input
							className={Style.styleInput}
							placeholder="Objetivo"
							onChange={(e) => setObjetivo([e.target.value])}
							onBlur={(e) => setObjetivo([e.target.value])}
						></input>
					</div>
					<div>
						<h3>Responsable: </h3>
						<select defaultValue="1" name="responsable" id="responsable" className={Style.styleSelect} onChange={(e) => setResponsable(e.target.value)} onBlur={(e) => setResponsable(e.target.value)}>
							<option value="1">Ingeniero de requerimientos</option>
							<option value="2" disabled>Product Owner</option>
						</select>
					</div>
					<div>
						<h3>Categoría: </h3>
						<input
							className={Style.styleInput}
							placeholder="Categoría"
							onChange={(e) => setCategoria(e.target.value)}
							onBlur={(e) => setCategoria(e.target.value)}
						></input>
					</div>
					<div className={Style.multi_select}>
						<h3>Participantes: </h3>
						<MultiSelect
						className={Style.rmsc}
						options={options}
						showCheckbox
						value={selected}
						onChange={setSelected}
						overrideStrings={{
							selectAll: "Escoger todos los participantes",
							search: "Buscar participante",
							allItemsAreSelected: "Todos los participantes",
							selectSomeItems: "Selecciona a los participantes",
						}}
						/>
					</div>
					<div>
						<h3>Proceso relacionado: </h3>
						<input
							className={Style.styleInput}
							placeholder="Proceso relacionado"
							onChange={(e) => setProcesoRelacionado(e.target.value)}
							onBlur={(e) => setProcesoRelacionado(e.target.value)}
						></input>
					</div>
					<div>
						<h3>Evidencia de entrada</h3>
						<table>
							<tr>
								<td>
									<label>Evidencia</label>
								</td>
								<td>
									<input type="file" accept=".pdf" id="docEntrada" onChange={(e) => setDocumento(e.target.files[0])}></input>
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
									<input type="file" accept=".pdf" id="docSalida"></input>
								</td>
							</tr>
						</table>
					</div>
					<div>
						<h3>Frecuencia: </h3>
						<input
							className={Style.styleInput}
							placeholder="Frecuencia"
							onChange={(e) => setFrecuencia(e.target.value)}
							onBlur={(e) => setFrecuencia(e.target.value)}
						></input>
					</div>
					<div className={Style.btnContainer}>
						<button className={Style.btnSubmit} onClick={postProccess}>Enviar</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Formulario;
