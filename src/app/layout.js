// app/layout.js
import "./globals.css";
import Providers from "./components/Providers";
import Navbar from "./components/Navbar";
import { Poppins } from "next/font/google";
import DeveloperCard from "./components/DeveloperCard";

const poppins = Poppins({
  variable: "--font-poppins",
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
      className={`dark ${poppins.variable}`}
    >
      <body className="antialiased ">
        <Providers>
          <div className="bg-[var(--primary-bg)] min-h-screen md:h-screen w-full md:w-screen">
            <div className="box-border max-w-[1140px] md:h-full mx-auto pt-12  px-4 flex flex-col gap-6 md:flex-row md:gap-6 md:px-0">
              <DeveloperCard />

              <div
                className="w-full md:h-full md:flex-1 bg-[var(--secondary-bg)] rounded-tl-4xl rounded-tr-4xl
                     flex flex-col"
              >
                <Navbar />

                <div className="flex-1 overflow-y-auto p-4">{children}</div>
              </div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
