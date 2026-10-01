import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SEO } from "@/components/shared/SEO";
import posterAsset from "@/assets/imaejjel2026_a4.png";

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
          </div>
        </div>
      </section>
    </Layout>
  );
}
