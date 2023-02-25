import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/NavBar";
import Formulario from "./pages/Formulario";
import FormularioProceso from "./pages/FormularioProceso";
import Login from "./pages/Login";

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
