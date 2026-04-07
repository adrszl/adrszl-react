import mapping from "../../data/mapping";
import StatCard from "../StatCard";

const StatsSection = ({ certificates }) => {
    const keywords = Object.keys(mapping);

    const total = certificates.length;

    const stats = keywords.map(key => {
        const count = certificates.filter(cert =>
            cert.description.toLowerCase().includes(key)
        ).length;

        return {
            ...mapping[key],
            count,
            percentage: ((count / total) * 100).toFixed(1)
        };
    });

    return (
        <div id="stats-grid" className="stats-grid">
            {stats.map(stat => (
                <StatCard key={stat.label} {...stat} />
            ))}
        </div>
    );
};

export default StatsSection;