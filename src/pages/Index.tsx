import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Users, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import heroImage from "@/assets/hero-community.jpg";
import eventImage from "@/assets/event-worship.jpg";

const features = [
  {
    icon: Calendar,
    title: "Inspiráló Események",
    description: "Évente több alkalommal szervezünk konferenciákat és találkozókat a lelki megújulásért.",
  },
  {
    icon: Users,
    title: "Élő Közösség",
    description: "Olyan közösséget építünk, ahol mindenki otthon érezheti magát és növekedhet hitében.",
  },
  {
    icon: Heart,
    title: "Szolgáló Szív",
    description: "Szenvedéllyel szolgálunk, hogy mások is megtapasztalhassák Isten szeretetét.",
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
              Ahol a hit közösséggé válik
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Keresztény konferenciákat és közösségi alkalmakat szervezünk, 
            ahol megújulhat a lelked és életre szóló kapcsolatokat építhetsz.
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
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal>
              <div>
                <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
                  Rólunk
                </span>
                <h2 className="heading-section text-foreground mb-6">
                  Küldetésünk a közösségépítés
                </h2>
                <p className="text-body mb-6">
                  A Találkozások Konferencia csapata évek óta elkötelezetten dolgozik azon, 
                  hogy olyan alkalmakat hozzon létre, ahol fiatalok és felnőttek egyaránt 
                  megtapasztalhatják a hit erejét és a közösség melegét.
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

            <ScrollReveal delay={0.2}>
              <div className="relative">
                <img
                  src={eventImage}
                  alt="Dicsőítés a konferencián"
                  className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                  <div className="text-4xl font-serif font-bold">10+</div>
                  <div className="text-sm opacity-90">Év tapasztalat</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
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
              <ScrollReveal key={feature.title} delay={index * 0.15}>
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
              Ne maradj le a 2025-ös konferenciáinkról! Tekintsd meg közelgő 
              eseményeinket és légy részese valami csodálatosnak.
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
