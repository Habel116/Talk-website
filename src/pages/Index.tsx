import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Users, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SEO } from "@/components/shared/SEO";
import { Helmet } from "react-helmet-async";
import heroImage from "@/assets/hero_image.jpg";
import eventImage from "@/assets/event-picture.jpg";

const features = [
  {
    icon: Calendar,
    title: "Inspiráló Dicsőítés és Tanítás",
    description: "Az eseményeinken megszólaló üzenetek és énekek a Szentlélek által belső tűzzé válnak a nyitott szívekben.",
  },
  {
    icon: Users,
    title: "Élő Közösség",
    description: "Olyan közösséget építünk, amelyben a fiatalok felemelik és bátorítják egymást, miközben feljesztik Krisztustól tanult tulajdonságaikat.",
  },
  {
    icon: Heart,
    title: "Szolgáló Szív",
    description: "Szenvedéllyel szolgálunk, hogy másokat is inspiráljunk a szolgálatra, hogy együtt mutassuk meg Isten szeretetét.",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Keresztény közösség konferencián"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
        </div>

        {/* Content */}
        <div className="relative container-custom text-center text-primary-foreground pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="heading-display text-primary-foreground mb-6 max-w-4xl mx-auto">
              Ahol találkozhatsz Istennel
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Ifjúsági konferenciákat és közösségi alkalmakat szervezünk, 
            ahol megismerheted Krisztust, Aki átformálja életedet és kapcsolataidat.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="xl" variant="hero">
              <Link to="/esemenyek">
                Események megtekintése
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="xl" variant="hero-outline">
              <Link to="/kapcsolat">Kapcsolatfelvétel</Link>
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-primary-foreground/70 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        {/* Decorative blob elements */}
        <div className="absolute top-10 -left-16 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-br from-accent/35 to-secondary/25 rounded-[45%_55%_60%_40%/50%_45%_55%_50%] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.12)]" />
        <div className="absolute bottom-20 -right-20 w-36 h-36 md:w-72 md:h-72 bg-gradient-to-tl from-secondary/45 to-accent/20 rounded-[55%_45%_35%_65%/45%_60%_40%_55%] shadow-[0_20px_45px_-10px_rgba(0,0,0,0.1)]" />
        <div className="absolute top-1/2 right-1/4 w-24 h-24 md:w-48 md:h-48 bg-gradient-to-r from-primary/8 to-accent/12 rounded-[50%_50%_40%_60%/40%_60%_50%_50%] shadow-[0_15px_35px_-8px_rgba(0,0,0,0.06)]" />
        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal>
              <div>
                <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
                  Rólunk
                </span>
                <h2 className="heading-section text-foreground mb-6">
                  Küldetésünk az életmentés
                </h2>
                <p className="text-body mb-6">
                  Szolgálatunk célja, hogy megismertessük Jézus szeretetét fiatalokkal, hogy átéljék köztünk a befogadó szeretet mélységét, és személyes példamutatásunkkal bátorítsuk őket, hogy éljenek Isten dicsőségére betöltve a Tőle rendelt küldetésüket a világban és a gyülekezetükben.
                </p>
                <p className="text-body mb-8">
                  Konferenciáink nem csupán események – ezek találkozási pontok, 
                  ahol életek változnak meg, új barátságok születnek, és a hit megújul.
                </p>
                <Button asChild variant="default" size="lg">
                  <Link to="/kuldetesunk">
                    Ismerd meg küldetésünket
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="relative">
                <img
                  src={eventImage}
                  alt="Dicsőítés a konferencián"
                  className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                  <div className="text-4xl font-serif font-bold mb-2">3+</div>
                  <div className="text-sm opacity-90">Év tapasztalat</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-secondary relative overflow-hidden">
        {/* Decorative blob elements */}
        <div className="absolute top-10 -right-12 w-28 h-28 md:w-56 md:h-56 bg-gradient-to-bl from-white/40 to-accent/25 rounded-[40%_60%_55%_45%/55%_40%_60%_45%] shadow-[0_20px_45px_-12px_rgba(0,0,0,0.08)]" />
        <div className="absolute -bottom-16 -left-10 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-tr from-accent/30 to-white/30 rounded-[55%_45%_50%_50%/45%_55%_45%_55%] shadow-[0_18px_40px_-10px_rgba(0,0,0,0.06)]" />
        <div className="container-custom relative">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="heading-section text-foreground mb-4">
                Amit kínálunk
              </h2>
              <p className="text-body max-w-2xl mx-auto">
                Minden eseményünk a közösség, a tanítás és a dicsőítés köré épül.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 0.05}>
                <div className="bg-card p-8 rounded-2xl shadow-sm hover-lift h-full">
                  <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="heading-card text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-body-sm">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="heading-section text-primary-foreground mb-6">
              Csatlakozz következő eseményünkhöz
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Ne maradj le a 2026-os konferenciáinkról! Tekintsd meg közelgő 
              találkozónkat, és hozd el magaddal barátaidat is.
            </p>
            <Button asChild size="xl" variant="secondary">
              <Link to="/esemenyek">
                Események megtekintése
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
