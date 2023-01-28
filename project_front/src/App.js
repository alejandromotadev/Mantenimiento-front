import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import LoginPrueba from "./components/LoginPrueba";
import ProcesoPrueba from "./components/ProcesosPrueba";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPrueba/>}/>
          <Route path="/home" element={<ProcesoPrueba/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
