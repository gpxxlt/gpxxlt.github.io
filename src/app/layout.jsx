import { Fraunces, Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import { site } from "@/content";
import "./globals.css";

// Variable fonts: every weight is available. globals.css maps them to --font-serif/soft-serif/sans/mono.
const playfair = Playfair_Display({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-playfair",
});

const fraunces = Fraunces({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-fraunces",
});

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-jetbrains-mono",
});

export const metadata = {
    title: site.name,
    description: site.description,
};

export const viewport = {
    themeColor: "#090B10",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${playfair.variable} ${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
            <body>{children}</body>
        </html>
    );
}
