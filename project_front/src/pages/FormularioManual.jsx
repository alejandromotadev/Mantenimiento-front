import { useState } from "react";

import Style from "./FormularioManual.module.css";
import { useParams } from "react-router-dom";
import { MultiSelect } from "react-multi-select-component";


const FormularioManual = () => {

    return(
        <div>
            <div className={Style.formWrapper}>
                <form>
                    <div>
                        <h1>Manual</h1>
                    </div>
                    <div>
                        <h3>Historia: </h3>
                        <input
							className={Style.styleInput}
							placeholder="Historia"
						></input>
                    </div>
                    <div>
                        <h3>Alcance: </h3>
                        <input
							className={Style.styleInput}
							placeholder="Alcance"
						></input>
                    </div>
                    <div>
                        <h3>Visión: </h3>
                        <input
							className={Style.styleInput}
							placeholder="Visión"
						></input>
                    </div>
                    <div>
                        <h3>Misión: </h3>
                        <input
							className={Style.styleInput}
							placeholder="Misión"
						></input>
                    </div>
                    <div>
                        <h3>Organigrama:</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <b>Organigrama</b>
                                    </td>
                                    <td>
                                        organigrama.pdf
                                    </td>
                                    <td className={Style.file}>
                                        <label>Elegir archivo</label>
                                        <input
                                            type="file" 
                                            accept=".pdf"
                                        ></input>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h3>Vocabulario:</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <b>Vocabulario</b>
                                    </td>
                                    <td>
                                        vocabulario.pdf
                                    </td>
                                    <td className={Style.file}>
                                        <label>Elegir archivo</label>
                                        <input
                                            type="file" 
                                            accept=".pdf"
                                        ></input>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h3>Funciones de los puestos:</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <b>Funciones</b>
                                    </td>
                                    <td>
                                        funciones.pdf
                                    </td>
                                    <td className={Style.file}>
                                        <label>Elegir archivo</label>
                                        <input
                                            type="file" 
                                            accept=".pdf"
                                        ></input>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h3>Políticas: </h3>
                        <input
							className={Style.styleInput}
							placeholder="Políticas"
						></input>
                    </div>
					<div 
                        className={Style.btnContainer}>
						<button className={Style.btnSubmit}>
                            Enviar
                        </button>
					</div>
                </form>
            </div>
        </div>
    );
}
export default FormularioManual;
