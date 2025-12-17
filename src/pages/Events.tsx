import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Calendar, MapPin, Users, Clock, Quote } from "lucide-react";
import talkkonf2025 from "@/assets/talk-konf-2025.jpg";
import talkimaej2025 from "@/assets/talk-imaej-2025-2.jpg";
import talkkonf2026 from "@/assets/talk-konf-2026.JPG";
import talkimaej2026 from "@/assets/talk-imaej-2026.JPG";
const events2026 = [
  {
    id: 1,
    title: "Találkozások Konferencia",
    date: "2026. március 21.",
    location: "Pápa, Pápai Református Gimnázium",
    description: "A nap célja a lelki feltöltődés. Inspiráló eloadások, dicsőités és közösség.",
    image: talkkonf2026,
    program: [
      "Nyitó dicsőités és köszöntés",
      "Főelőadás és kiscsoportos beszélgetések",
      "Workshopok és Talk caffé",
      "Záró dicsőítés",
    ],
    speakers: ["Hajdú Ferenc - dicsőítés vezető", "Ablonci Áron"],
  },
  {
    id: 2,
    title: "Talk imaéjjel",
    date: "Coming Soon",
    location: "Pápa, Pápai Református Gimnázium",
    description: "Egy fejethetetlen este, középpontban Isten és az ima.",
    image: talkimaej2026,
    program: [
      "Közös vacsora",
      "Főelőadás és kiscsoportos beszélgetések",
      "Éjszakai dicsőítés",
      "Alvás!",
      "Reggeli áhitat"
    ],
    speakers: ["Hajdú Ferenc - dicsőítés vezető"],
  }
];

const events2025 = [
  {
    id: 3,
    title: "Talk imaéjjel - 2025",
    date: "2025. Október 22.",
    location: "Pápa, Pápai Református Gimnázium",
    description: "-Közel nyolcvan kamasz gyűlt össze, hogy együtt énekeljen, játsszon, táncoljon és imádkozzon. Hogy együtt lélegezzen fel egészen a magasmennyig tárva ki szívét.-",
    image: talkimaej2025,
    program: [
      "Közös vacsora",
      "Főelőadás és kiscsoportos beszélgetések",
      "Élő podcast",
      "Egyéni elcsendesülés",
      "Táncház",
      "Éjszakai dicsőítés",
      "Alvás!",
      "Reggeli áhitat"
    ],
    speakers: ["Hajdú Ferenc - dicsőítés vezető", "Erlitz Anita - református lelkipásztor asszony"],
    testimonials: [
      {
        quote: "Ügyes volt a szervezés, gratulálok!!",
        author: "András, 18 éves",
      },
      {
        quote: "Felejthetetlen élmény marad számomra. Felüdülés volt ennyi emberrel Istent dicsőíteni!",
        author: "Ábel, 18 éves",
      }
    ],
  },
  {
    id: 4,
    title: "Találkozások Konferencia - 2025",
    date: "2025. április 5.",
    location: "Pápa, Pápai Református Gimnázium",
    description: "Kicsoda Isten? Hogyan kapcsolódik hozzám?",
    image: talkkonf2025,
    program: [
      "Nyitó dicsőités és köszöntés",
      "Főelőadás és kiscsoportos beszélgetések",
      "Workshopok és Talk caffé",
      "Záró dicsőítés"
    ],
    speakers: ["Hajdú Ferenc - dicsőítés vezető", "Farkas Balázs - lelkipásztor"],
    testimonials: [
      {
        quote: "Nagyon jól éreztem magam és remélem sok ilyen alkalmon vehetek meg részt",
        author: "Anna, 15 éves",
      },
      {
        quote: "Csodálatos közösség, inspiráló előadások. Már várom a következőt!",
        author: "Peter, 17 éves",
      },
    ],
  },
];

interface EventCardProps {
  event: typeof events2026[0] & { testimonials?: { quote: string; author: string }[] };
  isPast?: boolean;
}

