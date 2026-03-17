import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 md:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="Vidya Vriksh" className="h-10 w-10 brightness-0 invert" />
            <span className="font-display text-xl font-bold">Vidya Vriksh Foundation</span>
          </div>
          <p className="font-body text-sm opacity-80 leading-relaxed max-w-xs">
            Empowering rural youth and adults through skill development, mentorship, and career guidance since 2018.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 font-body text-sm opacity-80">
            <li><Link to="/" className="hover:opacity-100 transition-opacity">Home</Link></li>
            <li><Link to="/events" className="hover:opacity-100 transition-opacity">Events</Link></li>
            <li><Link to="/feedback" className="hover:opacity-100 transition-opacity">Feedback</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 font-body text-sm opacity-80">
            <li>info@vidyavriksh.org</li>
            <li>+91 98765 43210</li>
            <li>Mumbai, Maharashtra, India</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-xs opacity-60">
          © {new Date().getFullYear()} Vidya Vriksh Foundation. All rights reserved.
        </p>
        <p className="font-body text-xs opacity-60 flex items-center gap-1">
          Made with <Heart size={12} className="text-accent" /> for rural India
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
