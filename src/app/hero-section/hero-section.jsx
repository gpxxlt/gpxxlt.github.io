import { heroSectionData } from "@/app/hero-section/hero-section-data";
import "./hero-section.css";
import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="hero-section">

            <div className="hero-section-text">
                <h1>{heroSectionData.title}</h1>
                <h3>{heroSectionData.brief}</h3>
            </div>

            {/* Create a gap between two areas */}
            <div className="w-1/10"></div>

            <div className="hero-section-avatar">
                {/* Place the avatar inside a circle */}
                <div className="hero-section-avatar-image">
                    <Image
                        src={heroSectionData.avatar}
                        alt="avatar"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
