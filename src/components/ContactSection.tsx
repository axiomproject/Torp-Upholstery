import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Building,
  Users,
  Award,
  Globe
} from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const partners = [
    {
      name: 'TechCorp Solutions',
      industry: 'Technology',
      partnership: 'Strategic Alliance',
      description: 'Leading technology innovation partner'
    },
    {
      name: 'Global Finance Group',
      industry: 'Financial Services',
      partnership: 'Preferred Partner',
      description: 'Comprehensive financial services provider'
    },
    {
      name: 'InnovateFirst Consulting',
      industry: 'Management Consulting',
      partnership: 'Collaboration Partner',
      description: 'Specialized management consulting expertise'
    },
    {
      name: 'DataDrive Analytics',
      industry: 'Data & Analytics',
      partnership: 'Technology Partner',
      description: 'Advanced analytics and insights platform'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your business needs? We're here to help you achieve your goals.
          </p>
        </div>

        {/* Map Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-semibold text-primary mb-8 text-center">Our Location</h3>
          <Card className="shadow-elegant border-0">
            <CardContent className="p-0">
              {/* Placeholder for map - would integrate with real map service */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-accent mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-primary mb-2">Torp Upholstery</h4>
                  <p className="text-muted-foreground">
                    Visit us at our location
                  </p>
                  <Button 
                    className="mt-4 gradient-accent text-accent-foreground"
                    onClick={() => window.open('https://www.google.com/maps/place/Torp+Upholstery/data=!4m2!3m1!1s0x0:0xa5b57ba0fe81f5a4?sa=X&ved=1t:2428&hl=en-NO&ictx=111', '_blank')}
                  >
                    Get Directions
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Customer Reviews */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-semibold text-primary mb-8 text-center">Customer Reviews</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="group hover:shadow-elegant transition-smooth border-0 shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Nice and smart people. know what they are doing!"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-primary">Alex Lindberg</p>
                  <p className="text-muted-foreground text-sm">1 year ago</p>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-smooth border-0 shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Good service reasonable price"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-primary">Moustafa Abdzeto</p>
                  <p className="text-muted-foreground text-sm">9 months ago</p>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-smooth border-0 shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "A nice upholsterer."
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-primary">Odd Ragnar Rossing</p>
                  <p className="text-muted-foreground text-sm">3 years ago</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Information & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-serif font-semibold text-primary mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <Card className="shadow-card border-0">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-2">Office Address</h4>
                      <p className="text-muted-foreground">
                        123 Professional Avenue, Suite 456<br />
                        Business City, BC 12345<br />
                        United States
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card border-0">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-2">Phone Number</h4>
                      <p className="text-muted-foreground">
                        +47 69 34 69 08
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card border-0">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-2">Email Addresses</h4>
                      <p className="text-muted-foreground">
                        General: info@company.com<br />
                        Sales: sales@company.com<br />
                        Support: support@company.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card border-0">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-2">Business Hours</h4>
                      <p className="text-muted-foreground">
                        Monday - Friday: 8:00 AM - 4:00 PM<br />
                        Weekends: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-serif font-semibold text-primary mb-8">Send Us a Message</h3>
            
            <Card className="shadow-elegant border-0">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="border-border focus:border-accent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="border-border focus:border-accent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-primary mb-2">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="border-border focus:border-accent"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-primary mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="border-border focus:border-accent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="border-border focus:border-accent resize-none"
                      placeholder="Tell us about your project or how we can help you..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full gradient-accent text-accent-foreground hover:scale-105 transition-smooth shadow-card"
                    size="lg"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;