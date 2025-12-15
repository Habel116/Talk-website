import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Heart, Users, BookOpen, Sparkles } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Szeretet",
    description: "Minden, amit teszünk, Isten és az emberek iránti szeretetből fakad. Hiszünk abban, hogy a szeretet a legnagyobb erő, ami megváltoztathatja az életeket.",
  },
  {
    icon: Users,
    title: "Közösség",
    description: "Nem csak eseményeket szervezünk – családot építünk. Olyan helyet teremtünk, ahol mindenki elfogadást és támogatást talál.",
  },
  {
    icon: BookOpen,
    title: "Igazság",
    description: "A Biblia tanításaira építünk. Hisszük, hogy Isten Igéje az igazság, amely szabaddá tesz és utat mutat az életben.",
  },
  {
    icon: Sparkles,
    title: "Megújulás",
    description: "Hiszünk a folyamatos lelki megújulásban. Eseményeink lehetőséget adnak arra, hogy újra és újra találkozzunk Istennel.",
  },
];

export default function Mission() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-background">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="heading-display text-foreground mb-6">Küldetésünk</h1>
              <p className="text-body">
                Fedezd fel, mi hajtja a szívünket, és milyen értékek mentén 
                építjük közösségünket.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Mission Statement */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
                  Hitvallásunk
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground leading-snug mb-8">
                  „Mert ahol ketten vagy hárman összegyűlnek az én nevemben, 
                  ott vagyok közöttük."
                </h2>
                <p className="text-muted-foreground italic">— Máté 18:20</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="prose prose-lg max-w-none">
                <p className="text-body text-lg mb-6">
                  Az Élő Reménység azért jött létre, mert hisszük, hogy Isten ma is 
                  élő és cselekvő. Küldetésünk, hogy olyan alkalmakat teremtsünk, ahol 
                  emberek megtapasztalhatják Isten jelenlétét, megújulhat a hitük, és 
                  életre szóló kapcsolatokat építhetnek.
                </p>
                <p className="text-body text-lg mb-6">
                  Konferenciáink nem csupán rendezvények – ezek olyan találkozási pontok, 
                  ahol a mennyei érinti a földit. Ahol megtört szívek gyógyulnak, kérdések 
                  választ kapnak, és új remény születik.
                </p>
                <p className="text-body text-lg">
                  Minden korosztályt és élethelyzetet várunk szeretettel. Legyen szó 
                  fiatalokról, akik keresik az útjukat, családokról, akik megerősítésre 
                  vágynak, vagy idősebbekről, akik bölcsességüket szeretnék átadni – 
                  itt mindenkinek helye van.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="heading-section text-foreground mb-4">Értékeink</h2>
              <p className="text-body max-w-2xl mx-auto">
                Ezek az alapelvek vezérlik minden döntésünket és tevékenységünket.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.05}>
                <div className="bg-card p-8 rounded-2xl text-center hover-lift h-full">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-body-sm">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* History / Story */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="heading-section text-foreground mb-4">Történetünk</h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-card p-8 sm:p-12 rounded-2xl shadow-sm">
                <p className="text-body text-lg mb-6">
                  Az Élő Reménység 2014-ben indult, amikor egy kis csoport barát úgy 
                  érezte, hogy szükség van olyan eseményekre, amelyek ötvözik a mély 
                  tanítást, az őszinte közösséget és a szívből jövő dicsőítést.
                </p>
                <p className="text-body text-lg mb-6">
                  Az első konferenciánk mindössze 50 résztvevővel zajlott egy kis 
                  imaházban. Ma már évente több száz ember vesz részt programjainkon, 
                  de a szívünk ugyanaz maradt: szolgálni az embereket és dicsőíteni Istent.
                </p>
                <p className="text-body text-lg">
                  Az elmúlt évtizedben számtalan bizonyságot hallottunk megváltozott 
                  életekről, helyreállt kapcsolatokról és újjászületett reményről. 
                  Ezekért a pillanatokért érdemes folytatni.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="heading-section text-primary-foreground mb-6">Jövőképünk</h2>
            <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto">
              Olyan jövőt képzelünk el, ahol minden magyar városban működik egy élő, 
              lüktető keresztény közösség. Ahol a fiatalok megtalálják a helyüket, 
              a családok megerősödnek, és az evangélium mindenkihez eljut. 
              Ezt a jövőt építjük, lépésről lépésre, konferenciáról konferenciára.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
