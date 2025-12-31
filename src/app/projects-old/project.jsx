import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from "next/link";

import { projectData } from './projects-data.js';
import "./project.css"
import "../../fonts/fonts.css"

// Icon assets from https://react-icons.github.io/react-icons/
import { FaGithub, FaLaptop, FaFilePdf } from "react-icons/fa"


function ProjectItem({ project }) {

    // TODO: set states by hovering the tags
    // TODO: put links button into a sepearte CSS class

    return (
        // Card component has a padding of 6px
        <Card className="project-item">

            {/* Split into image and text cols */}

            {/* Left side: thumbnail image */}
            {/* This aspect ratio is approximately 4:3 */}
            <div className="w-2/5 h-auto flex flex-col relative">
                <Image
                    src={project.image}
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
                        {project.title}
                    </CardTitle>
                    <div className="flex flex-row gap-2 -ml-0.5">
                        {project.tags.map(tag => (
                            <Button key={tag.id} size="tag" variant="outline">
                                {tag.name}
                            </Button>
                        ))}
                    </div>
                </CardHeader>

                {/* Short description of each project */}
                <CardContent className="mt-6">

                    {/* Text Description */}
                    <p className="project-item-description-font">{project.description}</p>

                    {/* Links */}
                    <div className="flex items-center space-x-4">
                        {project.github ?
                            <div className="flex items-center">
                                <Link href={project.github_url}>
                                    <Button variant="outline" size="sm" className="bg-white text-gray-700 border-gray-300">
                                        <FaGithub/>
                                        Github
                                    </Button>
                                </Link>
                            </div> : null}

                        {project.demo ?
                            <div className="flex items-center">
                                <Link href={project.demo_url}>
                                    <Button variant="outline" size="sm" className="bg-white text-gray-700 border-gray-300">
                                        <FaLaptop/>
                                        Demo
                                    </Button>
                                </Link>
                            </div> : null}

                        {project.report ?
                            <div className="flex items-center">
                                <Link href={project.report_url}>
                                    <Button variant="outline" size="sm" className="bg-white text-gray-700 border-gray-300">
                                        <FaFilePdf/>
                                        Report
                                    </Button>
                                </Link>
                            </div> : null}
                    </div>
                </CardContent>
            </div>
        </Card>
    )
}

export default function ProjectSection() {

    return (
        projectData.map(project =>
            <ProjectItem key={project.id} project={project}/>
        )
    )
}
