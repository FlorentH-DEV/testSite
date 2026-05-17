import React from "react";
import SectionPerso from "../../ui/SectionPerso";
import SectionTitle from "../../ui/SectionTitle";
import '../../../css/depart.css'


function Card({
  title,
  emoji,
  children,
  distance,
  accent,
}) {
  return (
    <div className={`card ${accent ? "card-accent" : ""}`}>
      <h3 className="card-title">
        {emoji && <span>{emoji} </span>}
        {title}
        {distance && (
          <span className="badge badge-green">{distance}</span>
        )}
      </h3>
      

      {children}
    </div>
  );
}

export default function DepartSection() {
  return (
    <SectionPerso id="depart">
      <div className="section-container">

        <SectionTitle
          emoji="🧳"
          title="Avant de partir"
          subtitle="Quelques étapes pour un départ en douceur."
        />
          <div className="grid">
            {/* Checklist de départ */}
            <div className="col col-3">
              <Card emoji="✅" title="Checklist de départ">
                  <div className="cardContent">
                      <div className="list">
                          <div className="list-item">✓ Rangement rapide et nettoyage léger</div>
                          <div className="list-item">✓ Éteindre les lumières et appareils</div>
                          <div className="list-item">✓ Sortir les poubelles (container à 50m)</div>
                          <div className="list-item">✓ Tri des déchets (point recyclage à 100m)</div>
                          <div className="list-item">✓ Remettre les clés dans la boîte</div>
                      </div>
                  </div>
              </Card>
            </div>

            {/* Numéros utiles */}
            <div className="col col-3">
              <Card emoji="🚨" title="Numéros utiles">
                  <div className="cardContent">
                      <div className="list">
                          <div className="list-item"><li>🚒 Pompiers 18</li></div>
                          <div className="list-item"><li>🚓 Police 17</li></div>
                          <div className="list-item"><li>🚑 Samu 15</li></div>
                          <div className="list-item"><li>☎️ Europe 112</li></div>
                          <div className="list-item">⭐ Votre avis compte beaucoup !</div>
                          <div className="list-item">Un avis Airbnb nous aide énormément 🙏</div>
                      </div>
                  </div>
              </Card>
            </div>

          </div>
      </div>
    </SectionPerso>
  );
}