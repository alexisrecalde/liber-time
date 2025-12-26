import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
    name: z.string().min(2, "El nombre es muy corto"),
    email: z.string().email("Email inválido"),
    company: z.string().min(2, "Empresa requerida"),
    message: z.string().min(10, "Contanos un poco más sobre tu necesidad"),
});

export default function Contact() {
    const { toast } = useToast();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            company: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast({
            title: "¡Mensaje enviado!",
            description: "Te contactamos pronto para recuperar tu tiempo.",
        });
        form.reset();
    }

    return (
        <section id="contact" className="py-24 bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-4">Hablemos de tu tiempo</h2>
                            <p className="text-lg text-muted-foreground">
                                ¿Listo para dejar de apagar incendios? Agendá una consulta gratuita de 30 minutos y descubramos juntos dónde podés empezar a ahorrar tiempo hoy.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="font-bold">Email</div>
                                    <div className="text-muted-foreground">contacto@liber-time.com</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="font-bold">Ubicación</div>
                                    <div className="text-muted-foreground">Buenos Aires, Argentina (y Remoto)</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Card className="border-none shadow-xl">
                        <CardContent className="p-8">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Nombre Completo</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Tu nombre" {...field} className="h-12 bg-secondary/50" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <div className="grid grid-cols-2 gap-4">
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Email</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="tu@empresa.com" {...field} className="h-12 bg-secondary/50" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="company"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Empresa</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Nombre de tu empresa" {...field} className="h-12 bg-secondary/50" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>¿Qué proceso te quita más tiempo?</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder="Contanos brevemente cuál es tu mayor dolor de cabeza operativo..."
                                                        className="min-h-[120px] bg-secondary/50 resize-none"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button type="submit" size="lg" className="w-full rounded-full h-12 text-base">
                                        Solicitar diagnóstico gratuito
                                    </Button>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}