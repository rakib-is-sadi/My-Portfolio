import { HiArrowRight } from "react-icons/hi";
import profileImg from "../assets/profile.png";

export default function Home() {
  return (
    <section
      id="home"
      className="flex min-h-screen scroll-mt-24 items-center justify-center px-6 pt-28 pb-0"
    >
      <div className="glass mx-auto grid w-full max-w-6xl items-center gap-10 rounded-3xl p-8 sm:p-12 md:grid-cols-2">
        {/* Text content */}
        <div className="text-center md:text-left">
          <p className="mb-4 text-sm font-medium tracking-widest text-accent uppercase">
            Frontend Developer
          </p>

          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="text-accent">Rakibul Sadi</span>
          </h1>

          <p className="mt-6 font-normal text-muted sm:text-lg">
            I build clean, responsive web interfaces with React and Tailwind
            CSS.
          </p>

          <div className="mt-8 flex justify-center md:justify-start">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-[15px] font-semibold text-slate-950 transition hover:brightness-110"
            >
              Contact Me
              <HiArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Portrait: first on mobile, right side on desktop */}
        <div className="relative isolate order-first mx-auto w-full max-w-xs md:order-last md:max-w-sm">
          <div
            aria-hidden="true"
            className="absolute inset-4 -z-10 rounded-3xl bg-accent/30 blur-2xl"
          />
          <img
            src={profileImg}
            alt="Rakibul Sadi"
            className="aspect-[4/5] w-full rounded-3xl border border-white/10 object-cover shadow-lg shadow-black/30"
          />
        </div>
      </div>
    </section>
  );
}