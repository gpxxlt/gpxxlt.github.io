import { Heading, Label } from "./parts";
import styles from "../Overlay.module.css";

export default function WorkView({ item }) {
    return (
        <article className={styles.stack}>
            <header className={styles.header}>
                <Heading>{item.role}</Heading>
                <p className={styles.byline}>{item.org} · {item.dates}</p>
            </header>

            <p className={styles.prose}>{item.summary}</p>

            <section className={styles.section}>
                <Label>Highlights</Label>
                <ul className={styles.ruled}>
                    {item.highlights.map((h) => <li key={h}>{h}</li>)}
                </ul>
            </section>

            <section className={styles.section}>
                <Label>Tools</Label>
                <p className={styles.tools}>{item.tools.join(" · ")}</p>
            </section>

            {item.story?.length > 0 && (
                <section className={styles.section}>
                    <Label>The longer version</Label>
                    {item.story.map((p) => <p key={p} className={styles.prose}>{p}</p>)}
                </section>
            )}
        </article>
    );
}
