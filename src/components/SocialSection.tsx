"use client";

import { ArrowUpRight, Camera, ThumbsUp } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
    {
        label: "Instagram",
        href: "https://www.instagram.com/turquoise.bakery_brunch/",
        icon: Camera,
        description: "128 posts, 1,614 followers, 392 following, with homemade cakes and brunch-and-dinner updates.",
    },
    {
        label: "Facebook",
        href: "https://www.facebook.com/p/TURQUOISEbakerybrunch-61560796895610/",
        icon: ThumbsUp,
        description: "Public page details show Amaradia 73, Craiova, and daily service from 9:00 to 22:00.",
    },
];

export default function SocialSection() {
    return (
        <section className="py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.5 }}
                        className="rounded-[2rem] border border-[#d8f2ee] bg-[#0097a7] p-8 text-white shadow-[0_24px_60px_rgba(0,151,167,0.18)]"
                    >
                        <p className="text-sm font-semibold tracking-[0.28em] text-white/80 uppercase">
                            Public profile snapshot
                        </p>
                        <h2 className="section-heading mt-4 text-4xl font-semibold sm:text-5xl">
                            TURQUOISE in Craiova, captured from the live social pages.
                        </h2>
                        <p className="mt-5 max-w-xl text-base leading-8 text-white/85">
                            Instagram currently shows 128 posts, 1,614 followers, and 392 following. The
                            public bio highlights homemade cakes, menu a la carte, and brunch and dinner.
                        </p>
                        <div className="mt-6 grid gap-3 sm:grid-cols-3">
                            {[
                                { value: "128", label: "posts" },
                                { value: "1,614", label: "followers" },
                                { value: "392", label: "following" },
                            ].map((item) => (
                                <div key={item.label} className="rounded-2xl border border-white/20 bg-white/10 px-4 py-4 text-center">
                                    <div className="text-2xl font-semibold">{item.value}</div>
                                    <div className="mt-1 text-xs tracking-[0.2em] text-white/75 uppercase">{item.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="grid gap-4">
                        {socialLinks.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    initial={{ opacity: 0, x: 18 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.25 }}
                                    transition={{ duration: 0.45, delay: index * 0.08 }}
                                    className="group flex items-start justify-between gap-6 rounded-[1.75rem] border border-[#e5efee] bg-white p-6 shadow-[0_18px_50px_rgba(31,41,55,0.06)]"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="rounded-2xl bg-[#e8faf7] p-3 text-[#0097a7]">
                                            <Icon size={22} />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 text-lg font-semibold text-[#1f2937]">
                                                {item.label}
                                                <ArrowUpRight className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={18} />
                                            </div>
                                            <p className="mt-2 max-w-md text-sm leading-7 text-[#6b7280]">{item.description}</p>
                                        </div>
                                    </div>
                                </motion.a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}