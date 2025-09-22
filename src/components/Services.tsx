import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import microwaveImage from "@/assets/microwave.jpg";
import refrigeratorImage from "@/assets/refrigerator.jpg";
import washingMachineImage from "@/assets/washing-machine.jpg";

const Services = () => {
  const services = [
    {
      title: "Microwave Transportation",
      description: "Safe and secure shipping of microwave ovens with specialized packaging and climate-controlled vehicles.",
      image: microwaveImage,
      features: ["Vibration protection", "Temperature control", "Insurance included"]
    },
    {
      title: "Refrigerator Shipping",
      description: "Professional transportation of refrigerators and freezers with upright positioning and proper securing.",
      image: refrigeratorImage,
      features: ["Upright transport", "Specialized equipment", "Door-to-door service"]
    },
    {
      title: "Washing Machine Delivery",
      description: "Expert handling of washing machines and dryers with water damage protection and careful loading.",
      image: washingMachineImage,
      features: ["Water protection", "Professional handling", "Setup assistance"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Electronics Transportation Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized shipping solutions for electronic appliances with industry-leading 
            safety standards and professional handling protocols.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="shadow-card-custom hover:shadow-corporate transition-all duration-300 group">
              <CardHeader className="p-0">
                <div className="aspect-video rounded-t-lg overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-3">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground mb-4 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full" variant="outline">
                  Request Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-primary text-white px-8 py-6 shadow-corporate">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;