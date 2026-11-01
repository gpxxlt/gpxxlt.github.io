"use client";

import { useEffect, useRef } from "react";
import ListView from "./windows/ListView";
import WorkView from "./windows/WorkView";
import ProjectView from "./windows/ProjectView";
import WritingView from "./windows/WritingView";
import GalleryView from "./windows/GalleryView";
import styles from "./Overlay.module.css";

const VIEWS = {
    work: WorkView,
    projects: ProjectView,
    writing: WritingView,
    gallery: GalleryView,
};

// A window over the panes: a section's full list (index null) or one of its items.
export default function Overlay({ section, index, onClose }) {
    const closeRef = useRef(null);
    const windowRef = useRef(null);

    const items = section.items;
    const isItem = index !== null;
    const item = isItem ? items[index] : null;
    const prev = isItem ? items[(index - 1 + items.length) % items.length] : null;
    const next = isItem ? items[(index + 1) % items.length] : null;
    const View = VIEWS[section.key];

    useEffect(() => {
        closeRef.current?.focus({ preventScroll: true });
        if (windowRef.current) windowRef.current.scrollTop = 0;
    }, [section.key, index]);

    // Keyboard users land back on the section's pane title; pointer users keep their place.
    const close = (fromKeyboard) => {
        onClose();
        if (fromKeyboard) {
            requestAnimationFrame(() => {
                document.querySelector(`nav a[href="#${section.key}"]`)?.focus();
            });
        }
    };

    return (
        <div
            className={styles.overlay}
            role="dialog"
            aria-modal="true"
            aria-label={isItem ? `${section.name}: ${item.title}` : section.name}
            onKeyDown={(e) => {
                if (e.key === "Escape") close(true);
            }}
        >
            <div className={styles.scrim} onClick={() => close(false)} />

            <div ref={windowRef} className={styles.window}>
                <div className={styles.top}>
                    {isItem ? (
                        <a className={styles.back} href={`#${section.key}`}>
                            <span aria-hidden="true">←</span>
                            {section.allLabel}
                        </a>
                    ) : (
                        <span className={styles.crumb}>
                            <span className={styles.crumbNum}>{section.num}</span>
                            <span className={styles.crumbName}>{section.name}</span>
                        </span>
                    )}
                    <button
                        ref={closeRef}
                        type="button"
                        className={styles.close}
                        onClick={(e) => close(e.detail === 0)}
                        aria-label="Close"
                    >
                        <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none"
                             stroke="currentColor" strokeWidth="1.3">
                            <path d="M2 2l10 10M12 2L2 12" />
                        </svg>
                    </button>
                </div>

                {isItem ? <View item={item} /> : <ListView section={section} />}

                {isItem && items.length > 1 && (
                    <nav aria-label={`More ${section.name.toLowerCase()}`} className={styles.pager}>
                        <a href={`#${section.key}/${prev.slug}`}>
                            <span>← Previous</span>
                            <span className={styles.pagerHint}>{prev.title}</span>
                        </a>
                        <a href={`#${section.key}/${next.slug}`} className={styles.pagerNext}>
                            <span>Next →</span>
                            <span className={styles.pagerHint}>{next.title}</span>
                        </a>
                    </nav>
                )}
            </div>
        </div>
    );
}
