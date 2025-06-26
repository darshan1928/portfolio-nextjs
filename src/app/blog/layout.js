// app/contact/layout.js
export const metadata = {
  title: "Contact • Darshan Raj",
  description: "Get in touch with Darshan Raj",
};

export default function BlogLayout({ children }) {
  return (
    <main className="h-full w-full bg-primary-bg-gradient bg-cover bg-center text-primary-text">
      <div className="container mx-auto px-4 ">{children}</div>
    </main>
  );
}
