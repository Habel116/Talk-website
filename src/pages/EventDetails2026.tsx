import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SEO } from "@/components/shared/SEO";
import talkLilla from "@/assets/talk_lilla.jpg";
import talkProgram from "@/assets/talk_program.jpg";
import foldszint from "@/assets/foldszint.jpg";
import emelet from "@/assets/emelet.jpg";

export default function EventDetails2026() {
  return (
    <Layout>
      <SEO title="Találkozások Konferencia 2026" description="Talkifi Találkozások Konferencia 2026. március 21. Pápa – program, térkép és részletek." path="/esemenyek/talalkazasok-2026" />
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container-custom">
          <ScrollReveal>
            <h1 className="heading-display text-foreground text-center mb-4">
              Találkozások Konferencia 2026
            </h1>
            <p className="text-body text-center mb-12">2026. március 21.</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ScrollReveal>
              <img
                src={talkLilla}
                alt="Szabóné Dr. László Lilla előadás"
                className="w-full rounded-2xl shadow-lg"
              />
            </ScrollReveal>
            <ScrollReveal>
              <img
                src={talkProgram}
                alt="Találkozások Konferencia 2026 program"
                className="w-full rounded-2xl shadow-lg"
              />
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <h2 className="heading-section text-foreground text-center mt-16 mb-8">
              Térkép
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ScrollReveal>
              <img
                src={foldszint}
                alt="Földszint helyszínrajz"
                className="w-full rounded-2xl shadow-lg bg-white p-4"
              />
            </ScrollReveal>
            <ScrollReveal>
              <img
                src={emelet}
                alt="I. emelet helyszínrajz"
                className="w-full rounded-2xl shadow-lg bg-white p-4"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
