import React from 'react';
import { Link } from 'react-router-dom';

const menuLinks = [
  { label: 'Explorar', path: '/servicios' },
  { label: 'Nosotros', path: '/nosotros' },
  { label: 'Servicios', path: '/servicios' },
  { label: 'Contáctanos', path: '/contacto' },
];

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61582174198846',
    className: 'hover:bg-[#1877f2] hover:border-[#1877f2]',
    icon: (
      <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
      </svg>
    )
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/arquitectu3120',
    className: 'hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:border-[#e6683c]',
    icon: (
      <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    )
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@brixaconstructora?_r=1&_t=ZS-96bdnsHg0Dk',
    className: 'hover:bg-black hover:border-[#69c9d0] hover:shadow-[0_4px_14px_rgba(105,201,208,0.3)] hover:text-[#69c9d0]',
    icon: (
      <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.73a8.16 8.16 0 004.77 1.52V6.79a4.85 4.85 0 01-1-.1z"/>
      </svg>
    )
  }

];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#2a2a2a] px-6 md:px-10 py-12 text-[#ccc]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-[1200px] mx-auto mb-10">
        
        {/* Brand Section */}
        <div className="flex flex-col gap-4">
          <Link to="/" className="block no-underline">
            <span className="text-xl font-bold tracking-tighter text-white flex flex-wrap gap-x-2">
              BRIXA <span className="text-[#cc0000]">HOME & BUILD</span>
            </span>
          </Link>
          <p className="text-[13px] text-[#888] leading-relaxed max-w-[220px]">
            Construimos valor, desarrollamos futuro con precisión y excelencia.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-1">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-10 h-10 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] transition-all duration-250 hover:-translate-y-1 hover:text-white text-[#888] ${social.className}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Explore Links */}
        <div className="flex flex-col">
          <h4 className="text-white text-[13px] tracking-[2px] uppercase mb-4 border-b-2 border-[#cc0000] pb-2 inline-block self-start font-sans">
            Explorar
          </h4>
          <ul className="space-y-2.5">
            {menuLinks.map((link, idx) => (
              <li key={`${link.path}-${idx}`}>
                <Link
                  to={link.path}
                  className="text-[#888] no-underline text-sm transition-colors duration-200 hover:text-[#cc0000]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Links */}
        <div className="flex flex-col">
          <h4 className="text-white text-[13px] tracking-[2px] uppercase mb-4 border-b-2 border-[#cc0000] pb-2 inline-block self-start font-sans">
            Servicios
          </h4>
          <ul className="space-y-2.5">
            <li><a href="#" className="text-[#888] no-underline text-sm transition-colors duration-200 hover:text-[#cc0000]">Construcción</a></li>
            <li><a href="#" className="text-[#888] no-underline text-sm transition-colors duration-200 hover:text-[#cc0000]">Remodelación</a></li>
            <li><a href="#" className="text-[#888] no-underline text-sm transition-colors duration-200 hover:text-[#cc0000]">Diseño</a></li>
            <li><a href="#" className="text-[#888] no-underline text-sm transition-colors duration-200 hover:text-[#cc0000]">Cotización</a></li>
          </ul>
        </div>

        {/* Contact Links */}
        <div className="flex flex-col">
          <h4 className="text-white text-[13px] tracking-[2px] uppercase mb-4 border-b-2 border-[#cc0000] pb-2 inline-block self-start font-sans">
            Contacto
          </h4>
          <ul className="space-y-2.5">
            <li>
              <a href="tel:+521234567890" className="text-[#888] no-underline text-sm transition-colors duration-200 hover:text-[#cc0000]">
                +52 123 456 7890
              </a>
            </li>
            <li>
              <a href="mailto:brixahomeybuild@gmail.com" className="text-[#888] no-underline text-sm transition-colors duration-200 hover:text-[#cc0000]">
                brixahomeybuild@gmail.com
              </a>
            </li>
            <li>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Calle+Loma+Bonita+Ampliacion+Santa+Catarina+Sin+Numero+Ext+3+Puebla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#888] no-underline text-sm transition-colors duration-200 hover:text-[#cc0000]"
              >
                Puebla, México
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1200px] mx-auto border-t border-[#222] pt-5 flex justify-between items-center flex-wrap gap-3">
        <p className="text-[12px] text-[#555]">
          &copy; {currentYear} <span className="text-[#cc0000]">Brixa Home & Build</span>. Todos los derechos reservados.
        </p>
        <p className="text-[11px] text-[#444]">Diseño & Construcción de calidad</p>
      </div>
    </footer>
  );
}
