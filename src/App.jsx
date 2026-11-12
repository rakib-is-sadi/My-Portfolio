import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="relative isolate min-h-screen overflow-x-hidden bg-base text-ink">
      {/* Decorative background glow, gives the glass something to blur */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-accent/25 blur-3xl" />
        <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -bottom-32 left-1/4 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />
      </div>

      <Navbar />

      <main>
        <Home />

        <Skills />

        <About />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;