import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Fases from "./pages/Fases";
import FormularioProceso from "./pages/FormularioProceso";
import Login from "./pages/Login";
import Manual from "./pages/FormularioManual";
import Proyectos from "./pages/Proyectos";  
import Procesos from "./pages/Procesos";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/proceso_form/" element={<FormularioProceso />} />
          <Route path="/manual" element={<Manual />} />
          <Route path="/proceso/create" element={<Procesos />} />
          <Route path="/inicio" element={<Proyectos />} />
          <Route path="/fases" element={<Fases />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
