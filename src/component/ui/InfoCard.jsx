import React from 'react'

const InfoCard = (emoji, title, children, accent) => {
    return (
        <div className={`card ${accent ? "card-accent" : ""}`}>
            {(emoji || title) && (
                <div className="place-header">
                {emoji && <span className="place-emoji">{emoji}</span>}
                {title && <h3 className="place-title">{title}</h3>}
                </div>
            )}
            {children}
        </div>
    );
}

export default InfoCard
