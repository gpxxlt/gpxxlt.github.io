// Photo series. Put images under public/images/gallery/<series-slug>/.
//   frames — { src, ratio, caption }; leave src empty to show a placeholder of that shape

export const gallery = [
    {
        slug: "series-one",
        title: "[Series or Album]",
        year: "[Year]",
        place: "[Place or medium]",
        intro: "[A line about the series.]",
        frames: [
            { src: "", ratio: "4 / 5", caption: "[Caption]" },
            { src: "", ratio: "3 / 2", caption: "[Caption]" },
            { src: "", ratio: "4 / 5", caption: "[Caption]" },
            { src: "", ratio: "3 / 2", caption: "[Caption]" },
            { src: "", ratio: "1 / 1", caption: "[Caption]" },
            { src: "", ratio: "4 / 5", caption: "[Caption]" },
        ],
    },
    {
        slug: "series-two",
        title: "[Series or Album]",
        year: "[Year]",
        place: "[Place or medium]",
        intro: "[A line about the series.]",
        frames: [
            { src: "", ratio: "3 / 2", caption: "[Caption]" },
            { src: "", ratio: "3 / 2", caption: "[Caption]" },
            { src: "", ratio: "4 / 5", caption: "[Caption]" },
        ],
    },
];
