'use client'; // Necesario para que las animaciones y eventos funcionen

import { motion } from 'framer-motion';
import { ArrowDown, Code, Database, Server, Cloud, BrainCircuit, ShoppingCart, Smartphone, LineChart, Bot, Mail, Linkedin, Rocket } from 'lucide-react';
import Image from 'next/image'; // Importar el componente Image

// Componente para el botón de scroll suave
const ScrollTo = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector(to)?.scrollIntoView({ behavior: 'smooth' });
  };
  return <a href={to} onClick={handleClick}>{children}</a>;
};

// Variantes de animación para Framer Motion
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeInOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function HomePage() {
  return (
    // Contenedor principal con esquema negro profesional
    <div className="min-h-screen bg-black text-gray-100 overflow-x-hidden relative">
      {/* Efectos de fondo sutiles en negro */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-800/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-gray-700/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-1/3 w-64 h-64 bg-gray-600/20 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>
      
      {/* Grid pattern overlay muy sutil */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.01)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none"></div>
      
      <div className="relative container mx-auto px-6">

        {/* --- SECCIÓN HERO --- */}
        <motion.section 
          id="hero" 
          className="min-h-screen flex flex-col justify-center items-center text-center relative z-10"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div 
            variants={fadeIn} 
            className="relative mb-8"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-gray-300/10 to-white/20 blur-2xl opacity-30 rounded-full"></div>
            <h1 className="relative text-5xl md:text-8xl font-black bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent tracking-tighter leading-tight">
              Bryan Juarez Martinez
            </h1>
          </motion.div>
          
          <motion.div variants={fadeIn} className="relative">
            <p className="text-2xl md:text-4xl font-light text-gray-300 mb-2">
              Desarrollador de Software Full Stack
            </p>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6"></div>
          </motion.div>
          
          <motion.p variants={fadeIn} className="max-w-3xl text-lg md:text-xl font-light leading-relaxed text-gray-400 mb-12">
            Convierto ideas complejas en soluciones de software elegantes, eficientes y escalables que impulsan el crecimiento del negocio.
          </motion.p>
          
          <motion.div variants={fadeIn} className="mb-16">
            <ScrollTo to="#contacto">
              <button className="group relative overflow-hidden bg-white text-black font-semibold py-4 px-10 rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-white/25">
                <span className="relative z-10 flex items-center gap-3">
                  <Rocket className="w-5 h-5" />
                  Iniciemos un Proyecto
                </span>
                <div className="absolute inset-0 bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </ScrollTo>
          </motion.div>
          
          <motion.div
            className="absolute bottom-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          >
            <ScrollTo to="#acerca">
              <div className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                <ArrowDown className="w-6 h-6 text-gray-400" />
              </div>
            </ScrollTo>
          </motion.div>
        </motion.section>

        {/* --- SECCIÓN ACERCA DE MÍ --- */}
        <motion.section 
          id="acerca" 
          className="py-32 relative z-10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
              Sobre Mí
            </h2>
            <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          </motion.div>
          
          <motion.div variants={fadeIn} className="max-w-6xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 md:p-12 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Columna de la imagen */}
                <motion.div 
                  variants={fadeIn}
                  className="flex justify-center lg:justify-start"
                >
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-gray-300/20 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative w-80 h-80 md:w-96 md:h-96 bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-2xl flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-gray-500">
                      <Image 
                        src="/bryan01.png" 
                        alt="Bryan Juarez Martinez - Desarrollador Full Stack" 
                        width={400}
                        height={400}
                        className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105" 
                      />
                    </div>
                  </div>
                </motion.div>
                
                {/* Columna del contenido */}
                <motion.div variants={fadeIn} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Mi Historia Profesional</h3>
                    <p className="text-lg leading-relaxed text-gray-300 mb-6">
                      Soy un apasionado Técnico y futuro Ingeniero de Software con una sólida experiencia en el ciclo completo de desarrollo, desde el diseño y la implementación hasta el mantenimiento de sistemas robustos.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-300">
                      Mi enfoque principal es la optimización de procesos y la resolución de problemas complejos, utilizando metodologías ágiles para entregar productos de alto impacto. Soy proactivo, orientado a resultados y estoy en un viaje de aprendizaje y mejora continua.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-700">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">2+</div>
                      <div className="text-gray-400 text-sm">Años de Experiencia</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">20+</div>
                      <div className="text-gray-400 text-sm">Proyectos Completados</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">15+</div>
                      <div className="text-gray-400 text-sm">Tecnologías Dominadas</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">100%</div>
                      <div className="text-gray-400 text-sm">Satisfacción del Cliente</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* --- SECCIÓN SERVICIOS --- */}
        <motion.section 
          id="servicios" 
          className="py-32 relative z-10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
              Cómo Puedo Impulsar Tu Negocio
            </h2>
            <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { title: "Software a la Medida", description: "Creo herramientas digitales precisas para tus necesidades: desde sistemas internos (CRM, ERP) hasta plataformas complejas que resuelven problemas específicos de tu operación y te dan una ventaja competitiva." },
              { title: "Automatización e IA", description: "Implemento automatizaciones y agentes de IA para optimizar tus operaciones, reducir costos y liberar a tu equipo para que se enfoque en tareas de alto valor. Aumenta la eficiencia y escala tu negocio." },
              { title: "Aplicaciones Móviles", description: "Diseño experiencias móviles nativas y multiplataforma que cautivan a tus usuarios. Creo aplicaciones intuitivas, rápidas y funcionales que fortalecen tu marca y abren nuevos canales de interacción." },
              { title: "Mantenimiento y Soporte Web", description: "Aseguro que tu sitio web o aplicación funcione sin interrupciones. Ofrezco planes de mantenimiento que incluyen actualizaciones de seguridad, optimización de velocidad y soporte técnico continuo." },
              { title: "Optimización de Rendimiento", description: "Analizo y mejoro la velocidad y eficiencia de tus aplicaciones existentes. Un sistema más rápido se traduce en una mejor experiencia de usuario, mayor retención y mejores resultados de negocio." },
              { title: "Consultoría Tecnológica", description: "Te guío en la elección de la arquitectura y herramientas adecuadas para tu proyecto. Tomar las decisiones correctas desde el inicio garantiza un producto escalable, seguro y a prueba de futuro." }
            ].map((service, i) => (
              <motion.div 
                key={i}
                variants={fadeIn} 
                className="group relative overflow-hidden"
              >
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700 p-8 rounded-2xl transition-all duration-500 hover:border-gray-600 hover:bg-gray-900/70 hover:transform hover:scale-105 shadow-xl">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gray-200 transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* --- SECCIÓN PORTAFOLIO --- */}
        <motion.section 
          id="portafolio" 
          className="py-32 relative z-10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
              Proyectos Destacados
            </h2>
            <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { title: "Sistema POS Restaurante", description: "Plataforma completa para gestión de ventas, inventario y reportes", tech: "Laravel • MySQL • Vue.js", category: "Web App" },
              { title: "App Financiera Móvil", description: "Aplicación para control de gastos personales con IA predictiva", tech: "React Native • Node.js • MongoDB", category: "Mobile App" },
              { title: "E-commerce Marketplace", description: "Plataforma multi-vendor con sistema de pagos integrado", tech: "Next.js • Stripe • PostgreSQL", category: "E-commerce" },
              { title: "Bot de Automatización", description: "Agente inteligente para atención al cliente 24/7", tech: "Python • OpenAI • FastAPI", category: "AI/Automation" },
              { title: "Dashboard Ejecutivo", description: "Panel de control con métricas en tiempo real para CEO", tech: "React • D3.js • Express", category: "Analytics" },
              { title: "Sistema ERP Pequeña Empresa", description: "Gestión integral de recursos y procesos empresariales", tech: "Django • PostgreSQL • Redis", category: "Enterprise" }
            ].map((project, i) => (
              <motion.div 
                key={i}
                variants={fadeIn} 
                className="group relative overflow-hidden bg-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-2xl transition-all duration-500 hover:border-gray-600 hover:bg-gray-900/60 hover:scale-105 shadow-xl"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs font-medium text-gray-500 bg-gray-800/50 px-2 py-1 rounded-lg">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-gray-200 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.split(' • ').map((tech, index) => (
                      <span key={index} className="text-xs text-gray-500 bg-gray-800/30 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* --- SECCIÓN TECNOLOGÍAS --- */}
        <motion.section 
          id="tecnologias" 
          className="py-32 relative z-10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
              Herramientas y Tecnologías
            </h2>
            <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          </motion.div>
          
          <motion.div variants={fadeIn} className="flex flex-wrap justify-center items-center gap-4 max-w-5xl mx-auto">
            {['Python', 'JavaScript', 'Vue', 'React', 'Next.js', 'Node.js', 'Express', 'Laravel', 'Django', 'Flask', 'PeopleSoft', 'PostgreSQL', 'MySQL', 'MongoDB', 'AWS', 'Git', 'Docker'].map((tech) => (
              <div 
                key={tech} 
                className="group bg-gray-900/50 backdrop-blur-sm border border-gray-700 text-gray-300 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-gray-900/70 hover:border-gray-600 hover:text-white hover:scale-105 shadow-lg"
              >
                <span className="relative z-10">{tech}</span>
              </div>
            ))}
          </motion.div>
        </motion.section>

        {/* --- SECCIÓN CONTACTO --- */}
        <motion.section 
          id="contacto" 
          className="py-32 text-center relative z-10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="relative mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-gray-300/10 to-white/20 blur-3xl opacity-30 rounded-full"></div>
            <h2 className="relative text-4xl md:text-6xl font-black bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent mb-6">
              Iniciemos Tu Próximo Gran Proyecto
            </h2>
          </motion.div>
          
          <motion.p variants={fadeIn} className="text-lg md:text-xl font-light mb-12 max-w-3xl mx-auto text-gray-400 leading-relaxed">
            Estoy disponible para nuevos desafíos y colaboraciones. Hablemos de cómo puedo ayudarte a alcanzar tus objetivos.
          </motion.p>
          
          <motion.div variants={fadeIn} className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
            <a 
              href="mailto:bjm.dev.soft@gmail.com" 
              className="group relative overflow-hidden w-full md:w-auto flex items-center justify-center gap-3 bg-white text-black font-semibold py-4 px-8 rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-white/25"
            >
              <Mail className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Envíame un Correo</span>
              <div className="absolute inset-0 bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/jz-mtz-bryan" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative overflow-hidden w-full md:w-auto flex items-center justify-center gap-3 bg-gray-900/50 backdrop-blur-sm border border-gray-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-500 transform hover:scale-105 hover:bg-gray-900/70 hover:shadow-2xl"
            >
              <Linkedin className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Mi Perfil de LinkedIn</span>
            </a>
          </motion.div>
          
          <motion.div variants={fadeIn} className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 max-w-2xl mx-auto shadow-2xl">
            <p className="text-gray-400 mb-4 font-light">O si prefieres, contáctame directamente:</p>
            <div className="space-y-2">
              <p className="font-semibold text-white flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                bjm.dev.soft@gmail.com
              </p>
            </div>
          </motion.div>
        </motion.section>

      </div>
    </div>
  );
}
