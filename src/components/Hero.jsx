import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-neutral-950 text-white">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/BWzdo650n-g-M9RS/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-28 text-center md:py-36">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-300 ring-1 ring-orange-400/30">
          <span className="h-2 w-2 rounded-full bg-orange-400" />
          Innovative IT Solutions
        </span>
        <h1 className="mt-2 bg-gradient-to-r from-white via-orange-100 to-orange-300 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl">
          Modern IT services that scale with your business
        </h1>
        <p className="mt-5 max-w-2xl text-base text-neutral-300 sm:text-lg">
          We design, build, and maintain reliable digital infrastructure. From cloud-native platforms to secure enterprise applications — we help you ship fast and run with confidence.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:translate-y-[-1px] hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-neutral-950"
          >
            Get Started
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-base font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
}
