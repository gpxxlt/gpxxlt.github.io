"use client";

import { useCallback, useEffect, useState } from "react";

// Windows live in the URL hash so each one has its own link and the back button closes it:
//   #projects                 → the Projects list
//   #projects/i-know-a-place  → one project
function parse(hash) {
    const [section, slug] = decodeURIComponent(hash.replace(/^#/, "")).split("/");
    return section ? { section, slug: slug || null } : null;
}

export function useHashRoute() {
    const [route, setRoute] = useState(null);

    useEffect(() => {
        const sync = () => setRoute(parse(window.location.hash));
        sync();
        window.addEventListener("hashchange", sync);
        window.addEventListener("popstate", sync);
        return () => {
            window.removeEventListener("hashchange", sync);
            window.removeEventListener("popstate", sync);
        };
    }, []);

    // Clears the hash without leaving a bare "#" in the address bar.
    const clear = useCallback(() => {
        window.history.pushState(null, "", window.location.pathname + window.location.search);
        setRoute(null);
    }, []);

    return [route, clear];
}
