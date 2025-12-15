import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

import barni from "@/assets/team/BognarBarnabas-scaled.jpg";
import lilla from "@/assets/team/BognarLilla-scaled.jpg";
import gyongyi from "@/assets/team/FeketeGyongyi.jpg";
import linda from "@/assets/team/GuoLinda.jpeg";
import abel from "@/assets/team/HajduAbel.jpeg";
import botond from "@/assets/team/HajduBotond-scaled.jpg";
import hemese from "@/assets/team/HajduEmese.jpg";
import ferenc from "@/assets/team/HajduFerenc-scaled.jpg";
import emi from "@/assets/team/HajduneEmi2.jpg";
import magdi from "@/assets/team/HegeFerencneMagdi.jpg";
import pal from "@/assets/team/HegePal.jpg";
import hajni from "@/assets/team/HuiniGuo.jpg";
import flora from "@/assets/team/KerteszFloraJPG.jpg";
import zsofi from "@/assets/team/KerteszZsofi-scaled.jpg";
import eszter from "@/assets/team/KirosEszter-scaled.jpg";
import kemese from "@/assets/team/KohanEmese.jpeg";
import greta from "@/assets/team/LamportGreta-scaled.jpg";
import tamas from "@/assets/team/PulaTamasDaniel.jpg";
import zalan from "@/assets/team/VasZalanKende.jpg";

