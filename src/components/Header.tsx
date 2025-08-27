import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

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
    { id: 'hero', label: 'FRONT PAGE' },
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-header' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-smooth ${
          isScrolled ? 'h-16' : 'h-20'
        }`}>
          {/* Logo placeholder */}
          <div className="flex-shrink-0">
            <div className={`${isScrolled ? 'w-12 h-12' : 'w-14 h-14'} gradient-primary rounded-lg flex items-center justify-center transition-smooth`}>
              <span className={`text-primary-foreground font-bold ${isScrolled ? 'text-xl' : 'text-2xl'} transition-smooth`}>L</span>
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
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${
                isScrolled 
                  ? 'text-foreground hover:text-accent' 
                  : 'text-primary-foreground hover:text-accent drop-shadow-sm'
              }`}
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
    </header>
  );
};

export default Header;