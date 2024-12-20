import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed w-full bg-neutral-950/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-2xl font-bold text-primary">
            JamesSaahKollie-Portfolio
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <ul className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block px-3 py-2 text-gray-300 hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar