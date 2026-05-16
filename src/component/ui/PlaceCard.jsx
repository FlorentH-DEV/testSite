
const PlaceCard = ({name, description, address, phone, distance, hours, emoji}) => {
    return (
        <div className="card">
        <div className="place-header">
            {emoji && <span className="place-emoji">{emoji}</span>}

            <div>
            <h3 className="place-title">{name}</h3>

            {distance && (
                <span className="badge badge-green">{distance}</span>
            )}
            </div>
        </div>

        <p className="text">{description}</p>

        {hours && <p className="meta">🕐 {hours}</p>}
        {address && <p className="meta">📍 {address}</p>}

        {phone && (
            <a className="link" href={`tel:${phone.replace(/\s/g, "")}`}>
            📞 {phone}
            </a>
        )}
        </div>
    );
}

export default PlaceCard