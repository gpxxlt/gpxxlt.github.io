import { PANE_PREVIEW_COUNT } from "@/content";
import Pane from "./Pane";
import styles from "./Home.module.css";

export default function SectionPane({ section, open, onEnter, onLeave }) {
    const href = `#${section.key}`;

    // A disabled section keeps its pane but has nothing to open yet
    if (section.disabled) {
        return (
            <Pane area={section.key} open={open} onEnter={onEnter} onLeave={onLeave}>
                <span className={`${styles.title} ${styles.static}`}>
                    <span className={styles.num}>{section.num}</span>
                    <span className={styles.name}>{section.name}</span>
                </span>
                <p className={`${styles.reveal} ${styles.notice}`}>Under construction</p>
            </Pane>
        );
    }

    return (
        <Pane area={section.key} open={open} onEnter={onEnter} onLeave={onLeave}>
            <a href={href} className={styles.title}>
                <span className={styles.num}>{section.num}</span>
                <span className={styles.name}>{section.name}</span>
            </a>

            <ul className={`${styles.reveal} ${styles.list}`}>
                {section.items.slice(0, PANE_PREVIEW_COUNT).map((it) => (
                    <li key={it.slug}>
                        <a className={styles.item} href={`${href}/${it.slug}`}>
                            <span className={styles.itemText}>
                                <span>{it.title}</span>
                                {it.dates && <span className={styles.itemDates}>{it.dates}</span>}
                            </span>
                            {it.meta && <span className={styles.meta}>{it.meta}</span>}
                        </a>
                    </li>
                ))}
                <li>
                    <a className={styles.item} href={href}>
                        {section.allLabel}
                        <span aria-hidden="true">→</span>
                    </a>
                </li>
            </ul>
        </Pane>
    );
}
