"use client";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

// export const metadata = {
//   title: "Contact • Darshan Raj",
//   description: "Get in touch with Darshan Raj",
// };

export default function ContactPage() {
  const contacts = [
    {
      href: "mailto:youremail@example.com",
      title: "Email",
      description: "Shoot me a message anytime!",
      Icon: EnvelopeIcon,
    },
    {
      href: "https://twitter.com/your_twitter",
      title: "Twitter",
      description: "Tweet at me or send me a DM.",
      Icon: FaTwitter,
    },
    {
      href: "https://linkedin.com/in/your_linkedin",
      title: "LinkedIn",
      description: "Let’s connect professionally.",
      Icon: FaLinkedin,
    },
    {
      href: "https://github.com/your_github",
      title: "GitHub",
      description: "Check out my open-source work.",
      Icon: FaGithub,
    },
  ];

  return (
    <section
      id="contact"
      className="
    w-full
    
    text-[var(--primary-text)]
    py-6
  "
    >
      <div className="max-w-[1140px] mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-5 text-start leading-tight">
          <span className="text-[var(--secondary-text)]">Let’s Create</span>
          <br />
          <span className="text-[var(--secondary-text)]">Something&nbsp;</span>
          <span className="text-[var(--primary-text)]">Amazing</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {contacts.map(({ href, title, description, Icon }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="
            group
            bg-[var(--secondary-bg)]
            border border-[var(--secondary-bg-two)]
            rounded-2xl
            p-6
            flex flex-col
            hover:bg-[var(--secondary-bg-two)]
            transition-colors duration-300
            shadow-md
            hover:shadow-lg
          "
            >
              <div className="text-[var(--primary-text)] mb-4">
                <Icon className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-semibold mb-2 text-[var(--secondary-text)]">
                {title}
              </h2>
              <p className="flex-1 text-[var(--secondary-text)] mb-4">
                {description}
              </p>
              <span className="text-sm text-[var(--secondary-text)] underline self-start transition-colors duration-300 group-hover:text-[var(--primary-text)]">
                {href.replace(/^.*?:\/\//, "")}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
