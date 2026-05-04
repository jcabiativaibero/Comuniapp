import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">

      {/* FONDO DECORATIVO (solo funciona si tu CSS lo tiene) */}
      <div className="hero-bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <div className="container hero-container">

        {/* TEXTO PRINCIPAL */}
        <div className="hero-text">

          <div className="hero-pill">
            <span className="pill-dot"></span>
            NUEVO
          </div>

          <h1 className="hero-title">
            Encuentra servicios en tu <em>barrio</em>
          </h1>

          <p className="hero-sub">
            Conecta con emprendedores locales de forma rápida, fácil y segura.
          </p>

          {/* BOTONES CON NAVEGACIÓN */}
          <div className="hero-actions">
            <button
              className="btn-primary"
              onClick={() => navigate("/services")}
            >
              Explorar servicios
            </button>

            <button
              className="btn-ghost"
              onClick={() => navigate("/publish")}
            >
              Publicar servicio
            </button>
          </div>

          {/* ESTADÍSTICAS */}
          <div className="hero-stats">
            <div className="stat">
              <strong>+200</strong>
              <span>Servicios</span>
            </div>

            <div className="stat-divider"></div>

            <div className="stat">
              <strong>+50</strong>
              <span>Emprendedores</span>
            </div>
          </div>

        </div>

        {/* VISUAL DERECHO */}
        <div className="hero-visual">

          <div className="hero-map-placeholder">
            <div className="map-grid"></div>

            <div className="map-pin pin-1">🏠</div>
            <div className="map-pin pin-2">💻</div>
            <div className="map-pin pin-3">🍔</div>

            <span className="map-label">Tu barrio</span>
          </div>

          {/* TARJETAS FLOTANTES */}
          <div className="hero-card-float card-a">
            <div className="card-mini-icon">🔧</div>
            <div>
              <div className="card-mini-title">Plomería rápida</div>
              <div className="card-mini-loc">Cerca de ti</div>
            </div>
            <div className="card-mini-btn">Ver</div>
          </div>

          <div className="hero-card-float card-b">
            <div className="card-mini-icon">🍰</div>
            <div>
              <div className="card-mini-title">Postres caseros</div>
              <div className="card-mini-loc">A 2 cuadras</div>
            </div>
            <div className="card-mini-btn">Ver</div>
          </div>

        </div>

      </div>
    </section>
  );
}