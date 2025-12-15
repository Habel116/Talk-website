import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import eventWorship from "@/assets/event-worship.jpg";
import heroCommunity from "@/assets/hero-community.jpg";

const galleries = {
  "2024": [
    { src: gallery1, alt: "Kiscsoportos beszélgetés", caption: "Kiscsoportos beszélgetések" },
    { src: gallery2, alt: "Előadás a konferencián", caption: "Inspiráló előadások" },
    { src: gallery3, alt: "Kávészünet", caption: "Közösségi pillanatok" },
    { src: gallery4, alt: "Dicsőítés a színpadon", caption: "Dicsőítés és imádat" },
    { src: eventWorship, alt: "Közös dicsőítés", caption: "Együtt az Úr előtt" },
    { src: heroCommunity, alt: "Közösség", caption: "Az Élő Reménység közössége" },
  ],
  "2023": [
    { src: gallery5, alt: "Ima kiscsoportban", caption: "Ima közösségben" },
    { src: gallery6, alt: "Csoportkép", caption: "Emlékek egy csodás hétvégéről" },
    { src: gallery3, alt: "Találkozások", caption: "Új barátságok" },
    { src: gallery1, alt: "Tanítás", caption: "Tanulás és növekedés" },
  ],
};

export default function Gallery() {
  const [selectedYear, setSelectedYear] = useState<"2024" | "2023">("2024");
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
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-background">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="heading-display text-foreground mb-6">Galéria</h1>
              <p className="text-body">
                Pillants bele korábbi eseményeink hangulatába! 
                Képeink megörökítik a közösség, a dicsőítés és az együtt töltött idő szépségét.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Year Tabs */}
          <ScrollReveal>
            <div className="flex justify-center gap-4 mb-12">
              {(Object.keys(galleries) as Array<"2024" | "2023">).map((year) => (
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {currentGallery.map((image, index) => (
              <ScrollReveal key={`${selectedYear}-${index}`} delay={index * 0.1}>
                <button
                  onClick={() => openLightbox(index)}
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer w-full"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <p className="font-medium">{image.caption}</p>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
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
