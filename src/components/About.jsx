import { HiLocationMarker, HiLightningBolt, HiSparkles } from "react-icons/hi";
import aboutImg from "../assets/about.png";

// Quick facts shown inside the story card. Edit or extend freely.
const FACTS = [
  { icon: HiLocationMarker, label: "Location", value: "Bangladesh" },
  { icon: HiLightningBolt, label: "Main stack", value: "React & Tailwind" },
  { icon: HiSparkles, label: "Approach", value: "Self-taught" },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-12">
      <div className="mx-auto grid w-full max-w-6xl items-stretch gap-6 lg:grid-cols-12">
        {/* Portrait */}
        <div className="relative isolate mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute inset-8 -z-10 rounded-full bg-accent/25 blur-3xl"
          />

          <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/40">
            <img
              src={aboutImg}
              alt="Rakibul Sadi"
              className="aspect-[4/5] w-full object-cover object-top saturate-[0.8] lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            />

            {/* Soft fade into the site background */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent"
            />

            {/* Name tag */}
            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-xl">
              <p className="font-semibold">Rakibul Sadi</p>
              <p className="text-sm text-muted">Frontend Developer</p>
            </div>
          </div>
        </div>

        {/* Story */}
        <article className="glass flex flex-col justify-center rounded-3xl p-8 sm:p-10 lg:col-span-7 lg:p-14">
          <p className="flex items-center gap-3 text-sm font-medium tracking-widest text-accent uppercase">
            <span className="h-px w-10 bg-accent" />
            About me
          </p>

          <h2 className="mt-6 text-3xl leading-tight font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Turning designs into{" "}
            <span className="text-accent">fast, polished</span> interfaces
          </h2>

          <div className="mt-6 space-y-4 leading-relaxed text-ink/70 sm:text-lg">
            <p>
              I&apos;m <span className="font-medium text-ink">Rakibul Sadi</span>,
              a self-taught frontend developer from Bangladesh. I build
              responsive interfaces with React and Tailwind CSS.
            </p>
            <p>
              I learn by building real projects, and I care about the details
              that make a site feel polished.
            </p>
          </div>

          {/* Facts */}
          <ul className="mt-10 grid divide-y divide-white/10 border-t border-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {FACTS.map(({ icon: Icon, label, value }) => (
              <li
                key={label}
                className="flex items-start gap-3 py-5 sm:px-5 sm:first:pl-0 sm:last:pr-0"
              >
                <Icon className="mt-1 shrink-0 text-xl text-accent" />
                <div>
                  <p className="text-sm text-muted">{label}</p>
                  <p className="font-medium">{value}</p>
                </div>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}