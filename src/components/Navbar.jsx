import { useEffect, useRef, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

// Add new links here and the navbar updates automatically.
// Each href must match the id of a section on the page.
const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SCROLL_THRESHOLD = 6;
const TOP_OFFSET = 80;

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const lastScrollY = useRef(0);

  // Hide on scroll down, reveal on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      if (Math.abs(delta) < SCROLL_THRESHOLD) return;

      if (currentY < TOP_OFFSET) {
        setIsVisible(true);
      } else if (delta > 0) {
        setIsVisible(false);
        setMenuOpen(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track which section is currently in the middle of the viewport
  useEffect(() => {
    const sections = NAV_LINKS.map(({ href }) =>
      document.querySelector(href)
    ).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const linkState = (id) =>
    activeId === id
      ? "bg-accent/15 text-accent ring-1 ring-inset ring-accent/30"
      : "text-muted hover:bg-white/10 hover:text-ink";

  return (
    <header
      className={`fixed inset-x-0 top-4 z-50 flex justify-center px-4 transition-transform duration-300 ease-out ${isVisible ? "translate-y-0" : "-translate-y-[200%]"
        }`}
    >
      {/* Desktop navbar */}
      <nav
        aria-label="Primary"
        className="hidden items-center gap-2 rounded-full border border-white/10 bg-surface/60 p-2 shadow-lg shadow-black/30 backdrop-blur-xl md:flex"
      >
        {NAV_LINKS.map(({ label, href }) => {
          const id = href.slice(1);
          return (
            <a
              key={href}
              href={href}
              aria-current={activeId === id ? "page" : undefined}
              className={`rounded-full px-7 py-2.5 text-[15px] font-medium transition-colors duration-200 ${linkState(
                id
              )}`}
            >
              {label}
            </a>
          );
        })}
      </nav>

      {/* Mobile navbar */}
      <nav
        aria-label="Primary mobile"
        className="relative w-full max-w-sm md:hidden"
      >
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-surface/60 py-2 pr-2 pl-6 shadow-lg shadow-black/30 backdrop-blur-xl">
          <a href="#home" className="text-[15px] font-semibold text-ink">
            Sadi
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-11 w-11 items-center justify-center rounded-full text-2xl text-ink transition-colors hover:bg-white/10"
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        <ul
          className={`absolute inset-x-0 top-full mt-3 flex flex-col gap-2 rounded-3xl border border-white/10 bg-surface/80 p-3 shadow-lg shadow-black/30 backdrop-blur-xl transition-all duration-200 ${menuOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
            }`}
        >
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.slice(1);
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={activeId === id ? "page" : undefined}
                  className={`block rounded-full py-3 text-center text-[15px] font-medium transition-colors duration-200 ${linkState(
                    id
                  )}`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}