import { Heading, MaybeLink, Picture } from "./parts";
import styles from "../Overlay.module.css";

export default function ProjectView({ item }) {
    return (
        <article className={styles.stack}>
            <header className={styles.header}>
                <Heading>{item.title}</Heading>
                <p className={styles.byline}>{item.dates} · {item.kind}</p>
            </header>

            {item.cover && <Picture src={item.cover} alt={item.title} ratio="16 / 9" />}

            {item.description.map((p) => <p key={p} className={styles.prose}>{p}</p>)}

            <dl className={styles.facts}>
                <dt>Role</dt>
                <dd>{item.role}</dd>
                <dt>Built with</dt>
                <dd>{item.builtWith.join(" · ")}</dd>
                {item.links.length > 0 && (
                    <>
                        <dt>Links</dt>
                        <dd className={styles.links}>
                            {item.links.map((l) => (
                                <MaybeLink key={l.label} href={l.href}>{l.label}</MaybeLink>
                            ))}
                        </dd>
                    </>
                )}
            </dl>
        </article>
    );
}
