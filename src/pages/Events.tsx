import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Calendar, MapPin, Users, Clock, Quote } from "lucide-react";
import eventWorship from "@/assets/event-worship.jpg";
import heroCommunity from "@/assets/hero-community.jpg";

const events2025 = [
  {
    id: 1,
    title: "Tavaszi Megujulas Konferencia",
    date: "2025. marcius 21-23.",
    location: "Budapest, Konferencia Kozpont",
    description: "Harom nap a lelki megujulas jegyeben. Inspiralo eloadasok, dicsoites es kozosseg.",
    image: eventWorship,
    program: [
      "Pentek este: Nyito dicsoites es koszontes",
      "Szombat delelott: Foeloadas es kiscsoportos beszelgetesek",
      "Szombat delutan: Workshopok es szabadido",
      "Vasarnap: Zaro istentisztelet es urvacsora",
    ],
    speakers: ["Kovacs Peter lelkipasztor", "Dr. Szabo Anna", "Toth Mate worship vezeto"],
  },
  {
    id: 2,
    title: "Nyari Ifjusagi Tabor",
    date: "2025. julius 14-19.",
    location: "Balatonszarszo",
    description: "Egy het fiataloknak a Balaton partjan. Sport, kozosseg, termeszet es hit.",
    image: heroCommunity,
    program: [
      "Napi reggeli ahitat",
      "Eloadasok es beszelgetesek",
      "Sportprogramok es strandolas",
      "Esti tabortuzek es dicsoites",
    ],
    speakers: ["Kiss David ifjusagi vezeto", "Nemeth Julia", "Varga Adam"],
  },
];

const events2024 = [
  {
    id: 3,
    title: "Oszi Konferencia 2024",
    date: "2024. oktober 11-13.",
    location: "Debrecen, Reformatus Kollegium",
    description: "Uj utakon cimmel megrendezett konferenciank a valtozas es megujulas temajat jarta korul.",
    image: heroCommunity,
    program: [
      "Harom napos program eloadasokkal",
      "Muhelymunkak es kiscsoportok",
      "Kozos dicsoites es imaadsag",
    ],
    speakers: ["Dr. Fekete Laszlo", "Horvath Eszter", "Molnar Gabor"],
    testimonials: [
      {
        quote: "Ez a konferencia teljesen megvaltoztatta a hozzaallasomat. Halas vagyok, hogy reszt vehettem!",
        author: "Anna, 28 eves",
      },
      {
        quote: "Csodalatos kozosseg, inspiralo eloadasok. Mar varom a kovetkezot!",
        author: "Peter, 35 eves",
      },
    ],
  },
  {
    id: 4,
    title: "Tavaszi Talalkozo 2024",
    date: "2024. aprilis 5-7.",
    location: "Pecs, Kulturalis Kozpont",
    description: "A remenyseg uzenete ezzel a temaval gyultunk ossze az orszag kulonbozo pontjairol.",
    image: eventWorship,
    program: [
      "Pentek esti nyitany",
      "Szombati eloadasok es workshopok",
      "Vasarnapi halaado istentisztelet",
    ],
    speakers: ["Balogh Krisztian", "Dr. Veres Katalin", "Simon Laszlo"],
    testimonials: [
      {
        quote: "Eletem egyik legjobb hetvegeje volt. Koszonet a szervezoknek!",
        author: "Eszter, 42 eves",
      },
    ],
  },
];

interface EventCardProps {
  event: typeof events2025[0] & { testimonials?: { quote: string; author: string }[] };
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
              Lezarult
            </span>
          )}
        </div>

        <div className="p-6">
          <p className="text-body-sm mb-6">{event.description}</p>

          <div className="mb-6">
            <h4 className="flex items-center gap-2 font-medium text-foreground mb-3">
              <Clock className="w-4 h-4 text-primary" />
              Program
            </h4>
            <ul className="space-y-2">
              {event.program.map((item, idx) => (
                <li key={idx} className="text-body-sm flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="flex items-center gap-2 font-medium text-foreground mb-3">
              <Users className="w-4 h-4 text-primary" />
              Eloadok
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
                Visszajelzesek
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
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-background">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="heading-display text-foreground mb-6">Esemenyeink</h1>
              <p className="text-body">
                Tekintsd at kozelgo es korabbi konferenciainkat, talalkozoinkat. 
                Minden esemenyunk a kozosseg es a lelki novekedes jegyeben zajlik.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            title="2025-os esemenyek"
            subtitle="Kozelgo konferenciank es talalkozoink"
          />
          <div className="grid lg:grid-cols-2 gap-8">
            {events2025.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionHeading
            title="2024-es esemenyek"
            subtitle="Korabbi esemenyeink archivuma"
          />
          <div className="grid lg:grid-cols-2 gap-8">
            {events2024.map((event) => (
              <EventCard key={event.id} event={event} isPast />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
