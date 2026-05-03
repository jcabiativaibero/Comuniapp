import Navbar from "../components/Navbar";

export default function Services() {

  const services = [
    {
      name: "Plomería Don Carlos",
      category: "Plomería",
      location: "Barrio San Martín",
      img: "https://images.unsplash.com/photo-1542632867-261e4be41c7c?w=600"
    },
    {
      name: "Dulces de María",
      category: "Repostería",
      location: "Barrio Las Flores",
      img: "https://images.unsplash.com/photo-1620049302148-61b77ad1a1c2?w=600"
    }
  ];

  return (
    <>
      <Navbar />

      <div className="search-header">
        <div className="container">
          <h1 className="search-title">Servicios en tu barrio</h1>

          <input
            type="text"
            placeholder="Buscar..."
            className="search-input"
          />
        </div>
      </div>

      <section className="services-section">
        <div className="container">

          <div className="services-grid">

            {services.map((s, i) => (
              <div className="svc-card" key={i}>

                <div className="svc-img">
                  <img src={s.img} />
                </div>

                <div className="svc-body">
                  <h3>{s.name}</h3>
                  <p>{s.category}</p>
                  <span>{s.location}</span>

                  <button className="btn-primary btn-block">
                    Ver perfil
                  </button>
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>
    </>
  );
}