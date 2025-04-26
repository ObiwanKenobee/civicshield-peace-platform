
import { Shield, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-6 w-6 text-[#9b87f5]" />
              <span className="text-xl font-bold text-gray-900">CivicShield</span>
            </div>
            <p className="text-gray-600 mb-4">
              Building Trust, Protecting Peace. Where Law Enforcement and Communities Build Trust Together.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/civicshield" aria-label="Twitter" className="text-gray-500 hover:text-[#9b87f5]">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://linkedin.com/company/civicshield" aria-label="LinkedIn" className="text-gray-500 hover:text-[#9b87f5]">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-[#9b87f5]">About Us</Link></li>
              <li><Link to="/how-it-works" className="text-gray-600 hover:text-[#9b87f5]">How It Works</Link></li>
              <li><Link to="/success-stories" className="text-gray-600 hover:text-[#9b87f5]">Success Stories</Link></li>
              <li><Link to="/get-involved" className="text-gray-600 hover:text-[#9b87f5]">Get Involved</Link></li>
              <li><Link to="/press" className="text-gray-600 hover:text-[#9b87f5]">Press & Media</Link></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/resources/law-enforcement" className="text-gray-600 hover:text-[#9b87f5]">For Law Enforcement</Link></li>
              <li><Link to="/resources/communities" className="text-gray-600 hover:text-[#9b87f5]">For Communities</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-[#9b87f5]">Innovation Lab</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-[#9b87f5]">FAQ</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-[#9b87f5]">Privacy Policy</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#9b87f5] mt-0.5" />
                <span className="text-gray-600">Global HQ: Nairobi, Kenya</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#9b87f5]" />
                <span className="text-gray-600">+254 700 000000</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#9b87f5]" />
                <a href="mailto:info@civicshield.org" className="text-gray-600 hover:text-[#9b87f5]">info@civicshield.org</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} CivicShield. Building trust, protecting peace.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
