"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Instagram, Twitter, Youtube } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery" },
    { name: "TNR Trust", href: "/tnr-trust" },
    { name: "Media", href: "/media" },
    { name: "Blog", href: "/" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <>
      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Sanket Reddy
          </Link>

          {/* Desktop Navigation */}
          <nav className="navbar-nav">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href} className="navbar-link">
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Icons - Desktop */}
          <div className="navbar-social">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="navbar-social-link">
              <Instagram className="navbar-social-icon" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="navbar-social-link">
              <Twitter className="navbar-social-icon" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="navbar-social-link">
              <Youtube className="navbar-social-icon" />
              <span className="sr-only">YouTube</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X className="navbar-toggle-icon" /> : <Menu className="navbar-toggle-icon" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mobile-menu"
          >
            <div className="mobile-menu-container">
              <nav className="mobile-menu-nav">
                {navLinks.map((link) => (
                  <Link key={link.name} to={link.href} className="mobile-menu-link" onClick={closeMenu}>
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div className="mobile-menu-social">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-menu-social-link"
                >
                  <Instagram className="mobile-menu-social-icon" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-menu-social-link"
                >
                  <Twitter className="mobile-menu-social-icon" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-menu-social-link"
                >
                  <Youtube className="mobile-menu-social-icon" />
                  <span className="sr-only">YouTube</span>
                </a>
              </div>

              <div className="mobile-menu-cta">
                <Link to="/contact" onClick={closeMenu} className="btn btn-primary">
                  Contact Sanket
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
