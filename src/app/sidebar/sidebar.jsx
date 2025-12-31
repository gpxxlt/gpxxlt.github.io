import { FaRegUser, FaPenClip, FaBookBookmark } from "react-icons/fa6";
import "./sidebar.css";
import { sidebarData } from "@/app/sidebar/sidebar-data";
import { Button } from "@/components/ui/button";

export default function Sidebar() {
    return (
        <div className="sidebar">

            {/* About section, gives brief and important info */}
            <div className="sidebar-title">
                <FaRegUser/>
                <h1> About Me </h1>
            </div>
            <p> {sidebarData.about} </p>

            {/* Skills section, highlights proficient tools */}
            <div className="sidebar-title">
                <FaPenClip/>
                <h1> Tech Stack </h1>
            </div>
            <div className="sidebar-skills">
                {sidebarData.techStack.map(item => (
                    // Display them as button for now
                    <Button key={item.id}>{item.name}</Button>
                ))}
            </div>

            {/* Highlighting area of interest */}
            <div className="sidebar-title">
                <FaBookBookmark/>
                <h1> Area of Expertise </h1>
            </div>
            <p> A list of expertise </p>

            {/* Hot links at the end */}
        </div>
    );
}
