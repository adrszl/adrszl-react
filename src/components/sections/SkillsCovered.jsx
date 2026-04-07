import { certificatesData } from "../../data/certifications";
import StatsSection from "./StatsSection";

const SkillsCovered = () => {
    return (
        <section id="skills-covered" className="stats-section">
            <div className="section-header">
                <h2 className="section-title">Skills covered</h2>
                <p className="section-subtitle">Crucial skills covered by the courses done by me, and the number of them.</p>
            </div>
            <StatsSection certificates={certificatesData} />
        </section>
    );
};

export default SkillsCovered;