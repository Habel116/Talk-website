import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <section className="min-h-[70vh] flex items-center justify-center">
        <div className="container-custom text-center">
          <h1 className="font-serif text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="heading-section text-foreground mb-4">
            Az oldal nem található
          </h2>
          <p className="text-body max-w-md mx-auto mb-8">
            Sajnáljuk, de a keresett oldal nem létezik vagy áthelyezésre került.
          </p>
          <Button asChild size="lg">
            <Link to="/">
              <Home className="mr-2 h-5 w-5" />
              Vissza a főoldalra
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
