import { Shield, Rocket, Cpu } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Security First',
    desc: 'Enterprise-grade security practices baked into every layer — identity, data, and infrastructure.'
  },
  {
    icon: Rocket,
    title: 'Built for Scale',
    desc: 'Cloud-native architectures designed to handle growth without sacrificing performance.'
  },
  {
    icon: Cpu,
    title: 'Automation Ready',
    desc: 'CI/CD pipelines, infrastructure as code, and observability to move faster with confidence.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Why teams choose us</h2>
          <p className="mt-3 text-neutral-400">
            A modern approach to IT — secure, scalable, and designed for real-world operations.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-orange-500/30 hover:bg-white/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/15 text-orange-300 ring-1 ring-orange-400/30">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-neutral-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
