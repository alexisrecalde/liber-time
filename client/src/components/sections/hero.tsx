import { ArrowRight, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/abstract_digital_data_flow_transforming_into_order.png";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-linear-to-b from-background to-white">
            <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -z-10 -translate-x-1/2" />

            <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 animate-fade-up">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Automatización Inteligente
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
                        Recuperá tu recurso más valioso: <span className="text-gradient">el tiempo.</span>
                    </h1>

                    <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                        Creamos software a medida y automatizamos procesos para que dejes de trabajar EN tu negocio y empieces a trabajar PARA él.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                            size="lg"
                            className="rounded-full text-lg px-8 h-14 shadow-lg shadow-primary/20"
                            onClick={() => {
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Agendar diagnóstico gratuito
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>

                    <div className="pt-8 flex items-center gap-8 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-primary" />
                            <span>Ahorrá +20hs/semana</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Zap className="w-5 h-5 text-accent" />
                            <span>Implementación rapida</span>
                        </div>
                    </div>
                </div>

                <div className="relative lg:h-[600px] flex items-center justify-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
                    <div className="relative w-full aspect-square max-w-[600px]">
                        <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-white/20 animate-[float_6s_ease-in-out_infinite]">
                            <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent z-10 mix-blend-overlay" />
                            <img
                                src={heroImage}
                                alt="Visualización de transformación digital"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-border/50 animate-[float_8s_ease-in-out_infinite_reverse] z-20 max-w-[200px]">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                    <Zap className="w-5 h-5 text-green-600" />
                                </div>
                                <div>
                                    <div className="text-xs text-muted-foreground">Eficiencia</div>
                                    <div className="font-bold text-foreground">+150%</div>
                                </div>
                            </div>
                            <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                                <div className="h-full bg-green-500 w-[85%] rounded-full" />
                            </div>
                        </div>

                        <div className="absolute top-10 -right-6 bg-white p-4 rounded-xl shadow-xl border border-border/50 animate-[float_7s_ease-in-out_infinite] z-20">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                    <Clock className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <div className="font-bold text-foreground">Procesos Auto</div>
                                    <div className="text-xs text-green-600">Activo ahora</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}