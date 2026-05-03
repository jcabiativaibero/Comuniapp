function ServiceCard({ service }) {
  return (
    <div className="svc-card">
      <div className="svc-img">
        <img src={service.image} alt={service.title} />
        <span className={`svc-badge ${service.badgeClass}`}>
          {service.category}
        </span>
      </div>

      <div className="svc-body">
        <h3>{service.title}</h3>
        <p>{service.description}</p>

        <div className="svc-loc">
          📍 {service.location}
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;