import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { createService, getCategories } from "../services/serviceService";
import { getCurrentUser } from "../services/authService";

function Publish() {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    title: "",
    description: "",
    categoryId: "",
    priceFrom: "",
    contactPhone: ""
  });

  // 🔥 CARGA INICIAL
useEffect(() => {
  const init = async () => {
    const user = await getCurrentUser();

    if (!user) {
      navigate("/login");
      return;
    }

    const { data } = await getCategories();
    if (data) setCategories(data);
  };

  init();
}, []);

  // 🔥 MANEJO INPUTS
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔥 SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // validar categoría
    if (!form.categoryId) {
      setError("Selecciona una categoría");
      setLoading(false);
      return;
    }

    try {
      const user = await getCurrentUser();

      console.log("USER:", user); // 👈 debug

      if (!user) {
        setError("Debes iniciar sesión");
        setLoading(false);
        return;
      }

      const { error } = await createService({
        title: form.title,
        description: form.description,
        categoryId: parseInt(form.categoryId),
        priceFrom: form.priceFrom ? parseInt(form.priceFrom) : null,
        contactPhone: form.contactPhone,
        user_id: user.id // 🔥 clave
      });

      if (error) {
  console.error("ERROR COMPLETO:", error);
  setError(JSON.stringify(error, null, 2));
} else {
        setSuccess(true);
        setTimeout(() => navigate("/services"), 2000);
      }
    } catch (err) {
      console.log(err);
      setError("Error inesperado");
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />

      <div className="publish-container">
        <h1>Publicar servicio</h1>
        <p>Completa la información de tu servicio</p>

        {error && (
          <p style={{ color: "red", fontSize: "13px" }}>{error}</p>
        )}

        {success && (
          <p style={{ color: "green", fontSize: "13px" }}>
            ✅ Servicio publicado correctamente
          </p>
        )}

        <form onSubmit={handleSubmit} className="publish-form">

          <label>Nombre del servicio *</label>
          <input
            type="text"
            name="title"
            placeholder="Ej: Plomería express"
            onChange={handleChange}
            required
          />

          {/* 🔥 CATEGORÍAS */}
          <label>Categoría *</label>

          <div className="categories-grid">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className={`category-card ${
                  form.categoryId == cat.id ? "active" : ""
                }`}
                onClick={() =>
                  setForm({ ...form, categoryId: cat.id })
                }
              >
                <span className="icon">
                  {cat.icon || "📦"}
                </span>
                <p>{cat.name}</p>
              </div>
            ))}
          </div>

          <label>Descripción *</label>
          <textarea
            name="description"
            placeholder="Describe tu servicio..."
            onChange={handleChange}
            required
            rows={4}
          />

          <label>Precio desde (COP)</label>
          <input
            type="number"
            name="priceFrom"
            placeholder="Ej: 40000"
            onChange={handleChange}
          />

          <label>Teléfono de contacto</label>
          <input
            type="tel"
            name="contactPhone"
            placeholder="+57 300 000 0000"
            onChange={handleChange}
          />

          <button className="btn-primary btn-block" disabled={loading}>
            {loading ? "Publicando..." : "Publicar servicio"}
          </button>

        </form>
      </div>
    </>
  );
}

export default Publish;