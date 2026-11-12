import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// Keep these in sync with the links in Contact.jsx.
const SOCIALS = [
  { name: "GitHub", href: "https://github.com/rakib-is-sadi", icon: FaGithub },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rakibul-sadi-87091b438",
    icon: FaLinkedinIn,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/rakibul_sadi",
    icon: FaInstagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/rakibul0sadi",
    icon: FaFacebookF,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/8801913095300",
    icon: FaWhatsapp,
  },
];

export default function Footer() {
  return (
    <footer className="px-6 pb-8">
      <div className="glass mx-auto w-full max-w-6xl rounded-3xl px-8 py-10 sm:px-10">
        {/* Brand and navigation */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <a href="#home" className="text-xl font-semibold">
              Rakibul <span className="text-accent">Sadi</span>
            </a>
            <p className="mt-2 max-w-xs text-sm text-muted">
              Frontend developer building clean, responsive web interfaces.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm font-medium text-muted transition-colors duration-200 hover:text-accent"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="my-8 h-px bg-white/10" />

        {/* Copyright and socials */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Rakibul Sadi. All rights
            reserved.
          </p>

          <ul className="flex gap-3">
            {SOCIALS.map(({ name, href, icon: Icon }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:text-accent"
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}