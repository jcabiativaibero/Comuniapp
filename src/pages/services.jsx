import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { supabase } from "../lib/supabase";
import {
  getServices,
  deleteService
} from "../services/serviceService";

export default function Services() {
  const navigate = useNavigate();

  const [services, setServices] = useState([]);
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    // usuario
    const { data: userData } = await supabase.auth.getUser();
    setUser(userData.user);

    // servicios
    const { data, error } = await getServices();
    if (!error) setServices(data);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("¿Eliminar servicio?");
    if (!confirmDelete) return;

    const { error } = await deleteService(id);

    if (!error) {
      setServices(prev => prev.filter(s => s.id !== id));
    }
  };

  // 🔍 filtro búsqueda
  const filtered = services.filter(s =>
    s.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      {/* HEADER */}
      <div className="search-header">
        <div className="container">
          <h1 className="search-title">Servicios en tu barrio</h1>

          <input
            type="text"
            placeholder="Buscar servicio..."
            className="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* LISTA */}
      <section className="services-section">
        <div className="container">

          <div className="services-grid">

            {filtered.map((s) => (
              <div className="svc-card" key={s.id}>

                <div className="svc-img">
                  <img
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600"
                    alt="servicio"
                  />
                </div>

                <div className="svc-body">
                  <h3>{s.title}</h3>

                  <p>{s.categories?.name}</p>

                  <span>
                    Desde ${s.price_from}
                  </span>

                  <button className="btn-primary btn-block">
                    Ver perfil
                  </button>

                  {/* 🔥 SOLO MIS SERVICIOS */}
                  {s.user_id === user?.id && (
                    <div className="svc-actions">

                      <button
                        className="btn-edit"
                        onClick={() => navigate(`/edit/${s.id}`)}
                      >
                        Editar
                      </button>

                      <button
                        className="btn-delete"
                        onClick={() => handleDelete(s.id)}
                      >
                        Eliminar
                      </button>

                    </div>
                  )}
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>
    </>
  );

  
}
const loadData = async () => {
  const { data: userData } = await supabase.auth.getUser();
  setUser(userData.user);

  const { data, error } = await getServices();

  console.log("SERVICES:", data);
  console.log("ERROR:", error);

  if (!error) setServices(data);
};