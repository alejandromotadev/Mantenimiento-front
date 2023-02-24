import { useState } from "react";

import Style from "./Formulario.module.css";
import { axiosInstance } from "../services/axios";
import { useParams } from "react-router-dom";
import { MultiSelect } from "react-multi-select-component";

const FormularioProceso = () => {
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
	const [estado, setEstado] = useState(null)
	//Documentos
	const [metricas, setMetricas] = useState([])
	//Tabla evidencias
	const [evidenciaEntrada, setEvidenciaEntrada] = useState([])
	const [evidenciaSalida, setEvidenciaSalida] = useState([])

	const { faseId } = useParams()

	//opciones para participantes con multiselect
	const options = [
		{ label: "Participante 1", value: 1 },
		{ label: "Participante 2", value: 2 },
		{ label: "Participante 3", value: 3 },
	];
	// const [selected, setSelected] = useState([]);

	const postProccess = async () => {
		console.log(evidenciaEntrada);

		const new_participantes = []
		for (let i = 0; i <participantes.length; i++) {
			new_participantes.push(participantes[i].value)
		}

		let formData = new FormData();
		formData.append("nombre", nombre);
		formData.append("id_proceso", 1);
		formData.append("descripcion", descripcion);
		formData.append("proposito", proposito);
		formData.append("objetivo", objetivo);
		formData.append("responsable", responsable);
		formData.append("categoria", categoria);
		formData.append("participantes", new_participantes);
		formData.append("proceso_relacionado", procesoRelacionado);
		formData.append("frecuencia", frecuencia);
		formData.append("status", estado)
		formData.append("metrica", metricas[0])
		
		let index = 0;
		for (let i = 0; i <evidenciaEntrada.length; i++) {
			let proceso_media = "proceso_media["+[i]+"]"
			formData.append(proceso_media+"file", evidenciaEntrada[i])
			formData.append(proceso_media+"nombre", evidenciaEntrada[i].name)
			formData.append(proceso_media+"tipo", "Entrada")
			index = i
		}

		for (let i = 0; i <evidenciaSalida.length; i++) {
			index+=1
			let proceso_media = "proceso_media["+[index]+"]"
			formData.append(proceso_media+"file", evidenciaSalida[i])
			formData.append(proceso_media+"nombre", evidenciaSalida[i].name)
			formData.append(proceso_media+"tipo", "Salida")
		}

		await axiosInstance.post("proceso/crear/", formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
				'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc3MTk5MTc1LCJpYXQiOjE2NzcxOTgzNjQsImp0aSI6IjJiZmQ5NTg0NmM2MzRkZDZhMDg5NzhlMzQwYmZlZmExIiwidXNlcl9pZCI6MX0._x4v3t2Fo88OmwFGCx7YDKONFhWx3JTmfcLjFLj4rMo',
			},
		})
			.then((result) => {
				console.log(result);
				alert("Proceso creado");
			})
			.catch((err) => { console.log(err); console.log(localStorage.getItem('token')); });
	}

	const selectDocs = ({ target }) => {
		if (target.id.includes("Entrada")) {
			if (evidenciaEntrada.length !== 0) {
				setEvidenciaEntrada([...evidenciaEntrada, ...target.files])
			} else {
				setEvidenciaEntrada([...target.files])
			}
		}
		if (target.id.includes("Salida")) {
			if (evidenciaSalida.length !== 0) {
				setEvidenciaSalida([...evidenciaSalida, ...target.files])
			} else {
				setEvidenciaSalida([...target.files])
			}
		}
		if (target.id.includes("Metricas")) {
			setMetricas([...target.files])
		}
	}

	const onSubmit = (e) => {
		e.preventDefault();
	}

	return (
		<div>
			<div className={Style.formWrapper}>
				<form onSubmit={onSubmit}>
					<div>
						<h1>Editar proceso</h1>
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
							<option value="Ingeniero de requerimientos">Ingeniero de requerimientos</option>
							<option value="Product Owner" disabled>Product Owner</option>
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
							value={participantes}
							onChange={setParticipantes}
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
						<h3>Frecuencia: </h3>
						<input
							className={Style.styleInput}
							placeholder="Frecuencia"
							onChange={(e) => setFrecuencia(e.target.value)}
							onBlur={(e) => setFrecuencia(e.target.value)}
						></input>
					</div>
					<div>
						<h3>Evidencias de Entrada</h3>
						<table>
							<tbody>
								{evidenciaEntrada.length >= 1 ? evidenciaEntrada.map((ev, index) => {
									return (
										<tr key={index}>
											<td>
												<b>Evidencia {index + 1}</b>
											</td>
											<td>
												{ev.name}
											</td>
											<td className={Style.file}>
												<label htmlFor={"docEntrada" + index}>Elegir archivo</label>
												<input multiple id={"docEntrada" + index} type="file" accept=".pdf" onChange={selectDocs}></input>
											</td>
										</tr>
									)
								}) :
									<tr>
										<td>
											Sin archivos seleccionados
										</td>
										<td className={Style.file}>
											<label htmlFor="docEntrada">Elegir archivo</label>
											<input multiple id="docEntrada" type="file" accept=".pdf" onChange={selectDocs}></input>
										</td>
									</tr>
								}
							</tbody>
						</table>
						<h3>Evidencias de Salida</h3>
						<table>
							<tbody>
								{evidenciaSalida.length >= 1 ? evidenciaSalida.map((ev, index) => {
									return (
										<tr key={index}>
											<td>
												<b>Evidencia {index + 1}</b>
											</td>
											<td>
												{ev.name}
											</td>
											<td className={Style.file}>
												<label htmlFor={"docSalida" + index}>Elegir archivo</label>
												<input multiple id={"docSalida" + index} type="file" accept=".pdf" onChange={selectDocs}></input>
											</td>
										</tr>
									)
								}) :
									<tr>
										<td>
											Sin archivos seleccionados
										</td>
										<td className={Style.file}>
											<label htmlFor="docSalida">Elegir archivo</label>
											<input multiple id="docSalida" type="file" accept=".pdf" onChange={selectDocs}></input>
										</td>
									</tr>
								}
							</tbody>
						</table>
					</div>
					<div>
						<h3>Documento de metricas</h3>
						<table>
							<tbody>
								{metricas.length >= 1 ? metricas.map((ev, index) => {
									return (
										<tr key={index}>
											<td>
												{ev.name}
											</td>
											<td className={Style.file}>
												<label htmlFor={"docMetricas" + index}>Elegir archivo</label>
												<input multiple id={"docMetricas" + index} type="file" accept=".pdf" onChange={selectDocs}></input>
											</td>
										</tr>
									)
								}) :
									<tr>
										<td>
											Sin archivos seleccionados
										</td>
										<td className={Style.file}>
											<label htmlFor="docMetricas">Elegir archivo</label>
											<input multiple id="docMetricas" type="file" accept=".pdf" onChange={selectDocs}></input>
										</td>
									</tr>
								}
							</tbody>
						</table>
					</div>
					<div>
						<h3>Estado del proceso: </h3>
						<select defaultValue="1" name="estado" id="estado" className={Style.styleSelect} onChange={(e) => setEstado(e.target.value)} onBlur={(e) => setEstado(e.target.value)}>
							<option value="false">Pendiente</option>
							<option value="true">Listo</option>
						</select>
					</div>
					<div className={Style.btnContainer}>
						<button className={Style.btnSubmit} onClick={postProccess}>Enviar</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default FormularioProceso;