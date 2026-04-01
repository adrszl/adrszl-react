import { useState, useEffect, useRef, } from "react";
import { certificatesData } from "../../data/certifications";

const mapping = {
    javascript: { icon: "🟨", label: "JavaScript" },
    react: { icon: "⚛️", label: "React" },
    css: { icon: "🎨", label: "CSS" },
    html: { icon: "📄", label: "HTML" }
};

const CategoryTabs = ({ categories, activeCategory, setActiveCategory }) => {
    return (
        <div className="tabs">
            {categories.map(cat => (
                <button
                    key={cat}
                    className={`category-tab ${activeCategory === cat ? "active" : ""}`}
                    onClick={() =>
                        setActiveCategory(prev => (prev === cat ? "none" : cat))
                    }
                >
                    {cat}
                </button>
            ))}
        </div>
    );
};

const SkillsGrid = ({ certificates, activeCategory }) => {
    if (activeCategory === "none") return null;

    const filtered =
        activeCategory === "all"
            ? certificates
            : certificates.filter(cert =>
                cert.description.toLowerCase().includes(activeCategory)
            );

    return (
        <div id="skillsGrid">
            {filtered.map((cert, index) => (
                <div
                    key={cert.id || index}
                    className="skill-hexagon"
                    style={{ animationDelay: `${index * 0.1}s` }}
                >
                    <div className="hexagon-inner">
                        <div className="hexagon-content">
                            <div className="skill-icon-hex">📜</div>
                            <div className="skill-name-hex">{cert.title}</div>
                            <div className="skill-percentage-hex">{cert.date}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const Counter = ({ target }) => {
    const [value, setValue] = useState(0);
    const [visible, setVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setVisible(true);
        });

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!visible) return;

        let current = 0;
        const step = target / (2000 / 16);

        const interval = setInterval(() => {
            current += step;

            if (current >= target) {
                setValue(target);
                clearInterval(interval);
            } else {
                setValue(Math.floor(current));
            }
        }, 16);

        return () => clearInterval(interval);
    }, [visible, target]);

    return <span ref={ref}>{value}</span>;
};

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

const StatsSection = ({ certificates, activeCategory }) => {
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
        <section className="stats-section">
            <div id="stats-grid">
                {stats.map(stat => (
                    <StatCard key={stat.label} {...stat} />
                ))}
            </div>
        </section>
    );
};

const SkillsCovered = () => {
    const [activeCategory, setActiveCategory] = useState("none");

    const categories = [
        "all",
        "javascript",
        "react",
        "redux",
        "typescript",
        "css",
        "html"
    ];

    return (
        <section id="skills-covered" className="stats-section">
            <div id="stats-grid">
                <div>
                    <CategoryTabs
                        categories={categories}
                        activeCategory={activeCategory}
                        setActiveCategory={setActiveCategory}
                    />

                    <SkillsGrid
                        certificates={certificatesData}
                        activeCategory={activeCategory}
                    />

                    <StatsSection
                        certificates={certificatesData}
                        activeCategory={activeCategory}
                    />
                </div>
            </div>
        </section>
    );
};

export default SkillsCovered;