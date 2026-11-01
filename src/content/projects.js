// Projects, in display order. The first three show on the home pane.
//   cover — an image under public/, e.g. "/images/projects/i-know-a-place.jpg" (optional; null for no image)
//   start, end — shown as a date range under the title
//   links — { label, href }; leave href empty to show the label without a link.
//           PDFs such as reports aren't kept on this site: use a Google Drive share link as the href.

export const projects = [
    {
        slug: "ps-research",
        title: "Student Data Scientist",
        start: "Sep 2025",
        end: "Jan 2026",
        kind: "Research with Professor John Chin",
        cover: null,
        description: [
            "Conducted quantitative research with professor John Chin at CMIST. Ran a replication study with ~10 regression models, performed cross-country comparative analysis on democratic trends in African countries, built data visualizations from data sources like the Afrobarometer, ACLED, DMSP satellite data, and Subnational Corruption Database."
        ],
        role: "Research Assistant at CMIST",
        builtWith: ["R", "Stata", "QGIS"],
        links: [
            { label: "Repository", href: "" },
        ],
    },
    {
        slug: "i-know-a-place",
        title: "I Know a Place",
        start: "Oct 2024",
        end: "May 2025",
        kind: "TEDxCMU Innovation Team Yearly Project",
        cover: null,
        description: [
            "An interactive map where people drop the stories behind places they know. It debuted at the yearly innovation expo, followed by the TEDx yearly event.",
            "Hundreds of audience members dropped their stories on the map and interacted with each other's.",
        ],
        role: "Member, TEDxCMU Innovation Team",
        builtWith: ["Next.js", "JavaScript", "Google Maps/Sheets API"],
        links: [
            { label: "Repository", href: "https://github.com/TEDxCMU/2025_I_Know_A_Place" },
        ],
    },
    {
        slug: "bidirectional-path-tracer",
        title: "Bi-Directional Path Tracer",
        start: "Apr 2025",
        end: "May 2025",
        kind: "Final Project, 15-468 Physics-Based Rendering, CMU",
        cover: null,
        description: [
            "A bidirectional path tracer (BDPT) implemented from scratch in DIRT, a basic teaching renderer.",
            "The tracer is unbiased, and it shines where plain path tracing struggles: scenes lit mostly indirectly, and caustics. The report covers the details.",
        ],
        role: "Individual Project",
        builtWith: ["C++", "DIRT renderer"],
        links: [
            { label: "Report", href: "https://drive.google.com/file/d/1sG_KNv4fF_D7trKpXrYtRqT_kI8qV7Ly/view?usp=drive_link" },
        ],
    },
];
