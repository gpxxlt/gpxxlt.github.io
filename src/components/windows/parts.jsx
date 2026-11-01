import styles from "../Overlay.module.css";

// A dashed box standing in for an image that hasn't been added yet
export function Placeholder({ label, ratio }) {
    return (
        <div className={styles.placeholder} style={{ aspectRatio: ratio }}>
            {label}
        </div>
    );
}

export function Picture({ src, alt, ratio, label }) {
    if (!src) return <Placeholder label={label} ratio={ratio} />;
    return <img className={styles.picture} src={src} alt={alt} style={{ aspectRatio: ratio }} loading="lazy" />;
}

// Renders a link when there is somewhere to go, plain text otherwise
export function MaybeLink({ href, children }) {
    if (!href) return <span>{children}</span>;
    const external = /^https?:/.test(href);
    return (
        <a href={href} {...(external && { target: "_blank", rel: "noopener noreferrer" })}>
            {children}
        </a>
    );
}

export function Heading({ children }) {
    return <h2 className={styles.heading}>{children}</h2>;
}

export function Label({ children }) {
    return <h3 className={styles.label}>{children}</h3>;
}
