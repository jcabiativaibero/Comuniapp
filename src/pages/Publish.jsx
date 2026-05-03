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

  useEffect(() => {
    // Verificar que el usuario esté autenticado
    getCurrentUser().then(user => {
      if (!user) navigate("/login");
    });
    // Cargar categorías
    getCategories().then(({ data }) => {
      if (data) setCategories(data);
    });
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { error } = await createService({
      title: form.title,
      description: form.description,
      categoryId: parseInt(form.categoryId),
      priceFrom: parseInt(form.priceFrom),
      contactPhone: form.contactPhone
    });

    if (error) {
      setError("Error al publicar el servicio. Intenta de nuevo.");
    } else {
      setSuccess(true);
      setTimeout(() => navigate("/services"), 2000);
    }
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className="publish-container">
        <h1>Publicar servicio</h1>
        <p>Completa la información de tu servicio</p>

        {error && <p style={{ color: "red", fontSize: "13px", marginBottom: "10px" }}>{error}</p>}
        {success && <p style={{ color: "green", fontSize: "13px", marginBottom: "10px" }}>✅ Servicio publicado correctamente. Redirigiendo...</p>}

        <form onSubmit={handleSubmit} className="publish-form">
          <label>Nombre del servicio *</label>
          <input type="text" name="title" placeholder="Ej: Plomería express" onChange={handleChange} required />

          <label>Categoría *</label>
          <select name="categoryId" onChange={handleChange} required>
            <option value="">Selecciona una categoría</option>
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.icon} {cat.name}</option>
            ))}
          </select>

          <label>Descripción *</label>
          <textarea name="description" placeholder="Describe tu servicio..." onChange={handleChange} required rows={4} />

          <label>Precio desde (COP)</label>
          <input type="number" name="priceFrom" placeholder="Ej: 40000" onChange={handleChange} />

          <label>Teléfono de contacto (WhatsApp)</label>
          <input type="tel" name="contactPhone" placeholder="+57 300 000 0000" onChange={handleChange} />

          <button className="btn-primary btn-block" disabled={loading}>
            {loading ? "Publicando..." : "Publicar servicio"}
          </button>
        </form>
      </div>
    </>
  );
}

export default Publish;