import { Award, BadgeCheck, Leaf, Shield } from 'lucide-react';

const advantages = [
  {
    title: 'Experiență',
    description:
      'Ani de activitate și proiecte finalizate cu succes în toată țara.',
    icon: Award,
  },
  {
    title: 'Materiale Premium',
    description:
      'Folosim produse certificate, testate pentru durabilitate și performanță.',
    icon: BadgeCheck,
  },
  {
    title: 'Eficiență Energetică',
    description:
      'Reduci pierderile termice și optimizezi consumul pe termen lung.',
    icon: Leaf,
  },
  {
    title: 'Garanție',
    description:
      'Lucrări executate responsabil, cu garanție și suport post-implementare.',
    icon: Shield,
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-[#0F172A] py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-wider text-[#F59E0B] uppercase">
            Avantaje
          </p>
          <h2 className="text-4xl font-bold sm:text-5xl">De ce să ne alegi</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {advantages.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-2xl border border-white/15 bg-white/8 p-6 shadow-lg shadow-black/10"
              >
                <div className="mb-4 inline-flex rounded-xl bg-[#F59E0B]/20 p-3 text-[#F59E0B]">
                  <Icon size={24} />
                </div>
                <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                <p className="text-sm leading-7 text-slate-200">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
