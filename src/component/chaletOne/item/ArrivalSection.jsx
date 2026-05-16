import { ReactNode } from "react";
import "../../../css/arrivee.css";
import SectionPerso from "../../ui/SectionPerso";
import SectionTitle from "../../ui/SectionTitle";

/* =========================
   ARRIVAL SECTION
========================= */

function Card({ children, accent }) {
  return <div className={`card ${accent ? "card-accent" : ""}`}>{children}</div>;
}

const ArrivalSection = () => {
    return (
        <SectionPerso id="arrivee">

        <div className="container">

            <SectionTitle
            emoji="🔑"
            title="Arrivée & accès au logement"
            subtitle="Bienvenue ! Voici comment arriver facilement."
            />

            <div className="grid">

            {/* INFO PRATIQUE */}
            <div className="col col-2">
                <Card accent>
                <h3>📌 Informations pratiques</h3>

                <div className="list">

                    <div className="list-item">
                    <span>📍</span>
                    <span>
                        <strong>Adresse :</strong> 13 Le Salvan Bas, 81260 Anglès
                    </span>
                    </div>

                    <div className="list-item">
                    <span>📞</span>
                    <span>
                        <strong>Hôte :</strong> Claudie{" "}
                        <a href="tel:+33675489914" style={{ color: "var(--green)" }}>
                        +33 6 75 48 99 14
                        </a>
                    </span>
                    </div>

                </div>
                </Card>
            </div>

            {/* ACCÈS */}
            <div className="col col-2">
                <Card>
                <h3>🚪 Comment entrer</h3>

                <div className="list">

                    <div className="list-item">
                    <div className="circle">1</div>
                    Localisez la boîte à clés
                    </div>

                    <div className="list-item">
                    <div className="circle">2</div>
                    Entrez le code fourni
                    </div>

                    <div className="list-item">
                    <div className="circle">3</div>
                    Prenez les clés et refermez
                    </div>

                </div>

                <div className="highlight">
                    💡 Pensez à remettre les clés au départ
                </div>
                </Card>
            </div>

            {/* HORAIRES */}
            <div className="col col-1">
                <Card>

                <h3>🕒 Horaires</h3>

                <div className="hours">

                    <div className="hour-card green">
                    <span>🟢</span>
                    <div>
                        <p className="hour-title">Check-in</p>
                        <p className="hour-value green">À partir de 16h</p>
                    </div>
                    </div>

                    <div className="hour-card red">
                    <span>🔴</span>
                    <div>
                        <p className="hour-title">Check-out</p>
                        <p className="hour-value red">Avant 11h</p>
                    </div>
                    </div>

                </div>

                </Card>
            </div>

            {/* RÈGLES */}
            <div className="col col-span-3">
                <Card>

                <h3>🏡 Les règles de la maison</h3>
                <p>Pour que tout le monde passe un bon séjour</p>

                <div className="rules">

                    {[
                    ["🚭", "Logement non-fumeur"],
                    ["🎉", "Pas de fêtes"],
                    ["🔇", "Silence après 22h"],
                    ["🐾", "Animaux surveillés"],
                    ].map(([icon, text]) => (
                    <div className="rule" key={text}>
                        <span>{icon}</span>
                        <span>{text}</span>
                    </div>
                    ))}

                </div>

                </Card>
            </div>

            </div>
        </div>
        </SectionPerso>
    );
}


export default ArrivalSection