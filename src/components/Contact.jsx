import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { HiArrowRight, HiPaperAirplane } from "react-icons/hi";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Replace the placeholder usernames with your real profile links.
const LINKS = [
  {
    name: "GitHub",
    description: "Browse my code and projects",
    href: "https://github.com/rakib-is-sadi",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    description: "Let's connect professionally",
    href: "https://www.linkedin.com/in/rakibul-sadi-87091b438",
    icon: FaLinkedinIn,
  },
  {
    name: "Instagram",
    description: "Follow along and say hi",
    href: "https://www.instagram.com/rakibul_sadi",
    icon: FaInstagram,
  },
  {
    name: "Facebook",
    description: "Message me anytime",
    href: "https://www.facebook.com/rakibul0sadi",
    icon: FaFacebookF,
  },
];

const FIELD =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-ink outline-none transition placeholder:text-muted focus:border-accent/60 focus:bg-white/10";

export default function Contact() {
  const formRef = useRef(null);
  // idle | sending | success | error
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="flex min-h-[80vh] scroll-mt-24 items-center px-6 py-12"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium tracking-widest text-accent uppercase">
            Contact
          </p>
          <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Let&apos;s work together
          </h2>
          <p className="mt-5 leading-relaxed text-muted sm:text-lg">
            Have a project in mind or just want to say hi? Send a message or
            find me on any of these platforms.
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-5">
          {/* Social links: stretch to match the form height */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            {LINKS.map(({ name, description, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} profile`}
                className="glass group flex flex-1 items-center gap-5 rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:border-accent/40"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-2xl text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-slate-950">
                  <Icon />
                </div>
                <div className="flex-1">
                  <p className="font-semibold">{name}</p>
                  <p className="text-sm text-muted">{description}</p>
                </div>
                <HiArrowRight className="-rotate-45 text-xl text-muted transition duration-300 group-hover:text-accent" />
              </a>
            ))}
          </div>

          {/* Contact form: first on mobile, right side on desktop */}
          <div className="relative isolate order-first lg:order-last lg:col-span-3">
            <div
              aria-hidden="true"
              className="absolute inset-10 -z-10 rounded-full bg-accent/20 blur-3xl"
            />

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass flex h-full flex-col gap-5 rounded-3xl p-8 sm:p-10"
            >
              <div>
                <h3 className="text-xl font-semibold">Send me a message</h3>
                <p className="mt-1 text-sm text-muted">
                  Fill in the form and I&apos;ll reply by email.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className={FIELD}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className={FIELD}
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell me about your project..."
                  className={`${FIELD} min-h-36 flex-1 resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-[15px] font-semibold text-slate-950 shadow-lg shadow-accent/25 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
                <HiPaperAirplane className="rotate-90 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <p role="status" aria-live="polite" className="min-h-5 text-sm">
                {status === "success" && (
                  <span className="text-emerald-400">
                    Thanks! Your message has been sent.
                  </span>
                )}
                {status === "error" && (
                  <span className="text-red-400">
                    Something went wrong. Please try again.
                  </span>
                )}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}