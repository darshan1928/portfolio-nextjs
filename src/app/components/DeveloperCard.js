// app/components/DeveloperCard.jsx
"use client";
import "../globals.css";
import { useState } from "react";
import Image from "next/image";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiPhone, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

export default function DeveloperCard() {
  const [expanded, setExpanded] = useState(false);

  const contacts = [
    { label: "Email", icon: FiMail, value: "you@example.com" },
    { label: "Phone", icon: FiPhone, value: "+1 234 567 8901" },
    { label: "Location", icon: GoLocation, value: "Kerala, India" },
  ];

  return (
    <div
      className={`
    w-full md:basis-1/4
    p-2 md:p-6
    bg-[var(--secondary-bg)] rounded-4xl overflow-hidden
    md:h-[95%]
    flex flex-col
  `}
    >
      {/** HEADER (always visible) **/}
      <div className="flex items-center justify-between md:flex-col md:items-center md:justify-start md:space-y-4">
        <div className="flex items-center space-x-3 md:flex-col md:space-x-0 md:space-y-2 md:items-center">
          <div className="w-16 h-16 md:w-32 md:h-32 rounded-full overflow-hidden bg-[var(--secondary-bg-two)]">
            <Image
              src="https://via.placeholder.com/150"
              alt="Avatar"
              width={128}
              height={128}
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="flex flex-col text-center md:gap-2">
            <h2 className="font-bold text-lg md:text-2xl text-[var(--secondary-text)]">
              Darshan Raj
            </h2>
            <span
              className="
    inline-block
    md:bg-[var(--secondary-bg-two)]
    text-[var(--secondary-text)]
    text-sm md:text-base
    font-medium
    md:px-5 py-1
    rounded-full
  "
            >
              MERN Stack Developer
            </span>
          </div>
        </div>
        {/** toggle only on mobile */}
        <button
          onClick={() => setExpanded((x) => !x)}
          className="md:hidden p-2 text-xl text-[var(--secondary-text)]"
          aria-label={expanded ? "Collapse" : "Expand"}
        >
          {expanded ? <FiChevronUp /> : <FiChevronDown />}
        </button>
      </div>

      {/** DETAILS: mobile-only when expanded, always on md+ */}
      <div
        className={`
          mt-4 flex-1 flex flex-col
          ${expanded ? "block" : "hidden"} 
          md:block
        `}
      >
        {/* Divider */}
        <hr className="w-full border-t-[3px] border-[var(--secondary-bg-two)]" />

        {/* Contact info */}
        <div className="mt-4 flex flex-col space-y-6 text-[var(--secondary-text)] text-sm md:text-sm">
          {contacts.map(({ label, icon: Icon, value }) => (
            <div key={label} className="flex items-start space-x-3">
              <div className="icon-container w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center">
                <Icon className="text-[var(--primary-text)] text-2xl" />
              </div>

              <div className="flex flex-col">
                <span className="text-xs font-medium text-[var(--secondary-text)]">
                  {label}
                </span>
                <span>{value}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Social Icons */}
        <div className="mt-6 flex justify-center space-x-4 text-2xl text-[var(--secondary-text)]">
          <a href="#" className="hover:text-[var(--primary-text)]">
            <FaLinkedin />
          </a>
          <a href="#" className="hover:text-[var(--primary-text)]">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-[var(--primary-text)]">
            <FaGithub />
          </a>
        </div>

        {/* Spacer */}
        <div className="flex-1 " />

        {/* Button */}
        <button
          className="
          w-full
            mt-6
            bg-[var(--primary-text)]
            text-[var(--secondary-bg-two)]
            px-6 py-2 rounded-full
            hover:opacity-90 transition
          "
        >
          Let’s Talk
        </button>

        {/* Divider */}
        <div className="mt-8">
          <hr className="w-full border-t-[3px] border-[var(--secondary-bg-two)]" />
          <div className="mt-4 text-xs text-center text-[var(--secondary-text)]">
            &copy; {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
