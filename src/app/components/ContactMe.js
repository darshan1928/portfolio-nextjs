import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Navbar from "app/components/Navbar";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export const metadata = {
  title: "Contact • Darshan Raj",
  description: "Get in touch with Darshan Raj",
};

export const ContactMe = () => {
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
        h-[calc(100vh-4rem)] w-full
        bg-primary-bg-gradient bg-cover bg-center
        text-primary-text
        py-12
       
      "
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl  font-bold mb-8 text-center">Let’s Connect</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {contacts.map(({ href, title, description, Icon }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="
                
                bg-black/60 
                rounded-xl 
                p-6 
                flex flex-col 
                items-start 
                space-y-3
                hover:bg-black/70 
                transition
              "
            >
              <Icon className="h-8 w-8 text-primary-text" />
              <h2 className="text-2xl font-semibold">{title}</h2>
              <p className="text-base">{description}</p>
              <span className="mt-auto text-sm underline">
                {href.replace(/^.*?:\/\//, "")}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
