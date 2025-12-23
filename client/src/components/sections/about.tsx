import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section id="about" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            "El tiempo es el único activo que no se puede recuperar. Nuestra misión es devolvértelo."
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 text-left mt-16 p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10">
            <div>
              <h3 className="text-xl font-bold mb-4 text-accent">¿Cómo trabajamos?</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Nos tomamos el tiempo para entender realmente cuáles son tus desafíos. No venimos con soluciones genéricas. Escuchamos, analizamos y creamos herramientas únicas que se adaptan a cómo trabaja tu empresa hoy, preparándola para crecer mañana.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-accent">¿Por qué software a medida?</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Porque tu negocio no es estándar. Las herramientas genéricas tienen funciones que no necesitas y no tienen lo que realmente te falta. Software a medida significa que pagas solo por lo que usas, es seguro, escalable y crece contigo sin limitaciones.
              </p>
            </div>
          </div>

          <div className="pt-8">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-8">
              Conoce al Equipo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
