import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/NavBar";
import Fases from "./pages/Fases";
import Formulario from "./pages/Formulario";
import Login from "./pages/Login";
import Proyectos from "./pages/Proyectos";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/inicio" element={<Proyectos />} />
          <Route path="/fases" element={<Fases />} />
          <Route path="/proceso/:faseId" element={<Formulario />} />
          <Route path="/proyectos" element={<Formulario />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
