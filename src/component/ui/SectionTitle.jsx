import React from 'react'

const SectionTitle = ({emoji, title, subtitle}) => {
    return (
        <div className="section-title-wrapper">
          <div className="section-title-row">
            <span className="section-emoji">{emoji}</span>
            <h2 className="section-title">{title}</h2>
          </div>
    
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
    
          <div className="section-line" />
        </div>
    );
}

export default SectionTitle