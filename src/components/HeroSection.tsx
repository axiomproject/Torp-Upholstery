import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-business.jpg';
import { ArrowRight, Play } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional business environment" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-primary-foreground px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
          Excellence in
          <span className="block gradient-accent bg-clip-text text-transparent">
            Professional Services
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
          Delivering outstanding results through innovation, expertise, and unwavering commitment to our clients' success.
        </p>


        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 shadow-card">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">500+</div>
            <div className="text-primary-foreground/80">Satisfied Clients</div>
          </div>
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 shadow-card">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">10+</div>
            <div className="text-primary-foreground/80">Years Experience</div>
          </div>
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 shadow-card">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">24/7</div>
            <div className="text-primary-foreground/80">Professional Support</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;