export type Lang = 'ro' | 'en';

export const translations = {
    ro: {
        nav: {
            home: 'Acasă',
            about: 'Despre noi',
            menu: 'Meniu',
            gallery: 'Galerie',
            contact: 'Contact',
        },
        hero: {
            badge: 'Patiserie proaspătă • Cafea de specialitate • Experiență brunch',
            heading: 'TURQUOISE.',
            subheading: 'bakery&brunch',
            description:
                'Un café luminos cu inspirație mediteraneană în Craiova, unde prăjiturile de casă, brunchul à la carte, cina și cafeaua de specialitate se întâlnesc într-un spațiu calm și modern.',
            viewMenu: 'Vezi meniul',
            visitUs: 'Vizitează-ne',
            stats: [
                { value: '1.614', label: 'urmăritori Instagram' },
                { value: 'Amaradia 73', label: 'locație Craiova' },
                { value: '9-22', label: 'deschis zilnic' },
            ],
            signatureAtmosphere: 'Atmosferă de calitate',
            signatureDescription:
                'Un spațiu luminos conceput pentru dimineți liniștite, farfurii colorate și momente sociale fără efort.',
        },
        about: {
            badge: 'Bine ai venit la TURQUOISE',
            heading:
                'O patiserie și café de brunch construite în jurul momentelor proaspete și frumoase.',
            description:
                'TURQUOISE.bakery&brunch reunește patiserie fină, pâine artizanală, cafea de specialitate și un ritm de brunch cu inspirație mediteraneană, într-un spațiu care se simte premium, dar primitor.',
            highlights: [
                'Produse proaspete de patiserie în fiecare zi',
                'Patiserie artizanală cu ingrediente de calitate',
                'Cafea de specialitate preparată cu grijă',
                'Atmosferă relaxantă pentru dimineți liniștite',
                'Serviciu cald și prietenos',
            ],
        },
        menu: {
            badge: 'Meniu evidențiat',
            heading: 'Un meniu simplu construit în jurul patiseriei, brunchului și cafelei.',
            categories: [
                {
                    title: 'Patiserie',
                    description:
                        'Prăjituri de casă, croissante și produse de patiserie inspirate din specialitățile noastre.',
                    items: ['Prăjituri de casă', 'Croissante', 'Produse de patiserie'],
                },
                {
                    title: 'Brunch',
                    description:
                        'Farfurii de brunch à la carte și preparate de zi relaxate pentru mese lungi și conversații.',
                    items: ['À la carte', 'Farfurii brunch', 'Preparate de cină'],
                },
                {
                    title: 'Cafea',
                    description:
                        'Servire cafea pentru mic dejun, brunch și vizite de seară în spațiul de pe Amaradia 73.',
                    items: ['Cafea de specialitate', 'Cappuccino', 'Cafea toată ziua'],
                },
            ],
        },
        gallery: {
            badge: 'Momente reale din restaurant',
            heading: 'Preparate reale, cafea și atmosferă de la TURQUOISE.bakery&brunch.',
            alts: [
                'Interior cu locuri de ședere și perete turcoaz',
                'Oaspeți savurând mâncare pe terasa Turquoise',
                'Vitrină cu croissante și prăjituri',
                'Bufet brunch la TURQUOISE',
                'Oaspeți savurând bufetul de brunch',
                'Exterior cu semnul TURQUOISE bakery&brunch',
            ],
        },
        video: {
            heading: 'Descoperă TURQUOISE',
            subheading: 'Vezi ce face patiseria noastră & brunch-ul special',
        },
        experience: {
            badge: 'Experiență',
            heading: 'Patru detalii care definesc experiența TURQUOISE.',
            items: [
                {
                    title: 'Proaspăt copt în fiecare zi',
                    description:
                        'Un ritm de patiserie axat pe dimineți, cu produse de patiserie și pâine coapte cu grijă.',
                },
                {
                    title: 'Atmosferă confortabilă',
                    description:
                        'Interioare aerisite, texturi moi și un mediu calm pentru conversații îndelungate.',
                },
                {
                    title: 'Cafea de calitate',
                    description:
                        'Băuturi espresso echilibrate și cafea de specialitate preparate pentru ritualuri zilnice.',
                },
                {
                    title: 'Momente de brunch perfecte',
                    description:
                        'Farfurii colorate și un ritm relaxat care fac masa de zi să pară specială.',
                },
            ],
        },
        social: {
            badge: 'Profil public',
            heading: 'TURQUOISE în Craiova, capturat de pe paginile sociale live.',
            description:
                'Instagram arată în prezent 128 de postări, 1.614 urmăritori și 392 urmăriți. Bio-ul public evidențiază prăjituri de casă, meniu à la carte și brunch și cină.',
            stats: [
                { value: '128', label: 'postări' },
                { value: '1.614', label: 'urmăritori' },
                { value: '392', label: 'urmăriți' },
            ],
            links: [
                {
                    label: 'Instagram',
                    description:
                        '128 postări, 1.614 urmăritori, 392 urmăriți, cu prăjituri de casă și actualizări de brunch-și-cină.',
                },
                {
                    label: 'Facebook',
                    description:
                        'Pagina publică arată Amaradia 73, Craiova, și serviciu zilnic de la 9:00 la 22:00.',
                },
            ],
        },
        contact: {
            badge: 'Locație & contact',
            heading: 'Vizitează cafeneaua, ia legătura cu noi sau găsește-ne pe hartă.',
            details: [
                { label: 'Adresă', value: 'Strada Amaradia 73, Craiova 200170' },
                { label: 'Telefon', value: '0774 907 780' },
                { label: 'Email', value: 'hello@turquoisebakerybrunch.com (placeholder)' },
                { label: 'Program', value: 'Zilnic, 9:00 - 22:00' },
            ],
            mapTitle: 'Găsește-ne pe Google Maps',
            mapDescription:
                'Detaliile profilului public indică Amaradia 73 în Craiova. Înlocuiți cu locația exactă dacă locația adaugă o înregistrare Google Maps.',
        },
        footer: {
            description:
                'Produse proaspete de patiserie, cafea de specialitate și o experiență de brunch luminoasă cu atmosferă mediteraneană.',
            navigation: 'Navigație',
            social: 'Social',
            hours: 'Zilnic, 9:00 - 22:00',
            copyright: 'Toate drepturile rezervate.',
            links: [
                { label: 'Acasă', href: '#home' },
                { label: 'Despre noi', href: '#about' },
                { label: 'Meniu', href: '#menu' },
                { label: 'Galerie', href: '#gallery' },
                { label: 'Contact', href: '#contact' },
            ],
        },
    },

    en: {
        nav: {
            home: 'Home',
            about: 'About',
            menu: 'Menu',
            gallery: 'Gallery',
            contact: 'Contact',
        },
        hero: {
            badge: 'Fresh Bakery • Specialty Coffee • Brunch Experience',
            heading: 'TURQUOISE.',
            subheading: 'bakery&brunch',
            description:
                'A bright Mediterranean-inspired café in Craiova where homemade cakes, a la carte brunch, dinner service, and specialty coffee come together in a calm, modern space.',
            viewMenu: 'View Menu',
            visitUs: 'Visit Us',
            stats: [
                { value: '1,614', label: 'Instagram followers' },
                { value: 'Amaradia 73', label: 'Craiova location' },
                { value: '9-22', label: 'open daily' },
            ],
            signatureAtmosphere: 'Signature atmosphere',
            signatureDescription:
                'A light-filled setting designed for slow mornings, colorful plates, and effortless social moments.',
        },
        about: {
            badge: 'Welcome to TURQUOISE',
            heading: 'A bakery and brunch café shaped around fresh, beautiful moments.',
            description:
                'TURQUOISE.bakery&brunch brings together buttery pastries, artisan breads, specialty coffee, and a Mediterranean-inspired brunch rhythm in a space that feels premium yet welcoming.',
            highlights: [
                'Fresh pastries baked every day',
                'Artisan bakery with quality ingredients',
                'Specialty coffee crafted with care',
                'Relaxed brunch atmosphere for slow mornings',
                'Warm, friendly service',
            ],
        },
        menu: {
            badge: 'Featured menu',
            heading: 'A simple menu built around bakery, brunch, and coffee.',
            categories: [
                {
                    title: 'Bakery',
                    description:
                        'Homemade cakes, croissants, and pastries inspired by the public profile highlights.',
                    items: ['Homemade cakes', 'Croissants', 'Pastries'],
                },
                {
                    title: 'Brunch',
                    description:
                        'A la carte brunch plates and relaxed daytime dishes for slow meals and long conversations.',
                    items: ['A la carte', 'Brunch plates', 'Dinner-ready dishes'],
                },
                {
                    title: 'Coffee',
                    description:
                        'Coffee service for breakfast, brunch, and evening visits in the Amaradia 73 space.',
                    items: ['Specialty coffee', 'Cappuccino', 'All-day coffee'],
                },
            ],
        },
        gallery: {
            badge: 'Real restaurant moments',
            heading: 'Real dishes, coffee, and atmosphere from TURQUOISE.bakery&brunch.',
            alts: [
                'Turquoise interior seating and turquoise wall',
                'Guests enjoying food on the Turquoise terrace',
                'Pastry display with croissants and cakes',
                'Brunch buffet spread at TURQUOISE',
                'Guests enjoying brunch buffet and shared dishes',
                'TURQUOISE bakery and brunch exterior sign',
            ],
        },
        video: {
            heading: 'Meet TURQUOISE',
            subheading: 'See what makes our bakery & brunch special',
        },
        experience: {
            badge: 'Experience',
            heading: 'Four details that shape the TURQUOISE experience.',
            items: [
                {
                    title: 'Freshly baked every day',
                    description:
                        'A morning-first bakery rhythm with pastries and breads baked with care.',
                },
                {
                    title: 'Cozy atmosphere',
                    description:
                        'Airy interiors, soft textures, and a calm environment for lingering conversations.',
                },
                {
                    title: 'Quality coffee',
                    description:
                        'Balanced espresso drinks and specialty coffee prepared for everyday rituals.',
                },
                {
                    title: 'Perfect brunch moments',
                    description:
                        'Colorful plates and a relaxed pace that make daytime dining feel special.',
                },
            ],
        },
        social: {
            badge: 'Public profile snapshot',
            heading: 'TURQUOISE in Craiova, captured from the live social pages.',
            description:
                'Instagram currently shows 128 posts, 1,614 followers, and 392 following. The public bio highlights homemade cakes, menu a la carte, and brunch and dinner.',
            stats: [
                { value: '128', label: 'posts' },
                { value: '1,614', label: 'followers' },
                { value: '392', label: 'following' },
            ],
            links: [
                {
                    label: 'Instagram',
                    description:
                        '128 posts, 1,614 followers, 392 following, with homemade cakes and brunch-and-dinner updates.',
                },
                {
                    label: 'Facebook',
                    description:
                        'Public page details show Amaradia 73, Craiova, and daily service from 9:00 to 22:00.',
                },
            ],
        },
        contact: {
            badge: 'Location & contact',
            heading: 'Visit the café, get in touch, or find us on the map.',
            details: [
                { label: 'Address', value: 'Strada Amaradia 73, Craiova 200170' },
                { label: 'Phone', value: '0774 907 780' },
                { label: 'Email', value: 'hello@turquoisebakerybrunch.com (placeholder)' },
                { label: 'Hours', value: 'Daily, 9:00 - 22:00' },
            ],
            mapTitle: 'Find us on Google Maps',
            mapDescription:
                'Public profile details point to Amaradia 73 in Craiova. Replace this with the exact map pin if the venue adds a Google Maps listing.',
        },
        footer: {
            description:
                'Fresh pastries, specialty coffee, and a bright brunch experience with a Mediterranean feel.',
            navigation: 'Navigation',
            social: 'Social',
            hours: 'Daily, 9:00 - 22:00',
            copyright: 'All rights reserved.',
            links: [
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Menu', href: '#menu' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'Contact', href: '#contact' },
            ],
        },
    },
} as const;

export type Translations = (typeof translations)['en'];
