import { useState } from "react";
import { certificatesData } from "../../data/certifications";
import Particles from "../Particles";

const CategoryTabs = ({ categories, activeCategory, setActiveCategory }) => {
    return (
        <div className="skill-categories">
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
                cert.description.toLowerCase().includes(activeCategory.toLowerCase())
            );
    
            return (
        <div id="skillsGrid" className="skills-hexagon-grid">
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

const ChooseBySkillSection = () => {
    const [activeCategory, setActiveCategory] = useState("none");

    const categories = [
        "all",
        "javascript",
        "react",
        "redux",
        "typescript",
        "jquery",
        "html",
        "css",
        "flexbox",
        "bootstrap",
        "SASS",
        "NPM",
        "Webpack",
        "Wordpress",
        "Other"
    ];

    return (
        <section id="skills" className="skills-section particles">
            <div className="skills-container">
                <div className="section-header">
                    <h2 className="section-title">Choose by skill</h2>
                    <p className="section-subtitle">Skills covered by the certifications. Click to see.</p>
                </div>

                <CategoryTabs
                    categories={categories}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                />

                <SkillsGrid
                    certificates={certificatesData}
                    activeCategory={activeCategory}
                />
            </div>

            <Particles />
        </section>
    )
}

export default ChooseBySkillSection;