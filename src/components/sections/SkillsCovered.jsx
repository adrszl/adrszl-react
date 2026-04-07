import { certificatesData } from "../../data/certifications";
import StatsSection from "./StatsSection";

const SkillsCovered = () => {
    return (
        <section id="skills-covered" className="stats-section">
            <div class="section-header">
                <h2 class="section-title">Skills covered</h2>
                <p class="section-subtitle">Crucial skills covered by the courses done by me, and the number of them.</p>
            </div>
            <StatsSection certificates={certificatesData} />
        </section>
    );
};

export default SkillsCovered;