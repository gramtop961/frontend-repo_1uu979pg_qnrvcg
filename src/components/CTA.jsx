import { ArrowRight, Mail, Phone } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-orange-500/20 via-orange-500/10 to-transparent p-8 backdrop-blur sm:p-12">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-semibold sm:text-3xl">Let’s build something great together</h3>
              <p className="mt-2 max-w-2xl text-neutral-200">
                Tell us about your goals. We’ll map a clear path and assemble the right tools to get you there.
              </p>
              <div className="mt-4 flex flex-col gap-3 text-neutral-300 sm:flex-row">
                <a href="mailto:hello@yourcompany.com" className="inline-flex items-center gap-2">
                  <Mail className="h-4 w-4 text-orange-300" /> hello@yourcompany.com
                </a>
                <span className="hidden sm:inline">•</span>
                <a href="tel:+10000000000" className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4 text-orange-300" /> +1 (000) 000-0000
                </a>
              </div>
            </div>

            <a
              href="#"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow-md transition hover:shadow-lg"
            >
              Start your project
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
