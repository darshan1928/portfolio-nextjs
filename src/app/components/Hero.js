export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center
                 h-[calc(100vh-4rem)] w-full
                 bg-primary-bg-gradient bg-cover bg-center text-primary-text"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-center px-4">
        <h1 className="font-raleway text-5xl sm:text-6xl md:text-7xl font-bold">
          Darshan Raj
        </h1>
        <p className="mt-4 text-xl sm:text-2xl uppercase tracking-wider">
          MERN Stack Developer
        </p>
        <p className="mt-2 text-lg sm:text-xl text-primary-text">
          Available for Freelance
        </p>
        <a
          href="#contact"
          className="mt-8 inline-block rounded-md border-2 border-white
                     px-6 py-3 text-base font-medium
                     hover:bg-white hover:text-black transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
