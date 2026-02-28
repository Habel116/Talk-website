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
      <section className="pt-32 pb-6 bg-background relative overflow-hidden">
        {/* Decorative blob elements with shadow */}
        <div className="absolute top-10 left-10 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-br from-accent/40 to-secondary/30 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)]" />
        <div className="absolute bottom-10 right-10 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-tl from-secondary/50 to-accent/20 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.12)]" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 md:w-48 md:h-48 bg-gradient-to-r from-primary/10 to-accent/15 rounded-[50%_50%_40%_60%/40%_60%_50%_50%] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)]" />
        
        <div className="container-custom relative">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="heading-display text-foreground mb-6">Küldetésünk</h1>
              <p className="text-body text-lg italic">
                Fedezd fel, mi hajtja a szívünket, és milyen értékek mentén 
                építjük szolgálatunkat.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Mission Statement */}
      <section className="section-padding bg-background relative overflow-hidden">
        {/* Decorative blob elements */}
        <div className="absolute -top-20 -right-20 w-36 h-36 md:w-72 md:h-72 bg-gradient-to-bl from-secondary/40 to-accent/20 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]" />
        <div className="absolute bottom-20 -left-16 w-28 h-28 md:w-56 md:h-56 bg-gradient-to-tr from-accent/30 to-secondary/25 rounded-[60%_40%_50%_50%/50%_60%_40%_50%] shadow-[0_15px_35px_-10px_rgba(0,0,0,0.08)]" />
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16 bg-gradient-to-br from-primary/5 via-accent/10 to-secondary p-10 rounded-3xl border border-primary/10">
                <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
                  Igei vezetésünk
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground leading-snug mb-8">
                  „Mert én ismerem az én gondolataimat, amelyeket rólatok gondolok – így szól az Úr-; békességre és nem háborúságra gondolok, hogy jövőt és reménységet adjak nektek. Akkor majd segítségül hívtok engem, eljöttök, és imádkoztok hozzám, és én meghallgatlak titeket. Kerestek majd engem és megtaláltok, mert teljes szívetekből kerestek engem."
                </h2>
                <p className="text-muted-foreground italic text-lg">— Jeremiás könyve 29. fejezet 11-13. versek</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="prose prose-lg max-w-none">
                <p className="text-black-300 text-lg mb-6">
                  Szeretnénk látni a fiatalok mai nemzedékét, mint akik meghallják Jézus szavát, és
elfogadják elhívását arra, hogy Istent dicsőítő életet éljenek. Küldetésünk, hogy
felhangosítsuk Megváltónk üzenetét, és eljuttassuk azt minél több fiatalhoz az
egyházmegyénk határain belül és kívül egyaránt, mert hisszük, hogy Isten országának
nincsenek határai.
                </p>
                <p className="text-black-300 text-lg mb-6">
                  Jézus jelenléte életeket formál át! Küldetésünknek érezzük, hogy a fiatalokat Krisztusnak
ebbe az életformáló jelenlétébe hívjuk meg, és segítsünk nekik kapcsolódni Megváltójukhoz
a lehető legegyszerűbb és legtermészetesebb módon. Mint Jézus egykori tanítványai,
vágyunk arra, hogy megéljük a fiatalokkal, hogy egymást hívják, illetve hozzák az Úrral
való közösségbe, és együtt tapasztalják meg Isten kegyelmét, gondviselését és vezetését.
                </p>
                <p className="text-black-300 text-lg">
                  Hisszük, hogy Jézus Krisztus ránk is bízta missziójának folytatását az életterünk szűkebb és tágabb környezetében
egyaránt. Engedetlen tanítványok lennénk, ha nem tanítanánk meg másoknak mindazt, amit mi már
megtanultunk, és nem vonnánk Krisztussal szövetségbe mindazokat, akik vágynak jobban
megismerni és szolgálni Őt! Motivál bennünket Jézus ígérete, hogy velünk lesz minden nap a világ
végezetéig, amíg csak végezzük küldetésének nagy parancsát!
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gradient-to-br from-secondary via-accent/20 to-secondary relative overflow-hidden">
        {/* Decorative blob elements with shadow */}
        <div className="absolute top-1/2 -left-10 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-br from-accent/30 to-white/20 rounded-[40%_60%_55%_45%/55%_40%_60%_45%] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] -translate-y-1/2" />
        <div className="absolute top-10 -right-10 w-36 h-36 md:w-72 md:h-72 bg-gradient-to-tl from-white/30 to-accent/20 rounded-[55%_45%_40%_60%/45%_55%_45%_55%] shadow-[0_20px_45px_-15px_rgba(0,0,0,0.08)]" />
        
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
              <div className="bg-gradient-to-br from-rose-50 to-amber-50 p-8 rounded-3xl border border-rose-200/50 shadow-lg p-8 sm:p-12 shadow-lg border border-amber-200/50">
                <p className="text-black-300 text-lg mb-6">
                  2024. januárjában alakult szolgáló csoportunk, melyet TALK néven rövidítünk. A Pápai
Református Egyházmegye Ifjúsági Szolgálatának a missziói csoportja vagyunk. Tagjaink között vannak lelkipásztorok,
pedagógusok, ifi vezetők, ifisek, lelkes gyülekezeti tagok. Missziónkban építünk egymás lelkesedésére, kreativitására, lelki ajándékaira,
tehetségére, erősségeire és áldozatkészségére. Mindannyian aktív gyülekezeti tagok
vagyunk, akik számára fontos Jézus jelenléte az életünkben. Isten Lelke már formálta a
szívünket abban, hogy szeretnénk tágabb területen szolgálni az Urat, ezért aztán a
szolgáló csapat szervezésekor lelkesen mondtunk igent Isten hívására.
                </p>
                <p className="text-black-300 text-lg mb-6">
                  A TALK egy rövidítés, mely két fontos üzenetet fogalmaz meg számunkra. Egyrészt jelenti
a találkozásokat Istennel és egymással. Szolgálatunk indulásakor mindannyiunk számára
fontos célként fogalmazódott meg, hogy ezekre a találkozásokra fókuszáljunk. Másrészt
pedig a rövidítés angol szóként értelmezve hordozza magában a beszélgetést, amely szerves
része minden életre szóló találkozásnak. Az Istennel való beszélgetés formál minket a
legintenzívebb és legszemélyesebb módon. Az egymással folytatott beszélgetésekben
pedig megélhetjük, hogyan növekedhetünk egymás hite által is.
                </p>
                <p className="text-black-300 text-lg">
                  Szolgálatunknak eddig két fő pillére alakult ki, amely a tavaszi nagy konferenciát és az
őszi meghittebb imaéjjelt jelenti. Hálásak vagyunk Istennek, hogy használ bennünket
fiatalok megtérésében, lelki növekedésében, szolgálatba állításában, a jövő egyházának
építésében! Legyen áldott ezért az Ő neve!
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
              Álmunk egy olyan egész egyházmegyét átölelő ifjúsági közösség, amely teljes szívből dicsőíti Istent, és ég az szíve más fiatalokért. Imádkozunk azért, hogy gyülekezeteink ifjúsági csoportjai megújuljanak, és élesztőként legyenek jelen a helyi gyülekezeteikben.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
