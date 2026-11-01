import styles from "../Overlay.module.css";

export default function ListView({ section }) {
    return (
        <div className={styles.stack} style={{ gap: 28 }}>
            <h2 className={styles.listTitle}>{section.name}</h2>
            <ul className={styles.rows}>
                {section.items.map((it) => (
                    <li key={it.slug}>
                        <a className={styles.row} href={`#${section.key}/${it.slug}`}>
                            <span className={styles.rowText}>
                                <span className={styles.rowTitle}>{it.title}</span>
                                {it.dates && <span className={styles.rowDates}>{it.dates}</span>}
                            </span>
                            {it.meta && <span className={styles.rowMeta}>{it.meta}</span>}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
