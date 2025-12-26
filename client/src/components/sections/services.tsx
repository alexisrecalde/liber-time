import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const services = [
    {
        title: "Software a Medida",
        description: "Creamos la herramienta exacta que tu negocio necesita. Sin funciones de relleno, sin restricciones artificiales, sin pagar por lo que no usás.",
        features: [
            "Gestión de clientes y ventas",
            "Portales de autogestión para tus clientes",
            "Dashboards para tomar decisiones rápidas"
        ]
    },
    {
        title: "Auditoría y Digitalización",
        description: "Analizamos cómo trabaja tu empresa hoy para diseñar cómo va a trabajar mañana. Menos trabajo manual, más velocidad en todo.",
        features: [
            "Mapeo de dónde se pierde tiempo",
            "Automatización de tareas repetitivas",
            "Migración de Excel a sistemas reales"
        ]
    },
    {
        title: "Integración de Sistemas",
        description: "Conectamos las herramientas que ya usás para que hablen entre sí. Chau a copiar y pegar datos de un lado a otro.",
        features: [
            "Sincronización automática de datos",
            "Eliminación de errores por duplicación",
            "Flujos que corren sin intervención manual"
        ]
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Soluciones que se adaptan <span className="text-primary">a vos</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            No vendemos paquetes cerrados. Cada empresa es un mundo, y diseñamos tecnología que respeta tus reglas de negocio.
                        </p>
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