import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SEO } from "@/components/shared/SEO";
import posterAsset from "@/assets/imaejjel2026_a4.png";
import programNov6 from "@/assets/imaejjel2026-program-1.jpg";
import programNov7 from "@/assets/imaejjel2026-program-2.jpg";
import terkepFoldszint from "@/assets/terkep-foldszint.jpg";
import terkepIemelet from "@/assets/terkep-iemelet.jpg";

export default function EventDetailsImaejjel2026() {
  return (
    <Layout>
      <SEO title="Talk imaéjjel 2026" description="Talk imaéjjel 2026. november 6. Pápa – program, plakát és részletek." path="/esemenyek/talk-imaejjel-2026" />
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container-custom">
          <ScrollReveal>
            <h1 className="heading-display text-foreground text-center mb-4">
              Talk imaéjjel 2026
            </h1>
            <p className="text-body text-center mb-12">2026. november 6.</p>
          </ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <img
                src={posterAsset}
                alt="Talk imaéjjel 2026 plakát"
                className="w-full rounded-2xl shadow-lg"
              />
            </ScrollReveal>

            <ScrollReveal className="mt-16">
              <h2 className="heading-display text-foreground text-center mb-10">
                Program
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <img
                  src={programNov6}
                  alt="Talk imaéjjel 2026 program – november 6."
                  loading="lazy"
                  className="w-full rounded-2xl shadow-lg"
                />
                <img
                  src={programNov7}
                  alt="Talk imaéjjel 2026 program – november 7."
                  loading="lazy"
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal className="mt-16">
              <h2 className="heading-display text-foreground text-center mb-10">
                Térkép
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <img
                  src={terkepFoldszint}
                  alt="Térkép – földszint: regisztráció, öltözők, dráma és tornaterem"
                  loading="lazy"
                  className="w-full rounded-2xl shadow-lg"
                />
                <img
                  src={terkepIemelet}
                  alt="Térkép – I. emelet: csoportbeszélgetés, imádság, kreatív írás, dicsőítés és Talk Café"
                  loading="lazy"
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
