import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Min Portfolio",
  description:
    "En portfolio som viser mine arbeider innen design, 3D og utvikling.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased flex flex-col h-screen overflow-hidden`}
      >
        <div className="grow overflow-y-auto">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
