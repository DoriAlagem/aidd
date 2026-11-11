import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    <div
      style={{
        background: "#0E0F12",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        fontFamily: "monospace",
        position: "relative",
      }}
    >
      {/* amber glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(245,165,36,0.12) 0%, transparent 70%)",
        }}
      />

      {/* top label */}
      <div
        style={{
          color: "#F5A524",
          fontSize: 20,
          marginBottom: 32,
          letterSpacing: 4,
        }}
      >
        dor-alagem.com
      </div>

      {/* name */}
      <div
        style={{
          color: "white",
          fontSize: 80,
          fontWeight: "bold",
          lineHeight: 1.1,
          marginBottom: 8,
        }}
      >
        Dor Alagem
      </div>

      {/* amber accent line */}
      <div
        style={{
          width: 80,
          height: 4,
          background: "#F5A524",
          borderRadius: 999,
          marginBottom: 32,
        }}
      />

      {/* tagline */}
      <div style={{ color: "#A8A49A", fontSize: 28 }}>
        software engineer · ai agents · llms · python
      </div>
    </div>,
    size
  );
}
