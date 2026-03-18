import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import talkLilla from "@/assets/talk_lilla.jpg";
import talkProgram from "@/assets/talk_program.jpg";

export default function EventDetails2026() {
  return (
    <Layout>
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
        </div>
      </section>
    </Layout>
  );
}
