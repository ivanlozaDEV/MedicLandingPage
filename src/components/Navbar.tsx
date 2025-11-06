'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#contacto', label: 'Contacto' },
  ]

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-4'
          : 'bg-gray-900/90 backdrop-blur-md shadow-md py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#inicio" 
            onClick={(e) => scrollToSection(e, '#inicio')}
            className="flex items-center gap-2 group"
          >
            <div className={`transition-colors duration-300 ${
              isScrolled ? 'text-medical' : 'text-medical'
            }`}>
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.5 3h-15A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3zM18 15.5a.5.5 0 01-.5.5h-3v3a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-3h-3a.5.5 0 01-.5-.5v-4a.5.5 0 01.5-.5h3v-3a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v3h3a.5.5 0 01.5.5v4z"/>
              </svg>
            </div>
            <span className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Medic<span className={`${isScrolled ? 'text-medical' : 'text-medical'}`}>Landing</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`font-medium transition-all duration-300 hover:text-medical relative group ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-medical transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#contacto"
              onClick={(e) => scrollToSection(e, '#contacto')}
              className="bg-medical hover:bg-medical-dark text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Agendar Cita
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/20 bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 mt-6' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-4 py-4 rounded-xl bg-white shadow-xl px-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-gray-700 hover:text-medical font-medium transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={(e) => scrollToSection(e, '#contacto')}
              className="bg-medical hover:bg-medical-dark text-white px-6 py-3 rounded-lg font-semibold transition-all text-center"
            >
              Agendar Cita
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
