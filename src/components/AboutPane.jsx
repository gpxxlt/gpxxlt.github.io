"use client";

import { useEffect, useState } from "react";
import Pane from "./Pane";
import styles from "./Home.module.css";

const COPIED_MS = 2000;

function CopyButton({ label, text }) {
    const [status, setStatus] = useState("idle");

    useEffect(() => {
        if (status !== "copied") return;
        const timer = setTimeout(() => setStatus("idle"), COPIED_MS);
        return () => clearTimeout(timer);
    }, [status]);

    async function copy() {
        try {
            await navigator.clipboard.writeText(text);
            setStatus("copied");
        } catch {
            // Clipboard refused: show the address so it can be selected by hand
            setStatus("failed");
        }
    }

    return (
        <button type="button" className={styles.copy} onClick={copy} title={`Copy ${text}`}>
            <span aria-live="polite">
                {status === "copied" ? "Copied" : status === "failed" ? text : label}
            </span>
        </button>
    );
}

export default function AboutPane({ about, open, pinned, onTogglePin, onEnter, onLeave }) {
    const pinLabel = pinned ? "Unpin About" : "Pin About open";

    return (
        <Pane area="about" open={open} onEnter={onEnter} onLeave={onLeave}>
            <button
                type="button"
                className={pinned ? `${styles.pin} ${styles.pinned}` : styles.pin}
                onClick={onTogglePin}
                aria-pressed={pinned}
                aria-label={pinLabel}
                title={pinLabel}
            >
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 3h6l-1 6 4 4H6l4-4-1-6z" fill={pinned ? "currentColor" : "none"} />
                    <path d="M12 13v8" />
                </svg>
            </button>

            {/* Touch screens have no hover, so tapping the title opens the pane */}
            <button type="button" className={styles.title} onClick={onEnter} aria-expanded={open}>
                <span className={styles.num}>01</span>
                <span className={styles.name}>About</span>
            </button>

            <div className={`${styles.reveal} ${styles.about}`}>
                <section className={styles.group}>
                    <span className={styles.label}>Currently</span>
                    <p className={styles.text}>{about.currently}</p>
                </section>

                <section className={styles.group}>
                    <div className={styles.cvHead}>
                        <span className={styles.label}>CV</span>
                        {about.cvLink && (
                            <a href={about.cvLink} target="_blank" rel="noopener noreferrer">View CV ↗</a>
                        )}
                    </div>
                    <ul className={styles.cv}>
                        {about.cv.map((row) => (
                            <li key={row.text}>
                                <span className={styles.cvYears}>{row.years}</span>
                                <span>{row.text}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className={styles.group}>
                    <span className={styles.label}>Contact</span>
                    <div className={styles.contact}>
                        {about.contact.map((c) => (
                            c.copy
                                ? <CopyButton key={c.label} label={c.label} text={c.copy} />
                                : <a key={c.label} href={c.href}>{c.label}</a>
                        ))}
                    </div>
                </section>
            </div>
        </Pane>
    );
}
