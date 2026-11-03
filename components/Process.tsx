const steps = [
  { n: '01', title: 'Audit', desc: 'We look at your code, extensions and server before quoting, so the estimate fits your store.' },
  { n: '02', title: 'Scope & estimate', desc: 'You get a written scope and a price before any work starts. No hidden costs.' },
  { n: '03', title: 'Build & test', desc: 'Work happens on a staging copy of your store and goes live after you approve it.' },
  { n: '04', title: 'Look after', desc: 'After launch we keep watching: monitoring, patches, and the next improvement.' },
];

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden border-t border-white/5 py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="section-title">
          <span className="accent-underline">How a project runs</span>
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-secondary">Transparent, written scope. No hidden costs.</p>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="bg-bg/20 p-6 rounded-2xl backdrop-blur-sm border border-white/5">
              <div className="font-display text-6xl font-bold leading-none tracking-tighter text-accent/30">{s.n}</div>
              <h4 className="mt-3 font-display text-xl font-semibold">{s.title}</h4>
              <p className="mt-2 text-sm text-secondary">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}