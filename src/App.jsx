import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 text-white">
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-neutral-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-gradient-to-br from-orange-400 to-orange-600" />
            <span className="text-sm font-semibold tracking-wide text-white">Orion IT</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-neutral-200 sm:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#contact" className="rounded-lg bg-white/5 px-3 py-1.5 text-white/90 ring-1 ring-white/10 hover:bg-white/10">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Services />
        <CTA />
      </main>

      <footer className="border-t border-white/10 bg-neutral-950 py-8 text-neutral-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-sm">© {new Date().getFullYear()} Orion IT. All rights reserved.</p>
          <div className="text-xs">
            Built with a modern, accessible, and performant stack.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
