import "../../../css/adresse.css";
import SectionPerso from "../../ui/SectionPerso";
import SectionTitle from "../../ui/SectionTitle";
import PlaceCard from "../../ui/PlaceCard";


function Card({
  title,
  emoji,
  children,
  accent,
}) {
  return (
    <div className={`card ${accent ? "card-accent" : ""}`}>
      <h3 className="card-title">
        {emoji && <span>{emoji} </span>}
        {title}
      </h3>
      {children}
    </div>
  );
}

/* =========================
   MARKET CARD
========================= */

function MarketCard({ m }) {
  return (
    <Card emoji="" title={`${m.ville}`}>
      <div className="cardContent">
        <div className="list">
            <div className="list-item">{m.km}</div>
            <div className="list-item">📅 {m.detail}</div>
            <div className="list-item">⏰ {m.heure}</div>
            <div className="list-item">📍 {m.lieu}</div>
        </div>
      </div>
    </Card>
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

              <h3 className="h3 adresseTitle">🍕 Restaurants</h3>

              <div className="grid">
                <div className="col col-3">
                    <PlaceCard
                    emoji="🍽️"
                    name="Cuivres & Coquelicots"
                    description="Très bon restaurant local à Anglès. Cuisine française de saison dans un cadre simple et convivial, parfait pour un déjeuner ou dîner après une sortie nature."
                    address="406 Rte de Saint-Pons, 81260 Anglès"
                    phone="09 86 22 39 97"
                    distance="À Anglès"
                    />
                </div>

                <div className="col col-3">
                    <PlaceCard
                    emoji="🥘"
                    name="Restaurant Le Café De Paris"
                    description="Bistrot très bien noté avec cuisine française traditionnelle et généreuse."
                    address="8 Pl. de l'Hôtel de ville, 81260 Brassac"
                    phone="05 63 74 00 31"
                    distance="≈ 9 km"
                    />
                </div>

                <div className="col col-3">
                    <PlaceCard
                    emoji="🌶️"
                    name="Les Épicuriens — Tapas"
                    description="Restaurant raffiné dans un joli village de montagne, parfait pour un repas gastronomique ou un dîner romantique."
                    address=" 1 Rue de la Mairie, 34330 Le Soulié"
                    phone="06 84 44 15 56"
                    distance="Alentours"
                    />
                </div>

                <div className="col col-3">
                    <PlaceCard
                    emoji="🏡"
                    name="Auberge du Rialet"
                    description="Restaurant raffiné dans un joli village de montagne, parfait pour un repas gastronomique ou un dîner romantique."
                    address="81240 Le Rialet"
                    phone="06 13 23 55 94"
                    distance="Alentours"
                    />
                </div>

                <div className="col col-3">
                    <PlaceCard
                    emoji="🥩"
                    name="Restaurant Le Laouzas"
                    description="Restauration traditionnelle, boucher traiteur de métier. Rayon viande, charcuterie, fromage à la coupe — les morceaux sont choisis directement par les clients."
                    address="81320 Nages"
                    phone="06 11 04 62 37"
                    distance="Alentours"
                    />
                </div>

                <div className="col col-3">
                    <PlaceCard
                    emoji="🌊"
                    name="Lake Café Raviège"
                    description="Ambiance détendue au bord du lac, idéal pour déjeuner en terrasse avec des plats variés tirant parti des produits locaux."
                    address="69 chemin de la Plage, 81260 Anglès"
                    phone="06 82 39 21 54"
                    distance="10 min"
                    hours="Mai à octobre"
                    />
                </div>
              </div>

              {/* ================= COMMERCES ================= */}

              <h3 className="h3 adresseTitle">🛒 Commerces & producteurs locaux</h3>

              <div className="grid">
                <div className="col col-3">
                    <PlaceCard
                    emoji="☕"
                    name="Café sympa"
                    description="Café convivial au cœur du village d'Anglès, idéal pour commencer la journée."
                    address=" Centre du village d'Anglès"
                    distance="Centre village"
                    />
                </div>
                
                <div className="col col-3">
                    <PlaceCard
                    emoji="🥐"
                    name="Boulangerie"
                    description="Boulangerie locale au centre du village pour votre pain quotidien."
                    address="Centre du village"
                    distance="Centre village"
                    />
                </div>

                <div className="col col-3">
                    <PlaceCard
                    emoji="🛒"
                    name="Proxi Super"
                    description="Épicerie de village très bien notée. Produits locaux disponibles : légumes, fromages, etc. Parfait pour les courses du quotidien."
                    distance="Centre village"
                    address="Centre du village"
                    />
                </div>

                <div className="col col-2">
                    <PlaceCard
                    emoji="🐑"
                    name="Fromagerie de Lamarque"
                    description="Expérience 100% locale. Ferme familiale produisant des fromages de brebis artisanaux issus de son propre troupeau. Parfait pour un pique-nique ou un souvenir gourmand du Tarn."
                    address=" Lieu-dit Lamarque, 81260 Anglès"
                    phone="06 26 20 02 45"
                    distance="1,6 km"
                    hours={"Sam. 6 fév. – 24 oct. : 10h–12h et 16h–18h"}
                    />
                </div>

                <div className="col col-2">
                    <PlaceCard
                    emoji="🐄"
                    name="Fromagerie Gaec Du Rodier"
                    description="Spécialités laitières élaborées à la ferme grâce au lait frais de leurs vaches. Fromages affinés, fromages frais, beurre et crème fraîche issus du lait fermier."
                    address=" Lieu dit Le Rodier, 81240 Rouairoux"
                    phone="06 68 34 55 74"
                    distance="À 12 min (9,2 km)"
                    hours={"Sam. : 10h–13h et 14h30–18h"}
                    />
                </div>
              </div>

              {/* ================= MARCHÉS ================= */}

              <h3 className="h3 adresseTitle">🗓️ Marchés hebdomadaires</h3>

                <div className="grid">
                {[
                    {
                    ville: "🏡 Anglès",
                    detail: "Juillet–août uniquement",
                    jour: "Mercredi matin",
                    heure: "Mercredi matin",
                    lieu: "Place du village",
                    km: "Centre",
                    },
                    {
                    ville: "🏡 Brassac",
                    detail: "Marché permanent",
                    jour: "Samedi matin",
                    heure: "8h–13h",
                    lieu: "Place de la mairie",
                    km: "9 km",
                    },
                    {
                    ville: "🏡 Mazamet",
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