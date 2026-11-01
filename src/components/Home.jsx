"use client";

import { useEffect, useState } from "react";
import { about, sections, site } from "@/content";
import { useHashRoute } from "./useHashRoute";
import AboutPane from "./AboutPane";
import SectionPane from "./SectionPane";
import Overlay from "./Overlay";
import styles from "./Home.module.css";

const PIN_KEY = "aboutPinned";

export default function Home() {
    // Pane under the pointer or focus: 0 is About, 1–4 follow `sections`
    const [active, setActive] = useState(null);
    const [pinned, setPinned] = useState(false);
    const [route, closeWindow] = useHashRoute();

    useEffect(() => {
        try {
            setPinned(window.localStorage.getItem(PIN_KEY) === "1");
        } catch {}
    }, []);

    const togglePin = () => {
        const next = !pinned;
        setPinned(next);
        try {
            window.localStorage.setItem(PIN_KEY, next ? "1" : "0");
        } catch {}
    };

    // A route opens a window only if it names a real, enabled section (and item)
    const section = route && sections.find((s) => s.key === route.section && !s.disabled);
    const index = section && route.slug ? section.items.findIndex((it) => it.slug === route.slug) : -1;
    const windowOpen = Boolean(section) && (route.slug === null || index !== -1);

    useEffect(() => {
        if (windowOpen) setActive(null);
    }, [windowOpen]);

    const enter = (i) => () => {
        if (!windowOpen) setActive(i);
    };
    const leave = () => setActive(null);

    return (
        <div className={styles.frame}>
            <div
                className={styles.backdrop}
                style={{ backgroundImage: `url(${site.background})` }}
                aria-hidden="true"
            />

            <nav aria-label="Site" className={styles.panes} onMouseLeave={leave} inert={windowOpen}>
                <AboutPane
                    about={about}
                    open={active === 0 || pinned}
                    pinned={pinned}
                    onTogglePin={togglePin}
                    onEnter={enter(0)}
                    onLeave={leave}
                />
                {sections.map((sec, i) => (
                    <SectionPane
                        key={sec.key}
                        section={sec}
                        open={active === i + 1}
                        onEnter={enter(i + 1)}
                        onLeave={leave}
                    />
                ))}
            </nav>

            {windowOpen && (
                <Overlay section={section} index={index === -1 ? null : index} onClose={closeWindow} />
            )}
        </div>
    );
}
