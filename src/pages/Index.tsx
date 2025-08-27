import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import EmployeesSection from '@/components/EmployeesSection';
import ServicesSection from '@/components/ServicesSection';
import PicturesSection from '@/components/PicturesSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  // Smooth scroll to section
  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setActiveSection(sectionId);
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'employees', 'services', 'pictures', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Header onNavigate={handleNavigate} activeSection={activeSection} />
      
      <main>
        <HeroSection onNavigate={handleNavigate} />
        <EmployeesSection />
        <ServicesSection onNavigate={handleNavigate} />
        <PicturesSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 gradient-accent rounded-lg flex items-center justify-center mr-3">
                  <span className="text-accent-foreground font-bold text-lg">L</span>
                </div>
                <span className="text-xl font-semibold">Your Business</span>
              </div>
              <p className="text-primary-foreground/80 mb-4 max-w-md">
                Delivering excellence in professional services with innovation, expertise, 
                and unwavering commitment to our clients' success.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><button onClick={() => handleNavigate('hero')} className="hover:text-accent transition-fast">Home</button></li>
                <li><button onClick={() => handleNavigate('employees')} className="hover:text-accent transition-fast">Team</button></li>
                <li><button onClick={() => handleNavigate('services')} className="hover:text-accent transition-fast">Services</button></li>
                <li><button onClick={() => handleNavigate('contact')} className="hover:text-accent transition-fast">Contact</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-primary-foreground/80 text-sm">
                <li>123 Professional Avenue</li>
                <li>Business City, BC 12345</li>
                <li>+1 (555) 123-4567</li>
                <li>info@company.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 Your Business. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
