import { motion } from "motion/react";
import { data } from "@/data/Mission";

export default function Mission() {
  return (
    <>
      <section
        id="mission"
        className=" py-24 bg-white lg:py-36 px-6 md:px-12 lg:px-20 overflow-x-hidden"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* ── Left: copy ── */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            {/* Eyebrow */}
            <p
              className="flex items-center gap-3 text-[0.68rem] tracking-[0.28em] uppercase mb-6"
              style={{ color: "#023d6b", fontFamily: "'Outfit', sans-serif" }}
            >
              <span className="block w-7 h-px bg-primary" />
              {data.title}
            </p>

            {/* Heading */}
            <h2
              className="text-[#1a1612] leading-[1.1] mb-8"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.4rem, 4.5vw, 4rem)",
                fontWeight: 300,
              }}
            >
              {data.dominantText}
              <br />
              <em
                className="font-semibold not-italic"
                style={{ fontStyle: "italic", fontWeight: 600 }}
              >
                {data.dominantTextHightlight}
              </em>
            </h2>

            {/* Body paragraphs */}
            <div
              className="space-y-4 mb-10"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {data.paragraphs.map((p: string, i: number) => (
                <p
                  key={i}
                  className="text-[0.95rem] font-light leading-[1.85] text-[#1a1612]/65"
                >
                  {p}
                </p>
              ))}
            </div>
          </motion.div>

          {/* ── Right: image ── */}
          <motion.div
            className="relative"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            {/* Photo */}
            <div
              className="relative overflow-hidden rounded-sm"
              style={{ aspectRatio: "4/5" }}
            >
              <img
                src={data.sideImage.src}
                alt={data.sideImage.alt}
                draggable={false}
                className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
              />
            </div>

            {/* Floating stat card */}
            <div
              className="absolute top-8 -right-5 md:-right-6 bg-[#1a1612] text-[#f4efe8] rounded-sm px-5 py-4 text-center min-w-27.5"
              style={{ zIndex: 10 }}
            >
              <div
                className="leading-none mb-1.5"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "2rem",
                  fontWeight: 300,
                  color: "#adbde3",
                }}
              >
                {data.stats[0].value}
              </div>
              <div
                className="text-[0.7rem] tracking-[0.16em] uppercase text-white"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {data.stats[0].label}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
