'use client';

import { motion } from 'framer-motion';
import { DownloadCloud, FileText } from 'lucide-react';

const guiasDescargables = [
  {
    titulo: 'Guía inicial de SQL',
    descripcion: 'Un PDF con los fundamentos de SQL, ideal para quienes comienzan en el desarrollo backend y desean gestionar bases de datos de manera eficiente.',
    archivo: '/guias/SQL.pdf'
  },
  {
    titulo: 'Checklist para Lanzamiento de Proyectos',
    descripcion: 'Asegúrate de no olvidar ningún detalle crucial antes de publicar tu próximo sitio o aplicación web.',
    archivo: '/guias/checklist-lanzamiento.pdf'
  },
  {
    titulo: 'Buenas Prácticas en APIs RESTful',
    descripcion: 'Aprende a diseñar APIs escalables, seguras y fáciles de consumir con esta guía de referencia rápida.',
    archivo: '/guias/guia-apis.pdf'
  }
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeInOut" }
};

export default function RecursosPage() {
  return (
    <div className="bg-black text-gray-200">
      <div className="container mx-auto px-6 py-24">
        <motion.div 
          className="text-center"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter">Recursos Gratuitos</h1>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-400">
            He creado estas guías para compartir conocimiento y ayudar a la comunidad. ¡Espero que te sean de gran utilidad!
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          initial="initial"
          animate="animate"
          variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
        >
          {guiasDescargables.map((guia, index) => (
            <motion.div 
              key={index}
              variants={fadeIn}
              className="bg-gray-900/50 p-8 rounded-lg border border-gray-800 flex flex-col justify-between transition-all duration-300 hover:border-white hover:scale-105"
            >
              <div>
                <FileText className="w-8 h-8 text-white mb-4" />
                <h3 className="text-2xl font-bold text-white">{guia.titulo}</h3>
                <p className="mt-2 text-gray-400 flex-grow">{guia.descripcion}</p>
              </div>
              <a
                href={guia.archivo}
                download
                className="mt-6 inline-flex items-center justify-center gap-2 bg-white text-black font-semibold py-3 px-5 rounded-lg hover:bg-gray-300 transition-colors"
              >
                <DownloadCloud className="w-5 h-5" />
                Descargar PDF
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
