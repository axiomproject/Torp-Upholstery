import { Button } from '@/components/ui/button';
import heroImage from '@/assets/elegant-sofa.jpg';
import { ArrowRight, Play } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Elegant business interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Main Hero Content */}
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