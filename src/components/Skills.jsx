import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiFramer,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";

// To add a new skill, add one object to this array.
const SKILLS = [
  {
    name: "HTML",
    icon: FaHtml5,
    description: "Semantic, accessible markup that gives every page a solid structure.",
  },
  {
    name: "CSS",
    icon: FaCss3Alt,
    description: "Responsive layouts with Flexbox and Grid, plus polished visual styling.",
  },
  {
    name: "JavaScript",
    icon: FaJs,
    description: "DOM manipulation, async code and core language fundamentals.",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    description: "Fast, consistent UI styling with utility classes and custom themes.",
  },
  {
    name: "React",
    icon: FaReact,
    description: "Component-based interfaces with hooks and clean state handling.",
  },
  {
    name: "Framer Motion",
    icon: SiFramer,
    description: "Smooth, declarative animations and transitions for React apps.",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    description: "Type-safe JavaScript for more reliable and maintainable code.",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    description: "Production-ready React apps with routing and server rendering.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-6 pt-10 pb-12">
      <div className="mx-auto w-full max-w-6xl">
        {/* Section heading */}
        <div className="text-center">
          <p className="mb-3 text-sm font-medium tracking-widest text-accent uppercase">
            What I work with
          </p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Skills</h2>
        </div>

        {/* Skill cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map(({ name, description, icon: Icon }) => (
            <article
              key={name}
              className="glass rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-2xl text-accent">
                <Icon />
              </div>

              <h3 className="mt-5 text-lg font-semibold">{name}</h3>
              <p className="mt-2 text-sm text-muted">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}