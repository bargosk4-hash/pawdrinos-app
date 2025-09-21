import React, { useState } from "react";

export default function App() {
  const [activeTab, setActiveTab] = useState("servicios");
  const [reservation, setReservation] = useState({
    sessionId: "1",
    name: "",
    email: "",
    date: "",
  });

  const sessions = [
    {
      id: "1",
      title: "Yoga suave con perros",
      description:
        "Clase enfocada en estiramientos, respiración y juego controlado con perros. Ideal para principiantes.",
      price: "85.000",
    },
    {
      id: "2",
      title: "Mindfulness & gatoterapia",
      description:
        "Meditación guiada y ejercicios de atención plena acompañados por gatos. Espacio tranquilo y reconfortante.",
      price: "100.000",
    },
    {
      id: "3",
      title: "Flow mixto (perros y gatos)",
      description:
        "Sesión dinámica de yoga y mindfulness con interacción controlada con perros y gatos. Para quienes buscan más movimiento.",
      price: "120.000",
    },
  ];

  function handleChange(e) {
    setReservation({ ...reservation, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const sel = sessions.find((s) => s.id === reservation.sessionId);
    alert(
      `Reserva recibida:\n\nSesión: ${sel.title}\nFecha: ${reservation.date}\nNombre: ${reservation.name}\nEmail: ${reservation.email}\nPrecio: $${sel.price}`
    );
    setReservation({ sessionId: "1", name: "", email: "", date: "" });
  }

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.logo}>🐾 Pawdrinos</div>
        <div style={styles.tag}>Yoga y mindfulness con perros y gatos</div>
      </header>

      {/* Pestañas */}
      <nav style={styles.tabs}>
        <button
          style={activeTab === "servicios" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("servicios")}
        >
          Servicios
        </button>
        <button
          style={activeTab === "beneficios" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("beneficios")}
        >
          Beneficios
        </button>
        <button
          style={activeTab === "precios" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("precios")}
        >
          Precios
        </button>
        <button
          style={activeTab === "reservar" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("reservar")}
        >
          Reservar
        </button>
        <button
          style={activeTab === "galeria" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("galeria")}
        >
          Galería
        </button>
        <button
          style={activeTab === "contacto" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("contacto")}
        >
          Contacto
        </button>
      </nav>

      {/* Contenido */}
      <main style={styles.main}>
        {activeTab === "servicios" && (
          <section style={styles.grid}>
            {sessions.map((s) => (
              <article key={s.id} style={styles.card}>
                <div style={styles.cardHeader}>
                  <h3 style={styles.cardTitle}>{s.title}</h3>
                  <div style={styles.priceTag}>${s.price}</div>
                </div>
                <p style={styles.cardText}>{s.description}</p>
                <p style={styles.small}>
                  Duración aprox. 60 min • Cupos limitados
                </p>
              </article>
            ))}
          </section>
        )}

        {activeTab === "beneficios" && (
          <section style={styles.card}>
            <h2 style={styles.sectionTitle}>Beneficios</h2>
            <ul style={styles.list}>
              <li>Reduce el estrés y la ansiedad de forma natural.</li>
              <li>Mejora la concentración y el estado de ánimo.</li>
              <li>Fomenta la socialización y el sentido de comunidad.</li>
              <li>
                Ofrece acompañamiento emocional a través del vínculo con
                mascotas entrenadas.
              </li>
            </ul>
          </section>
        )}

        {activeTab === "precios" && (
          <section style={styles.card}>
            <h2 style={styles.sectionTitle}>Precios por sesión</h2>
            <ul style={styles.priceList}>
              {sessions.map((s) => (
                <li key={s.id} style={styles.priceRow}>
                  <span>{s.title}</span>
                  <strong style={styles.priceStrong}>${s.price}</strong>
                </li>
              ))}
            </ul>
            <p style={{ ...styles.small, marginTop: 10 }}>
              Todos los precios incluyen guía certificada y acompañamiento de
              mascotas entrenadas.
            </p>
          </section>
        )}

        {activeTab === "reservar" && (
          <section style={styles.card}>
            <h2 style={styles.sectionTitle}>Reservar sesión</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
              <label style={styles.label}>
                Selecciona sesión
                <select
                  name="sessionId"
                  value={reservation.sessionId}
                  onChange={handleChange}
                  style={styles.select}
                >
                  {sessions.map((s) => (
                    <option value={s.id} key={s.id}>
                      {s.title} — ${s.price}
                    </option>
                  ))}
                </select>
              </label>

              <label style={styles.label}>
                Nombre
                <input
                  name="name"
                  value={reservation.name}
                  onChange={handleChange}
                  required
                  style={styles.input}
                  placeholder="Tu nombre"
                />
              </label>

              <label style={styles.label}>
                Email
                <input
                  name="email"
                  value={reservation.email}
                  onChange={handleChange}
                  type="email"
                  required
                  style={styles.input}
                  placeholder="tu@email.com"
                />
              </label>

              <label style={styles.label}>
                Fecha
                <input
                  name="date"
                  value={reservation.date}
                  onChange={handleChange}
                  type="date"
                  required
                  style={styles.input}
                />
              </label>

              <button type="submit" style={styles.bookButton}>
                Confirmar reserva
              </button>
            </form>
          </section>
        )}

        {activeTab === "galeria" && (
          <section style={styles.card}>
            <h2 style={styles.sectionTitle}>Galería</h2>
            <div style={styles.gallery}>
              <img
                src="/6a76f3fa-97c4-4d32-84c4-c735dff5f5d0.png"
                alt="Yoga con mascotas 1"
                style={styles.image}
              />
              <img
                src="/9222a5f4-a739-45bd-9094-96ac1e60b9fd.png"
                alt="Yoga con mascotas 2"
                style={styles.image}
              />
            </div>
          </section>
        )}

        {activeTab === "contacto" && (
          <section style={styles.card}>
            <h2 style={styles.sectionTitle}>Contacto</h2>
            <p style={styles.contact}>📞 Teléfono: 3014412987</p>
            <a
              href="https://wa.me/573014412987?text=Hola!%20Quiero%20reservar%20una%20sesión%20🐾"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.bookButton}
            >
              Reserva por WhatsApp
            </a>
          </section>
        )}
      </main>

      <footer style={styles.footer}>
        <small>© Pawdrinos — Bienestar con peludos</small>
      </footer>
    </div>
  );
}

