import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="es">
      <body
        style={{
          margin: 0,
          background: "#0d1419",
          color: "#fcfcfd",
          fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.25rem",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontSize: "0.72rem",
              fontWeight: 600,
              color: "#a8adb3",
            }}
          >
            Error 404 · Page not found
          </p>
          <h1
            style={{
              fontFamily: "'Source Serif 4', Georgia, serif",
              fontWeight: 600,
              fontSize: "clamp(2.4rem, 8vw, 4.6rem)",
              lineHeight: 1.06,
              margin: 0,
              letterSpacing: "-0.01em",
            }}
          >
            La página no
            <br />
            se ha encontrado
          </h1>
          <Link
            href="/"
            style={{
              marginTop: "1.25rem",
              fontSize: "0.74rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontWeight: 600,
              color: "#fcfcfd",
              borderBottom: "1px solid currentColor",
              paddingBottom: "2px",
            }}
          >
            Volver al inicio →
          </Link>
        </div>
      </body>
    </html>
  );
}
