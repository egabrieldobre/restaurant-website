'use client';

import { motion } from 'framer-motion';

export default function VideoSection() {
  return (
    <section id="video" className="py-16 bg-white px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet TURQUOISE
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what makes our bakery & brunch special
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full bg-gray-100 rounded-lg overflow-hidden"
          style={{ paddingBottom: '56.25%' }}
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F679144955068242&show_text=false&width=500"
            title="TURQUOISE presentation reel"
            allow="autoplay;clipboard-write;encrypted-media;picture-in-picture;web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            scrolling="no"
          />
        </motion.div>
      </div>
    </section>
  );
}
