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
                    <div className="col col-4">
                        <Card emoji="📶" title="Connectivité & Divertissement">
                        <div className="list">
                            <div className="list-item">📶 Wi-Fi dans le chalet</div>
                            <div className="list-item">📺 Télévision</div>
                        </div>
                        </Card>
                    </div>

                    {/* CHAUFFAGE */}
                    <div className="col col-4">
                        <Card emoji="🌡️" title="Chauffage & Climatisation">
                        <div className="list">
                            <div className="list-item">💨 Pompe à chaleur Air/Air</div>
                            <div className="list-item">🪵 Poêle à bois (bois fourni)</div>
                        </div>
                        </Card>
                    </div>

                    {/* ÉLECTROMÉNAGER */}
                    <div className="col col-4">
                        <Card emoji="🧺" title="Électroménager">
                        <div className="list">
                            <div className="list-item">☕ Cafetière Dolce Gusto</div>
                            <div className="list-item">🍞 Grille-pain</div>
                            <div className="list-item">🔥 Four & Micro-ondes</div>
                            <div className="list-item">🍽️ Lave-vaisselle (notice en annexe)</div>
                            <div className="list-item">🧀 Service à raclette</div>
                        </div>
                        </Card>
                    </div>

                    {/* NETTOYAGE */}
                    <div className="col col-4">
                        <Card emoji="🧹" title="Nettoyage">
                        <div className="list">
                            <div className="list-item">🧹 Balai & serpillière</div>
                            <div className="list-item">🌀 Aspirateur</div>
                        </div>
                        </Card>
                    </div>

                    {/* CUISINE */}
                    <div className="col col-3">
                        <Card emoji="🍳" title="Cuisine">
                        <div className="card-subtitle">
                            Pour démarrer votre séjour, vous trouverez sur place : :
                        </div>
                        <div className="list">
                            <div className="list-item">
                            🧂 Sel, poivre, huile, vinaigre, sucre
                            </div>
                            <div className="list-item">
                            ☕ Dosettes Dolce Gusto (café, chocolat chaud), thé & infusions
                            </div>
                            <div className="list-item">
                            🫧 Liquide vaisselle, pastilles, éponges, essuie-tout, sacs poubelles, papier toilette
                            </div>
                        </div>
                        </Card>
                    </div>

                    {/* SALLE DE BAIN */}
                    <div className="col col-3">
                        <Card emoji="🛁" title="Salle de bain & literie">
                        <div className="list">
                            <div className="list-item">💇 Sèche-cheveux & petit miroir</div>
                            <div className="list-item">🛁 Serviettes de toilette (fournis)</div>
                            <div className="list-item">🛏️ Lits faits à l'arrivée (draps fournis)</div>
                            <div className="list-item">👶 Sur demande : lit parapluie, chaise haute</div>
                        </div>
                        </Card>
                    </div>

                    {/* LOISIRS */}
                    <div className="col col-3">
                        <Card emoji="🎲" title="Détente & loisirs">

                        <div className="card-subtitle">
                            Profitez des moments calmes et amusez-vous pendant votre séjour :
                        </div>

                        <div className="split">

                            <div className="split-col">
                            <div className="h4">🃏 Jeux disponibles</div>
                            <div className="list">
                                <div className="list-item">🃏 UNO, 6 qui prend !, SKYJO, jeu de 54 cartes</div>
                                <div className="list-item">🎯 Monopoly (jeux de société famille)</div>
                            </div>
                            </div>

                            <div className="split-col">
                            <div className="h4">🌿 Espace extérieur</div>
                            <div className="list">
                                <div className="list-item">🪑 Transats pour se relaxer</div>
                                <div className="list-item">🌳 Espace ombragé sous les arbres</div>
                                <div className="list-item">💡 Parfait après une journée de visite !</div>
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