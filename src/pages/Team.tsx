import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";
import teamMember3 from "@/assets/team-member-3.jpg";
import teamMember4 from "@/assets/team-member-4.jpg";

const teamMembers = [
  {
    name: "Kovács Péter",
    role: "Alapító, Vezető lelkipásztor",
    image: teamMember1,
    bio: "Péter több mint 20 éve szolgál a lelkipásztori hivatásban. Szenvedélye, hogy fiatalokat és családokat segítsen közelebb kerülni Istenhez. Az Élő Reménység alapítójaként hisz a közösség erejében.",
  },
  {
    name: "Németh Eszter",
    role: "Programszervező",
    image: teamMember2,
    bio: "Eszter kreativitása és szervezőkészsége nélkülözhetetlen a konferenciáink sikeréhez. Mindig azon dolgozik, hogy minden résztvevő otthon érezze magát eseményeinken.",
  },
  {
    name: "Dr. Szabó Mária",
    role: "Tanácsadó, Mentor",
    image: teamMember3,
    bio: "Mária pszichológusként és keresztény mentorként segíti a közösségünket. Tapasztalata és bölcsessége értékes része csapatunknak.",
  },
  {
    name: "Tóth Dániel",
    role: "Worship vezető",
    image: teamMember4,
    bio: "Dániel zenei tehetsége és mély hite inspirálja a dicsőítést minden eseményünkön. Fiatal kora ellenére már évek óta vezeti a worship csapatot.",
  },
];

export default function Team() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-background">
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
