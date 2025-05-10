import localFont from 'next/font/local'
import "./globals.css";

const Commissioner = localFont({
    src: '../fonts/Commissioner/Commissioner.ttf'
})

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={Commissioner.className}>
              <body>
                    {children}
              </body>
        </html>
    );
}
