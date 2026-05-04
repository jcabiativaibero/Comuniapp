export default function Categories() {
  const categories = [
    { name: "Hogar", icon: "🏠", class: "cat-green" },
    { name: "Tecnología", icon: "💻", class: "cat-blue" },
    { name: "Salud", icon: "🩺", class: "cat-rose" },
    { name: "Educación", icon: "📚", class: "cat-purple" },
    { name: "Belleza", icon: "💅", class: "cat-pink" },
    { name: "Comida", icon: "🍔", class: "cat-amber" },
    { name: "Transporte", icon: "🚗", class: "cat-cyan" },
    { name: "Mascotas", icon: "🐶", class: "cat-yellow" }
  ];

  return (
    <section className="section section-light">
      <div className="container">

        <div className="section-head">
          <span className="section-tag">CATEGORÍAS</span>
          <h2>Explora lo que necesitas</h2>
          <p>Servicios disponibles cerca de ti</p>
        </div>

        <div className="cats-grid">
          {categories.map((cat, i) => (
            <div key={i} className={`cat-card ${cat.class}`}>
              <div className="cat-emoji">{cat.icon}</div>
              <span>{cat.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}