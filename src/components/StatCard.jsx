import Counter from "./Counter";

const StatCard = ({ icon, label, count, percentage }) => {
    return (
        <div className="stat-card">
            <div className="stat-icon">{icon}</div>

            <div className="stat-number">
                <Counter target={count} />
            </div>

            <div className="stat-label">{label}</div>

            <p className="stat-description">
                {percentage}% of all certificates
            </p>
        </div>
    );
};

export default StatCard;