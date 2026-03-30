import { useState } from "react";
import { SEO } from "@/components/shared/SEO";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import gallery125 from "@/assets/gallery-1.jpg";
import gallery225 from "@/assets/gallery-2.jpg";
import gallery325 from "@/assets/gallery-3.jpg";
import gallery425 from "@/assets/gallery-4.jpg";
import gallery525 from "@/assets/gallery-5.jpg";
import gallery625 from "@/assets/gallery-6.jpg";
import gallery224 from "@/assets/gallery-2-24.JPG";
import gallery124 from "@/assets/gallery-1-24.JPG";
import gallery324 from "@/assets/gallery-3-24.JPG";
import gallery424 from "@/assets/gallery-4-24.JPG";
import gallery524 from "@/assets/gallery-5-24.JPG";
import gallery624 from "@/assets/gallery-6-24.JPG";
import gallery126 from "@/assets/gallery-1-26.jpg";
import gallery226 from "@/assets/gallery-2-26.jpg";
import gallery326 from "@/assets/gallery-3-26.jpg";
import gallery426 from "@/assets/gallery-4-26.jpg";
import gallery526 from "@/assets/gallery-5-26.jpg";
import gallery626 from "@/assets/gallery-6-26.jpg";

const galleries = {
  "2026": [
    { src: gallery126, alt: "Isten gyermeke vagyok", caption: "" },
    { src: gallery226, alt: "Dicsőítés a színpadon", caption: "" },
    { src: gallery326, alt: "Közösség", caption: "" },
    { src: gallery426, alt: "Előadás", caption: "" },
    { src: gallery526, alt: "Kerekasztal beszélgetés", caption: "" },
    { src: gallery626, alt: "Szabadidő", caption: "" },
  ],
  "2025": [
    { src: gallery125, alt: "Kiscsoportos beszélgetés", caption: "" },
    { src: gallery225, alt: "Előadás a konferencián", caption: "" },
    { src: gallery325, alt: "Kávészünet", caption: "" },
    { src: gallery425, alt: "Dicsőítés a színpadon", caption: "" },
    { src: gallery525, alt: "Közös dicsőítés", caption: "" },
    { src: gallery625, alt: "Közösség", caption: "" },
  ],
  "2024": [
    { src: gallery124, alt: "Ima kiscsoportban", caption: "" },
    { src: gallery224, alt: "Csoportkép", caption: "" },
    { src: gallery324, alt: "Találkozások", caption: "" },
    { src: gallery424, alt: "Tanítás", caption: "" },
    { src: gallery524, alt: "Tanítás", caption: "" },
    { src: gallery624, alt: "Tanítás", caption: "" },
  ],
};

export default function Gallery() {
  const [selectedYear, setSelectedYear] = useState<"2025" | "2024">("2025");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentGallery = galleries[selectedYear];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentGallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentGallery.length) % currentGallery.length);
  };

  return (
    <Layout>
      <SEO title="Galéria" description="Talkifi konferenciák és események képekben. Nézd meg korábbi találkozóink legjobb pillanatait!" path="/galeria" />
      {/* Hero */}
      <section className="pt-40 pb-6 bg-gradient-to-b from-secondary to-background relative overflow-hidden">
        {/* Decorative blob elements */}
        <div className="absolute top-12 -right-12 w-28 h-28 md:w-56 md:h-56 bg-gradient-to-bl from-accent/40 to-white/30 rounded-[45%_55%_60%_40%/50%_45%_55%_50%] shadow-[0_22px_45px_-12px_rgba(0,0,0,0.1)]" />
        <div className="absolute bottom-0 -left-16 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-tr from-white/35 to-accent/25 rounded-[55%_45%_35%_65%/45%_60%_40%_55%] shadow-[0_18px_40px_-10px_rgba(0,0,0,0.08)]" />
        <div className="container-custom relative">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="heading-display text-foreground mb-6">Galéria</h1>
              <p className="text-body italic">
                Pillants bele korábbi eseményeink hangulatába! 
                Képeink megörökítik a közösség, a dicsőítés és az együtt töltött idő szépségét.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        {/* Decorative blob elements */}
        <div className="absolute -top-10 -left-16 w-30 h-30 md:w-60 md:h-60 bg-gradient-to-br from-secondary/40 to-accent/25 rounded-[50%_50%_40%_60%/40%_50%_50%_60%] shadow-[0_20px_42px_-12px_rgba(0,0,0,0.08)]" />
        <div className="absolute bottom-20 -right-12 w-26 h-26 md:w-52 md:h-52 bg-gradient-to-tl from-accent/30 to-secondary/35 rounded-[40%_60%_55%_45%/55%_45%_55%_45%] shadow-[0_16px_36px_-10px_rgba(0,0,0,0.06)]" />
        <div className="container-custom relative">
          {/* Year Tabs */}
          <ScrollReveal>
            <div className="flex justify-center gap-4 mb-12">
              {(Object.keys(galleries) as Array<"2025" | "2024">).map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedYear === year
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-sand-dark"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Gallery Grid */}
          <ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {currentGallery.map((image, index) => (
                <button
                  key={`${selectedYear}-${index}`}
                  onClick={() => openLightbox(index)}
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer w-full"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <p className="font-medium">{image.caption}</p>
                  </div>
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-primary-foreground hover:text-primary transition-colors z-50"
              aria-label="Bezárás"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 text-primary-foreground hover:text-primary transition-colors z-50"
              aria-label="Előző kép"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 text-primary-foreground hover:text-primary transition-colors z-50"
              aria-label="Következő kép"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            {/* Image */}
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl max-h-[80vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentGallery[currentImageIndex].src}
                alt={currentGallery[currentImageIndex].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <p className="text-center text-primary-foreground mt-4 font-medium">
                {currentGallery[currentImageIndex].caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
