import { Linkedin, Instagram, Github, Code, Heart, AtSign, Mail, Phone, MapPin, Rocket } from 'lucide-react'; 
import Link from 'next/link';

// Custom TikTok Icon
const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 7.34a1 1 0 0 1-1-1.1V5.5a4.5 4.5 0 0 0-4.5-4.5h-1a4.5 4.5 0 0 0-4.5 4.5v10.5a4.5 4.5 0 0 0 4.5 4.5h1a4.5 4.5 0 0 0 4.5-4.5v-1.1a1 1 0 0 1 1-1.1Z" />
    <path d="M10 4.5a4.5 4.5 0 0 0-4.5 4.5v1.06A5.44 5.44 0 0 1 10 10Z" />
  </svg>
);

export const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-gray-800 overflow-hidden">
      {/* Efectos de fondo sutiles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gray-800/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-gray-700/10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative container mx-auto px-6 py-16">
        {/* Call to Action Section */}
        
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Información Personal */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold text-white mb-6">Bryan Juarez Martinez</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start gap-3 text-gray-400 hover:text-white transition-colors duration-300">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:bjm.dev.soft@gmail.com" className="text-sm">bjm.dev.soft@gmail.com</a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3 text-gray-400">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">Ciudad de México, México</span>
              </div>
            </div>
          </div>
          
          {/* Enlaces Rápidos */}
          <div className="text-center">
            <h4 className="text-xl font-bold text-white mb-6">Enlaces Rápidos</h4>
            <div className="space-y-3">
              {[
                { href: '/#acerca', label: 'Sobre Mí' },
                { href: '/#servicios', label: 'Servicios' },
                { href: '/#portafolio', label: 'Portafolio' },
                { href: '/#tecnologias', label: 'Tecnologías' },
                { href: '/#contacto', label: 'Contacto' }
              ].map((link, i) => (
                <div key={i}>
                  <Link href={link.href}>
                    <span className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer text-sm font-medium">
                      {link.label}
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          
          {/* Redes Sociales */}
          <div className="text-center md:text-right">
            <h4 className="text-xl font-bold text-white mb-6">Sígueme</h4>
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              {[
                { href: "https://www.linkedin.com/in/jz-mtz-bryan", icon: Linkedin, label: "LinkedIn" },
                { href: "https://instagram.com/bry.andev", icon: Instagram, label: "Instagram" },
                { href: "https://tiktok.com/@bry.andev", icon: TikTokIcon, label: "TikTok" },
                { href: "https://github.com/bryanjzdev", icon: Github, label: "GitHub" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group p-3 bg-gray-900/50 border border-gray-700 rounded-xl text-gray-400 hover:text-white hover:border-gray-600 hover:bg-gray-900/70 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
            <p className="text-gray-500 text-sm">
              Conectemos y creemos algo increíble juntos
            </p>
          </div>
        </div>
        
        {/* Separador */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-500 text-sm mb-2">
              &copy; {new Date().getFullYear()} Bryan Juarez Martinez. Todos los derechos reservados.
            </p>
            <p className="text-gray-600 text-xs">
              Desarrollador Full Stack · Especialista en Soluciones Digitales
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <span>Hecho</span>
            <Code className="w-4 h-4" />
            <span>con</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>usando Next.js & Tailwind CSS</span>
          </div>
        </div>
        
        {/* Signature */}
        <div className="text-center mt-8 pt-6 border-t border-gray-900">
          <p className="text-gray-700 text-xs italic">
            "Cada línea de código es una oportunidad para crear algo extraordinario"
          </p>
        </div>
      </div>
    </footer>
  );
};