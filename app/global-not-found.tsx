/* Global 404 for unmatched routes. The root layout lives under app/[locale],
   so Next.js falls back to this file when no locale segment can be matched. */

import Link from "next/link";

const containerStyle: React.CSSProperties = {
  minHeight: "60vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.75rem",
  padding: "1.5rem",
  textAlign: "center",
  background: "#0A0A0B",
  color: "#F0F0F2",
};

export default function GlobalNotFound() {
  return (
    <div style={containerStyle}>
      <p style={{ color: "#FF0033", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
        404
      </p>
      <h1 style={{ fontSize: "1.5rem", fontWeight: 700 }}>
        This page doesn&apos;t exist
      </h1>
      <Link
        href="/en"
        style={{
          marginTop: "0.5rem",
          background: "#FF0033",
          color: "#fff",
          padding: "0.625rem 1.25rem",
          borderRadius: "0.5rem",
          fontSize: "0.875rem",
          textDecoration: "none",
        }}
      >
        Back home
      </Link>
    </div>
  );
}