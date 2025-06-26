import { UserIcon } from "@heroicons/react/24/outline";

export const metadata = {
  title: "About • Darshan Raj",
  description: "Learn more about Darshan Raj, MERN stack developer.",
};

export default function AboutMe() {
  return (
    <main className="min-h-[calc(100vh-4rem)] w-full bg-[var(--hero-gradient)] bg-cover bg-center text-primary-text px-4 py-12">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <UserIcon className="h-16 w-16 mb-4 text-primary-text" />
          <h1 className="text-5xl font-raleway font-bold">About Me</h1>
          <p className="mt-2 text-xl uppercase tracking-wider">
            MERN Stack Developer & Freelancer
          </p>
        </div>

        {/* Content */}
        <div className="bg-black/60 rounded-xl p-8 space-y-6">
          <p>
            Hello! I’m <strong>Darshan Raj</strong>, a full-stack developer
            specializing in the MERN (MongoDB, Express.js, React, Node.js)
            stack. I build responsive, accessible web apps with modern tooling,
            and I love turning complex problems into elegant code.
          </p>
          <p>
            Over the past few years I’ve worked on everything from single-page
            React applications to multi-service REST APIs. My focus areas
            include:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Building dynamic user interfaces with React and Next.js</li>
            <li>Designing and consuming RESTful & GraphQL APIs</li>
            <li>Database schema design and performance tuning in MongoDB</li>
            <li>Automated testing and continuous integration</li>
          </ul>
          <p>
            When I’m not coding, I enjoy writing technical articles, exploring
            the latest JavaScript frameworks, and contributing to open-source
            projects on GitHub.
          </p>
          <p>
            Feel free to{" "}
            <a
              href="/contact"
              className="underline hover:text-gray-300 transition"
            >
              get in touch
            </a>{" "}
            if you’d like to collaborate on a project or just say hi!
          </p>
        </div>
      </div>
    </main>
  );
}
