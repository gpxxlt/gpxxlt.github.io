import ProjectSection from "@/app/projects/project";
import HeroSection from "@/app/hero-section/hero-section";
import "./page.css";

export default function Home() {
    return (
        <div className="min-h-screen">
            <div className="container w-full mx-auto">

                {/*  Actual content goes here  */}
                {/*  Golden ratio padding when viewing from laptop */}
                {/*  Layout by section  */}
                <div className="max-w-4xl mx-auto">
                    <div className="w-full lg:w-[1-61.8%] mx-auto">

                        <div className="section mb-8">
                            <HeroSection/>
                        </div>

                        {/*<div className="bg-white rounded-lg shadow p-6 mb-8">*/}
                        {/*    <h2>More About Me</h2>*/}
                        {/*</div>*/}

                        <div className="section">
                            <h2>Selected Projects</h2>
                            <ProjectSection/>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