/* Estilos */
const mainOrange = "#ff7a18";
const lightOrangeBG = "#fff4e6";

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    minHeight: "100vh",
    backgroundColor: lightOrangeBG,
    color: "#222",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    padding: "18px 24px",
    borderBottom: `1px solid rgba(0,0,0,0.06)`,
  },
  logo: {
    fontSize: "1.4rem",
    fontWeight: "700",
    color: mainOrange,
  },
  tag: {
    fontSize: "0.9rem",
    color: "#444",
    marginTop: 6,
  },
  tabs: {
    display: "flex",
    gap: "8px",
    padding: "14px 24px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  tab: {
    padding: "8px 14px",
    borderRadius: 8,
    backgroundColor: "white",
    border: "1px solid rgba(0,0,0,0.08)",
    cursor: "pointer",
  },
  activeTab: {
    padding: "8px 14px",
    borderRadius: 8,
    backgroundColor: mainOrange,
    color: "white",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
  },
  main: {
    padding: "20px",
    flex: 1,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "16px",
  },
  card: {
    backgroundColor: "white",
    padding: "18px",
    borderRadius: 12,
    boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  cardTitle: {
    margin: 0,
    fontSize: "1.05rem",
    color: "#222",
  },
  priceTag: {
    backgroundColor: "#fff7f0",
    color: mainOrange,
    padding: "6px 10px",
    borderRadius: 8,
    fontWeight: "700",
    border: `1px solid rgba(255,122,24,0.12)`,
  },
  cardText: {
    color: "#444",
    marginBottom: 8,
  },
  small: {
    color: "#666",
    fontSize: "0.85rem",
  },
  sectionTitle: {
    fontSize: "1.2rem",
    marginBottom: 10,
    color: "#222",
  },
  list: {
    paddingLeft: 18,
    color: "#333",
  },
  priceList: {
    listStyle: "none",
    paddingLeft: 0,
    margin: 0,
  },
  priceRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px 0",
    borderBottom: "1px dashed rgba(0,0,0,0.06)",
  },
  priceStrong: {
    color: mainOrange,
    fontWeight: 700,
  },
  form: {
    display: "grid",
    gap: 10,
    marginTop: 6,
  },
  label: {
    display: "flex",
    flexDirection: "column",
    fontSize: "0.9rem",
    color: "#333",
  },
  input: {
    padding: "8px 10px",
    borderRadius: 8,
    border: "1px solid rgba(0,0,0,0.12)",
    marginTop: 6,
  },
  select: {
    padding: "8px 10px",
    borderRadius: 8,
    border: "1px solid rgba(0,0,0,0.12)",
    marginTop: 6,
    backgroundColor: "white",
  },
  bookButton: {
    marginTop: 6,
    padding: "12px 14px",
    borderRadius: 10,
    border: "none",
    backgroundColor: mainOrange,
    color: "white",
    fontWeight: 700,
    cursor: "pointer",
    display: "inline-block",
    textAlign: "center",
    textDecoration: "none",
  },
  gallery: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    flexWrap: "wrap",
  },
  image: {
    width: "250px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
  },
  contact: {
    fontSize: "1.1rem",
    color: "#333",
    marginBottom: "10px",
  },
  footer: {
    padding: 14,
    textAlign: "center",
    borderTop: "1px solid rgba(0,0,0,0.06)",
    backgroundColor: "transparent",
  },
};


