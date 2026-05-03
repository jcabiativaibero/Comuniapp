import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">

          <Link to="/" className="logo">
            <div className="logo-mark">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="14" fill="#2D6A4F"/>
                <path d="M8 16C8 16 10 10 14 10C18 10 20 16 20 16"
                  stroke="#95D5B2" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="14" cy="18" r="2.5" fill="#95D5B2"/>
              </svg>
            </div>
            <span>ComuniApp</span>
          </Link>

          <div className="nav-links">
            <Link to="/" className="nav-link">Inicio</Link>
            <Link to="/services" className="nav-link">Servicios</Link>
            <Link to="/publish" className="btn-nav-primary">Publicar servicio</Link>
            <Link to="/login" className="btn-nav-secondary">Ingresar</Link>
          </div>

        </div>
      </div>
    </nav>
  );
}