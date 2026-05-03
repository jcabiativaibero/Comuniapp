import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="cta-banner">
      <div className="container cta-inner">

        <div className="cta-left">
          <h2>¿Tienes un emprendimiento en tu barrio?</h2>
          <p>Publica tu servicio gratis y llega a más vecinos.</p>
        </div>

        <Link to="/services" className="btn-cta">
          Publicar gratis
          <svg
            width="18"
            height="18"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>

      </div>
    </section>
  );
}

export default CTA;