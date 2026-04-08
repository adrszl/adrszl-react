import { useState } from "react";
import { certificatesData } from "../../data/certifications";
import Particles from "../Particles";
import CategoryTabs from "../CategoryTabs";
import SkillsGrid from "../SkillsGrid";

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