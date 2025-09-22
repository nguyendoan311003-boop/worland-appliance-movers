import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg"></div>
              <h3 className="text-2xl font-bold">WORLAND BROKERAGE LLC</h3>
            </div>
            <p className="text-secondary-foreground/80 mb-6 max-w-md">
              Professional electronics transportation services across the United States. 
              Trusted, insured, and reliable shipping solutions for your valuable appliances.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>921 Pulliam Avenue, Worland, WY 82401, USA</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span>email@worlandbrokerage.website</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>Microwave Transportation</li>
              <li>Refrigerator Shipping</li>
              <li>Washing Machine Delivery</li>
              <li>Electronics Insurance</li>
              <li>Nationwide Coverage</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Our Services</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-secondary-foreground/60">
            © 2024 WORLAND BROKERAGE LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;