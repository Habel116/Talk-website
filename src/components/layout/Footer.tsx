import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const quickLinks = [
  { href: "/esemenyek", label: "Események" },
  { href: "/galeria", label: "Galéria" },
  { href: "/csapat", label: "Csapatunk" },
  { href: "/kuldetesunk", label: "Küldetésünk" },
  { href: "/kapcsolat", label: "Kapcsolat" },
];

const socialLinks = [
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://youtube.com", icon: Youtube, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl font-semibold mb-4">Élő Reménység</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Keresztény konferenciák és közösségi események szervezése, 
              ahol a hit, a szeretet és a közösség találkozik.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Gyors linkek</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Elérhetőségek</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 text-primary" />
                <a
                  href="mailto:info@eloremenseg.hu"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  info@eloremenseg.hu
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 text-primary" />
                <a
                  href="tel:+36301234567"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  +36 30 123 4567
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-primary" />
                <span className="text-primary-foreground/70 text-sm">
                  Budapest, Magyarország
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Info */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Maradj velünk kapcsolatban</h4>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              Kövesd közösségi média oldalainkat, hogy értesülj legújabb 
              eseményeinkről és híreinkről.
            </p>
            <Link
              to="/kapcsolat"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-sm"
            >
              Lépj velünk kapcsolatba
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} Élő Reménység. Minden jog fenntartva.
            </p>
            <p className="text-primary-foreground/50 text-sm">
              Készítve szeretettel és hittel
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
