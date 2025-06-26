"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  NewspaperIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/about", icon: UserIcon, label: "About" },
    { href: "/services", icon: CodeBracketIcon, label: "Services" },
    { href: "/projects", icon: BriefcaseIcon, label: "Projects" },
    { href: "/blog", icon: NewspaperIcon, label: "Blog" },
    {
      href: "/contact",
      icon: ChatBubbleBottomCenterTextIcon,
      label: "Contact",
    },
  ];

  return (
    <>
      {/* Desktop / Tablet nav */}
      <header
        className={`hidden md:block w-full h-16 bg-primary-bg-gradient
                    transition-shadow ${scrolled ? "shadow-md" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <div className="font-bold text-xl text-primary-text">
            <Link href="/">Logo</Link>
          </div>
          <div className="flex items-center space-x-8">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-3 py-2 font-medium rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 ${
                  pathname === href ? "underline" : ""
                }`}
              >
                {label}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Mobile: top‐right theme toggle only */}
      <div className="md:hidden fixed top-0 right-0 p-4 z-50">
        <ThemeToggle />
      </div>

      {/* Mobile nav dock (bottom) */}
      <nav
        className="md:hidden fixed bottom-0 left-0 right-0
                   bg-primary-bg-gradient
                   rounded-t-2xl shadow-xl
                   safe-area-inset-x-0 safe-area-inset-bottom-0
                   flex justify-around items-center
                   py-2"
      >
        {links.map(({ href, icon: Icon, label }) => (
          <Link
            key={href}
            href={href}
            className={`flex flex-col items-center justify-center text-primary-text'
                        ${
                          pathname === href
                            ? "text-blue-600 dark:text-blue-400"
                            : "hover:text-blue-500 dark:hover:text-blue-300"
                        }
                        transition`}
            aria-label={label}
          >
            <Icon className="h-6 w-6 mb-1" />
            <span className="text-xs">{label}</span>
          </Link>
        ))}
      </nav>
    </>
  );
}
