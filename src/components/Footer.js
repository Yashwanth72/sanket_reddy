import { Link } from "react-router-dom"
import { Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="footer-title">Sanket Reddy</h3>
            <p className="footer-text">
              Wildlife photographer dedicated to conservation through powerful visual storytelling.
            </p>
            <div className="footer-social">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <Youtube className="w-5 h-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <Link to="/gallery" className="footer-link">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/tnr-trust" className="footer-link">
                  TNR Trust
                </Link>
              </li>
              <li>
                <Link to="/media" className="footer-link">
                  Media Coverage
                </Link>
              </li>
              <li>
                <Link to="/blog" className="footer-link">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="footer-title">Services</h3>
            <ul className="footer-links">
              <li>
                <Link to="/services" className="footer-link">
                  Print Orders
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">
                  Image Licensing
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">
                  Workshops
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">
                  Expeditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="footer-title">Contact</h3>
            <ul className="footer-contact">
              <li className="footer-contact-item">
                <Mail className="footer-contact-icon" />
                <span>contact@sanketreddy.com</span>
              </li>
              <li className="footer-contact-item">
                <Phone className="footer-contact-icon" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="footer-contact-item">
                <MapPin className="footer-contact-icon" />
                <span>Photography Studio, 123 Wildlife Ave, Nature City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Sanket Reddy Photography. All rights reserved.
          </p>
          <div className="footer-legal">
            <Link to="/privacy-policy" className="footer-legal-link">
              Privacy Policy
            </Link>
            <Link to="/terms" className="footer-legal-link">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
