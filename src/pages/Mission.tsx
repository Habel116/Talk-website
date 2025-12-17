import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Heart, Users, BookOpen, Sparkles } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Szeretet",
    description: "Minden, amit teszünk, Isten és az emberek iránti szeretetből fakad. Hiszünk abban, hogy a szeretet a legnagyobb erő, ami megváltoztathatja az életeket.",
    gradient: "from-rose-500/20 to-pink-500/20",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
  },
  {
    icon: Users,
    title: "Közösség",
    description: "Nem csak eseményeket szervezünk – családot építünk. Olyan helyet teremtünk, ahol mindenki elfogadást és támogatást talál.",
    gradient: "from-amber-500/20 to-orange-500/20",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    icon: BookOpen,
    title: "Igazság",
    description: "A Biblia tanításaira építünk. Hisszük, hogy Isten Igéje az igazság, amely szabaddá tesz és utat mutat az életben.",
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    icon: Sparkles,
    title: "Megújulás",
    description: "Hiszünk a folyamatos lelki megújulásban. Eseményeink lehetőséget adnak arra, hogy újra és újra találkozzunk Istennel.",
    gradient: "from-violet-500/20 to-purple-500/20",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
  },
];

export default function Mission() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        
        <div className="container-custom relative">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="heading-display text-foreground mb-6">Küldetésünk</h1>
              <p className="text-body text-lg">
                Fedezd fel, mi hajtja a szívünket, és milyen értékek mentén 
                építjük közösségünket.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Mission Statement */}
      <section className="section-padding bg-background relative">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16 bg-gradient-to-br from-primary/5 via-accent/10 to-secondary p-10 rounded-3xl border border-primary/10">
                <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
                  Hitvallásunk
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground leading-snug mb-8">
                  „Mert ahol ketten vagy hárman összegyűlnek az én nevemben, 
                  ott vagyok közöttük."
                </h2>
                <p className="text-muted-foreground italic text-lg">— Máté 18:20</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="prose prose-lg max-w-none">
                <p className="text-body text-lg mb-6">
                  Az Talk csapata azért jött létre, mert hisszük, hogy Isten ma is 
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
      <section className="section-padding bg-gradient-to-br from-secondary via-accent/20 to-secondary relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-secondary rounded-full blur-3xl" />
        
        <div className="container-custom relative">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="heading-section text-foreground mb-4">Értékeink</h2>
              <p className="text-body max-w-2xl mx-auto">
                Ezek az alapelvek vezérlik minden döntésünket és tevékenységünket.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div 
                  key={value.title} 
                  className={`bg-white backdrop-blur-sm p-8 rounded-2xl text-center hover-lift h-full border border-white/50 shadow-lg`}
                >
                  <div className={`w-16 h-16 ${value.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md`}>
                    <value.icon className={`w-8 h-8 ${value.iconColor}`} />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-body-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
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
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 sm:p-12 rounded-3xl shadow-lg border border-amber-200/50">
                <p className="text-body text-lg mb-6">
                  Az Talk 2022-ben indult, amikor egy kis csoport barát úgy 
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
      <section className="section-padding bg-primary relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        
        <div className="container-custom text-center relative">
          <ScrollReveal>
            <h2 className="heading-section text-primary-foreground mb-6">Jövőképünk</h2>
            <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto">
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
