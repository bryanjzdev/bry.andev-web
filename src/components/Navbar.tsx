'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const navLinks = [
    { name: 'Acerca de mí', href: '/#acerca' },
    { name: 'Servicios', href: '/#servicios' },
    { name: 'Proyectos', href: '/#portafolio' },
    { name: 'Recursos', href: '/recursos' },
    { name: 'Contacto', href: '/#contacto' },
  ];

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center border-b border-gray-800/50">
        <Link href="/" className="text-2xl font-bold text-white hover:text-gray-400 transition-colors">
          Bry<span className="text-gray-500">.andev</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-gray-300 hover:text-white transition-colors relative group">
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
        {/* Aquí podrías agregar un menú hamburguesa para móviles */}
      </nav>
    </motion.header>
  );
};
