import { Link } from "react-router-dom";
import { SEO } from "@/components/shared/SEO";
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
      <SEO title="Kapcsolat" description="Lépj kapcsolatba a Talkifi csapatával! Írj nekünk vagy kövess minket a közösségi médiában." path="/kapcsolat" />
      {/* Hero */}
      <section className="pt-32 pb-6 bg-gradient-to-br from-secondary via-accent/30 to-secondary relative overflow-hidden">
        {/* Decorative blob elements with shadow */}
        <div className="absolute top-10 right-10 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-bl from-accent/40 to-white/30 rounded-[45%_55%_60%_40%/50%_45%_55%_50%] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.12)]" />
        <div className="absolute bottom-5 left-10 w-36 h-36 md:w-72 md:h-72 bg-gradient-to-tr from-white/40 to-secondary/50 rounded-[55%_45%_35%_65%/45%_60%_40%_55%] shadow-[0_20px_45px_-10px_rgba(0,0,0,0.1)]" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 md:w-48 md:h-48 bg-gradient-to-r from-primary/10 to-accent/15 rounded-[50%_50%_40%_60%/40%_60%_50%_50%] shadow-[0_15px_35px_-8px_rgba(0,0,0,0.08)]" />
        
        <div className="container-custom relative">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="heading-display text-foreground mb-6">Kapcsolat</h1>
              <p className="text-body text-lg italic">
                Szeretnél többet megtudni rólunk, kérdésed van, vagy csatlakoznál 
                szolgálatunkhoz? Keress minket bizalommal!
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background relative overflow-hidden">
        {/* Decorative blob elements */}
        <div className="absolute -top-16 -left-16 w-28 h-28 md:w-56 md:h-56 bg-gradient-to-br from-accent/25 to-secondary/30 rounded-[60%_40%_50%_50%/50%_60%_40%_50%] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)]" />
        <div className="absolute bottom-10 -right-10 w-24 h-24 md:w-48 md:h-48 bg-gradient-to-tl from-secondary/35 to-accent/20 rounded-[40%_60%_55%_45%/55%_40%_60%_45%] shadow-[0_15px_30px_-10px_rgba(0,0,0,0.06)]" />
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
        {/* Decorative blob elements with shadow */}
        <div className="absolute top-1/2 -left-8 w-28 h-28 md:w-56 md:h-56 bg-gradient-to-br from-accent/30 to-white/25 rounded-[45%_55%_50%_50%/50%_45%_55%_50%] shadow-[0_20px_45px_-12px_rgba(0,0,0,0.1)] -translate-y-1/2" />
        <div className="absolute top-16 -right-8 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-tl from-white/35 to-accent/20 rounded-[50%_50%_45%_55%/45%_55%_45%_55%] shadow-[0_18px_40px_-10px_rgba(0,0,0,0.08)]" />
        
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
      <section className="section-padding bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
        {/* Decorative blob elements */}
        <div className="absolute top-10 -left-12 w-26 h-26 md:w-52 md:h-52 bg-gradient-to-br from-secondary/30 to-accent/20 rounded-[55%_45%_50%_50%/45%_55%_45%_55%] shadow-[0_18px_38px_-12px_rgba(0,0,0,0.08)]" />
        <div className="absolute -bottom-10 right-10 w-30 h-30 md:w-60 md:h-60 bg-gradient-to-tl from-accent/25 to-secondary/35 rounded-[45%_55%_60%_40%/55%_45%_55%_45%] shadow-[0_15px_35px_-10px_rgba(0,0,0,0.06)]" />
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
                  „Mert ahol ketten vagy hárman összegyűlnek az én nevemben, ott vagyok köztük."
                </p>
                <p className="text-muted-foreground">— Máté 18:20</p>
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
              valamelyik eseményünkön. Gyere el, és légy részese Isten munkájának köztünk!
            </p>
            <Link
              to="/esemenyek"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors shadow-lg"
            >
              Események megtekintése
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
