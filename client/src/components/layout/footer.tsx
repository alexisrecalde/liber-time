import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/">
              <a className="text-2xl font-bold font-heading flex items-center gap-2 mb-6">
                <span className="bg-primary text-white w-8 h-8 flex items-center justify-center rounded-lg">L</span>
                <span>Liber<span className="text-primary">Time</span></span>
              </a>
            </Link>
            <p className="text-gray-400 max-w-sm mb-6">
              Expertos en automatización de procesos y desarrollo de software a medida. Ayudamos a empresas a escalar recuperando su tiempo.
            </p>
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} LiberTime. Todos los derechos reservados.
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Empresa</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Carreras</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidad</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Servicios</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Consultoría</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Desarrollo a Medida</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Automatización</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Auditoría Digital</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