function EventCard({ event, isPast = false }: EventCardProps) {
  return (
    <ScrollReveal>
      <div className="bg-card rounded-2xl overflow-hidden shadow-sm hover-lift">
        <div className="relative h-64">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="heading-card text-primary-foreground mb-2">{event.title}</h3>
            <div className="flex items-center gap-4 text-primary-foreground/80 text-sm">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {event.date}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {event.location}
              </span>
            </div>
          </div>
          {isPast && (
            <span className="absolute top-4 right-4 bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-medium">
              Lezárult
            </span>
          )}
        </div>

        <div className="p-6">
          <p className="text-body-sm mb-6">{event.description}</p>

          <div className="mb-6">
            <h4 className="flex items-center gap-2 font-medium text-foreground mb-3">
              <Clock className="w-4 h-4 text-primary" />
              Programok
            </h4>
            <ul className="space-y-2">
              {event.program.map((item, idx) => (
                <li key={idx} className="text-sm font-medium text-foreground flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="flex items-center gap-2 font-medium text-foreground mb-3">
              <Users className="w-4 h-4 text-primary" />
              Előadók
            </h4>
            <div className="flex flex-wrap gap-2">
              {event.speakers.map((speaker, idx) => (
                <span
                  key={idx}
                  className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                >
                  {speaker}
                </span>
              ))}
            </div>
          </div>

          {event.testimonials && event.testimonials.length > 0 && (
            <div className="border-t border-border pt-6">
              <h4 className="flex items-center gap-2 font-medium text-foreground mb-4">
                <Quote className="w-4 h-4 text-primary" />
                Visszajelzések
              </h4>
              <div className="space-y-4">
                {event.testimonials.map((testimonial, idx) => (
                  <blockquote key={idx} className="bg-accent/50 p-4 rounded-lg">
                    <p className="text-sm italic text-foreground mb-2">
                      {testimonial.quote}
                    </p>
                    <footer className="text-xs text-muted-foreground">
                      - {testimonial.author}
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function Events() {
  return (
    <Layout>
      <section className="pt-32 pb-10 bg-creamy relative overflow-hidden">
        {/* Decorative blob elements */}
        <div className="absolute top-16 -right-12 w-56 h-56 bg-gradient-to-bl from-accent/40 to-secondary/30 rounded-[45%_55%_60%_40%/50%_45%_55%_50%] shadow-[0_22px_45px_-12px_rgba(0,0,0,0.1)]" />
        <div className="absolute bottom-5 -left-16 w-64 h-64 bg-gradient-to-tr from-secondary/40 to-accent/25 rounded-[55%_45%_35%_65%/45%_60%_40%_55%] shadow-[0_18px_40px_-10px_rgba(0,0,0,0.08)]" />
        <div className="container-custom relative">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="heading-display text-foreground mb-6">Eseményeink</h1>
              <p className="text-body italic">
                Tekintsd át közelgő és korábbi konferenciáinkat, talalkozóinkat. 
                Minden eseményunk a közösség és a lelki növekedés jegyében zajlik.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-secondary relative overflow-hidden">
        {/* Decorative blob elements */}
        <div className="absolute top-20 -left-10 w-52 h-52 bg-gradient-to-br from-white/45 to-accent/25 rounded-[40%_60%_50%_50%/50%_40%_60%_50%] shadow-[0_20px_42px_-12px_rgba(0,0,0,0.08)]" />
        <div className="absolute -bottom-10 -right-16 w-60 h-60 bg-gradient-to-tl from-accent/30 to-white/35 rounded-[55%_45%_40%_60%/45%_55%_45%_55%] shadow-[0_18px_38px_-10px_rgba(0,0,0,0.06)]" />
        <div className="container-custom relative">
          <SectionHeading
            title="2026-os események"
            subtitle="Közelgő konferenciáink es talalkozóink"
          />
          <div className="grid lg:grid-cols-2 gap-8">
            {events2026.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-custom">
            <SectionHeading
              title="2025-ös események"
              subtitle="Korábbi eseményeink archívuma"
              titleClassName="text-secondary"
              subtitleClassName="text-secondary/80"
            />
          <div className="grid lg:grid-cols-2 gap-8">
            {events2025.map((event) => (
              <EventCard key={event.id} event={event} isPast />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
