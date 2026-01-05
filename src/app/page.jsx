import ProjectSection from "@/app/projects-old/project";
import HeroSection from "@/app/hero-section/hero-section";
import SkillsSection from "@/app/skills/skills";
import Sidebar from "@/app/sidebar/sidebar";
import "./page.css";


export default function Home() {
    return (
        <div className="screen">

            {/* Header and Hero Section */}
            <HeroSection/>

            {/*<main className="main">*/}
            {/*    <div className="content-container">*/}

            {/*        /!* Main Content *!/*/}
            {/*        <div>*/}
            {/*            <div className="section">*/}
            {/*                <h2 className="section-title">Personal Projects</h2>*/}
            {/*                <ProjectSection/>*/}
            {/*            </div>*/}

            {/*            <div className="section">*/}
            {/*                <h2 className="section-title">Professional Experience</h2>*/}
            {/*            </div>*/}

            {/*            <div className="section">*/}
            {/*                <h2 className="section-title">Skills</h2>*/}
            {/*                <SkillsSection />*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*        /!* Sidebar *!/*/}
            {/*        <div>*/}
            {/*            <Sidebar/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</main>*/}
        </div>
    );
}
