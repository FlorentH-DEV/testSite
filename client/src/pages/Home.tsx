/**
 * DESIGN: "Chalet Alpin Moderne" — Page principale du livret d'accueil
 * Sections: Bienvenue, Arrivée, Équipements, Adresses, À découvrir, Départ
 * Palette: Sable (#FAF7F2), Vert sapin (#2D5016), Brun châtaigne (#7C4A1E), Doré (#D4A853)
 * Typography: Fraunces (titres) + DM Sans (corps) + DM Mono (contacts)
 */
import Navbar from "@/components/Navbar";
import { useInView } from "@/hooks/useInView";
import type { ReactNode } from "react";

/* ─── Composant Section animée ─── */
function Section({
  id,
  children,
  className = "",
  style,
}: {
  id: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const { ref, inView } = useInView(0.08);
  return (
    <section
      id={id}
      ref={ref as React.RefObject<HTMLElement>}
      style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)", ...style }}
      className={`${className} transition-all duration-500 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      {children}
    </section>
  );
}

/* ─── Composant SectionTitle ─── */
function SectionTitle({
  emoji,
  title,
  subtitle,
}: {
  emoji: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-3xl">{emoji}</span>
        <h2
          className="text-3xl md:text-4xl font-bold section-title"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-base" style={{ color: "oklch(0.52 0.02 55)", fontFamily: "'DM Sans', sans-serif" }}>
          {subtitle}
        </p>
      )}
      <div
        className="mt-3 h-0.5 w-16 rounded-full"
        style={{ background: "oklch(0.72 0.09 65)" }}
      />
    </div>
  );
}

/* ─── Composant InfoCard ─── */
function InfoCard({
  emoji,
  title,
  children,
  accent = false,
}: {
  emoji?: string;
  title?: string;
  children: ReactNode;
  accent?: boolean;
}) {
  return (
    <div
      className="card-hover rounded-xl p-5 border"
      style={{
        background: accent ? "oklch(0.32 0.08 145 / 0.06)" : "white",
        borderColor: accent ? "oklch(0.32 0.08 145 / 0.2)" : "oklch(0.88 0.012 75)",
      }}
    >
      {(emoji || title) && (
        <div className="flex items-center gap-2 mb-3">
          {emoji && <span className="text-xl">{emoji}</span>}
          {title && (
            <h3
              className="font-semibold text-base"
              style={{
                fontFamily: "'Fraunces', serif",
                color: "oklch(0.22 0.02 55)",
              }}
            >
              {title}
            </h3>
          )}
        </div>
      )}
      {children}
    </div>
  );
}

/* ─── Composant PlaceCard ─── */
function PlaceCard({
  name,
  description,
  address,
  phone,
  distance,
  hours,
  emoji,
}: {
  name: string;
  description: string;
  address?: string;
  phone?: string;
  distance?: string;
  hours?: string;
  emoji?: string;
}) {
  return (
    <div
      className="card-hover rounded-xl p-5 border flex flex-col gap-2"
      style={{
        background: "white",
        borderColor: "oklch(0.88 0.012 75)",
      }}
    >
      <div className="flex items-start gap-2">
        {emoji && <span className="text-xl mt-0.5 shrink-0">{emoji}</span>}
        <div>
          <h3
            className="font-semibold text-base leading-snug"
            style={{ fontFamily: "'Fraunces', serif", color: "oklch(0.22 0.02 55)" }}
          >
            {name}
          </h3>
          {distance && (
            <span
              className="text-xs font-medium px-2 py-0.5 rounded-full mt-1 inline-block"
              style={{
                background: "oklch(0.32 0.08 145 / 0.1)",
                color: "oklch(0.32 0.08 145)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {distance}
            </span>
          )}
        </div>
      </div>
      <p className="text-sm leading-relaxed" style={{ color: "oklch(0.42 0.02 55)", fontFamily: "'DM Sans', sans-serif" }}>
        {description}
      </p>
      {hours && (
        <p className="text-xs" style={{ color: "oklch(0.52 0.02 55)", fontFamily: "'DM Mono', monospace" }}>
          🕐 {hours}
        </p>
      )}
      {address && (
        <p className="text-xs" style={{ color: "oklch(0.52 0.02 55)", fontFamily: "'DM Mono', monospace" }}>
          📍 {address}
        </p>
      )}
      {phone && (
        <a
          href={`tel:${phone.replace(/\s/g, "")}`}
          className="text-xs font-medium hover:underline"
          style={{ color: "oklch(0.32 0.08 145)", fontFamily: "'DM Mono', monospace" }}
        >
          📞 {phone}
        </a>
      )}
    </div>
  );
}

/* ─── Composant ActivityCard ─── */
function ActivityCard({
  emoji,
  name,
  details,
  distance,
}: {
  emoji: string;
  name: string;
  details: string[];
  distance?: string;
}) {
  return (
    <div
      className="card-hover rounded-xl p-5 border"
      style={{ background: "white", borderColor: "oklch(0.88 0.012 75)" }}
    >
      <div className="flex items-start gap-3 mb-3">
        <span className="text-2xl">{emoji}</span>
        <div>
          <h3
            className="font-semibold text-base"
            style={{ fontFamily: "'Fraunces', serif", color: "oklch(0.22 0.02 55)" }}
          >
            {name}
          </h3>
          {distance && (
            <span
              className="text-xs font-medium px-2 py-0.5 rounded-full mt-1 inline-block"
              style={{
                background: "oklch(0.72 0.09 65 / 0.15)",
                color: "oklch(0.48 0.07 55)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {distance}
            </span>
          )}
        </div>
      </div>
      <ul className="space-y-1">
        {details.map((d, i) => (
          <li
            key={i}
            className="text-sm flex items-start gap-2"
            style={{ color: "oklch(0.42 0.02 55)", fontFamily: "'DM Sans', sans-serif" }}
          >
            <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: "oklch(0.72 0.09 65)" }} />
            {d}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── PAGE PRINCIPALE ─── */
export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.98 0.008 75)" }}>
      <Navbar />

      {/* ══════════════════════════════════════════════════════════
          HERO — Bienvenue
      ══════════════════════════════════════════════════════════ */}
      <section
        id="bienvenue"
        className="relative min-h-[92vh] flex items-end pb-16 overflow-hidden"
      >
        {/* Image de fond */}
        <div className="absolute inset-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663665931328/QWCmyRXfvy9N52MLoe92wh/chalet-hero-Vg3WLscp6xkXUwzDzsVLpf.webp"
            alt="Chalet MCS Anglès"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, oklch(0.12 0.02 55 / 0.85) 0%, oklch(0.12 0.02 55 / 0.3) 50%, transparent 100%)",
            }}
          />
        </div>

        {/* Contenu hero */}
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4"
              style={{
                background: "oklch(0.72 0.09 65 / 0.9)",
                color: "oklch(0.22 0.02 55)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              📍 13 Le Salvan Bas, 81260 Anglès
            </div>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4"
              style={{ fontFamily: "'Fraunces', serif", letterSpacing: "-0.02em" }}
            >
              🎉 Bienvenue dans<br />
              <em className="not-italic" style={{ color: "oklch(0.85 0.08 75)" }}>notre chalet</em>
            </h1>
            <p
              className="text-lg md:text-xl leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.88)", fontFamily: "'DM Sans', sans-serif" }}
            >
              Nous sommes ravis de vous accueillir dans notre logement et espérons que vous passerez un séjour{" "}
              <strong style={{ color: "white" }}>agréable, reposant et plein de bons souvenirs</strong>.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Trouver les informations utiles",
                "Profiter pleinement du logement",
                "Découvrir les bonnes adresses",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm"
                  style={{ color: "rgba(255,255,255,0.85)", fontFamily: "'DM Sans', sans-serif" }}
                >
                  <span style={{ color: "oklch(0.72 0.09 65)" }}>✦</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
          <div className="w-0.5 h-8 rounded-full" style={{ background: "rgba(255,255,255,0.4)" }} />
        </div>
      </section>

      {/* Note livret */}
      <div
        className="py-4"
        style={{ background: "oklch(0.32 0.08 145)" }}
      >
        <div className="container">
          <p
            className="text-center text-sm"
            style={{ color: "rgba(255,255,255,0.9)", fontFamily: "'DM Sans', sans-serif" }}
          >
            📖 <strong>Ce livret fait partie du logement</strong> — Merci de le laisser sur place pour les prochains voyageurs. 🙏
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          ARRIVÉE & ACCÈS
      ══════════════════════════════════════════════════════════ */}
      <Section id="arrivee" className="py-16">
        <div className="container">
          <SectionTitle emoji="🔑" title="Arrivée & accès au logement" subtitle="Bienvenue ! Voici comment arriver facilement." />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Infos pratiques */}
            <InfoCard emoji="📌" title="Informations pratiques" accent>
              <div className="space-y-2 text-sm" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.35 0.03 55)" }}>
                <div className="flex items-start gap-2">
                  <span>📍</span>
                  <span><strong>Adresse :</strong> 13 Le Salvan Bas, 81260 Anglès</span>
                </div>
                <div className="flex items-start gap-2">
                  <span>📞</span>
                  <span>
                    <strong>Votre hôte :</strong> Claudie{" "}
                    <a
                      href="tel:+33675489914"
                      className="phone-link hover:underline"
                      style={{ color: "oklch(0.32 0.08 145)" }}
                    >
                      +33 6 75 48 99 14
                    </a>
                  </span>
                </div>
              </div>
            </InfoCard>

            {/* Accès */}
            <InfoCard emoji="🚪" title="Comment entrer">
              <ol className="space-y-2 text-sm" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.35 0.03 55)" }}>
                <li className="flex gap-2">
                  <span
                    className="w-5 h-5 rounded-full text-xs flex items-center justify-center shrink-0 font-bold"
                    style={{ background: "oklch(0.32 0.08 145)", color: "white" }}
                  >1</span>
                  Localisez la boîte à clés : face au garage, à droite sur le portillon en bois sous la terrasse
                </li>
                <li className="flex gap-2">
                  <span
                    className="w-5 h-5 rounded-full text-xs flex items-center justify-center shrink-0 font-bold"
                    style={{ background: "oklch(0.32 0.08 145)", color: "white" }}
                  >2</span>
                  Entrez le code (communiqué par l'hôte)
                </li>
                <li className="flex gap-2">
                  <span
                    className="w-5 h-5 rounded-full text-xs flex items-center justify-center shrink-0 font-bold"
                    style={{ background: "oklch(0.32 0.08 145)", color: "white" }}
                  >3</span>
                  Prenez les clés et refermez la boîte
                </li>
              </ol>
              <p
                className="mt-3 text-xs p-2 rounded-lg"
                style={{
                  background: "oklch(0.72 0.09 65 / 0.12)",
                  color: "oklch(0.48 0.07 55)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                💡 Pensez à remettre les clés au même endroit lors du départ si Claudie n'est pas présente.
              </p>
            </InfoCard>

            {/* Horaires */}
            <InfoCard emoji="🕒" title="Horaires">
              <div className="space-y-4">
                <div
                  className="flex items-center gap-3 p-3 rounded-lg"
                  style={{ background: "oklch(0.32 0.08 145 / 0.08)" }}
                >
                  <span className="text-2xl">🟢</span>
                  <div>
                    <p className="font-semibold text-sm" style={{ fontFamily: "'Fraunces', serif", color: "oklch(0.22 0.02 55)" }}>Check-in</p>
                    <p className="text-lg font-bold" style={{ color: "oklch(0.32 0.08 145)", fontFamily: "'Fraunces', serif" }}>À partir de 16h</p>
                  </div>
                </div>
                <div
                  className="flex items-center gap-3 p-3 rounded-lg"
                  style={{ background: "oklch(0.48 0.07 55 / 0.08)" }}
                >
                  <span className="text-2xl">🔴</span>
                  <div>
                    <p className="font-semibold text-sm" style={{ fontFamily: "'Fraunces', serif", color: "oklch(0.22 0.02 55)" }}>Check-out</p>
                    <p className="text-lg font-bold" style={{ color: "oklch(0.48 0.07 55)", fontFamily: "'Fraunces', serif" }}>Avant 11h</p>
                  </div>
                </div>
              </div>
            </InfoCard>

            {/* Règles */}
            <div className="md:col-span-2 lg:col-span-3">
              <InfoCard emoji="🏡" title="Les règles de la maison">
                <p className="text-sm mb-3" style={{ color: "oklch(0.52 0.02 55)", fontFamily: "'DM Sans', sans-serif" }}>
                  Pour que tout le monde passe un bon séjour
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { emoji: "🚭", text: "Logement non-fumeur" },
                    { emoji: "🎉", text: "Pas de fêtes ni soirées bruyantes" },
                    { emoji: "🔇", text: "Respect du voisinage après 22h" },
                    { emoji: "🐾", text: "Animaux : ne pas laisser dehors sans surveillance" },
                  ].map((rule) => (
                    <div
                      key={rule.text}
                      className="flex items-start gap-2 p-3 rounded-lg text-sm"
                      style={{
                        background: "oklch(0.94 0.008 75)",
                        color: "oklch(0.35 0.03 55)",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      <span className="text-lg shrink-0">{rule.emoji}</span>
                      <span>{rule.text}</span>
                    </div>
                  ))}
                </div>
              </InfoCard>
            </div>
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════════
          ÉQUIPEMENTS
      ══════════════════════════════════════════════════════════ */}
      <Section
        id="equipements"
        className="py-16"
        style={{ background: "oklch(0.96 0.01 75)" }}
      >
        <div className="container">
          <SectionTitle emoji="⚙️" title="Les équipements" subtitle="Tout ce dont vous avez besoin pour un séjour confortable." />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <InfoCard emoji="📶" title="Connectivité & Divertissement">
              <ul className="space-y-2 text-sm" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.42 0.02 55)" }}>
                <li className="flex items-center gap-2"><span>📶</span> Wi-Fi dans le chalet</li>
                <li className="flex items-center gap-2"><span>📺</span> Télévision</li>
              </ul>
            </InfoCard>

            <InfoCard emoji="🌡️" title="Chauffage & Climatisation">
              <ul className="space-y-2 text-sm" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.42 0.02 55)" }}>
                <li className="flex items-center gap-2"><span>💨</span> Pompe à chaleur Air/Air</li>
                <li className="flex items-center gap-2"><span>🪵</span> Poêle à bois (bois fourni)</li>
              </ul>
            </InfoCard>

            <InfoCard emoji="🧺" title="Électroménager">
              <ul className="space-y-2 text-sm" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.42 0.02 55)" }}>
                <li>☕ Cafetière Dolce Gusto</li>
                <li>🍞 Grille-pain</li>
                <li>🔥 Four & Micro-ondes</li>
                <li>🍽️ Lave-vaisselle (notice en annexe)</li>
                <li>🧀 Service à raclette</li>
              </ul>
            </InfoCard>

            <InfoCard emoji="🧹" title="Nettoyage">
              <ul className="space-y-2 text-sm" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.42 0.02 55)" }}>
                <li className="flex items-center gap-2"><span>🧹</span> Balai & Serpillière</li>
                <li className="flex items-center gap-2"><span>🌀</span> Aspirateur</li>
              </ul>
            </InfoCard>

            <InfoCard emoji="🍳" title="Dans la cuisine" accent>
              <p className="text-sm mb-2" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.42 0.02 55)" }}>
                Pour démarrer votre séjour, vous trouverez sur place :
              </p>
              <ul className="space-y-1 text-sm" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.42 0.02 55)" }}>
                <li>🧂 Sel, poivre, huile, vinaigre, sucre</li>
                <li>☕ Dosettes Dolce Gusto (café, chocolat chaud), thé & infusions</li>
                <li>🫧 Liquide vaisselle, pastilles, éponges, essuie-tout, sacs poubelles, papier toilette</li>
              </ul>
            </InfoCard>

            <InfoCard emoji="🛁" title="Salle de bain & Literie">
              <ul className="space-y-1 text-sm" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.42 0.02 55)" }}>
                <li>💇 Sèche-cheveux & petit miroir</li>
                <li>🛁 Serviettes de toilette et de bain</li>
                <li>🛏️ Lits faits à l'arrivée (draps fournis)</li>
                <li>👶 Sur demande : lit parapluie, chaise haute</li>
              </ul>
            </InfoCard>

            {/* Détente & loisirs */}
            <div className="sm:col-span-2 lg:col-span-3">
              <InfoCard emoji="🎲" title="Détente & Loisirs">
                <p className="text-sm mb-4" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.52 0.02 55)" }}>
                  Profitez des moments calmes et amusez-vous pendant votre séjour :
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2" style={{ fontFamily: "'Fraunces', serif", color: "oklch(0.22 0.02 55)" }}>
                      🃏 Jeux disponibles
                    </h4>
                    <ul className="space-y-1 text-sm" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.42 0.02 55)" }}>
                      <li>🃏 UNO, 6 qui prend !, SKYJO, jeu de 54 cartes</li>
                      <li>🎯 Monopoly (jeux de société famille)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2" style={{ fontFamily: "'Fraunces', serif", color: "oklch(0.22 0.02 55)" }}>
                      🌿 Espace extérieur
                    </h4>
                    <ul className="space-y-1 text-sm" style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.42 0.02 55)" }}>
                      <li>🪑 Transats pour se relaxer</li>
                      <li>🌳 Espace ombragé sous les arbres</li>
                      <li>💡 Parfait après une journée de visite !</li>
                    </ul>
                  </div>
                </div>
              </InfoCard>
            </div>
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════════
          BONNES ADRESSES
      ══════════════════════════════════════════════════════════ */}
      <Section id="adresses" className="py-16">
        <div className="container">
          <SectionTitle
            emoji="🍽️"
            title="Nos bonnes adresses"
            subtitle="Testées et approuvées par vos hôtes."
          />

          {/* Restaurants */}
          <div className="mb-10">
            <h3
              className="text-xl font-bold mb-5 flex items-center gap-2"
              style={{ fontFamily: "'Fraunces', serif", color: "oklch(0.22 0.02 55)" }}
            >
              <span>🍕</span> Restaurants
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <PlaceCard
                emoji="🍽️"
                name="Cuivres & Coquelicots"
                description="Très bon restaurant local à Anglès. Cuisine française de saison dans un cadre simple et convivial, parfait pour un déjeuner ou dîner après une sortie nature."
                address="406 Rte de Saint-Pons, 81260 Anglès"
                phone="09 86 22 39 97"
                distance="À Anglès"
              />
              <PlaceCard
                emoji="🥘"
                name="Restaurant Le Café De Paris"
                description="Bistrot très bien noté avec cuisine française traditionnelle et généreuse."
                address="8 Pl. de l'Hôtel de ville, 81260 Brassac"
                phone="05 63 74 00 31"
                distance="≈ 9 km"
              />
              <PlaceCard
                emoji="🌶️"
                name="Les Épicuriens — Tapas"
                description="Restaurant raffiné dans un joli village de montagne, parfait pour un repas gastronomique ou un dîner romantique."
                address="1 Rue de la Mairie, 34330 Le Soulié"
                phone="06 84 44 15 56"
                distance="Alentours"
              />
              <PlaceCard
                emoji="🏡"
                name="Auberge du Rialet"
                description="Restaurant raffiné dans un joli village de montagne, parfait pour un repas gastronomique ou un dîner romantique."
                address="81240 Le Rialet"
                phone="06 13 23 55 94"
                distance="Alentours"
              />
              <PlaceCard
                emoji="🥩"
                name="Restaurant Le Laouzas"
                description="Restauration traditionnelle, boucher traiteur de métier. Rayon viande, charcuterie, fromage à la coupe — les morceaux sont choisis directement par les clients."
                address="81320 Nages"
                phone="06 11 04 62 37"
                distance="Alentours"
              />
              <PlaceCard
                emoji="🌊"
                name="Lake Café Raviège"
                description="Ambiance détendue au bord du lac, idéal pour déjeuner en terrasse avec des plats variés tirant parti des produits locaux."
                address="69 chemin de la Plage, 81260 Anglès"
                phone="06 82 39 21 54"
                distance="≈ 10 min"
                hours="Ouvert mai à octobre"
              />
            </div>
          </div>

          {/* Commerces & Producteurs */}
          <div className="mb-10">
            <h3
              className="text-xl font-bold mb-5 flex items-center gap-2"
              style={{ fontFamily: "'Fraunces', serif", color: "oklch(0.22 0.02 55)" }}
            >
              <span>🛒</span> Commerces & Producteurs locaux
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <PlaceCard
                emoji="☕"
                name="Café sympa"
                description="Café convivial au cœur du village d'Anglès, idéal pour commencer la journée."
                address="Centre du village d'Anglès"
                distance="Centre village"
              />
              <PlaceCard
                emoji="🥐"
                name="Boulangerie"
                description="Boulangerie locale au centre du village pour votre pain quotidien."
                address="Centre du village"
                distance="Centre village"
              />
              <PlaceCard
                emoji="🛒"
                name="Proxi Super"
                description="Épicerie de village très bien notée. Produits locaux disponibles : légumes, fromages, etc. Parfait pour les courses du quotidien."
                address="Centre du village, Anglès"
                distance="Centre village"
              />
              <PlaceCard
                emoji="🐑"
                name="Fromagerie de Lamarque"
                description="Expérience 100% locale. Ferme familiale produisant des fromages de brebis artisanaux issus de son propre troupeau. Parfait pour un pique-nique ou un souvenir gourmand du Tarn."
                address="Lieu-dit Lamarque, 81260 Anglès"
                phone="06 26 20 02 45"
                distance="À 1,6 km"
                hours="Sam. 6 fév. – 24 oct. : 10h–12h et 16h–18h"
              />
              <PlaceCard
                emoji="🐄"
                name="Fromagerie Gaec Du Rodier"
                description="Spécialités laitières élaborées à la ferme grâce au lait frais de leurs vaches. Fromages affinés, fromages frais, beurre et crème fraîche issus du lait fermier."
                address="Lieu dit Le Rodier, 81240 Rouairoux"
                phone="06 68 34 55 74"
                distance="À 12 min (9,2 km)"
                hours="Sam. : 10h–13h et 14h30–18h"
              />
            </div>
          </div>

          {/* Marchés */}
          <div>
            <h3
              className="text-xl font-bold mb-5 flex items-center gap-2"
              style={{ fontFamily: "'Fraunces', serif", color: "oklch(0.22 0.02 55)" }}
            >
              <span>🗓️</span> Marchés hebdomadaires
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
                  heure: "8h00 – 13h00",
                  lieu: "Place de l'Hôtel de Ville",
                  km: "≈ 9 km",
                },
                {
                  ville: "Labastide-Rouairoux",
                  detail: "Marché permanent",
                  jour: "Jeudi matin",
                  heure: "8h00 – 13h00",
                  lieu: "Place du Four Crémat",
                  km: "≈ 13 km",
                },
                {
                  ville: "Mazamet",
                  detail: "Marché permanent",
                  jour: "Mardi & Samedi matin",
                  heure: "8h00 – 13h00",
                  lieu: "Autour de la mairie",
                  km: "≈ 18 km",
                },
              ].map((m) => (
                <div
                  key={m.ville}
                  className="card-hover rounded-xl p-4 border"
                  style={{ background: "white", borderColor: "oklch(0.88 0.012 75)" }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4
                      className="font-bold text-base"
                      style={{ fontFamily: "'Fraunces', serif", color: "oklch(0.22 0.02 55)" }}
                    >
                      🟢 {m.ville}
                    </h4>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{
                        background: "oklch(0.32 0.08 145 / 0.1)",
                        color: "oklch(0.32 0.08 145)",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {m.km}
                    </span>
                  </div>
                  <p className="text-xs mb-1" style={{ color: "oklch(0.52 0.02 55)", fontFamily: "'DM Sans', sans-serif" }}>
                    {m.detail}
                  </p>
                  <p className="text-sm font-medium" style={{ color: "oklch(0.35 0.03 55)", fontFamily: "'DM Sans', sans-serif" }}>
                    📅 {m.jour}
                  </p>
                  {m.heure && (
                    <p className="text-xs" style={{ color: "oklch(0.52 0.02 55)", fontFamily: "'DM Mono', monospace" }}>
                      ⏰ {m.heure}
                    </p>
                  )}
                  <p className="text-xs mt-1" style={{ color: "oklch(0.52 0.02 55)", fontFamily: "'DM Mono', monospace" }}>
                    📍 {m.lieu}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════════
          À DÉCOUVRIR AUTOUR
      ══════════════════════════════════════════════════════════ */}
      <Section
        id="decouvrir"
        className="py-16"
        style={{ background: "oklch(0.96 0.01 75)" }}
      >
        <div className="container">
          <SectionTitle
            emoji="🌍"
            title="À découvrir autour"
            subtitle="Quelques idées pour profiter de votre séjour dans le Tarn."
          />

          {/* Image nature */}
          <div className="mb-10 rounded-2xl overflow-hidden relative h-56 md:h-72">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663665931328/QWCmyRXfvy9N52MLoe92wh/nature-tarn-oMqVoNwdnhfUVqLjKxaUvR.webp"
              alt="Paysage du Tarn"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 flex items-end p-6"
              style={{ background: "linear-gradient(to top, oklch(0.12 0.02 55 / 0.7) 0%, transparent 60%)" }}
            >
              <p
                className="text-white text-lg font-semibold"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                La nature préservée du Tarn vous attend 🌿
              </p>
            </div>
          </div>

          {/* Lacs */}
          <div className="mb-10">
            <h3
              className="text-xl font-bold mb-5 flex items-center gap-2"
              style={{ fontFamily: "'Fraunces', serif", color: "oklch(0.22 0.02 55)" }}
            >
              <span>🌊</span> Lacs & Nature
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="md:col-span-2">
                <div
                  className="card-hover rounded-xl overflow-hidden border"
                  style={{ borderColor: "oklch(0.88 0.012 75)" }}
                >
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663665931328/QWCmyRXfvy9N52MLoe92wh/lac-raviege-bCL7qQo2dsGsfoUFb4syko.webp"
                    alt="Lac de la Raviège"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5 bg-white">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-bold text-lg" style={{ fontFamily: "'Fraunces', serif", color: "oklch(0.22 0.02 55)" }}>
                        🌊 Lac de la Raviège
                      </h4>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{ background: "oklch(0.32 0.08 145 / 0.1)", color: "oklch(0.32 0.08 145)", fontFamily: "'DM Sans', sans-serif" }}
                      >
                        ≈ 10 min
                      </span>
                    </div>
                    <ul className="space-y-1 text-sm" style={{ color: "oklch(0.42 0.02 55)", fontFamily: "'DM Sans', sans-serif" }}>
                      <li>🏖️ Plages, baignade, voile, pêche et couchers de soleil magnifiques</li>
                      <li>🚴 Super tour du lac en vélo ou à pied</li>
                      <li>🛶 Base de loisirs : paddle, kayak, pédalo</li>
                      <li>⛵ Bateau à moteur et sports nautiques autorisés</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <ActivityCard
                  emoji="🌊"
                  name="Lac Des Saints Peyres"
                  distance="≈ 5 min"
                  details={[
                    "Balades sur les sentiers forestiers",
                    "Spot de pêche réputé",
                    "Baignade non autorisée",
                  ]}
                />
                <ActivityCard
                  emoji="🌊"
                  name="Lac du Laouzas"
                  distance="≈ 30 min"
                  details={[
                    "Grand lac naturel entouré de forêt",
                    "Paddle, kayak et pédalo",
                    "Tour du lac à pied ou à vélo",
                  ]}
                />
              </div>
            </div>
          </div>

          {/* Nature tranquille */}
          <div className="mb-10">
            <h3
              className="text-xl font-bold mb-5 flex items-center gap-2"
              style={{ fontFamily: "'Fraunces', serif", color: "oklch(0.22 0.02 55)" }}
            >
              <span>🌲</span> Endroits nature très tranquilles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <ActivityCard
                emoji="🌿"
                name="Gorges d'Héric"
                distance="≈ 1h (50 km)"
                details={[
                  "Superbes gorges avec piscines naturelles",
                  "Eau très claire",
                ]}
              />
              <ActivityCard
                emoji="🌿"
                name="Forêt de la Grésigne"
                distance="≈ 1h50 (101 km)"
                details={[
                  "Une des plus grandes forêts de chênes d'Europe",
                  "Parfait pour randonnée et animaux sauvages",
                  "Près de Castelnau-de-Montmiral",
                ]}
              />
            </div>
          </div>

          {/* Endroits spectaculaires */}
          <div className="mb-10">
            <h3
              className="text-xl font-bold mb-5 flex items-center gap-2"
              style={{ fontFamily: "'Fraunces', serif", color: "oklch(0.22 0.02 55)" }}
            >
              <span>🌟</span> Endroits spectaculaires à moins de 2h
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <ActivityCard
                emoji="🏔️"
                name="Gorges de l'Aveyron"
                distance="≈ 1h50"
                details={[
                  "Falaises impressionnantes et villages perchés",
                  "Panoramas sur la rivière et les vignes",
                  "Randonnée ou kayak",
                  "Saint-Antonin-Noble-Val, Najac",
                ]}
              />
              <ActivityCard
                emoji="⛰️"
                name="Plateau de Montagne Noire"
                distance="≈ 40 min"
                details={[
                  "Forêts denses, lacs et sommets",
                  "Pic de Nore : points de vue spectaculaires",
                  "Passerelle de Mazamet à 70m de hauteur",
                ]}
              />
              <ActivityCard
                emoji="🪨"
                name="Le Sidobre"
                distance="≈ 20 min"
                details={[
                  "Massif de rochers de granit unique au monde",
                  "Formes naturelles incroyables : chaos, rochers en équilibre",
                  "Atmosphère mystérieuse, très photogénique",
                ]}
              />
            </div>
          </div>

          {/* Villages charmants */}
          <div className="mb-10">
            <h3
              className="text-xl font-bold mb-5 flex items-center gap-2"
              style={{ fontFamily: "'Fraunces', serif", color: "oklch(0.22 0.02 55)" }}
            >
              <span>🏡</span> Villages les plus charmants
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { emoji: "🏡", name: "La Salvetat-sur-Agout", dist: "≈ 15 min", desc: "Village de montagne avec maisons en pierre et petites ruelles. Situé près du lac et du barrage. Ambiance très paisible." },
                { emoji: "🏡", name: "Lacaune", dist: "≈ 25 min", desc: "Petite ville typique des Monts de Lacaune. Connue pour son jambon de Lacaune et ses salaisons. Marché et centre ancien agréable." },
                { emoji: "🏡", name: "Burlats", dist: "≈ 40 min", desc: "Superbe village médiéval au bord de la rivière Agout. Pont ancien, maisons historiques et jardins. Très photogénique." },
                { emoji: "🏡", name: "Olargues", dist: "≈ 50 min", desc: "Classé parmi Les Plus Beaux Villages de France. Pont médiéval et vieille tour. Un des villages les plus charmants de la région." },
                { emoji: "🏡", name: "Hautpoul", dist: "≈ 45 min", desc: "Village perché sur un éperon rocheux. Vue spectaculaire sur la vallée. Accès par une passerelle ou un sentier." },
                { emoji: "🏛️", name: "Castres", dist: "≈ 45 min", desc: "Ville très charmante avec maisons colorées sur la rivière Agout. Cathédrale, musées et vieux centre." },
              ].map((v) => (
                <div
                  key={v.name}
                  className="card-hover rounded-xl p-4 border bg-white"
                  style={{ borderColor: "oklch(0.88 0.012 75)" }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{v.emoji}</span>
                    <div>
                      <h4 className="font-semibold text-sm" style={{ fontFamily: "'Fraunces', serif", color: "oklch(0.22 0.02 55)" }}>
                        {v.name}
                      </h4>
                      <span
                        className="text-xs px-1.5 py-0.5 rounded-full"
                        style={{ background: "oklch(0.72 0.09 65 / 0.15)", color: "oklch(0.48 0.07 55)", fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {v.dist}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "oklch(0.42 0.02 55)", fontFamily: "'DM Sans', sans-serif" }}>
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Spots Toscane */}
          <div className="mb-10">
            <h3
              className="text-xl font-bold mb-5 flex items-center gap-2"
              style={{ fontFamily: "'Fraunces', serif", color: "oklch(0.22 0.02 55)" }}
            >
              <span>🌾</span> Spots "Toscane" près du Tarn
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <ActivityCard
                emoji="🌾"
                name="Les coteaux autour de Burlats"
                details={[
                  "Collines douces et villages médiévaux",
                  "Vignes, forêts et couleurs dorées en fin de journée",
                  "Ambiance très Toscane, surtout au coucher du soleil",
                ]}
              />
              <ActivityCard
                emoji="🌾"
                name="Puycelsi et Bruniquel"
                distance="≈ 1h45"
                details={[
                  "Villages perchés sur des rochers",
                  "Ruelles étroites et vieilles pierres",
                  "Couleurs chaudes en été et automne",
                  "Ambiance presque italienne",
                ]}
              />
            </div>
          </div>

          {/* Villes à plus d'1h */}
          <div>
            <h3
              className="text-xl font-bold mb-5 flex items-center gap-2"
              style={{ fontFamily: "'Fraunces', serif", color: "oklch(0.22 0.02 55)" }}
            >
              <span>🌟</span> Villes charmantes à plus d'1 heure
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { emoji: "🏛️", name: "Albi", dist: "≈ 1h15", desc: "Ville classée UNESCO. Cathédrale en briques rouges impressionnante. Musée Toulouse-Lautrec." },
                { emoji: "🏰", name: "Carcassonne", dist: "≈ 1h30", desc: "Cité médiévale avec remparts et tours. Un des sites historiques les plus célèbres de France." },
                { emoji: "🌆", name: "Toulouse", dist: "≈ 1h30", desc: "La Ville Rose. Place du Capitole, marchés, restaurants et ambiance animée." },
                { emoji: "🌊", name: "Narbonne", dist: "≈ 1h45–2h", desc: "Ville historique avec cathédrale et canal. Proche de la mer Méditerranée." },
                { emoji: "🏛️", name: "Montpellier", dist: "≈ 2h", desc: "Ville étudiante très vivante. Place de la Comédie et vieux centre magnifique." },
                { emoji: "🏰", name: "Rodez", dist: "≈ 2h", desc: "Cathédrale gothique spectaculaire. Musée de Pierre Soulages." },
              ].map((v) => (
                <div
                  key={v.name}
                  className="card-hover rounded-xl p-4 border bg-white"
                  style={{ borderColor: "oklch(0.88 0.012 75)" }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{v.emoji}</span>
                    <div>
                      <h4 className="font-semibold text-sm" style={{ fontFamily: "'Fraunces', serif", color: "oklch(0.22 0.02 55)" }}>
                        {v.name}
                      </h4>
                      <span
                        className="text-xs px-1.5 py-0.5 rounded-full"
                        style={{ background: "oklch(0.32 0.08 145 / 0.1)", color: "oklch(0.32 0.08 145)", fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {v.dist}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "oklch(0.42 0.02 55)", fontFamily: "'DM Sans', sans-serif" }}>
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════════
          AVANT DE PARTIR
      ══════════════════════════════════════════════════════════ */}
      <Section id="depart" className="py-16">
        <div className="container">
          <SectionTitle emoji="🧳" title="Avant de partir" subtitle="Quelques étapes pour un départ en douceur." />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            {/* Checklist départ */}
            <InfoCard emoji="✅" title="Checklist de départ" accent>
              <ul className="space-y-3">
                {[
                  "Rangement rapide et nettoyage léger",
                  "Éteindre les lumières et appareils",
                  "Sortir & déposer les poubelles dans le container à 50m du chalet",
                  "Tri des déchets et recyclage : à 100m dans l'angle du petit lac",
                  "Remettre les clés dans la boîte à clés",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs"
                      style={{ background: "oklch(0.32 0.08 145 / 0.15)", color: "oklch(0.32 0.08 145)" }}
                    >
                      ✓
                    </span>
                    <span className="text-sm" style={{ color: "oklch(0.35 0.03 55)", fontFamily: "'DM Sans', sans-serif" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </InfoCard>

            {/* Numéros utiles */}
            <div className="space-y-4">
              <InfoCard emoji="🚨" title="Numéros utiles">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { emoji: "🚒", label: "Pompiers", num: "18" },
                    { emoji: "🚓", label: "Police", num: "17" },
                    { emoji: "🚑", label: "Urgences SAMU", num: "15" },
                    { emoji: "☎️", label: "N° européen", num: "112" },
                  ].map((n) => (
                    <a
                      key={n.num}
                      href={`tel:${n.num}`}
                      className="flex items-center gap-2 p-3 rounded-lg transition-all duration-150 hover:scale-[1.02] active:scale-[0.98]"
                      style={{ background: "oklch(0.94 0.008 75)" }}
                    >
                      <span className="text-xl">{n.emoji}</span>
                      <div>
                        <p className="text-xs" style={{ color: "oklch(0.52 0.02 55)", fontFamily: "'DM Sans', sans-serif" }}>{n.label}</p>
                        <p className="font-bold text-lg leading-tight" style={{ fontFamily: "'Fraunces', serif", color: "oklch(0.22 0.02 55)" }}>
                          {n.num}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </InfoCard>

              {/* Avis Airbnb */}
              <div
                className="rounded-xl p-5 text-center"
                style={{ background: "oklch(0.72 0.09 65 / 0.12)", border: "1px solid oklch(0.72 0.09 65 / 0.3)" }}
              >
                <p className="text-2xl mb-2">⭐</p>
                <p
                  className="font-semibold text-sm"
                  style={{ fontFamily: "'Fraunces', serif", color: "oklch(0.22 0.02 55)" }}
                >
                  Votre avis compte beaucoup !
                </p>
                <p
                  className="text-xs mt-1"
                  style={{ color: "oklch(0.42 0.02 55)", fontFamily: "'DM Sans', sans-serif" }}
                >
                  Si votre séjour vous a plu, un avis Airbnb nous aide énormément. Merci ! 🙏
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════════════════ */}
      <footer
        className="py-12"
        style={{ background: "oklch(0.22 0.02 55)" }}
      >
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3
                className="text-xl font-bold text-white mb-1"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                Chalet MCS Anglès
              </h3>
              <p
                className="text-sm"
                style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'DM Sans', sans-serif" }}
              >
                13 Le Salvan Bas, 81260 Anglès, Tarn
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-2">
              <a
                href="tel:+33675489914"
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-150 hover:scale-[1.02]"
                style={{ background: "oklch(0.32 0.08 145)", color: "white", fontFamily: "'DM Sans', sans-serif" }}
              >
                📞 Claudie : +33 6 75 48 99 14
              </a>
              <p
                className="text-xs"
                style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif" }}
              >
                📖 Merci de laisser ce livret sur place
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
