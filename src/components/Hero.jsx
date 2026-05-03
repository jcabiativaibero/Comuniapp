import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">

      {/* 🔵 FONDO */}
      <div className="hero-bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <div className="container hero-container">

        {/* 🧠 TEXTO */}
        <div className="hero-text">

          <div className="hero-pill">
            <span className="pill-dot"></span>
            Tu barrio, conectado
          </div>

          <h1 className="hero-title">
            Encuentra servicios<br />
            <em>de confianza</em><br />
            en tu comunidad
          </h1>

          <p className="hero-sub">
            ComuniApp conecta emprendedores locales con vecinos que buscan servicios cercanos.
          </p>

          {/* 🔘 BOTONES */}
          <div className="hero-actions">

            <Link to="/services" className="btn-primary">
              Explorar servicios →
            </Link>

            <Link to="/create" className="btn-ghost">
              Publicar mi servicio
            </Link>

          </div>

          {/* 📊 STATS */}
          <div className="hero-stats">

            <div className="stat">
              <strong>120+</strong>
              <span>Emprendedores</span>
            </div>

            <div className="stat-divider"></div>

            <div className="stat">
              <strong>8</strong>
              <span>Categorías</span>
            </div>

            <div className="stat-divider"></div>

            <div className="stat">
              <strong>5★</strong>
              <span>Calificados</span>
            </div>

          </div>

        </div>

        {/* 🗺️ LADO DERECHO */}
        <div className="hero-visual">

          <div className="hero-card-float card-a">
            <div className="card-mini-icon">⚡</div>
            <div>
              <div className="card-mini-title">ElectroServicios JR</div>
              <div className="card-mini-loc">📍 Barrio Norte</div>
            </div>
            <span className="card-mini-btn">Ver</span>
          </div>

          <div className="hero-map-placeholder">
            <div className="map-grid"></div>
            <div className="map-pin pin-1">🔧</div>
            <div className="map-pin pin-2">🍰</div>
            <div className="map-pin pin-3">🐾</div>
            <div className="map-label">Tu barrio</div>
          </div>

          <div className="hero-card-float card-b">
            <div className="card-mini-icon">🍰</div>
            <div>
              <div className="card-mini-title">Dulces de María</div>
              <div className="card-mini-loc">📍 Barrio Las Flores</div>
            </div>
            <span className="card-mini-btn">Ver</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;