import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/NavBar";
import Fases from "./pages/Fases";
import Formulario from "./pages/Formulario";
import FormularioProceso from "./pages/FormularioProceso";
import Login from "./pages/Login";
import Proyectos from "./pages/Proyectos";

import Procesos from "./pages/Procesos";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/proceso_form/" element={<FormularioProceso />} />
          <Route path="/proceso/:faseId" element={<Formulario />} />
          <Route path="/proceso/create" element={<Procesos />} />
          <Route path="/inicio" element={<Proyectos />} />
          <Route path="/fases" element={<Fases />} />
          <Route path="/proyectos" element={<Formulario />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
