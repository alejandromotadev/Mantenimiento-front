import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/NavBar";
import Formulario from "./pages/Formulario";
import Login from "./pages/Login";
import Manual from "./pages/FormularioManual";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/proceso/:faseId" element={<Formulario />} />
          <Route path="/manual/" element={<Manual />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
