import { useState } from "react";

function CreateService({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newService = {
      id: Date.now(),
      title,
      description,
      location
    };

    onAdd(newService);

    // limpiar
    setTitle("");
    setDescription("");
    setLocation("");
  };

  return (
    <div className="container">
      <h2>Crear servicio</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nombre"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          placeholder="Ubicación"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <button type="submit">Crear</button>
      </form>
    </div>
  );
}

export default CreateService;