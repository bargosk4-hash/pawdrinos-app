import React from "react";

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🐾 Pawdrinos</h1>
      <p style={styles.subtitle}>
        Clases de yoga y mindfulness con mascotas (perros y gatos).
      </p>

      {/* Servicios */}
      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>Servicios</h2>
        <ul style={styles.list}>
          <li>Clases grupales de yoga con perros o gatos</li>
          <li>Sesiones de mindfulness acompañado de mascotas</li>
          <li>Lecturas y ejercicios de relajación</li>
          <li>Actividades adaptadas para niños, jóvenes y adultos</li>
        </ul>
      </div>

      {/* Beneficios */}
      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>Beneficios</h2>
        <ul style={styles.list}>
          <li>Disminución del estrés y la ansiedad</li>
          <li>Mayor motivación y bienestar emocional</li>
          <li>Fomento de la socialización y creación de comunidad</li>
          <li>Conexión emocional y acompañamiento</li>
        </ul>
      </div>

      {/* Precios */}
      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>Precios</h2>
        <ul style={styles.list}>
          <li>Sesión de yoga con mascotas: $85.000</li>
          <li>Sesión de mindfulness y relajación: $100.000</li>
          <li>Sesión completa (yoga + mindfulness): $120.000</li>
        </ul>
        <button style={styles.button}>Reserva tu sesión</button>
      </div>

      {/* Galería */}
      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>Galería</h2>
        <div style={styles.gallery}>
          <img
            src="https://i.ibb.co/3s5K3tN/yoga-perros1.jpg"
            alt="Yoga con perros"
            style={styles.image}
          />
          <img
            src="https://i.ibb.co/Yf2qP3f/yoga-perros2.jpg"
            alt="Yoga con perros"
            style={styles.image}
          />
        </div>
      </div>

      {/* Contacto */}
      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>Contacto</h2>
        <p style={styles.contact}>📞 Teléfono: 3014412987</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#fff3e0", // naranja claro
    minHeight: "100vh",
  },
  title: {
    fontSize: "2.5rem",
    color: "#e65100", // naranja oscuro
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#555",
    marginBottom: "20px",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "20px",
    margin: "20px auto",
    maxWidth: "600px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "left",
  },
  sectionTitle: {
    fontSize: "1.5rem",
    marginBottom: "10px",
    color: "#e65100",
  },
  list: {
    fontSize: "1rem",
    color: "#333",
    paddingLeft: "20px",
  },
  button: {
    backgroundColor: "#ff7043",
    color: "white",
    border: "none",
    padding: "12px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1rem",
    marginTop: "15px",
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
  },
};

export default App;

