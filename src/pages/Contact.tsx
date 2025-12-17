import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Mail, Phone, MapPin, Facebook, Instagram, ExternalLink } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "talalkozasok.prem@gmail.com",
    href: "mailto:talalkozasok.prem@gmail.com",
    description: "Írj nekünk bármilyen kérdéssel!",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+36 20 980 0987",
    href: "tel:+36209800987",
    description: "Hívj minket hétköznap 9-17 óra között.",
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    icon: MapPin,
    label: "Helyszín",
    value: "Csetény, Magyarország",
    href: null,
    description: "Csetényi Református Egyházközség",
    gradient: "from-amber-500/20 to-orange-500/20",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
];

const socialLinks = [
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61581449531192&locale=hu_HU",
    gradient: "from-blue-600 to-blue-500",
    hoverShadow: "hover:shadow-blue-500/30",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/talk_prem/?igsh=NW95aHdjMWNmczNz",
    gradient: "from-pink-600 via-purple-600 to-orange-500",
    hoverShadow: "hover:shadow-pink-500/30",
  },
];

export default function Contact() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-secondary via-accent/30 to-secondary relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        
        <div className="container-custom relative">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="heading-display text-foreground mb-6">Kapcsolat</h1>
              <p className="text-body text-lg">
                Szeretnél többet megtudni rólunk, kérdésed van, vagy csatlakoznál 
                közösségünkhöz? Keress minket bizalommal!
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom">
          <ScrollReveal>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {contactMethods.map((method) => (
                <div 
                  key={method.label}
                  className={`bg-white backdrop-blur-sm p-8 rounded-2xl shadow-lg text-center hover-lift h-full border border-white/50`}
                >
                  <div className={`w-16 h-16 ${method.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md`}>
                    <method.icon className={`w-8 h-8 ${method.iconColor}`} />
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
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Social Media */}
      <section className="section-padding bg-gradient-to-br from-secondary via-accent/20 to-secondary relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-secondary rounded-full blur-3xl" />
        
        <div className="container-custom relative">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="heading-section text-foreground mb-4">Kövess minket!</h2>
              <p className="text-body max-w-2xl mx-auto">
                Légy naprakész legújabb híreinkkel és eseményeinkkel kapcsolatban 
                közösségi média oldalainkon.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex justify-center gap-6 flex-wrap">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-3 bg-gradient-to-r ${social.gradient} text-white px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${social.hoverShadow}`}
                >
                  <social.icon className="w-6 h-6" />
                  <span className="font-medium">{social.label}</span>
                  <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Encouragement */}
      <section className="section-padding bg-gradient-to-b from-background to-secondary/30">
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
              <div className="bg-gradient-to-br from-rose-50 to-amber-50 p-8 rounded-3xl border border-rose-200/50 shadow-lg">
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
      <section className="section-padding bg-primary relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        
        <div className="container-custom text-center relative">
          <ScrollReveal>
            <h2 className="heading-section text-primary-foreground mb-6">
              Találkozzunk személyesen!
            </h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              A legjobb módja annak, hogy megismerj minket, ha részt veszel 
              valamelyik eseményünkön. Gyere el, és légy részese a közösségnek!
            </p>
            <a
              href="/esemenyek"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors shadow-lg"
            >
              Események megtekintése
            </a>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
