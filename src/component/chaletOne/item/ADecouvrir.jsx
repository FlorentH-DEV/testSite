import { ReactNode } from "react";
import '../../../css/aDecourvrir.css'
import SectionPerso from "../../ui/SectionPerso";
import SectionTitle from "../../ui/SectionTitle";
import imgRaviege from '../../../image/chalet1/raviege.png'
import imgNatureTarn from '../../../image/chalet1/natureTarn.png'
import imgSaintPeyres from '../../../image/chalet1/saintPeyres.png'
import imgLaousas from '../../../image/chalet1/laousas.png'
import ActivityCard from "../../ui/ActivityCard";


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
          {/* TITLE */}
          <SectionTitle
            emoji="🌍"
            title="À découvrir autour"
            subtitle="Quelques idées pour profiter de votre séjour dans le Tarn."
          />

            <div className="contentImgADecouvrir">
              <img className="imgNatureTarn" src={imgNatureTarn}/>

              <div className="positonTextFinImg">
                La nature préservée du Tarn vous attend 🌿
              </div>
            </div>

            {/* LACS */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginLeft: '3%' }}>🌊 Lacs & Nature</h3>

              <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                  {/* Raviege */}
                  <div className="col-3">
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
                      <img style={{width: '100%'}} src={imgRaviege}/> 

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
                  {/* Saint peyres */}
                  <div className="col-3">
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
                      <img style={{width: '100%'}} src={imgSaintPeyres}/> 

                        <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 8 }}>
                        <div style={{ display: "flex", gap: 10, alignItems: "center", fontWeight: 600 }}>
                            🌊 Lac Des Saints Peyres
                            <span
                            style={{
                                fontSize: 11,
                                padding: "2px 8px",
                                borderRadius: 999,
                                background: "rgba(0,120,80,0.1)",
                                color: "rgb(0,120,80)",
                            }}
                            >
                            ≈ 5 min
                            </span>
                        </div>

                        <div style={{ fontSize: 13, color: "#555" }}>
                            <p>🏖️ Baignade non autorisée</p>
                            <p>Spot de pêche réputé</p>
                            <p>Balades sur les sentiers forestiers</p>
                        </div>
                        </div>
                    </div>
                  </div>
                  {/* Laousas */}
                  <div className="col-3">
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
                      <img style={{width: '100%'}} src={imgLaousas}/> 

                        <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 8 }}>
                        <div style={{ display: "flex", gap: 10, alignItems: "center", fontWeight: 600 }}>
                            🌊 Lac du Laouzas
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
                            <p>Grand lac naturel entouré de forêt</p>
                            <p>Paddle, kayak et pédalo</p>
                            <p>Tour du lac à pied ou à vélo</p>
                        </div>
                        </div>
                    </div>
                  </div>
              </div>
            </div>

            {/* Endroits nature très tranquilles */}
            <h3 style={{ fontSize: 20, fontWeight: 700, marginLeft: '3%' }}>🌲 Endroits nature très tranquilles</h3>
            <div className="grid">
              {/* Gorges d'Héric */}
              <div className="col col-2">
                  <Card emoji="🌿" title="Gorges d'Héric" distance="≈ 1h">
                      <div className="cardContent">
                          <div className="list">
                              <div className="list-item"><li>Superbes gorges avec piscines naturelles</li></div>
                              <div className="list-item"><li>Eau très claire</li></div>
                          </div>
                      </div>
                  </Card>
              </div>
              
              {/* Forêt de la Grésigne */}
              <div className="col col-2">
                  <Card emoji="🌿" title="Forêt de la Grésigne" distance="≈ 1h50 (101 km)">
                      <div className="cardContent">
                          <div className="list">
                              <div className="list-item"><li>Une des plus grandes forêts de chênes d'Europe</li></div>
                              <div className="list-item"><li>Parfait pour randonnée et animaux sauvages</li></div>
                              <div className="list-item"><li>Près de Castelnau-de-Montmiral</li></div>
                          </div>
                      </div>
                  </Card>
              </div>
            </div>
            
            {/* Endroits spectaculaires à moins de 2h */}
            <h3 style={{ fontSize: 20, fontWeight: 700, marginLeft: '3%' }}>🌟 Endroits spectaculaires à moins de 2h</h3>
            <div className="grid">
              {/* Gorges de l'Aveyron */}
              <div className="col col-3">
                  <Card emoji="🏔️" title="Gorges de l'Aveyron" distance="≈ 1h50">
                      <div className="cardContent">
                          <div className="list">
                              <div className="list-item"><li>Falaises impressionnantes et villages perchés</li></div>
                              <div className="list-item"><li>Panoramas sur la rivière et les vignes</li></div>
                              <div className="list-item"><li>Randonnée ou kayak</li></div>
                              <div className="list-item"><li>Saint-Antonin-Noble-Val, Najac</li></div>
                          </div>
                      </div>
                  </Card>
              </div>
              
              {/* Plateau de Montagne Noire */}
              <div className="col col-3">
                  <Card emoji="⛰️" title="Plateau de Montagne Noire" distance=" 40 min">
                      <div className="cardContent">
                          <div className="list">
                              <div className="list-item"><li>Forêts denses, lacs et sommets</li></div>
                              <div className="list-item"><li>Pic de Nore : points de vue spectaculaires</li></div>
                              <div className="list-item"><li>Passerelle de Mazamet à 70m de hauteur</li></div>
                          </div>
                      </div>
                  </Card>
              </div>

              {/* Le Sidobre */}
              <div className="col col-3">
                  <Card emoji="🪨" title="Le Sidobre" distance="≈ 20 min">
                      <div className="cardContent">
                          <div className="list">
                              <div className="list-item"><li>Massif de rochers de granit unique au monde</li></div>
                              <div className="list-item"><li>Formes naturelles incroyables : chaos, rochers en équilibre</li></div>
                              <div className="list-item"><li>Atmosphère mystérieuse, très photogénique</li></div>
                          </div>
                      </div>
                  </Card>
              </div>
            </div>
            
            {/* Villages les plus charmants */}
            <h3 style={{ fontSize: 20, fontWeight: 700, marginLeft: '3%' }}>🏡 Villages les plus charmants</h3>
            <div className="grid">
              {/* La Salvetat-sur-Agout */}
              <div className="col col-3">
                  <Card emoji="🏡" title="La Salvetat-sur-Agout" distance="≈ 15 min">
                      <div className="cardContent">
                          <div className="list">
                              <div className="list-item">Village de montagne avec maisons en pierre et petites ruelles. Situé près du lac et du barrage. Ambiance très paisible.</div>
                          </div>
                      </div>
                  </Card>
              </div>
              
              {/* Lacaune */}
              <div className="col col-3">
                  <Card emoji="🏡" title="Lacaune" distance=" 25 min">
                      <div className="cardContent">
                          <div className="list">
                              <div className="list-item">Petite ville typique des Monts de Lacaune. Connue pour son jambon de Lacaune et ses salaisons. Marché et centre ancien agréable.</div>
                          </div>
                      </div>
                  </Card>
              </div>

              {/* Burlats */}
              <div className="col col-3">
                  <Card emoji="🏡" title="Burlats" distance="≈ 40 min">
                      <div className="cardContent">
                          <div className="list">
                              <div className="list-item">Superbe village médiéval au bord de la rivière Agout. Pont ancien, maisons historiques et jardins. Très photogénique.</div>
                          </div>
                      </div>
                  </Card>
              </div>
              
              {/* Olargues */}
              <div className="col col-3">
                  <Card emoji="🏡" title="Olargues" distance="≈ 50 min">
                      <div className="cardContent">
                          <div className="list">
                              <div className="list-item">Classé parmi Les Plus Beaux Villages de France. Pont médiéval et vieille tour. Un des villages les plus charmants de la région.</div>
                          </div>
                      </div>
                  </Card>
              </div>
              
              {/* Hautpoul */}
              <div className="col col-3">
                  <Card emoji="🏡" title="Hautpoul" distance="≈ 45 min">
                      <div className="cardContent">
                          <div className="list">
                              <div className="list-item">Village perché sur un éperon rocheux. Vue spectaculaire sur la vallée. Accès par une passerelle ou un sentier.</div>
                          </div>
                      </div>
                  </Card>
              </div>

              {/* Castres */}
              <div className="col col-3">
                  <Card emoji="🏛️" title="Castres" distance="≈ 40 min">
                      <div className="cardContent">
                          <div className="list">
                              <div className="list-item">Ville très charmante avec maisons colorées sur la rivière Agout. Musées et vieux centre.</div>
                          </div>
                      </div>
                  </Card>
              </div>
            </div>
            
            {/* Spots "Toscane" près du Tarn */}
            <h3 style={{ fontSize: 20, fontWeight: 700, marginLeft: '3%' }}>🌾Spots "Toscane" près du Tarn</h3>
            <div className="grid">
              {/* Les coteaux autour de Burlats */}
              <div className="col col-2">
                  <Card emoji="🌾" title="Les coteaux autour de Burlats">
                      <div className="cardContent">
                          <div className="list">
                              <div className="list-item"><li>Collines douces et villages médiévaux</li></div>
                              <div className="list-item"><li>Vignes, forêts et couleurs dorées en fin de journée</li></div>
                              <div className="list-item"><li>Ambiance très Toscane, surtout au coucher du soleil</li></div>
                          </div>
                      </div>
                  </Card>
              </div>
              
              {/* Puycelsi et Bruniquel */}
              <div className="col col-2">
                  <Card emoji="🌾" title="Puycelsi et Bruniquel">
                      <div className="cardContent">
                          <div className="list">
                              <div className="list-item"><li>Villages perchés sur des rochers</li></div>
                              <div className="list-item"><li>Ruelles étroites et vieilles pierres</li></div>
                              <div className="list-item"><li>Couleurs chaudes en été et automne</li></div>
                              <div className="list-item"><li>Ambiance presque italienne</li></div>
                          </div>
                      </div>
                  </Card>
              </div>
            </div>
            
            {/* Villes charmantes à plus d'1 heure */}
            <h3 style={{ fontSize: 20, fontWeight: 700, marginLeft: '3%' }}>🌟 Villes charmantes à plus d'1 heure</h3>
            <div className="grid">
              {/* Albi */}
              <div className="col col-3">
                  <Card emoji="🏛️" title="Albi" distance="≈ 1h15 min">
                      <div className="cardContent">
                          <div className="list">
                              <div className="list-item">Ville classée UNESCO. Cathédrale en briques rouges impressionnante. Musée Toulouse-Lautrec.</div>
                          </div>
                      </div>
                  </Card>
              </div>
              
              {/* Carcassonne */}
              <div className="col col-3">
                  <Card emoji="🏰" title="Carcassonne" distance="≈ 1h30 min">
                      <div className="cardContent">
                          <div className="list">
                              <div className="list-item">Cité médiévale avec remparts et tours. Un des sites historiques les plus célèbres de France.</div>
                          </div>
                      </div>
                  </Card>
              </div>

              {/* Toulouse */}
              <div className="col col-3">
                  <Card emoji="🌆" title="Toulouse" distance="≈ 1h30 min">
                      <div className="cardContent">
                          <div className="list">
                              <div className="list-item">La Ville Rose. Place du Capitole, marchés, restaurants et ambiance animée.</div>
                          </div>
                      </div>
                  </Card>
              </div>
              
              {/* Narbonne */}
              <div className="col col-3">
                  <Card emoji="🌊" title="Narbonne" distance="≈ 1h45 min">
                      <div className="cardContent">
                          <div className="list">
                              <div className="list-item">Ville historique avec cathédrale et canal. Proche de la mer Méditerranée.</div>
                          </div>
                      </div>
                  </Card>
              </div>
              
              {/* Montpellier */}
              <div className="col col-3">
                  <Card emoji="🏛️" title="Montpellier" distance="≈ 2h">
                      <div className="cardContent">
                          <div className="list">
                              <div className="list-item">Ville étudiante très vivante. Place de la Comédie et vieux centre magnifique.</div>
                          </div>
                      </div>
                  </Card>
              </div>

              {/* Rodez */}
              <div className="col col-3">
                  <Card emoji="🏰" title="Rodez" distance="≈ 2h">
                      <div className="cardContent">
                          <div className="list">
                              <div className="list-item">Cathédrale gothique spectaculaire. Musée de Pierre Soulages.</div>
                          </div>
                      </div>
                  </Card>
              </div>
            </div>
      </SectionPerso>
    );
}