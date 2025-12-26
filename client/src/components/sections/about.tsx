import { Button } from "@/components/ui/button";

export default function About() {
    return (
        <section id="about" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                        "El tiempo es el único recurso que no se recupera. Nuestra misión es devolvértelo."
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 text-left mt-16 p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10">
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-accent">¿Cómo trabajamos?</h3>
                            <p className="text-primary-foreground/80 leading-relaxed">
                                Empezamos escuchando. Entendemos cómo opera tu negocio hoy antes de proponer nada. No traemos soluciones armadas: diseñamos herramientas únicas que se adaptan a tu forma de trabajar y te preparan para crecer.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-accent">¿Por qué software a medida?</h3>
                            <p className="text-primary-foreground/80 leading-relaxed">
                                Porque tu negocio no es estándar. Las herramientas genéricas tienen funciones que no necesitás y les falta justo lo que te haría la diferencia. Con software a medida pagás solo por lo que usás, es seguro, escalable y crece con vos.
                            </p>
                        </div>
                    </div>

                    <div className="pt-8 space-y-4">
                        <p className="text-2xl md:text-3xl font-bold text-accent">
                            Menos proceso, más negocio.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}