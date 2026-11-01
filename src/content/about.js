// Site-wide info and the About pane.
// Anything in [square brackets] is a placeholder waiting for real content.

export const site = {
    name: "Yuepeng Gu's Portfolio Site",
    description: "",
    // Full-bleed photo behind the five panes. Replace the file at public/images/background.jpg.
    background: "/images/background.jpg",
};

export const about = {
    currently: "I'm pursuing a master's degree at CMU. I have been a generalist in computer science, with past experience including software development, testing, and computer graphics. Now, I'm landing my focus on AI infra.",

    // Google Drive share link to the CV. "View CV" stays hidden while this is empty.
    cvLink: "https://drive.google.com/file/d/1BKfeTCMpX-elaD_KhqXKqm5Ra0Pc4YQO/view?usp=sharing",

    cv: [
        { years: "2026-2027", text: "M.S. Computer Science, Carnegie Mellon University" },
        { years: "2022-2026", text: "B.S. Computer Science, Carnegie Mellon University" },
        // { years: "2025", text: "Software Testing Engineer, Synopsys" },
        // { years: "2024", text: "Full Stack Developer, VisionX" },
    ],

    // href opens a link; copy puts the text on the clipboard when clicked.
    contact: [
        { label: "Email", copy: "yuepengg@outlook.com" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/gyp15213/" },
        { label: "GitHub", href: "https://github.com/gpxxlt" },
    ],
};
