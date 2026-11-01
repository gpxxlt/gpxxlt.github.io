import { Heading } from "./parts";
import styles from "../Overlay.module.css";

function Block({ block }) {
    if (typeof block === "string") return <p className={styles.essay}>{block}</p>;
    if (block.heading) return <h3 className={styles.subhead}>{block.heading}</h3>;
    if (block.quote) return <blockquote className={styles.quote}>{block.quote}</blockquote>;
    return null;
}

export default function WritingView({ item }) {
    return (
        <article className={styles.stack} style={{ gap: 26 }}>
            <header className={styles.header}>
                <p className={styles.byline}>
                    {item.date} · {item.words.toLocaleString("en-US")} words · {item.minutes} min read
                    {item.draft && <span className={styles.draft}>Draft</span>}
                </p>
                <Heading>{item.title}</Heading>
            </header>

            {item.body.map((block, i) => <Block key={i} block={block} />)}
        </article>
    );
}