const teamMembers = [
  {
    name: "Bognár Barnabás",
    role: "",
    image: barni,
    bio: "Bognár Barnabás vagyok. Családommal a Csetényi Református Gyülekezetbe járunk. Fontosnak tartom, hogy a mai fiatalok hiteles forrásokból ismerjék meg Istent, és mielőbb Krisztus követőivé váljanak. A konferencián az imaszolgálatban és a filmklubban találkozhattok velem, de részt vettem a konferencia előkészítésében is (szervezői kitűzők legyártása, egyházmegye térkép installálása).",
  },
  {
    name: "Bognár Lilla",
    role: "",
    image: lilla,
    bio: "Bognár Lilla vagyok, 16 éves gimnazista, a Csetényi Református Gyülekezet és ifi közösség tagja. Az Oázis Worship énekeseként és bizonyságtevőként találkozhattok majd velem a konfi során. Fő motivációm, hogy minél több fiatal megtapasztalhassa, milyen Isten végtelen kegyelmében és szeretetében élni.",
  },
  {
    name: "Fekete Gyöngyi",
    role: "",
    image: gyongyi,
    bio: "Fekete Gyöngyi vagyok, velem majd az információs pontnál, kávésaroknál találkozhattok. Azért jelentkeztem a csapatba, mert szeretném, hogy egy szeretetteljes közösség alakuljon ki.  Szeretek a természetben kirándulni, fényképezni, olvasni. Lelkesen várom veletek az alkalmainkat, mivel hiszem, hogy együtt, közösen építhetjük Isten országát.",
  },
  {
    name: "Guo Huini",
    role: "",
    image: hajni,
    bio: "Guo Huini vagyok, de mindenki csak Hajninak szólít az egyszerűség kedvéért. 😀 Nagyon örülök, hogy a szervező csapat részese lehetek, és a saját ifinken kívül is vállalhatok a fiatalokért szolgálatot. Most a „kreatív csapat” tagja vagyok, akik a dekorációkat készítik el az eseményre. Egyébként építészmérnök vagyok, tavaly júliusban szereztem meg a diplomám. Szabadidőmben szeretek zenélni, olvasni és festeni. Várom már, hogy találkozhassak Veletek!",
  },
  {
    name: "Hajdú Ábel",
    role: "",
    image: abel,
    bio: "Hajdú Ábel vagyok, lelkes csetényi fiatal. Az Oázis Worship dobosa, a csapat buzgó tagja! Fiatalként szívügyem, hogy a korombelieket Istenhez vezessem, hogy ők is megtapasztalják Urunk végtelen kegyelmét és szeretetét. Velem majd a társas-sarokban, vagy akár a színpadon találkozhattok!",
  },
  {
    name: "Hajdú Botond",
    role: "",
    image: botond,
    bio: "Hajdú Botond vagyok, a Csetényi gyüli és ifi tagja, és a dicsőítő zenekarunk zongoristája. Azzal a reménnyel csatlakoztam a csapathoz, hogy az egyházmegyénk fiataljaiból egy összetartó, istenfélő közösséget hozzunk létre.",
  },
  {
    name: "Hajdú Emese",
    role: "",
    image: hemese,
    bio: "Hajdú Emese vagyok, 15 éves, református gimnáziumba járok. A csetényi ifinek és a gyülekezetnek lelkes tagjaként már szolgálatokat is vállalok. Szeretek énekelni, röplabdázni, zenélni. A találkozó szervezésénél különböző háttérmunkákat végzek. Én is énekelek majd az Oázis Worship dicsőítő csapatában. Hiszem, hogy velem lesz teljes a stáb!",
  },
  {
    name: "Hajdú Ferenc",
    role: "",
    image: ferenc,
    bio: "Hajdú Ferenc vagyok – gyermek, férj, édesapa, lelkész. Életem része a fiatalság. Szeretek fiatalokkal és fiatalok között dolgozni. Törekszem arra, hogy hűséges legyek ahhoz az evangéliumhoz, amely az én életemet is megváltoztatta és formálja kamasz koromtól kezdve. Boldogan dicsérem Istent a zenén keresztül is mindazokért az áldásaiért, amelyekkel gazdaggá teszi létezésem. Hiszem, hogy a legnagyobb nyereség fiatalon megismerni Jézust.  Még beteljesületlen álmom, hogy homokos tengerparton profi pályán röplabdázhassak.",
  },
  {
    name: "Hajdúné Emi",
    role: "",
    image: emi,
    bio: "Hajdúné Emi vagyok, hitoktatok gyerektáborokat szervezek jópár éve. Vallom, hogy minden csapatban szükség van egy-két segítő kézre, akik szívesen vállalják a szervezés láthatatlan háttérmunkáit. Én ezzel a szolgálattal igyekszem Isten Igéjének terjedését minél jobban elősegíteni.",
  },
  {
    name: "Hege Ferencné Magdi",
    role: "",
    image: magdi,
    bio: "Hege Ferencné Magdi vagyok. Csetényben élek. Hálás vagyok Istennek, hogy elindult a fiatalok felé ez a szolgálat és részt vehetek benne, régóta láttam a szükségét. Az infópontnál és a kávézóban találkozhatunk!",
  },
  {
    name: "Hege Pál",
    role: "",
    image: pal,
    bio: "Hege Pál vagyok Csetényből. Az Oázis Worship hegedüse és a csetényi ifi lelkes tagja. Hálás vagyok az Úrnak, hogy megváltott és tenyerén hordoz. Szeretném, ha minél több fiatal átélné ezt a csodálatos életre szóló élményt.",
  },
  {
    name: "Guo Linda",
    role: "",
    image: linda,
    bio: "Guo Linda vagyok. A Győr- Szabadhegyi Református Egyházközségbe járok. A regisztrációnál találkozhattok velem, de amúgy a dekoráció megvalósításában segítek. Azért vállaltam szolgálatot, hogy minél több velem egykorú megismerhesse Isten igéjét és együtt dicsérhessük az ő nevét. Ezenkívül nagyon szeretek rajzolni és olvasni.",
  },
  {
    name: "Kertész Flóra",
    role: "",
    image: flora,
    bio: "Kertész Flóra vagyok, 15 éves gimnazista. Szeretek zongorázni, nevetni, a barátaimmal lenni, keresztény közösségbe járni. Örömmel veszek részt olyan közösség építésében, ahol őszintén beszélhetünk Istenről, önmagukról, emberi kapcsolatainkról.",
  },
  {
    name: "Kertész Zsófi",
    role: "",
    image: zsofi,
    bio: "Kertész Zsófi vagyok. Azért csatlakoztam ehhez a misszióhoz, mert szeretném, ha mi, református fiatalok megismerhetnénk egymást, és azt, hogy együtt közelebb kerülhessünk Istenhez. Fontosnak tartom, hogy szülessenek még hasonló események, szeretnénk egy olyan közösséget létrehozni, ahova mindenki szívesen jár.",
  },
  {
    name: "Kiros Eszter",
    role: "",
    image: eszter,
    bio: "Kiros Eszter vagyok. Szívügyem az ifjúsági misszió, azon belül is a fiatalok segítése szolgálatuk megtalálásában. Én is gimisként mondtam igent Isten hívására, és hiszem, hogy Isten azt a különleges időszakot gazdagon meg tudja áldani, ha merünk válaszolni az ő meghívására. Hálás vagyok, hogy sok évig szolgálhattam gimnáziumban vallástanárként, most pedig  Mezőőrsön szolgálok lelkészként.",
  },
  {
    name: "Kohán Emese",
    role: "",
    image: kemese,
    bio: "Kohán Emese vagyok, a szervezői csapat egy tagja. Az Úrtól kapott küldetésemnek gondolom a hozzám hasonló értékrendű fiatalok összekovácsolását, az örömhír megismerését. Már évek óta aktív tagja vagyok a gyülekezetünk ifijének, ahol olyan szeretet és elfogadás vesz körül, amilyen sehol máshol. Szeretném, ha sokunk tapasztalná meg egy hasonló közösség megtartó erejét, éppen ezért veszek részt ebben a misszióban.",
  },
  {
    name: "Lamport Gréta",
    role: "",
    image: greta,
    bio: "Lamport Gréta vagyok, elsőéves egyetemista Budapesten. Alapvetően a katolikus egyház tagja vagyok Tapolcán, viszont egy ideje már, ahogy lehetőségem és időm engedi, a csetényi ifibe járok. Hálás vagyok, hogy én is a TALK csapat tagja lehetek, és most én is részt vehetek az imaéjjel szervezésében. Szeretném, hogy minél több fiatal megismerhesse Istent és az Ő végtelen szeretetét, illetve egy olyan közösséget találjanak, ahol egymást támogatva haladhatnak ezen az úton.",
  },
  {
    name: "Pula Tamás Dániel",
    role: "",
    image: tamas,
    bio: "Pula Tamás Dániel vagyok a Pápai Református Teológiai Akadémia 4. éves hallgatója. Közel áll hozzám a magyar néphagyomány minden tere. A népzene és a néptánc kifejezetten. Szeretek táncházakat tartani/részt venni benne. Számomra nagyon fontos, hogy megfelelő bizalom kialakulhasson ember-ember között is. Hiszem, hogy szavakkal meg lehet változtatni emberek életét, és közelebb vinni őket a mindenható Istenhez.",
  },
  {
    name: "Vas Zalán Kende",
    role: "",
    image: zalan,
    bio: "Vas Zalán Kende vagyok, 19 éves gimnazista, a csetényi baptista gyülekezet bemerített tagja és dicsőítő csapatának tagja, egyben a csetényi református ifiközösség tagja. Szeretném, ha a velem egykorú fiatalok közelebb kerülnének Istenhez, ezért fő motivációm, hogy minél jobban megismertessem Őt velük.",
  },
];

export default function Team() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-2 bg-gradient-to-b from-secondary to-background">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="heading-display text-foreground mb-6">Csapatunk</h1>
              <p className="text-body">
                Ismerd meg azokat az embereket, akik szívvel-lélekkel dolgoznak azon, 
                hogy eseményeink felejthetetlen élményt nyújtsanak.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <ScrollReveal key={member.name} delay={index * 0.1}>
                <div className="bg-card rounded-2xl overflow-hidden shadow-sm hover-lift group">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-medium text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-4">
                      {member.role}
                    </p>
                    <p className="text-body-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="heading-section text-foreground mb-6">
                Csatlakozz hozzánk!
              </h2>
              <p className="text-body mb-8">
                Ha szeretnél részese lenni a szolgálatunknak önkéntesként vagy 
                bármilyen formában, keress minket bizalommal!
              </p>
              <a
                href="mailto:info@eloremenseg.hu"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-burgundy-light transition-colors"
              >
                Írj nekünk
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
