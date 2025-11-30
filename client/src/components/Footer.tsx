import { Link } from "wouter";
import { Award, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Column 1: Business Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#3070B6] to-[#52ABBD] rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">
                  Extreme Awards
                </span>
                <span className="text-xs text-gray-400 leading-tight">
                  & Personalization
                </span>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Your trusted partner for custom trophies, awards, plaques, and engraving services in Arden, North Carolina.
            </p>
            <p className="text-sm text-gray-400">
              Celebrating excellence since day one.
            </p>
          </div>

          {/* Column 2: Quick Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#B7CC5A]">Quick Contact</h3>
            <div className="space-y-3">
              <a 
                href="tel:+18285551234" 
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group"
              >
                <Phone className="w-5 h-5 text-[#52ABBD] group-hover:text-[#60B25D]" />
                <span>(828) 555-1234</span>
              </a>
              <a 
                href="mailto:info@extremeawards.com" 
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group"
              >
                <Mail className="w-5 h-5 text-[#52ABBD] group-hover:text-[#60B25D]" />
                <span>info@extremeawards.com</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-[#52ABBD] mt-1 flex-shrink-0" />
                <span>Arden, North Carolina</span>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-2">Business Hours:</p>
              <p className="text-sm text-gray-300">Mon-Fri: 9:00 AM - 6:00 PM</p>
              <p className="text-sm text-gray-300">Sat: 10:00 AM - 4:00 PM</p>
              <p className="text-sm text-gray-300">Sun: Closed</p>
            </div>
          </div>

          {/* Column 3: Quick Links & Tagline */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#B7CC5A]">Quick Links</h3>
            <nav className="space-y-2 mb-6">
              <Link href="/">
                <a className="block text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </Link>
              <Link href="/services">
                <a className="block text-gray-300 hover:text-white transition-colors">
                  Services
                </a>
              </Link>
              <Link href="/about">
                <a className="block text-gray-300 hover:text-white transition-colors">
                  About
                </a>
              </Link>
              <Link href="/contact">
                <a className="block text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </Link>
            </nav>
            <div className="bg-gradient-to-r from-[#3070B6] to-[#52ABBD] rounded-lg p-4 text-center">
              <p className="font-semibold text-lg mb-1">We Create Lasting Memories</p>
              <p className="text-sm opacity-90">Quality craftsmanship you can trust</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Extreme Awards & Personalization. All rights reserved.
            </p>
            <p className="text-sm text-gray-400">
              Proudly serving Arden and Western North Carolina
            </p>
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              Created by{" "}
              <a
                href="https://carolinacraftsites.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors underline"
              >
                Carolina Craft Sites
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}