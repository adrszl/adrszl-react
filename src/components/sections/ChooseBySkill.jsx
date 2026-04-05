import { useState } from "react";
import { certificatesData } from "../../data/certifications";

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
        <div  id="skillsGrid" className="skills-hexagon-grid">
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
        "css",
        "html"
    ];

    return (
        <section id="skills" className="skills-section particles">
            <div class="skills-container">
                <div class="section-header">
                    <h2 class="section-title">Choose by skill</h2>
                    <p class="section-subtitle">Skills covered by the certifications. Click to see.</p>
                </div>

                <CategoryTabs
                    categories={categories}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                />
            </div>

            <SkillsGrid
                certificates={certificatesData}
                activeCategory={activeCategory}
            />
        </section>
    )
}

export default ChooseBySkillSection;