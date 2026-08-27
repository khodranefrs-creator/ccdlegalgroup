import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="es">
      <body
        style={{
          margin: 0,
          background: "#151b20",
          color: "#fbf9f5",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.5rem",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <p style={{ letterSpacing: "0.25em", textTransform: "uppercase", fontSize: "0.8rem", color: "#8c3044" }}>
            Error 404
          </p>
          <h1
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontWeight: 400,
              fontSize: "clamp(2.5rem, 8vw, 5rem)",
              lineHeight: 1,
              margin: 0,
            }}
          >
            Materia no
            <br />
            encontrada
          </h1>
          <Link
            href="/"
            style={{
              marginTop: "1rem",
              fontSize: "0.75rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 600,
              color: "#8c3044",
            }}
          >
            Volver al inicio →
          </Link>
        </div>
      </body>
    </html>
  );
}
