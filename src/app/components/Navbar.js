// app/components/Navbar.jsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname() || "/";
  const items = [
    { label: "About", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Blogs", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Mobile nav */}
      <nav className="fixed bottom-0 left-0 w-full bg-[hsla(240,1%,17%,0.75)] backdrop-blur-[10px]   rounded-tl-[12px] rounded-tr-[12px] shadow-[var(--shadow-2)] z-[5] md:hidden">
        <ul className="flex justify-center items-center px-[10px]">
          {items.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <li key={href} className="flex-1 text-center">
                <Link
                  href={href}
                  className={`
                    block
                    text-[var(--light-gray)]
                    py-[12px]
                    transition-colors duration-[var(--transition-1)]
                    hover:text-[var(--light-gray-70)]
                    ${
                      isActive
                        ? "border-b-2 border-[var(--orange-yellow-crayola)] text-[var(--orange-yellow-crayola)]"
                        : ""
                    }
                  `}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Desktop nav */}
      <nav className="hidden md:flex justify-between items-center w-full max-w-[1140px] mx-auto px-4 mt-8 mb-4 ">
        {/* Active label on the left */}
        <div className="text-[var(--secondary-text)] text-xl font-semibold">
          {items.find((item) => item.href === pathname)?.label || "About"}
        </div>

        {/* All tabs on the right */}
        <ul className="flex space-x-8">
          {items.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`
                    text-[var(--light-gray)]
                    pb-2
                    transition-colors duration-[var(--transition-1)]
                    hover:text-[var(--light-gray-70)]
                    ${
                      isActive
                        ? "border-b-2 border-[var(--orange-yellow-crayola)] text-[var(--orange-yellow-crayola)]"
                        : ""
                    }
                  `}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
