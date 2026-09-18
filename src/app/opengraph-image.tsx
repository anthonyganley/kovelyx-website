import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "Kovelyx KOVL";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#020617",
          color: "#ffffff",
          padding: "70px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            KOVELYX
          </div>

          <div
            style={{
              display: "flex",
              border: "1px solid #1e3a5f",
              borderRadius: 999,
              padding: "10px 20px",
              color: "#60a5fa",
              fontSize: 18,
            }}
          >
            BASE SEPOLIA TESTNET
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 950,
          }}
        >
          <div
            style={{
              fontSize: 100,
              fontWeight: 700,
              letterSpacing: "-0.05em",
              lineHeight: 1,
            }}
          >
            Kovelyx
          </div>

          <div
            style={{
              marginTop: 30,
              fontSize: 38,
              lineHeight: 1.3,
              color: "#e2e8f0",
            }}
          >
            A fixed-supply digital token designed for the Base blockchain.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #1e293b",
            paddingTop: 28,
            fontSize: 21,
            color: "#94a3b8",
          }}
        >
          <div style={{ display: "flex" }}>
            KOVL · Fixed supply 1,000,000,000
          </div>

          <div style={{ display: "flex", color: "#60a5fa" }}>
            kovelyx.net
          </div>
        </div>
      </div>
    ),
    size
  );
}