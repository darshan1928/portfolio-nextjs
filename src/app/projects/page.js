// app/contact/page.js
"use client";

import { WrenchIcon } from "@heroicons/react/24/outline";

// export const metadata = {
//   title: "Blog • Under Construction",
//   description: "Our blog is coming soon!",
// };

export default function ProjectPage() {
  return (
    <div className="h-full w-full flex justify-center items-center ">
      <div className="text-center space-y-4 h-full w-full">
        <WrenchIcon className="h-16 w-16 text-white mx-auto" />
        <h1 className="text-4xl  font-bold text-white">Under Construction</h1>
        <p className="text-lg text-white">
          Our Project is coming soon. Stay tuned!
        </p>
      </div>
    </div>
  );
}
