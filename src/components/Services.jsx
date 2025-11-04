import { Code2, Cloud, Server, Wrench } from 'lucide-react';

const services = [
  {
    icon: Cloud,
    title: 'Cloud Engineering',
    desc: 'Design, migrate, and optimize on AWS, Azure, or GCP with cost, reliability, and security in mind.'
  },
  {
    icon: Server,
    title: 'Platform & DevOps',
    desc: 'Infrastructure as code, CI/CD, container platforms, monitoring, and SRE best practices.'
  },
  {
    icon: Code2,
    title: 'App Development',
    desc: 'Modern web and API development with performance, maintainability, and DX at the core.'
  },
  {
    icon: Wrench,
    title: 'Support & Managed Services',
    desc: '24/7 monitoring, incident response, and continuous improvements to keep systems healthy.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">What we do</h2>
            <p className="mt-3 max-w-2xl text-neutral-400">
              End-to-end capabilities to accelerate your digital roadmap.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600"
          >
            Book a consultation
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
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
