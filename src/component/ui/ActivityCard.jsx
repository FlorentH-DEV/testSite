
const ActivityCard = ({emoji, name, details, distance}) => {
    return (
        <div className="card">
        <div className="activity-header">
            <span className="activity-emoji">{emoji}</span>

            <div>
            <h3 className="place-title">{name}</h3>

            {distance && (
                <span className="badge badge-green">{distance}</span>
            )}
            </div>
        </div>

        <ul className="activity-list">
            {details.map((d, i) => (
            <li key={i} className="activity-item">
                <span className="dot" />
                {d}
            </li>
            ))}
        </ul>
        </div>
    );
}

export default ActivityCard