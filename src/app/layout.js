import localFont from 'next/font/local'
import "./globals.css";
import Header from "@/app/header/header";


const poppins = localFont({
    src: [
        {
            path: '../fonts/Poppins/Poppins-ExtraLight.ttf',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../fonts/Poppins/Poppins-Light.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../fonts/Poppins/Poppins-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../fonts/Poppins/Poppins-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../fonts/Poppins/Poppins-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../fonts/Poppins/Poppins-Italic.ttf',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../fonts/Poppins/Poppins-LightItalic.ttf',
            weight: '300',
            style: 'italic',
        },
    ],
    variable: '--font-poppins'
})


export default function RootLayout({ children }) {
    return (
        <html lang="en" className={poppins.className}>
              <body className="bg-container">
                  {/*<div className="striped-dark-bg" />*/}
                  <div className="geometric-background" />
                  <div className="radial-gradient-bg" />
                  <Header/>
                  {children}
              </body>
        </html>
    );
}
