import { Heading, Picture } from "./parts";
import styles from "../Overlay.module.css";

export default function GalleryView({ item }) {
    return (
        <article className={styles.stack} style={{ gap: 28 }}>
            <header className={styles.header}>
                <Heading>{item.title}</Heading>
                <p className={styles.byline}>{item.year} · {item.place}</p>
            </header>

            <p className={styles.prose}>{item.intro}</p>

            <div className={styles.frames}>
                {item.frames.map((f, i) => (
                    <figure key={i} className={styles.figure}>
                        <Picture src={f.src} alt={f.caption} ratio={f.ratio} label={`[Image ${i + 1}]`} />
                        <figcaption>{f.caption}</figcaption>
                    </figure>
                ))}
            </div>
        </article>
    );
}
