import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#2563EB",
                secondary: "#0F172A",
                accent: "#F59E0B",
            },
            borderRadius: {
                xl: "0.875rem",
                "2xl": "1rem",
                "3xl": "1.5rem",
            },
            boxShadow: {
                soft: "0 14px 30px -18px rgba(15, 23, 42, 0.25)",
            },
        },
    },
};

export default config;
