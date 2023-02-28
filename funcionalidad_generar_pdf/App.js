import React from "react";
import { useState } from "react";
import DocuPDF from "./DocuPDF";
import {PDFDownloadLink} from "@react-pdf/renderer";
//import EjemploV from "./Enviardatos";

function App() {
  const [texto, setTexto] = useState("");

  return (
      <div className="container">
        {/* Aca se captura el valor que se escriba en un imput */}
        {/* <h1>Ingrese texto {texto} </h1>
      <textarea 
      cols="50" 
      rows="5" 
      value={texto}
      onChange = {(e) => setTexto(e.target.value)}
      ></textarea> */}

      {/* Aca se crea un boton que genera el PDF,  PDFDownloadLink siempre debe ir afuera del boton */}
        <PDFDownloadLink document={<DocuPDF texto={texto}/>} fileName="Manual de calidada.pdf">
          <button type="button" class="btn btn-primary">Primary
          Descargar
        </button>
        </PDFDownloadLink>
        {/* Para pasarle el texto de que se capture en el formulario hay que pasarle un objeto de tipo texto. */}
      </div>
  );
}

export default App;
