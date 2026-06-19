import Image from 'next/image';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#e5efee] bg-white py-14 text-[#374151]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <Image
            src="/images/logo.png"
            alt="TURQUOISE.bakery&brunch logo"
            width={80}
            height={80}
            className="mb-4 h-20 w-20"
          />
          <p className="mt-2 max-w-xs text-sm leading-7 text-[#6b7280]">
            Fresh pastries, specialty coffee, and a bright brunch experience
            with a Mediterranean feel.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold text-[#1f2937]">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition hover:text-[#0097a7]">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold text-[#1f2937]">Social</h4>
          <ul className="space-y-2 text-sm text-[#6b7280]">
            <li>
              <a
                href="https://www.instagram.com/turquoise.bakery_brunch/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-[#0097a7]"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/p/TURQUOISEbakerybrunch-61560796895610/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-[#0097a7]"
              >
                Facebook
              </a>
            </li>
          </ul>
          <div className="mt-6 space-y-2 text-sm text-[#6b7280]">
            <div>Strada Amaradia 73, Craiova 200170</div>
            <div>0774 907 780</div>
            <div>Daily, 9:00 - 22:00</div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-[#eef2f1] px-4 pt-6 text-center text-xs text-[#9ca3af] sm:px-6 lg:px-8">
        © {new Date().getFullYear()} TURQUOISE.bakery&brunch. All rights
        reserved.
      </div>
    </footer>
  );
}
