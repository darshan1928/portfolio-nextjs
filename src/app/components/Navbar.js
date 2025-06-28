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
                    // py-[12px]
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
      <nav className="hidden md:flex justify-between items-center w-full max-w-[1140px] mx-auto pl-4 mb-4 ">
        {/* Active label on the left */}
        <div
          className={`
            pb-3
    inline-block
    text-[var(--secondary-text)]
    text-3xl font-semibold
    relative
    border-0                   
    after:content-['']
    after:block
    after:absolute
    after:bottom-0
    after:left-0
    after:w-[60%]
    after:border-b-2
    after:border-[var(--primary-text)]
    
  `}
        >
          {items.find((item) => item.href === pathname)?.label || "About"}
        </div>

        {/* Right-side wrapper */}
        <div className="bg-[var(--secondary-bg-two)] rounded-bl-3xl rounded-tr-[32px]">
          <ul className="flex space-x-8 px-6 py-2">
            {items.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`
                inline-block
                transition-colors duration-[var(--transition-1)]
                ${
                  isActive
                    ? "font-semibold text-[var(--primary-text)] border-b-2 border-[var(--primary-text)] pb-1"
                    : "text-[var(--secondary-text)] hover:text-[var(--primary-text)] pb-1"
                }
              `}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}
