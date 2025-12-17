import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, ExternalLink } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "talalkozasok.prem@gmail.com",
    href: "mailto:talalkozasok.prem@gmail.com",
    description: "Írj nekünk bármilyen kérdéssel!",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+36 20 980 0987",
    href: "tel:+36209800987",
    description: "Hívj minket hétköznap 9-17 óra között.",
  },
  {
    icon: MapPin,
    label: "Helyszín",
    value: "Csetény, Magyarország",
    href: null,
    description: "Csetényi Református Egyházközség",
  },
];

const socialLinks = [
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61581449531192&locale=hu_HU",
    color: "hover:bg-[#1877F2]",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/talk_prem/?igsh=NW95aHdjMWNmczNz",
    color: "hover:bg-[#E4405F]",
  },
];

export default function Contact() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-secondary to-accent/30">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="heading-display text-foreground mb-6">Kapcsolat</h1>
              <p className="text-body">
                Szeretnél többet megtudni rólunk, kérdésed van, vagy csatlakoznál 
                közösségünkhöz? Keress minket bizalommal!
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => {
              const colors = [
                "from-primary/20 to-primary/5 border-primary/20",
                "from-accent/40 to-accent/10 border-accent/40",
                "from-secondary to-secondary/50 border-secondary",
              ];
              return (
                <ScrollReveal key={method.label} delay={index * 0.05}>
                  <div className={`bg-gradient-to-br ${colors[index]} border p-8 rounded-2xl text-center hover-lift h-full`}>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 ring-4 ring-primary/5">
                      <method.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                      {method.label}
                    </h3>
                    {method.href ? (
                      <a
                        href={method.href}
                        className="text-primary font-medium hover:underline block mb-2"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium mb-2">{method.value}</p>
                    )}
                    <p className="text-body-sm">{method.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="section-padding bg-gradient-to-r from-secondary via-accent/20 to-secondary">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="heading-section text-foreground mb-4">Kövess minket!</h2>
              <p className="text-body max-w-2xl mx-auto">
                Légy naprakész legújabb híreinkkel és eseményeinkkel kapcsolatban 
                közösségi média oldalainkon.
              </p>
            </div>
          </ScrollReveal>

          <div className="flex justify-center gap-6 flex-wrap">
            {socialLinks.map((social, index) => (
              <ScrollReveal key={social.label} delay={index * 0.05}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 bg-card px-8 py-4 rounded-xl shadow-md transition-all duration-300 hover:text-primary-foreground hover:-translate-y-1 hover:shadow-lg ${social.color}`}
                >
                  <social.icon className="w-6 h-6" />
                  <span className="font-medium">{social.label}</span>
                  <ExternalLink className="w-4 h-4 opacity-50" />
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Encouragement */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-section text-foreground mb-6">
                Ne habozz megkeresni minket!
              </h2>
              <p className="text-body text-lg mb-8">
                Legyen szó kérdésről, ötletről, vagy egyszerűen csak szeretnéd 
                megosztani velünk a történetedet – örömmel hallanánk rólad. 
                Minden üzenetre válaszolunk, és minden embert fontosnak tartunk.
              </p>
              <div className="bg-gradient-to-br from-primary/10 via-accent/30 to-secondary p-8 rounded-2xl border border-primary/10">
                <p className="font-serif text-xl text-foreground italic mb-4">
                  „Bízzál az Úrban teljes szívedből, és ne támaszkodj a magad eszére."
                </p>
                <p className="text-muted-foreground">— Példabeszédek 3:5</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary via-primary/90 to-primary">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="heading-section text-primary-foreground mb-6">
              Találkozzunk személyesen!
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              A legjobb módja annak, hogy megismerj minket, ha részt veszel 
              valamelyik eseményünkön. Gyere el, és légy részese a közösségnek!
            </p>
            <a
              href="/esemenyek"
              className="inline-flex items-center gap-2 bg-card text-foreground px-8 py-4 rounded-lg font-medium hover:bg-secondary transition-colors shadow-lg hover:shadow-xl"
            >
              Események megtekintése
            </a>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
