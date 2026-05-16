import "../../../css/adresse.css";
import SectionPerso from "../../ui/SectionPerso";
import SectionTitle from "../../ui/SectionTitle";

/* =========================
   PLACE CARD
========================= */

function PlaceCard({
  emoji,
  name,
  description,
  address,
  phone,
  distance,
  hours,
}) {
  return (
    <div className="card">

      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <span>{emoji}</span>
        <h3 className="place-title">{name}</h3>
      </div>

      {distance && <span className="badge">{distance}</span>}

      <p className="place-desc">{description}</p>

      {hours && <div className="place-desc">🕐 {hours}</div>}
      {address && <div className="place-desc">📍 {address}</div>}

      {phone && (
        <a
          href={`tel:${phone.replace(/\s/g, "")}`}
          className="place-desc"
          style={{ color: "var(--green)" }}
        >
          📞 {phone}
        </a>
      )}
    </div>
  );
}

/* =========================
   MARKET CARD
========================= */

function MarketCard({ m }) {
  return (
    <div className="market-card">

      <div className="market-header">
        <div className="market-title">🟢 {m.ville}</div>
        <div className="market-km">{m.km}</div>
      </div>

      <div className="place-desc">{m.detail}</div>
      <div className="place-desc">📅 {m.jour}</div>
      {m.heure && <div className="place-desc">⏰ {m.heure}</div>}
      <div className="place-desc">📍 {m.lieu}</div>

    </div>
  );
}

/* =========================
   SECTION
========================= */

export function AdressesSection() {
    return (
        <SectionPerso id="adresses" className="section">

          <div className="container">
            <SectionTitle
              emoji="🍽️"
              title="Nos bonnes adresses"
              subtitle="Testées et approuvées par vos hôtes."
            />

              {/* ================= RESTAURANTS ================= */}

              <h3 className="h3">🍕 Restaurants</h3>

              <div className="grid">
                <div className="col col-3">
                    <PlaceCard
                    emoji="🍽️"
                    name="Cuivres & Coquelicots"
                    description="Cuisine locale conviviale et saisonnière."
                    address="Anglès"
                    phone="09 86 22 39 97"
                    distance="À Anglès"
                    />
                </div>

                <div className="col col-3">
                    <PlaceCard
                    emoji="🥘"
                    name="Café de Paris"
                    description="Bistrot traditionnel très apprécié."
                    address="Brassac"
                    phone="05 63 74 00 31"
                    distance="≈ 9 km"
                    />
                </div>

                <div className="col col-3">
                    <PlaceCard
                    emoji="🌊"
                    name="Lake Café Raviège"
                    description="Restaurant au bord du lac."
                    address="Anglès"
                    phone="06 82 39 21 54"
                    distance="10 min"
                    hours="Mai à octobre"
                    />
                </div>
              </div>

              {/* ================= COMMERCES ================= */}

              <h3 className="h3">🛒 Commerces & producteurs</h3>

              <div className="grid">
                <div className="col col-3">
                    <PlaceCard
                    emoji="🥐"
                    name="Boulangerie"
                    description="Pain frais quotidien au village."
                    address="Centre Anglès"
                    distance="Centre"
                    />
                </div>

                <div className="col col-3">
                    <PlaceCard
                    emoji="🐑"
                    name="Fromagerie de Lamarque"
                    description="Fromages artisanaux de brebis."
                    address="Anglès"
                    phone="06 26 20 02 45"
                    distance="1,6 km"
                    />
                </div>
              </div>

              {/* ================= MARCHÉS ================= */}

              <h3 className="h3">🗓️ Marchés hebdomadaires</h3>

                <div className="grid">
                {[
                    {
                    ville: "Anglès",
                    detail: "Juillet–août uniquement",
                    jour: "Mercredi matin",
                    lieu: "Place du village",
                    km: "Centre",
                    },
                    {
                    ville: "Brassac",
                    detail: "Marché permanent",
                    jour: "Samedi matin",
                    heure: "8h–13h",
                    lieu: "Place de la mairie",
                    km: "9 km",
                    },
                    {
                    ville: "Mazamet",
                    detail: "Marché permanent",
                    jour: "Mardi & Samedi",
                    heure: "8h–13h",
                    lieu: "Centre ville",
                    km: "18 km",
                    },
                ].map((m) => (
                    <div key={m.ville} className="col col-4">
                    <MarketCard m={m} />
                    </div>
                ))}

              </div>
          </div>
        </SectionPerso>
    );
}