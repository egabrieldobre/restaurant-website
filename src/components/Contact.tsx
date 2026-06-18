import { Clock3, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold tracking-wider text-[#2563EB] uppercase">Contact</p>
        <h2 className="text-4xl font-bold text-[#0F172A] sm:text-5xl">Solicită o ofertă personalizată</h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <form className="space-y-4">
            <div>
              <label htmlFor="nume" className="mb-1 block text-sm font-semibold text-slate-700">
                Nume
              </label>
              <input
                id="nume"
                name="nume"
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#2563EB]"
                placeholder="Numele tău"
              />
            </div>

            <div>
              <label htmlFor="telefon" className="mb-1 block text-sm font-semibold text-slate-700">
                Telefon
              </label>
              <input
                id="telefon"
                name="telefon"
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#2563EB]"
                placeholder="07XX XXX XXX"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-semibold text-slate-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#2563EB]"
                placeholder="nume@email.ro"
              />
            </div>

            <div>
              <label htmlFor="mesaj" className="mb-1 block text-sm font-semibold text-slate-700">
                Mesaj
              </label>
              <textarea
                id="mesaj"
                name="mesaj"
                rows={5}
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#2563EB]"
                placeholder="Spune-ne ce tip de lucrare dorești"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Trimite mesajul
            </button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#0F172A]">Date companie</h3>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 text-[#2563EB]" size={20} />
                <span>Telefon: 07XX XXX XXX</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 text-[#2563EB]" size={20} />
                <a href="mailto:contact@izolatiiinteligente.ro" className="transition hover:text-[#2563EB]">
                  contact@izolatiiinteligente.ro
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock3 className="mt-0.5 text-[#2563EB]" size={20} />
                <span>Program: Luni - Vineri 08:00 - 18:00</span>
              </li>
            </ul>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <iframe
              title="Hartă locație Izolații Inteligente"
              src="https://www.google.com/maps?q=Bucuresti%20Romania&output=embed"
              className="h-[280px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
