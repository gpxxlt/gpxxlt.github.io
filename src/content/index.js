import { work } from "./work";
import { projects } from "./projects";
import { writing } from "./writing";
import { gallery } from "./gallery";

export { site, about } from "./about";

const WORDS_PER_MINUTE = 220;

function countWords(body) {
    const text = body.map((b) => (typeof b === "string" ? b : b.quote || b.heading || "")).join(" ");
    return text.split(/\s+/).filter(Boolean).length;
}

const dateRange = ({ start, end }) => `${start} – ${end}`;

// The four sections that open as windows. Each item gets a title, and dates or meta, for the lists;
// the full entry is passed to that section's window view. Titles appear exactly as written.
//   disabled — the pane shows "Under construction" and its window can't be opened
export const sections = [
    {
        key: "work",
        num: "02",
        name: "Work",
        allLabel: "All Work",
        items: work.map((w) => ({ ...w, title: `${w.role}, ${w.org}`, dates: dateRange(w) })),
    },
    {
        key: "projects",
        num: "03",
        name: "Projects",
        allLabel: "All Projects",
        items: projects.map((p) => ({ ...p, dates: dateRange(p) })),
    },
    {
        key: "writing",
        num: "04",
        name: "Writing",
        allLabel: "All Writing",
        disabled: true,
        items: writing.map((w) => {
            const words = countWords(w.body);
            return {
                ...w,
                words,
                minutes: Math.max(1, Math.round(words / WORDS_PER_MINUTE)),
                meta: w.draft ? `${w.date} · Draft` : w.date,
            };
        }),
    },
    {
        key: "gallery",
        num: "05",
        name: "Gallery",
        allLabel: "Full Gallery",
        disabled: true,
        items: gallery.map((g) => ({ ...g, meta: g.year })),
    },
];

export const PANE_PREVIEW_COUNT = 3;
