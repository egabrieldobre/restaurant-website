import Image from "next/image";

export default function Hero() {
    return (
        <section id="acasa" className="relative flex min-h-screen items-center justify-center pt-24">
            <Image
                src="https://www.izolatii-inteligente.ro/imagini/procedeu.jpg"
                alt="Aplicare izolație cu spumă poliuretanică"
                fill
                priority
                unoptimized
                className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/85 via-[#0F172A]/70 to-[#2563EB]/45" />

            <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <p className="animate-fade-up mb-4 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1 text-sm font-semibold tracking-wide text-white">
                        Soluții moderne pentru locuințe eficiente
                    </p>
                    <h1 className="animate-fade-up text-4xl leading-tight font-bold text-white sm:text-5xl lg:text-6xl">
                        Izolații Inteligente pentru confort și economie de energie
                    </h1>
                    <p className="animate-fade-up animation-delay-150 mt-5 max-w-2xl text-base text-slate-100 sm:text-lg">
                        Soluții profesionale de izolație termică pentru locuințe și clădiri.
                    </p>
                    <div className="animate-fade-up animation-delay-300 mt-9 flex flex-wrap gap-4">
                        <a
                            href="#contact"
                            className="rounded-xl bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-700/30 transition hover:-translate-y-0.5 hover:bg-blue-700"
                        >
                            Solicită Ofertă
                        </a>
                        <a
                            href="#servicii"
                            className="rounded-xl border border-white/50 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                        >
                            Vezi Serviciile
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}