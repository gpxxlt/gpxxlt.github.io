"use client"

import * as React from "react";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import "./experience.css";
import "../globals.css";


const experienceData = [
    {
        id: 0,
        company: "Synopsys",
        title: "Software Testing Engineer",
        startDate: "May 2025",
        endDate: "Nov 2025",
        skills: [
            {
                id: 0,
                name: "Playwright",
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg"
            },
            {
                id: 1,
                name: "React",
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            },
            {
                id: 2,
                name: "JavaScript",
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            },
            {
                id: 3,
                name: "python",
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
            },
            {
                id: 4,
                name: "mySQL",
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
            }
        ],
        // Content that will show after scrolling
        summary: [
            "In summer 2025, I joined Synopsys as a Software Testing Engineer. I worked with a small database team to develop and maintain an internal IP configuration database management tool. My primary responsibility was developing testing automation for the tool, including end-to-end and API tests, with a secondary focus on frontend development.",
            "During the internship, I automated 400+ end-to-end testing points using Playwright's JavaScript API. By the end of summer, I had achieved 90% coverage across all website functionalities. The automation framework improved testing efficiency by 80%, reducing manual QA workload from one full workday to just one hour per user. I also contributed to frontend development by implementing a feature that renders backend-generated spreadsheets in the interface. Additionally, I developed a Python test script using OpenPyXL and integrated it into the Playwright testing pipeline.",
            "When the summer internship concluded in mid-August, I was offered an extension to continue working remotely during my fall semester. During this extended period, I primarily focused on standardizing the testing environment, expanding test coverage, and collaborating with the CI/CD team to enhance overall quality assurance.",
            "Near the end of my internship, the Playwright testing automation framework I had developed was transitioned to another team for ongoing maintenance. To facilitate this handoff, I created comprehensive documentation, including a 20-page setup and configuration guide and a 30-page technical document detailing test architecture, execution procedures, and automation frameworks.",
        ]
    },
    {
        id: 1,
        company: "VisionX",
        title: "Full Stack Developer",
        startDate: "May 2024",
        endDate: "Aug 2024",
        skills: [
            {
                id: 0,
                name: "React",
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            },
            {
                id: 1,
                name: "Material UI",
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg"
            },
            {
                id: 2,
                name: "Django",
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain-wordmark.svg"
            },
            {
                id: 3,
                name: "python",
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
            },
        ],
        summary: [
            "In summer 2024, I joined VisionX as a Full Stack Engineer, working with a team to re-launch a trading platform for AI assets such as datasets, algorithms, and other computing resources. My primary responsibility was prototyping frontend components and modularizing the existing codebase, which had been written without any framework. My secondary responsibilities included researching user experience enhancements, AI integration opportunities, and contributing to backend development.",
            "The platform I inherited was a static website built purely with HTML and JavaScript, offering limited functionality and no component structure. I led the migration to React, developing reusable components including product cards and user dashboards. Using Material UI, I redesigned the product display page to create a modern and responsive marketplace interface.",
            "On the backend, I collaborated with fellow engineers to implement a transaction processing system using the Stripe API, enabling payment functionality for the prototype. Additionally, I researched methods to enhance user experience through AI integration. I proposed implementing an AI assistant using the ChatGPT API to help sellers generate product descriptions automatically. They could either click a button or interact with an on-page agent to create compelling listings. This feature was quickly adopted by the team and later refined by another engineer as my internship concluded.",
        ]
    }
]


function Experience({ exp }) {

    const [openId, setOpenId] = React.useState(null);
    const contentRefs = React.useRef({});
    const styleSheetRef = React.useRef(null);
    const pendingAnimationRef = React.useRef(null);

    // Measure and animate after content is rendered
    React.useEffect(() => {
        if (!pendingAnimationRef.current) return;

        const { id, isOpening } = pendingAnimationRef.current;
        const element = contentRefs.current[id];

        // Create stylesheet if needed
        if (!styleSheetRef.current) {
            styleSheetRef.current = document.createElement('style');
            document.head.appendChild(styleSheetRef.current);
        }

        if (isOpening) {
            // Temporarily allows the browser to layout everything, then set to zero for animation
            element.style.height = 'auto';
            const contentHeight = element.scrollHeight;
            element.style.height = '0px';

            const animName = `expand-${id}`;
            const keyframe = `
                    @keyframes ${animName} {
                        from { height: 0px; }
                        to { height: ${contentHeight}px; }
                    }
                `;

            if (!styleSheetRef.current.textContent.includes(animName)) {
                styleSheetRef.current.textContent += keyframe;
            }

            // Bounce effect at the end
            // https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/easing-function/cubic-bezier
            element.style.animation = `${animName} 1.5s cubic-bezier(0.3, 0.2, 0.2, 1.3) forwards`;
        }
        else {
            const currentHeight = element.scrollHeight;
            const animName = `collapse-${id}`;
            const keyframe = `
                @keyframes ${animName} {
                    from { height: ${currentHeight}px; }
                    to { height: 0px; }
                }
            `;

            if (!styleSheetRef.current.textContent.includes(animName)) {
                styleSheetRef.current.textContent += keyframe;
            }

            element.style.animation = `${animName} 0.3s ease-out forwards`;
        }

        pendingAnimationRef.current = null;
    }, [openId]);


    const handleToggle = (id) => {
        const isOpening = openId !== id;

        // Store what animation we need to do
        pendingAnimationRef.current = { id, isOpening };

        // Update state (triggers re-render and useEffect)
        if (isOpening) { setOpenId(id); }
        else { setOpenId(null); }
    }


    return (
        <div>
            <Collapsible
                key={exp.id}
                open={exp.id === openId}
                onOpenChange={() => handleToggle(exp.id)}
                className="flex w-full flex-col gap-2"
            >
                <div className="exp-block glass-card">
                    <div className="exp-header">
                        <div className="exp-title">
                            <div className="flex gap-2">
                                <h3>{exp.company}</h3>
                                <h4> | </h4>
                                <h3>{exp.title}</h3>
                            </div>
                            <div className="flex gap-1">
                                <h3>{exp.startDate}</h3>
                                <h4> - </h4>
                                <h3>{exp.endDate}</h3>
                            </div>
                        </div>
                        <CollapsibleTrigger asChild>
                            <Button variant="ghost" size="icon" className="size-8">
                                <ChevronsUpDown className="size-6"/>
                                <span className="sr-only">Toggle</span>
                            </Button>
                        </CollapsibleTrigger>
                    </div>

                    <CollapsibleContent
                        className="scroll-content"
                        ref={(el) => { contentRefs.current[exp.id] = el }}
                        style={{ height: 0 }}
                        forceMount
                    >
                        <div className="scroll-content-text">

                            {/* Text summary */}
                            {exp.summary.map((item, index) => (
                                <p key={index}>{item}</p>
                            ))}

                            {/* Tech stack list, copy-pasted from projects/page.jsx */}
                            <div className="flex gap-x-2 self-end">
                                {exp.skills.map(skill => {
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
                    </CollapsibleContent>
                </div>
            </Collapsible>
        </div>
    );
}


export default function ExperiencePage() {
    return (
        <div>
            <section className="grid px-[16%] py-[6%] mt-16 gap-y-10">
                {experienceData.map(item => {
                    return (
                        <div key={item.id}>
                            <Experience exp={item} />
                        </div>
                    );
                })}
            </section>
        </div>
    );
}