import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Formulario from "./componentes/Formulario/Formulario";
import Login from "./componentes/Login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/proceso" element={<Formulario/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
