import { 
  Cpu, 
  BarChart3, 
  Clock, 
  Database,
  ArrowUpRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  {
    icon: Clock,
    title: "Ahorro de Tiempo",
    description: "Eliminamos tareas repetitivas. Lo que antes tomaba horas, ahora sucede en segundos.",
    color: "text-blue-500",
    bg: "bg-blue-50"
  },
  {
    icon: Database,
    title: "Del Excel al Software",
    description: "Centraliza tu información. Olvida las hojas de cálculo desconectadas y los errores manuales.",
    color: "text-emerald-500",
    bg: "bg-emerald-50"
  },
  {
    icon: Cpu,
    title: "Automatización Total",
    description: "Conectamos tus herramientas y creamos flujos de trabajo que funcionan mientras duermes.",
    color: "text-purple-500",
    bg: "bg-purple-50"
  },
  {
    icon: BarChart3,
    title: "Escalabilidad",
    description: "Sistemas diseñados para crecer contigo. Tu infraestructura no será un cuello de botella.",
    color: "text-amber-500",
    bg: "bg-amber-50"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            ¿Por qué <span className="text-primary">LiberTime</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            No solo escribimos código. Diseñamos sistemas que liberan el potencial humano de tu empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group border-none shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${feature.bg}`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
                <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Saber más <ArrowUpRight className="ml-1 w-4 h-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
