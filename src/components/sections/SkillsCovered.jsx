import { useState, useEffect, useRef, } from "react";
import { certificatesData } from "../../data/certifications";

const mapping = {
    javascript: { icon: '🟨', label: 'JavaScript' },
    react: { icon: '⚛️', label: 'React' },
    redux: { icon: '🌀', label: 'Redux' },
    typescript: { icon: '🟦', label: 'TypeScript' },
    jquery: { icon: '💧', label: 'jQuery' },
    html: { icon: '📄', label: 'HTML' },
    css: { icon: '🎨', label: 'CSS' },
    flexbox: { icon: '📐', label: 'Flexbox' },
    bootstrap: { icon: '🅱️', label: 'Bootstrap' },
    sass: { icon: '💅', label: 'SASS' },
    npm: { icon: '📦', label: 'NPM' },
    webpack: { icon: '📦', label: 'Webpack' },
    wordpress: { icon: '📝', label: 'WordPress' },
    other: { icon: '✨', label: 'Other' }
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
        <>
            {stats.map(stat => (
                <StatCard key={stat.label} {...stat} />
            ))}
        </>
    );
};

const SkillsCovered = () => {
    return (
        <section id="skills-covered" className="stats-section">
            <div class="section-header">
                <h2 class="section-title">Skills covered</h2>
                <p class="section-subtitle">Crucial skills covered by the courses done by me, and the number of them.</p>
            </div>
            <div id="stats-grid" className="stats-grid">
                {/* <CategoryTabs
                    categories={categories}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                /> */}

                <SkillsGrid certificates={certificatesData} />

                <StatsSection certificates={certificatesData} />
            </div>
        </section>
    );
};

export default SkillsCovered;