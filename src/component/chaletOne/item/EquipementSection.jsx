import "../../../css/equipement.css";
import SectionTitle from "../../ui/SectionTitle";
import SectionPerso from "../../ui/SectionPerso";

/* =========================
   CARD COMPONENT
========================= */

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
   SECTION
========================= */

export const EquipmentSection = () =>    {
    return (
        <SectionPerso id="equipements" className="section section-bg">

        <div className="container">

            <SectionTitle
            emoji="⚙️"
            title="Les équipements"
            subtitle="Tout ce dont vous avez besoin pour un séjour confortable."
            />

            <div className="grid">

            {/* CONNECTIVITÉ */}
            <div className="col col-3">
                <Card emoji="📶" title="Connectivité & Divertissement">
                <div className="list">
                    <div className="list-item">📶 Wi-Fi dans le chalet</div>
                    <div className="list-item">📺 Télévision</div>
                </div>
                </Card>
            </div>

            {/* CHAUFFAGE */}
            <div className="col col-3">
                <Card emoji="🌡️" title="Chauffage & Climatisation">
                <div className="list">
                    <div className="list-item">💨 Pompe à chaleur Air/Air</div>
                    <div className="list-item">🪵 Poêle à bois (fourni)</div>
                </div>
                </Card>
            </div>

            {/* ÉLECTROMÉNAGER */}
            <div className="col col-3">
                <Card emoji="🧺" title="Électroménager">
                <div className="list">
                    <div className="list-item">☕ Cafetière Dolce Gusto</div>
                    <div className="list-item">🍞 Grille-pain</div>
                    <div className="list-item">🔥 Four & Micro-ondes</div>
                    <div className="list-item">🍽️ Lave-vaisselle</div>
                    <div className="list-item">🧀 Raclette</div>
                </div>
                </Card>
            </div>

            {/* NETTOYAGE */}
            <div className="col col-3">
                <Card emoji="🧹" title="Nettoyage">
                <div className="list">
                    <div className="list-item">🧹 Balai & serpillière</div>
                    <div className="list-item">🌀 Aspirateur</div>
                </div>
                </Card>
            </div>

            {/* CUISINE */}
            <div className="col col-3">
                <Card emoji="🍳" title="Cuisine" accent>
                <div className="card-subtitle">
                    Produits de base disponibles :
                </div>
                <div className="list">
                    <div className="list-item">
                    🧂 Sel, poivre, huile, sucre
                    </div>
                    <div className="list-item">
                    ☕ Café, thé, chocolat
                    </div>
                    <div className="list-item">
                    🫧 Produits ménagers fournis
                    </div>
                </div>
                </Card>
            </div>

            {/* SALLE DE BAIN */}
            <div className="col col-3">
                <Card emoji="🛁" title="Salle de bain & literie">
                <div className="list">
                    <div className="list-item">🛁 Serviettes fournies</div>
                    <div className="list-item">🛏️ Lits faits à l’arrivée</div>
                    <div className="list-item">👶 Lit bébé sur demande</div>
                </div>
                </Card>
            </div>

            {/* LOISIRS */}
            <div className="col col-span-3">
                <Card emoji="🎲" title="Détente & loisirs">

                <div className="card-subtitle">
                    Profitez pleinement du séjour
                </div>

                <div className="split">

                    <div className="split-col">
                    <div className="h4">🃏 Jeux disponibles</div>
                    <div className="list">
                        <div className="list-item">UNO, SKYJO, Monopoly</div>
                        <div className="list-item">Jeux de cartes</div>
                    </div>
                    </div>

                    <div className="split-col">
                    <div className="h4">🌿 Extérieur</div>
                    <div className="list">
                        <div className="list-item">🪑 Transats</div>
                        <div className="list-item">🌳 Espace ombragé</div>
                        <div className="list-item">💡 Coin détente soir</div>
                    </div>
                    </div>

                </div>

                </Card>
            </div>

            </div>
        </div>

        </SectionPerso>
    );
}