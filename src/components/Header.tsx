import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';

interface HeaderProps {
  onNavigate: (section: string) => void;
  activeSection: string;
}

const Header = ({ onNavigate, activeSection }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'HOME' },
    { id: 'employees', label: 'EMPLOYEES' },
    { id: 'services', label: 'SERVICES' },
    { id: 'pictures', label: 'PICTURES' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Contact Bar */}
      <div className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-primary text-primary-foreground' 
          : 'bg-transparent text-primary-foreground'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 py-2 text-sm">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <span>+47 69 34 69 08</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span>postmaster@torpmobel.no</span>
            </div>
          </div>
        </div>
        <div className={`w-full h-px transition-colors ${
          isScrolled ? 'bg-white/30' : 'bg-white/10'
        }`}></div>
      </div>

      {/* Main Header */}
      <div className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/70 backdrop-blur-md shadow-header' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-smooth ${
            isScrolled ? 'h-16' : 'h-20'
          }`}>
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className={`${isScrolled ? 'w-20 h-20' : 'w-24 h-24'} overflow-hidden rounded-lg transition-smooth`}>
                <img 
                  src="/1.jpg" 
                  alt="Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm font-medium transition-fast hover:text-accent ${
                    activeSection === item.id
                      ? 'text-accent border-b-2 border-accent'
                      : isScrolled
                      ? 'text-foreground'
                      : 'text-primary-foreground drop-shadow-sm'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => { setIsMobileMenuOpen(!isMobileMenuOpen); (e.currentTarget as HTMLButtonElement).blur(); }}
                className={`${
                  isScrolled 
                    ? 'text-foreground hover:text-accent' 
                    : 'text-primary-foreground hover:text-accent drop-shadow-sm'
                } bg-transparent hover:bg-transparent focus-visible:ring-0 focus-visible:outline-none focus-visible:ring-offset-0 active:bg-transparent`}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/95 backdrop-blur-md border-t border-accent/20">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`block px-3 py-2 text-sm font-medium transition-fast hover:text-accent w-full text-left ${
                      activeSection === item.id
                        ? 'text-accent bg-accent/10'
                        : 'text-foreground'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;