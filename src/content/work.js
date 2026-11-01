// Work entries, newest first. The first three show on the home pane.
//   start, end — shown as a date range under the title
//   summary    — two or three sentences: the team, the problem, what you owned
//   highlights — short outcomes, one line each
//   story      — the longer write-up, one string per paragraph (optional)

export const work = [
    {
        slug: "synopsys",
        role: "Software Testing Intern",
        org: "Synopsys",
        start: "May 2025",
        end: "Nov 2025",
        summary:
            "I joined a software team that builds internal tools for managing the spec sheets of Synopsys's hardware design products. I was responsible for building test automation pipeline on the system, focusing on end-to-end and API tests.",
        highlights: [
            "Automated 400+ end-to-end test points with Playwright, reaching 90% coverage of the tool's functionality",
            "Reducing manual QA by 80%, from a full workday to less than an hour",
        ],
        story: [
            "In summer 2025, I started an internship at Synopsys as a Software Testing Engineer. I worked with a software team to develop and maintain a system for managing the spec sheets of Synopsys's hardware design products. My primary responsibility was building test automation for the system, mainly end-to-end and API tests, with frontend development as a secondary focus.",
            "During the internship, I automated more than 400 end-to-end test points using Playwright's JavaScript API. By the end of the summer, the tests covered 90% of the website's functionality. The automation framework improved testing efficiency by 80%, reducing manual QA from a full workday to less than an hour. I also contributed to the frontend by implementing a feature that renders backend-generated spreadsheets in the interface. Additionally, I wrote a Python test script using OpenPyXL and integrated it into the Playwright testing pipeline.",
            "When the summer internship ended in mid-August, I was offered an extension to continue working remotely during the fall semester. During the extension, I focused on standardizing the testing environment, expanding test coverage, and working with the CI/CD team to improve overall quality assurance.",
            "Near the end of my internship, the Playwright automation framework I had built was transferred to another team for ongoing maintenance. To support the handoff, I wrote a 20-page setup and configuration guide and a 30-page technical document covering the test architecture, execution procedures, and automation frameworks.",
        ],
        tools: ["Playwright", "JavaScript", "React", "Python", "OpenPyXL", "MySQL"],
    },
    {
        slug: "visionx",
        role: "Full Stack Development Intern",
        org: "VisionX",
        start: "May 2024",
        end: "Aug 2024",
        summary:
            "I helped re-launch a marketplace site for AI assets, reworked the frontend by turning a framework-free codebase into reusable React components, and prototyped AI assistants with RAG.",
        highlights: [
            "Led the migration of a static HTML and JavaScript site to React, with reusable product cards and user dashboards",
            "Built a transaction flow on the Stripe API with the backend engineers",
            "Prototyped an AI assistant that drafts product descriptions for sellers",
        ],
        story: [
            "In summer 2024, I interned at VisionX as a Full Stack Engineer, working with a team to re-launch a marketplace site for AI assets. My primary responsibility was prototyping frontend components and modularizing the existing codebase, which had been written without any framework. My secondary responsibilities included researching user experience enhancements and AI integration opportunities, and contributing to backend development.",
            "The platform I inherited was a static website built purely with HTML and JavaScript, offering limited functionality and no component structure. I led the migration to React, developing reusable components including product cards and user dashboards. Using Material UI, I redesigned the product display page to create a modern and responsive marketplace interface. On the backend side, I spent 2 weeks collaborating with fellow engineers to validate a transaction processing system using the Stripe API, enabling payment functionality for the prototype.",
            "Additionally, I researched methods to enhance user experience through AI integration. I proposed implementing an AI assistant using the ChatGPT API, with basic RAG over the products in the database, to help sellers generate product descriptions automatically. They could either click a button or interact with an on-page agent to create compelling listings. This feature was quickly adopted by the team and later refined by another engineer as my internship concluded.",
        ],
        tools: ["React", "Django", "Python", "ChatGPT API", "RAG", "Stripe API"],
    },
];
