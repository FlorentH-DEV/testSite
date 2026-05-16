import { ReactNode } from "react";
import '../../../css/aDecourvrir.css'
import SectionPerso from "../../ui/SectionPerso";
import SectionTitle from "../../ui/SectionTitle";


/* =========================
   ACTIVITY CARD
========================= */

function ActivityCard({
  emoji,
  name,
  distance,
  details,
  style,
}) {
  return (
    <div
      style={{
        flex: "1 1 300px",
        border: "1px solid oklch(0.88 0.012 75)",
        borderRadius: 12,
        padding: 16,
        background: "white",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        ...style,
      }}
    >
      <div className="flex items-center gap-2">
        <span style={{ fontSize: 20 }}>{emoji}</span>
        <div className="flex flex-col">
          <span
            style={{
              fontWeight: 600,
              fontFamily: "'Fraunces', serif",
              color: "oklch(0.22 0.02 55)",
            }}
          >
            {name}
          </span>

          {distance && (
            <span
              style={{
                fontSize: 11,
                padding: "2px 8px",
                borderRadius: 999,
                background: "oklch(0.32 0.08 145 / 0.1)",
                color: "oklch(0.32 0.08 145)",
                width: "fit-content",
              }}
            >
              {distance}
            </span>
          )}
        </div>
      </div>

      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 6,
          fontSize: 13,
          color: "oklch(0.42 0.02 55)",
        }}
      >
        {details.map((d, i) => (
          <li key={i} className="flex gap-2">
            <span>•</span>
            <span>{d}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* =========================
   MAIN COMPONENT
========================= */

export default function DecouvrirSection() {
    return (
        <SectionPerso
        id="decouvrir"
        className="py-16"
        style={{ background: "oklch(0.96 0.01 75)" }}
        >
            <div
                style={{
                width: "100%",
                maxWidth: 1200,
                margin: "0 auto",
                padding: "0 16px",
                display: "flex",
                flexDirection: "column",
                gap: 40,
                }}
            >
                {/* TITLE */}
                <SectionTitle
                emoji="🌍"
                title="À découvrir autour"
                subtitle="Quelques idées pour profiter de votre séjour dans le Tarn."
                />

                {/* HERO */}
                <div
                style={{
                    position: "relative",
                    height: 280,
                    borderRadius: 16,
                    overflow: "hidden",
                }}
                >
                <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663665931328/QWCmyRXfvy9N52MLoe92wh/nature-tarn-oMqVoNwdnhfUVqLjKxaUvR.webp"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />

                <div
                    style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "flex-end",
                    padding: 20,
                    background:
                        "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
                    color: "white",
                    fontWeight: 600,
                    }}
                >
                    La nature préservée du Tarn vous attend 🌿
                </div>
                </div>

                {/* LACS */}
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <h3 style={{ fontSize: 20, fontWeight: 700 }}>🌊 Lacs & Nature</h3>

                <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                    {/* MAIN */}
                    <div style={{ flex: "1 1 60%" }}>
                    <div
                        style={{
                        border: "1px solid #e5e5e5",
                        borderRadius: 12,
                        overflow: "hidden",
                        background: "white",
                        display: "flex",
                        flexDirection: "column",
                        }}
                    >
                        <img
                        src="https://d2xsxph8kpxj0f.cloudfront.net/310519663665931328/QWCmyRXfvy9N52MLoe92wh/lac-raviege-bCL7qQo2dsGsfoUFb4syko.webp"
                        style={{ height: 200,  }}
                        />

                        <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 8 }}>
                        <div style={{ display: "flex", gap: 10, alignItems: "center", fontWeight: 600 }}>
                            🌊 Lac de la Raviège
                            <span
                            style={{
                                fontSize: 11,
                                padding: "2px 8px",
                                borderRadius: 999,
                                background: "rgba(0,120,80,0.1)",
                                color: "rgb(0,120,80)",
                            }}
                            >
                            ≈ 10 min
                            </span>
                        </div>

                        <div style={{ fontSize: 13, color: "#555" }}>
                            <p>🏖️ Plages et baignade</p>
                            <p>🚴 Tour du lac</p>
                            <p>🛶 Paddle & kayak</p>
                        </div>
                        </div>
                    </div>
                    </div>

                    {/* SIDE */}
                    <div style={{ flex: "1 1 35%", display: "flex", flexDirection: "column", gap: 20 }}>
                    <ActivityCard
                        emoji="🌊"
                        name="Lac des Saints Peyres"
                        distance="≈ 5 min"
                        details={["Balades", "Pêche", "Nature"]}
                    />

                    <ActivityCard
                        emoji="🌊"
                        name="Lac du Laouzas"
                        distance="≈ 30 min"
                        details={["Kayak", "Paddle", "Randonnée"]}
                    />
                    </div>
                </div>
                </div>

                {/* NATURE */}
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <h3 style={{ fontSize: 20, fontWeight: 700 }}>🌲 Nature</h3>

                <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                    <ActivityCard
                    emoji="🌿"
                    name="Gorges d'Héric"
                    distance="≈ 1h"
                    details={["Piscines naturelles", "Randonnée"]}
                    style={{ flex: "1 1 45%" }}
                    />

                    <ActivityCard
                    emoji="🌿"
                    name="Forêt de la Grésigne"
                distance="≈ 1h50"
                details={["Forêt immense", "Faune sauvage"]}
                style={{ flex: "1 1 45%" }}
                />
            </div>
            </div>
        </div>
        </SectionPerso>
    );
}