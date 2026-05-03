import { Link } from "react-router-dom";

function Categories() {
  const categories = [
    { icon: "🔧", name: "Plomería", value: "plomeria", class: "cat-blue" },
    { icon: "🍰", name: "Repostería", value: "reposteria", class: "cat-pink" },
    { icon: "🎓", name: "Tutorías", value: "tutorias", class: "cat-purple" },
    { icon: "⚡", name: "Electricidad", value: "electricidad", class: "cat-yellow" },
    { icon: "✨", name: "Belleza", value: "belleza", class: "cat-rose" },
    { icon: "🔨", name: "Carpintería", value: "carpinteria", class: "cat-amber" },
    { icon: "🐾", name: "Mascotas", value: "mascotas", class: "cat-green" },
    { icon: "🧹", name: "Limpieza", value: "limpieza", class: "cat-cyan" }
  ];

  return (
    <section className="section section-light">
      <div className="container">

        <div className="section-head">
          <div className="section-tag">Explora</div>
          <h2>Categorías disponibles</h2>
          <p>Encuentra el servicio que necesitas</p>
        </div>

        <div className="cats-grid">
          {categories.map((cat, index) => (
            <Link
              key={index}
              to={`/services?cat=${cat.value}`}
              className={`cat-card ${cat.class}`}
            >
              <div className="cat-emoji">{cat.icon}</div>
              <span>{cat.name}</span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Categories;