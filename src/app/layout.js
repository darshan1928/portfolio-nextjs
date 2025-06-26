// app/layout.js
import "./globals.css";
import Providers from "./components/Providers";
import Navbar from "./components/Navbar";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Darshan Raj • Portfolio",
  description: "Full-stack developer portfolio showcasing projects and blog.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark ${raleway.variable}`}
    >
      <body className="antialiased">
        <Providers>
          {/* Navbar + bottom dock (mobile) */}
          <Navbar />

          {/* Page content */}
          <div>
            {/* push content below the 4rem navbar */}
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
