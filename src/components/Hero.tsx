import { Button } from "@/components/ui/button";
import { Truck, Shield, Clock, Phone } from "lucide-react";
import heroImage from "@/assets/logistics-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Professional Electronics
            <span className="block text-primary">Transportation</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Trusted nationwide shipping of electronic appliances with specialized handling, 
            insurance coverage, and on-time delivery guarantee.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg shadow-corporate">
              Get Free Quote
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-foreground px-8 py-6 text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 text-white">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Nationwide Coverage</h3>
                <p className="text-white/80 text-sm">All 50 states delivery</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 text-white">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Fully Insured</h3>
                <p className="text-white/80 text-sm">Complete protection coverage</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 text-white">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">On-Time Delivery</h3>
                <p className="text-white/80 text-sm">Guaranteed schedule</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;