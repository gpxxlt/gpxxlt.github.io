// This implementation credits to
// https://kevin-michael805.medium.com/building-a-portfolio-skills-section-72383c4f3fb6

import { skillsData } from "@/app/skills/skills-data";
import "./skills.css";

function SkillCard({ skill }) {
    return (
        <div className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
        </div>
    )
}

export default function SkillsSection() {
    return (
        <div>
            {skillsData.map((skillset) => {
                return (
                    <div key={skillset.id} className="skill-set">
                        <div className="skill-set-title">{skillset.type}</div>
                        <div className="skill-set-list">
                            {skillset.skills.map(skill =>
                                <SkillCard key={skill.id} skill={skill}/>
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
