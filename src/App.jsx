import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Login from "./pages/Login"; 

function App() {
  return (
    <Routes>
      {/* 🔥 HOME REAL */}
      <Route path="/" element={<Home />} />

      {/* OTRAS PÁGINAS */}
      <Route path="/services" element={<Services />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;