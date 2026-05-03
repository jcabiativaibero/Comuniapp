import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">

        {/* BRAND */}
        <div className="footer-brand">

          <div className="logo">
            <div className="logo-mark">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="14" fill="#2D6A4F"/>
                <path
                  d="M8 16C8 16 10 10 14 10C18 10 20 16 20 16"
                  stroke="#95D5B2"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="14" cy="18" r="2.5" fill="#95D5B2"/>
              </svg>
            </div>

            <span>ComuniApp</span>
          </div>

          <p>
            Red de Servicios Comunitarios Locales. Conectamos emprendedores
            de tu barrio con residentes.
          </p>

        </div>

        {/* NAV */}
        <div className="footer-col">
          <h4>Navegación</h4>

          <Link to="/services">Explorar servicios</Link>
          <Link to="/services">Publicar servicio</Link>
          <Link to="/login">Ingresar</Link>
        </div>

        {/* CONTACTO */}
        <div className="footer-col">
          <h4>Contacto</h4>

          <p>hola@comuniapp.com</p>
          <p>+57 300 123 4567</p>
          <p>Tu barrio, tu comunidad</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 ComuniApp. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;