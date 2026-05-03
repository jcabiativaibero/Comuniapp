import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    confirm: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirm) {
      alert("Las contraseñas no coinciden");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: form.email,
          password: form.password
        })
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Usuario creado correctamente");
        navigate("/login");
      } else {
        alert(data.error || "Error al registrar");
      }

    } catch (error) {
      console.error(error);
      alert("Error de conexión");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <h2>Crear cuenta</h2>
        <p>Únete a la comunidad</p>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="confirm"
            placeholder="Confirmar contraseña"
            value={form.confirm}
            onChange={handleChange}
            required
          />

          <button className="btn-primary btn-block" disabled={loading}>
            {loading ? "Creando..." : "Crear cuenta"}
          </button>

        </form>

        <p className="auth-footer">
          ¿Ya tienes cuenta? <a href="/login">Ingresar</a>
        </p>

      </div>
    </div>
  );
}

export default Register;