import Link from "next/link";
import "./header.css";

export default function Header() {
    return (
        // Style of the header, i.e., color, border, shadow
        <header className="header">

            {/* Size of the header, dynamically adjust */}
            <div className="header-view">

                {/* Display of the header, on the left is name, right is navigation */}
                <div className="header-name">
                    <h1> Yuepeng Gu </h1>
                    <span className="header-link-separator">  {"/"}      </span>
                    <span className="portfolio-text">         portfolio  </span>
                </div>

                <nav className="header-navigation">
                    <Link href="/" className="header-link">
                        Home
                    </Link>
                    <span className="header-link-separator">|</span>
                    <Link href="/projects" className="header-link">
                        Projects
                    </Link>
                    <span className="header-link-separator">|</span>
                    <Link href="/experience" className="header-link">
                        Experience
                    </Link>
                </nav>
            </div>
        </header>
    )
}