import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from "next/link";

import { projectData } from './projects-data.js';
import "./project.css"
import "../../fonts/fonts.css"

// Icon assets from https://react-icons.github.io/react-icons/
import { FaGithubSquare, FaLaptop } from "react-icons/fa"


function ProjectItem(prop) {

    // TODO: set states by hovering the tags

    return (
        // Card component has a padding of 6px
        <Card className="project-item">

            {/* Split into image and text cols */}

                {/* Left side: thumbnail image */}
                {/* This aspect ratio is approximately 4:3 */}
                <div className="w-2/5 h-auto flex flex-col relative">
                    <Image
                        src={prop.image}
                        alt="project0-image"
                        fill={true}
                        className="project-item-image-style"
                    />
                </div>

                {/* Right side: text area */}
                <div className="w-3/5 h-auto flex flex-col relative mt-4 -ml-4">

                    {/* Title of tags of each project */}
                    <CardHeader>
                        <CardTitle className="project-item-title-font">
                            {prop.title}
                        </CardTitle>
                        <div className="flex flex-row gap-2 -ml-0.5">
                            {prop.tags.map(tag => (
                                <Button key={tag.id} size="tag" variant="outline">
                                    {tag.name}
                                </Button>
                            ))}
                            {/* Conditionally display icons for redirection */}
                            {prop.github ?
                                <Link href={prop.github_url}>
                                    <FaGithubSquare size={24} />
                                </Link> : null}
                            {prop.demo ?
                                <Link href={prop.demo_url}>
                                    <FaLaptop size={24} />
                                </Link> : null}
                        </div>
                    </CardHeader>

                    {/* Short description of each project */}
                    <CardContent className="mt-6">
                        <p className="project-item-description-font">{prop.description}</p>
                    </CardContent>
                </div>
        </Card>
)
}

export default function ProjectSection() {
    // Map each project to a card component
    const projectItems = projectData.map(project =>
        <li key={project.id}>{ProjectItem(project)}</li>
    );
    return (
        <ul>{projectItems}</ul>
    );
}
