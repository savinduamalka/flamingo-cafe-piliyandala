import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-accent-light">Flamingo</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Experience exceptional dining in Piliyandala. Casual elegance meets delicious cuisine with our BYOB policy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-accent-light">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/menu" className="text-muted-foreground hover:text-accent-light transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/reservations" className="text-muted-foreground hover:text-accent-light transition-colors">
                  Reservations
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-muted-foreground hover:text-accent-light transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-accent-light transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-accent-light">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="text-accent mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">Piliyandala, Sri Lanka</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-accent flex-shrink-0" />
                <span className="text-muted-foreground">+94 77 123 4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-accent flex-shrink-0" />
                <span className="text-muted-foreground">info@flamingo.lk</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-accent-light">Opening Hours</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start space-x-2">
                <Clock size={16} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-primary-foreground">Mon - Fri</p>
                  <p>11:00 AM - 10:00 PM</p>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Clock size={16} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-primary-foreground">Sat - Sun</p>
                  <p>10:00 AM - 11:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent/20 mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Flamingo Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
