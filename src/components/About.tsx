import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, MapPin, Clock } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Satisfied Customers" },
    { icon: Award, value: "10+", label: "Years Experience" },
    { icon: MapPin, value: "50", label: "States Covered" },
    { icon: Clock, value: "99.9%", label: "On-Time Delivery" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About WORLAND BROKERAGE LLC
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Based in Worland, Wyoming, WORLAND BROKERAGE LLC has been a trusted leader 
                in electronics transportation for over a decade. We specialize in the safe, 
                secure, and timely delivery of electronic appliances across the United States.
              </p>
              <p>
                Our team of experienced professionals understands the unique requirements 
                of shipping electronic devices. From delicate components to large appliances, 
                we ensure every item reaches its destination in perfect condition.
              </p>
              <p>
                With our state-of-the-art fleet, comprehensive insurance coverage, and 
                commitment to customer satisfaction, we've built a reputation as the 
                go-to choice for businesses and individuals who demand excellence.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="shadow-card-custom">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;