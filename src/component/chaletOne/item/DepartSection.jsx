import React from "react";
import SectionPerso from "../../ui/SectionPerso";
import SectionTitle from "../../ui/SectionTitle";
import '../../../css/depart.css'

export default function DepartSection() {
  return (
    <SectionPerso id="depart">
      <div className="section-container">

        <SectionTitle
          emoji="🧳"
          title="Avant de partir"
          subtitle="Quelques étapes pour un départ en douceur."
        />

        <div className="depart-layout">

          {/* LEFT */}
          <div className="card card-accent">
            <h3 className="card-title">✅ Checklist de départ</h3>

            <ul className="checklist">
              {[
                "Rangement rapide et nettoyage léger",
                "Éteindre les lumières et appareils",
                "Sortir les poubelles (container à 50m)",
                "Tri des déchets (point recyclage à 100m)",
                "Remettre les clés dans la boîte",
              ].map((item) => (
                <li key={item} className="check-item">
                  <span className="check-icon">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="depart-right">

            {/* NUMEROS */}
            <div className="card">
              <h3 className="card-title">🚨 Numéros utiles</h3>

              <div className="grid-2">
                {[
                  { emoji: "🚒", label: "Pompiers", num: "18" },
                  { emoji: "🚓", label: "Police", num: "17" },
                  { emoji: "🚑", label: "SAMU", num: "15" },
                  { emoji: "☎️", label: "Europe", num: "112" },
                ].map((n) => (
                  <a key={n.num} href={`tel:${n.num}`} className="phone-card">
                    <span className="phone-emoji">{n.emoji}</span>
                    <div>
                      <p className="phone-label">{n.label}</p>
                      <p className="phone-number">{n.num}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* REVIEW */}
            <div className="review-card">
              <p className="review-star">⭐</p>
              <p className="review-title">Votre avis compte beaucoup !</p>
              <p className="review-text">
                Un avis Airbnb nous aide énormément 🙏
              </p>
            </div>

          </div>

        </div>
      </div>
    </SectionPerso>
  );
}