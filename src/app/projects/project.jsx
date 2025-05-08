import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { projectData } from './projects-data.js';
import Image from 'next/image';

function ProjectItem(prop) {
    return (
        <Card>
            {/* Thumbnail image */}
            <div className="relative w-full aspect-video">
                <Image
                    src={prop.img}
                    alt="Description"
                    fill
                    className="object-cover rounded-t-lg"
                />
            </div>
            <CardHeader>
                <CardTitle>{prop.title}</CardTitle>
                <CardDescription>{prop.brief}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>{prop.description}</p>
            </CardContent>
        </Card>
    )
}

export default function ProjectSection() {
    // Map each project to a card component
    const projectItems = projectData.map(project =>
        <li>{ProjectItem(project)}</li>
    );
    return (
        <ul>{projectItems}</ul>
    );
}
