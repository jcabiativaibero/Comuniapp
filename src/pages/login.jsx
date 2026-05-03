import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FiUser, FiBriefcase, FiUsers } from "react-icons/fi";
import { login, register } from "../services/authService";

function Login() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("login");
  const [showPass, setShowPass] = useState(false);
  const [role, setRole] = useState("residente");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (mode === "login") {
      const { data, error } = await login(form.email, form.password);
      console.log("DATA:", data);
      console.log("ERROR:", error);
      if (error) {
        setError(error.message);
      } else {
        navigate("/");
      }
    } else {
      if (!role) {
        setError("Selecciona un rol");
        setLoading(false);
        return;
      }
      const { data, error } = await register(form.email, form.password, {
        fullName: form.name,
        phone: "",
        neighborhood: "",
        role: role
      });
      console.log("REGISTRO DATA:", data);
      console.log("REGISTRO ERROR:", error);
      if (error) {
        setError(error.message);
      } else {
        navigate("/");
      }
    }
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <section className="auth-section">

        {/* IZQUIERDA */}
        <div className="auth-side">
          <div className="auth-side-inner">
            <div className="auth-side-logo">🌿 <span>ComuniApp</span></div>
            <h2 className="auth-side-title">Conecta con tu comunidad</h2>
            <p className="auth-side-sub">Más de 120 emprendedores ya están en tu barrio.</p>
            <div className="auth-testimonial">
              <strong>DC</strong>
              <p>"Conseguí nuevos clientes en pocos días."</p>
              <span>Don César</span>
            </div>
            <div className="auth-testimonial">
              <strong>DR</strong>
              <p>"Encontré servicios confiables rápidamente."</p>
              <span>Doña Rosa</span>
            </div>
          </div>
        </div>

        {/* DERECHA */}
        <div className="auth-form-side">
          <div className="auth-form-wrap">

            <h1>{mode === "login" ? "Bienvenido de vuelta" : "Crea tu cuenta"}</h1>
            <p className="auth-sub">
              {mode === "login" ? "Ingresa a tu cuenta para continuar" : "Únete a la comunidad"}
            </p>

            {/* TOGGLE */}
            <div className="auth-toggle">
              <button
                className={mode === "login" ? "active" : ""}
                onClick={() => setMode("login")}
                type="button"
              >
                Ingresar
              </button>
              <button
                className={mode === "register" ? "active" : ""}
                onClick={() => setMode("register")}
                type="button"
              >
                Registrarse
              </button>
            </div>

            {/* ERROR */}
            {error && (
              <p style={{ color: "red", fontSize: "13px", marginBottom: "10px" }}>
                {error}
              </p>
            )}

            <form onSubmit={handleSubmit} className="auth-form">

              {mode === "register" && (
                <>
                  <label>Soy...</label>
                  <div className="role-grid">
                    <div
                      className={`role-card ${role === "residente" ? "active" : ""}`}
                      onClick={() => setRole("residente")}
                    >
                      <div className="role-icon"><FiUser /></div>
                      <strong>Residente</strong>
                      <p>Busco servicios</p>
                    </div>
                    <div
                      className={`role-card ${role === "emprendedor" ? "active" : ""}`}
                      onClick={() => setRole("emprendedor")}
                    >
                      <div className="role-icon"><FiBriefcase /></div>
                      <strong>Emprendedor</strong>
                      <p>Ofrezco servicios</p>
                    </div>
                    <div
                      className={`role-card ${role === "organizacion" ? "active" : ""}`}
                      onClick={() => setRole("organizacion")}
                    >
                      <div className="role-icon"><FiUsers /></div>
                      <strong>Organización</strong>
                      <p>Gestiono comunidad</p>
                    </div>
                  </div>

                  <label>Nombre completo *</label>
                  <input
                    type="text"
                    name="name"
                    className="field-input"
                    placeholder="Tu nombre"
                    onChange={handleChange}
                    required
                  />
                </>
              )}

              <label>Correo electrónico *</label>
              <input
                type="email"
                name="email"
                className="field-input"
                placeholder="tu@correo.com"
                onChange={handleChange}
                required
              />

              <label>Contraseña *</label>
              <div className="password-wrap">
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  className="field-input"
                  placeholder="••••••••"
                  onChange={handleChange}
                  required
                />
                <span className="eye" onClick={() => setShowPass(!showPass)}>👁</span>
              </div>

              {mode === "login" && (
                <p className="auth-link">¿Olvidaste tu contraseña?</p>
              )}

              <button
                className="btn-primary btn-block btn-auth"
                disabled={loading}
              >
                {loading ? "Cargando..." : mode === "login" ? "Iniciar sesión" : "Crear cuenta"}
              </button>

              <p className="auth-footer">
                {mode === "login" ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}{" "}
                <span onClick={() => setMode(mode === "login" ? "register" : "login")}>
                  {mode === "login" ? "Regístrate gratis" : "Inicia sesión"}
                </span>
              </p>

            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;