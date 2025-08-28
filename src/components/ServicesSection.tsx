import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Wrench,
  Package,
  Ruler,
  Ship,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

interface ServicesSectionProps {
  onNavigate: (section: string) => void;
}

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className: string;
  IconComponent: any;
}

const ImageWithFallback = ({ src, alt, className, IconComponent }: ImageWithFallbackProps) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={`${className} bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center`}>
        <div className="text-center">
          <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-2">
            <IconComponent className="w-6 h-6 text-accent" />
          </div>
          <p className="text-sm text-muted-foreground">Image unavailable</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setHasError(true)}
    />
  );
};

const ServicesSection = ({ onNavigate }: ServicesSectionProps) => {
  const services = [
    {
      id: 1,
      title: 'Trekking Furniture',
      description: 'Professional stripping, removal, and reinstallation of upholstery for chairs, sofas, cushions, and more. Ideal when furniture needs to be pulled apart for transport, restoration, or reupholstery.',
      icon: Package,
      features: ['Upholstery removal and refit', 'Chairs, sofas, pillows, and benches', 'Careful labeling and protection', 'Ready for transport or repair'],
      color: 'text-accent',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1600',
      imageAlt: 'Interior design of home'
    },
    {
      id: 2,
      title: 'Restopping (Restuffing)',
      description: 'Renew comfort and support with high‑quality restuffing for seats and cushions. We restore shape, firmness, and ergonomics while retaining your existing covers when possible.',
      icon: Ruler,
      features: ['Seat and back cushion restuffing', 'High‑density foam and fiber fill', 'Shape and support restoration', 'Optional firmness levels'],
      color: 'text-primary',
      image: 'https://images.pexels.com/photos/33591729/pexels-photo-33591729.jpeg?auto=compress&cs=tinysrgb&w=1600',
      imageAlt: 'Cozy interior seating suitable for upholstery restuffing inspiration'
    },
    {
      id: 3,
      title: 'Repairs',
      description: 'Repair and restoration for modern and classic furniture. From broken frames and springs to torn seams and worn foam, we bring your pieces back to like‑new condition.',
      icon: Wrench,
      features: ['Frame and spring repairs', 'Seam and stitching fixes', 'Foam replacement', 'Minor refinishing touch‑ups'],
      color: 'text-accent',
      image: 'https://images.pexels.com/photos/5095274/pexels-photo-5095274.jpeg?auto=compress&cs=tinysrgb&w=1600',
      imageAlt: 'Close-up repair work illustrating craftsmanship'
    },
    {
      id: 4,
      title: 'Products for Boats',
      description: 'Custom marine upholstery and accessories: boat cushions, helm seats, and canvas work. We also handle marine cable and stitching repairs built to withstand sun and saltwater.',
      icon: Ship,
      features: ['Custom boat pillows and seats', 'Marine‑grade fabrics and foam', 'Canvas and stitching repairs', 'Boat cable repair'],
      color: 'text-primary',
      image: 'https://images.pexels.com/photos/803946/pexels-photo-803946.jpeg?auto=compress&cs=tinysrgb&w=1600',
      imageAlt: 'Boat by the seashore with marine upholstery needs'
    },
    {
      id: 5,
      title: 'Cutting of Foam Plastic',
      description: 'In‑house foam department for precise foam cutting. We provide custom dimensions, shapes, and firmness for cushions, benches, and special projects.',
      icon: Ruler,
      features: ['Custom sizes and profiles', 'Multiple densities and firmness levels', 'Templates and pattern cutting', 'Fast in‑house turnaround'],
      color: 'text-accent',
      image: 'https://images.pexels.com/photos/10000114/pexels-photo-10000114.jpeg?auto=compress&cs=tinysrgb&w=1600',
      imageAlt: 'Foam cutting process in a workshop'
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Upholstery expertise for homes, businesses, and boats — from careful dismantling and repairs to custom foam cutting and marine products.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id} 
                className="group hover:shadow-elegant transition-smooth border-0 shadow-card hover:-translate-y-2 bg-card"
              >
                <CardHeader className="pb-4">
                  <div className="mb-4 overflow-hidden rounded-lg aspect-[16/9] bg-muted">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                      IconComponent={IconComponent}
                    />
                  </div>
                  <div className={`w-12 h-12 ${service.color} bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-primary">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-smooth"
                    onClick={() => onNavigate('contact')}
                  >
                    Get a Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center gradient-hero rounded-2xl p-12 shadow-elegant">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">
            Ready to Refresh Your Furniture?
          </h3>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Tell us about your project and we will recommend the right materials and methods.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="px-8 py-4 text-lg font-semibold shadow-card hover:shadow-elegant transition-smooth"
            onClick={() => onNavigate('contact')}
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;