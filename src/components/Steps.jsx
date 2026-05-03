function Steps() {
  return (
    <section className="section section-dark">
      <div className="container">

        {/* 🔥 HEADER */}
        <div className="section-head light">
          <div className="section-tag tag-light">
            ¿Cómo funciona?
          </div>

          <h2>Tres pasos simples</h2>
        </div>

        {/* 🧱 STEPS */}
        <div className="steps-row">

          {/* STEP 1 */}
          <div className="step-block">
            <div className="step-num">01</div>

            <div className="step-icon-wrap">
              👤
            </div>

            <h3>Regístrate</h3>

            <p>
              Crea tu cuenta gratuita como residente o emprendedor local.
            </p>
          </div>

          <div className="step-arrow">→</div>

          {/* STEP 2 */}
          <div className="step-block">
            <div className="step-num">02</div>

            <div className="step-icon-wrap">
              📄
            </div>

            <h3>Publica</h3>

            <p>
              Sube tu servicio con descripción, categoría y datos de contacto.
            </p>
          </div>

          <div className="step-arrow">→</div>

          {/* STEP 3 */}
          <div className="step-block">
            <div className="step-num">03</div>

            <div className="step-icon-wrap">
              💬
            </div>

            <h3>Conecta</h3>

            <p>
              Recibe contactos directos de vecinos que necesitan lo que ofreces.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Steps;