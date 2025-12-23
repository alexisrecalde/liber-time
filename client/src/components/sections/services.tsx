import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "Desarrollo de Software a Medida",
    description: "Creamos la herramienta exacta que tu negocio necesita. Sin funciones innecesarias, sin restricciones, sin pagar por lo que no usas.",
    features: ["Gestión de Clientes y Ventas", "Portales donde tus clientes se sirvan solos", "Paneles de Control para decisiones rápidas"]
  },
  {
    title: "Auditoría y Digitalización de Procesos",
    description: "Analizamos cómo trabaja tu empresa hoy para diseñar cómo trabajará mañana, eliminando el trabajo manual y acelerando todo.",
    features: ["Identificar dónde se pierde tiempo", "Automatizar tareas repetitivas", "Pasar del Excel a sistemas reales"]
  },
  {
    title: "Integración de Sistemas",
    description: "Conectamos las herramientas que ya usas para que hablen entre sí. Adiós a copiar y pegar datos entre sistemas.",
    features: ["Sincronización automática de datos", "Evitar errores por duplicación", "Todo fluye sin intervención manual"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Soluciones diseñadas para <span className="text-primary">escalar</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              No ofrecemos paquetes cerrados. Entendemos que cada empresa es un mundo, y diseñamos la tecnología que se adapta a tus reglas de negocio, no al revés.
            </p>
          </div>
          <div className="flex justify-end">
             <Button size="lg" variant="secondary" className="rounded-full">
                Ver todas las soluciones
             </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group p-8 rounded-3xl bg-secondary/30 border border-secondary hover:bg-white hover:shadow-xl hover:border-primary/20 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-muted-foreground mb-8">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
