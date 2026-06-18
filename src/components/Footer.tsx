const quickLinks = [
  { label: "Acasă", href: "#acasa" },
  { label: "Servicii", href: "#servicii" },
  { label: "Despre Noi", href: "#despre-noi" },
  { label: "Galerie", href: "#galerie" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B1220] py-14 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h3 className="text-2xl font-bold text-white">
            Izolații <span className="text-[#F59E0B]">Inteligente</span>
          </h3>
          <p className="mt-4 max-w-xs text-sm leading-7 text-slate-400">
            Partenerul tău pentru confort termic, eficiență energetică și protecție de durată.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-bold text-white">Link-uri rapide</h4>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition hover:text-[#F59E0B]">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-bold text-white">Contact</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>Telefon: 07XX XXX XXX</li>
            <li>Email: contact@izolatiiinteligente.ro</li>
            <li>Program: Luni - Vineri 08:00 - 18:00</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-4 pt-6 text-center text-xs text-slate-500 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Izolații Inteligente. Toate drepturile rezervate.
      </div>
    </footer>
  );
}