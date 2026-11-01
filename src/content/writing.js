// Essays and notes, newest first. The first three show on the home pane.
//   draft   — true shows a "Draft" tag next to the date; remove it once the piece is yours
//   body    — a string is a paragraph; { heading } is a subheading; { quote } is a pull quote.
//             Headings and quotes are optional: a body of plain paragraphs is fine.
// Word count and reading time are worked out from the body.
//
// This section is off for now: remove `disabled` from it in index.js once there are real pieces.
// The entry below only shows the format; its text is a generated sample, not a real article.

export const writing = [
    // {
    //     slug: "tracing-light-from-both-ends",
    //     title: "Tracing Light from Both Ends",
    //     date: "[Date]",
    //     draft: true,
    //     body: [
    //         "A path tracer usually works backwards: it follows rays from the camera into the scene and hopes they eventually reach a light. In most scenes that works. In some it almost never does.",
    //         { heading: "Where Camera Paths Fail" },
    //         "Think of a lamp hidden behind a door that is barely open, or sunlight focused through a glass onto a table. The light that matters arrives along paths that a ray from the camera is very unlikely to find by chance. The image stays noisy no matter how long you wait.",
    //         "Bidirectional path tracing builds two paths at once: one from the camera and one from the light. It then tries connecting every vertex of one to every vertex of the other. Each connection is a different way of sampling the same light transport.",
    //         { quote: "Instead of guessing which strategy is best, you use all of them and let the weights decide." },
    //         "Multiple importance sampling weights each strategy by how well it samples that particular path, so the estimator stays unbiased while the noise drops where camera-only tracing struggles.",
    //         "I implemented this from scratch in DIRT for 15-468, Physics-Based Rendering at CMU. [What surprised you, what broke, and a render or two.]",
    //     ],
    // },
];
