import { House, Layers, SprayCan } from 'lucide-react';

const services = [
  {
    title: 'Izolație cu spumă poliuretanică',
    description:
      'Aplicare rapidă, etanșeitate excelentă și confort termic ridicat pentru orice tip de construcție.',
    icon: SprayCan,
  },
  {
    title: 'Izolație poduri și mansarde',
    description:
      'Reduci pierderile de căldură și protejezi structura acoperișului cu soluții adaptate spațiului tău.',
    icon: House,
  },
  {
    title: 'Hidroizolații',
    description:
      'Protecție sigură împotriva infiltrațiilor pentru terase, fundații și zone expuse umidității.',
    icon: Layers,
  },
];

export default function Services() {
  return (
    <section
      id="servicii"
      className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold tracking-wider text-[#2563EB] uppercase">
          Servicii
        </p>
        <h2 className="text-4xl font-bold text-[#0F172A] sm:text-5xl">
          Soluții complete de izolație
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article
              key={service.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <div className="mb-5 inline-flex rounded-xl bg-blue-50 p-3 text-[#2563EB] transition group-hover:bg-[#2563EB] group-hover:text-white">
                <Icon size={26} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#0F172A]">
                {service.title}
              </h3>
              <p className="text-sm leading-7 text-slate-600">
                {service.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
