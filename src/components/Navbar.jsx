import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };
    loadUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <nav className="navbar">
  <div className="container nav-content">

    {/* IZQUIERDA */}
    <div className="nav-left">
      <div className="logo" onClick={() => navigate("/")}>
        ComuniApp
      </div>
    </div>

    {/* CENTRO */}
    <div className="nav-center">
      <span className="nav-link" onClick={() => navigate("/")}>
        Inicio
      </span>
      <span className="nav-link" onClick={() => navigate("/services")}>
        Servicios
      </span>
    </div>

    {/* DERECHA */}
<div className="nav-right">
  {!user ? (
    <span className="nav-link" onClick={() => navigate("/login")}>
      Ingresar
    </span>
  ) : (
    <>
<span
  className="nav-link publish"
  onClick={() => navigate("/publish")}
>
  Publicar
</span>

      <span className="nav-link" onClick={handleLogout}>
        Cerrar sesión
      </span>
    </>
  )}
</div>

  </div>
</nav>
  );
}