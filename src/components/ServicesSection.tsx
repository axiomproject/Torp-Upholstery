import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Target, 
  TrendingUp, 
  Users, 
  Shield, 
  Lightbulb, 
  Settings,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

interface ServicesSectionProps {
  onNavigate: (section: string) => void;
}

const ServicesSection = ({ onNavigate }: ServicesSectionProps) => {
  const services = [
    {
      id: 1,
      title: 'Strategic Consulting',
      description: 'Comprehensive business strategy development and implementation guidance.',
      icon: Target,
      features: ['Market Analysis', 'Competitive Intelligence', 'Growth Planning', 'Risk Assessment'],
      color: 'text-accent'
    },
    {
      id: 2,
      title: 'Business Growth',
      description: 'Accelerate your business growth with proven strategies and methodologies.',
      icon: TrendingUp,
      features: ['Revenue Optimization', 'Market Expansion', 'Sales Enhancement', 'Performance Metrics'],
      color: 'text-primary'
    },
    {
      id: 3,
      title: 'Team Development',
      description: 'Build high-performing teams through leadership and organizational development.',
      icon: Users,
      features: ['Leadership Training', 'Team Building', 'Skill Development', 'Culture Transformation'],
      color: 'text-accent'
    },
    {
      id: 4,
      title: 'Risk Management',
      description: 'Comprehensive risk assessment and mitigation strategies for your business.',
      icon: Shield,
      features: ['Risk Assessment', 'Compliance Management', 'Crisis Planning', 'Security Protocols'],
      color: 'text-primary'
    },
    {
      id: 5,
      title: 'Innovation Solutions',
      description: 'Drive innovation and digital transformation across your organization.',
      icon: Lightbulb,
      features: ['Digital Strategy', 'Process Innovation', 'Technology Integration', 'Change Management'],
      color: 'text-accent'
    },
    {
      id: 6,
      title: 'Operational Excellence',
      description: 'Optimize operations for maximum efficiency and sustainable growth.',
      icon: Settings,
      features: ['Process Optimization', 'Quality Management', 'Resource Planning', 'Efficiency Metrics'],
      color: 'text-primary'
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Our Professional Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive business solutions designed to drive growth, optimize operations, 
            and deliver measurable results for organizations of all sizes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id} 
                className="group hover:shadow-elegant transition-smooth border-0 shadow-card hover:-translate-y-2 bg-card"
              >
                <CardHeader className="pb-4">
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
                    Learn More
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
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can help you achieve your business objectives 
            and drive sustainable growth.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="px-8 py-4 text-lg font-semibold shadow-card hover:shadow-elegant transition-smooth"
            onClick={() => onNavigate('contact')}
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;