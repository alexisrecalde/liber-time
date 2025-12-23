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
              <h3 className="text-xl font-bold mb-4 text-accent">Nuestra Filosofía</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                En LiberTime, creemos que las personas deben dedicarse a crear, pensar y decidir, no a copiar y pegar datos en hojas de cálculo. La tecnología debe ser un libertador, no una carga.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-accent">El Enfoque</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                No somos solo programadores. Somos consultores de eficiencia. Primero entendemos tu negocio, luego auditamos tus procesos y finalmente construimos la solución tecnológica que te permite volar.
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
