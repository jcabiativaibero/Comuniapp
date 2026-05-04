import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/services";
import Login from "./pages/login";
import Publish from "./pages/Publish";
import EditService from "./pages/EditService";




function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/login" element={<Login />} />
      <Route path="/edit/:id" element={<EditService />} />
      <Route path="/publish" element={<Publish />} />  
    </Routes>
  );
}

export default App;