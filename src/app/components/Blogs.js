// app/blog/page.js
import { WrenchIcon } from "@heroicons/react/24/outline";

export const metadata = {
  title: "Blog • Under Construction",
  description: "Our blog is coming soon!",
};

export default function Blogs() {
  return (
    <main
      className="
        h-[calc(100vh-4rem)] w-full
        bg-primary-bg-gradient bg-cover bg-center
        flex items-center justify-center
        px-4
      "
    >
      <div className="text-center space-y-4">
        <WrenchIcon className="h-16 w-16 text-primary-text mx-auto" />
        <h1 className="text-4xl  font-bold text-primary-text">
          Under Construction
        </h1>
        <p className="text-lg text-primary-text">
          Our blog is coming soon. Stay tuned!
        </p>
      </div>
    </main>
  );
}
