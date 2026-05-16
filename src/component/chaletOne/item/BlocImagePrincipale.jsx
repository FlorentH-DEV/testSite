import React, { Fragment } from 'react'
import imgChalet from '../../../image/chalet1/chalet1.png'
import '../../../css/blocImagePrincipale.css'

const BlocImagePrincipale = () => {
    return (
        <Fragment>
            {/* HERO — Bienvenue */}
            <section id="bienvenue" className="hero">

            {/* Background image */}
            <div className="hero__bg">
            <img
                src={imgChalet}
                alt="Chalet  Anglès"
                className="hero__img"
            />
            <div className="hero__overlay" />
            </div>

            {/* Content */}
            <div className="container hero__content">
            <div className="hero__inner">

                {/* Badge */}
                <div className="hero__badge">
                📍 13 Le Salvan Bas, 81260 Anglès
                </div>

                {/* Title */}
                <h1 className="hero__title">
                🎉 Bienvenue dans<br />
                <em>notre chalet</em>
                </h1>

                {/* Text */}
                <p className="hero__text">
                Nous sommes ravis de vous accueillir dans notre logement et espérons
                que vous passerez un séjour{" "}
                <strong>agréable, reposant et plein de bons souvenirs</strong>.
                </p>

                {/* Features */}
                <div className="hero__features">
                {[
                    "Trouver les informations utiles",
                    "Profiter pleinement du logement",
                    "Découvrir les bonnes adresses",
                ].map((item) => (
                    <div key={item} className="hero__feature">
                    <span className="hero__star">✦</span>
                    {item}
                    </div>
                ))}
                </div>

            </div>
            </div>
            </section>
        </Fragment>
    )
}

export default BlocImagePrincipale
