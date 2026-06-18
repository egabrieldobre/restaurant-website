import Image from "next/image";

export default function About() {
  return (
    <section id="despre-noi" className="bg-slate-50 py-20 scroll-mt-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="mb-3 text-sm font-semibold tracking-wider text-[#2563EB] uppercase">Despre noi</p>
          <h2 className="text-4xl font-bold text-[#0F172A] sm:text-5xl">Profesionalism în fiecare detaliu</h2>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            Cu experiență în domeniul izolațiilor termice, oferim soluții moderne și eficiente pentru
            reducerea costurilor energetice și creșterea confortului locuinței.
          </p>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Lucrăm cu materiale premium, tehnologii actuale și echipe specializate, astfel încât fiecare
            proiect să livreze rezultate durabile și un mediu interior sănătos.
          </p>
        </div>

        <div className="relative h-[320px] overflow-hidden rounded-3xl shadow-xl sm:h-[420px]">
          <Image
            src="/images/foam-1.jpg"
            alt="Aplicare spumă poliuretanică în mansardă"
            fill
            unoptimized
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
