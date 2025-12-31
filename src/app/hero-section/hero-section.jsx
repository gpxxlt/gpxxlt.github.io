import { heroSectionData } from "@/app/hero-section/hero-section-data";
import "./hero-section.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaDownload } from "react-icons/fa";

export default function HeroSection() {
    return (
        <section className="hero-section">
            <div className="text-center">

                {/* Text Contents */}
                <h1>{heroSectionData.title}</h1>
                <h2>{heroSectionData.brief}</h2>

                {/* Links */}
                <div className="flex justify-center space-x-10 mt-4">
                    <Link href={heroSectionData.github}>
                        <Button size="sm" className="hero-section-button">
                            <FaGithub/> GitHub
                        </Button>
                    </Link>
                    <Link href={heroSectionData.linkedIn}>
                        <Button size="sm" className="hero-section-button">
                            <FaLinkedinIn/> LinkedIn
                        </Button>
                    </Link>
                    <Link href={heroSectionData.linkedIn}>
                        <Button size="sm" className="hero-section-button">
                            <FaDownload/> Resume
                        </Button>
                    </Link>
                </div>

                <h3>Scroll Down To View My Gallery</h3>

            </div>
        </section>
    );
}
