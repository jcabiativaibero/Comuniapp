import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
console.log("EDIT PAGE LOADED");

import {
  getServiceById,
  updateService
} from "../services/serviceService";

export default function EditService() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    priceFrom: "",
    contactPhone: ""
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadService();
  }, []);

  const loadService = async () => {
    const { data, error } = await getServiceById(id);

    if (data) {
      setForm({
        title: data.title,
        description: data.description,
        priceFrom: data.price_from,
        contactPhone: data.contact_phone
      });
    }

    setLoading(false);
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await updateService(id, {
      title: form.title,
      description: form.description,
      priceFrom: parseInt(form.priceFrom),
      contactPhone: form.contactPhone
    });

    if (!error) {
      navigate("/services");
    }
  };

  if (loading) return <p>Cargando servicio...</p>;

if (!form.title) return <p>No se encontró el servicio</p>;

  return (
    <>
      <Navbar />

      <div className="publish-container">
        <h1>Editar servicio</h1>

        <form onSubmit={handleSubmit} className="publish-form">

          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
          />

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
          />

          <input
            type="number"
            name="priceFrom"
            value={form.priceFrom}
            onChange={handleChange}
          />

          <input
            type="text"
            name="contactPhone"
            value={form.contactPhone}
            onChange={handleChange}
          />

          <button className="btn-primary">
            Guardar cambios
          </button>

        </form>
      </div>
    </>
  );
}