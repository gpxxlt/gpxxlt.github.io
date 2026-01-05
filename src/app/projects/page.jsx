"use client"

import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { FaExternalLinkAlt, FaLink } from "react-icons/fa";
import {projectsData} from './project-data';
import "../globals.css";
import "./projects.css";


function Description({ data, skills }) {
    return (
        <div className="glass-card flip-in-hor-bottom">
            <div className="m-6">
                {/* Project title */}
                <div className="flex gap-x-3 items-center">
                    <h1 className="text-3xl">
                        {data.title}
                    </h1>
                    {/*<a className="w-6" href={data.link}>*/}
                    {/*    <FaLink/>*/}
                    {/*</a>*/}
                </div>

                {data.subtitle !== "" && (
                    <h2 className="text-lg font-thin mt-[-6px]">
                        {data.subtitle}
                    </h2>
                )}

                {/* Description */}
                <div className="text-base font-light mt-4">
                    <p>{data.brief}</p>
                    <p className="mt-2">This project is available <a href={data.link}>here</a>.</p>
                </div>
            </div>

            {/* Tech Stacks */}
            <div className="flex gap-x-5 justify-self-end m-6">
                {skills.map(skill => {
                    return (
                        <div key={skill.id} className="flex items-center gap-x-2">
                            {/* Forced the icon to have fixed size */}
                            <img src={skill.iconUrl} alt={skill.name} className="w-10 h-10"/>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}


// function TechStack({ data }) {
//     return (
//         <div className="flex flex-col gap-2 ml-10">
//             {data.map(skill => {
//                 return (
//                     <div key={skill.id} className="flex items-center gap-x-2 w-10">
//                         <img src={skill.iconUrl} alt={skill.name}/>
//                         <p className="font-light text-xl">{skill.name}</p>
//                     </div>
//                 )
//             })
//             }
//         </div>
//     )
// }


// Carousel for displaying demo images
function CarouselDemo({ demoData }) {
    return (
        <div>
            <Carousel>
                <CarouselContent>
                    {demoData.map(item => (
                        <CarouselItem key={item.id}>
                            <div className="flex flex-col p-1">
                                <img src={item.url} alt={item.name} className="image-container" />
                                <p className="text-base font-light italic mt-2 self-end">{item.subtitle}</p>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {demoData.length !== 0 && (
                    <div className="flex justify-start gap-2">
                        <CarouselPrevious className="static -translate-y-6" />
                        <CarouselNext className="static -translate-y-6" />
                    </div>
                )}
            </Carousel>
        </div>

    )
}


function ProjectItem({ projectData }) {

    return (
        // <div className="flex w-full border-black border-2">
        <div className="flex flex-col w-2/3 items-center">
            <Description data={projectData.description} skills={projectData.skills} />
            {/*<TechStack data={projectData.skills} />*/}

            {/* A place for demo screenshots */}
            <CarouselDemo demoData={projectData.demo} />
        </div>
    )
}


export default function ProjectPage() {

    return (
        <div>
            <section className="grid px-[16%] py-[6%] mt-16 gap-y-10">
                {projectsData.map(item => {
                    return (
                        <div key={item.id}>
                            <ProjectItem projectData={item} />
                        </div>
                    );
                })}
                {/*<CarouselDemo demoData={demoData} />*/}
            </section>
        </div>
    );
}