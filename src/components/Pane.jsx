import styles from "./Home.module.css";

// Shared shell: the photo shows through until the pane opens, then frosts over.
// Children stack bottom-up, so the title comes first and the revealed details sit above it.
export default function Pane({ area, open, onEnter, onLeave, children }) {
    return (
        <div
            className={open ? `${styles.pane} ${styles.open}` : styles.pane}
            data-area={area}
            onMouseEnter={onEnter}
            onFocus={onEnter}
            onBlur={onLeave}
        >
            <div className={styles.shade} aria-hidden="true" />
            <div className={styles.veil} aria-hidden="true" />
            {children}
        </div>
    );
}
