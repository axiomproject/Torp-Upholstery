import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, Camera, Image as ImageIcon } from 'lucide-react';

const PicturesSection = () => {
  // Placeholder for pictures - user will add later
  const placeholderCategories = [
    {
      title: 'Office & Facilities',
      description: 'Our modern workspace and professional environment',
      count: 0
    },
    {
      title: 'Team Events',
      description: 'Company gatherings and team building activities',
      count: 0
    },
    {
      title: 'Client Projects',
      description: 'Showcase of our successful client collaborations',
      count: 0
    },
    {
      title: 'Awards & Recognition',
      description: 'Achievements and industry acknowledgments',
      count: 0
    }
  ];

  return (
    <section id="pictures" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our visual story through professional photography showcasing our work, 
            team, and achievements.
          </p>
        </div>

        {/* Gallery Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {placeholderCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-smooth border-0 shadow-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-smooth">
                  <Camera className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{category.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                <div className="text-2xl font-bold text-accent mb-2">{category.count}</div>
                <div className="text-xs text-muted-foreground">Photos</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Placeholder Content */}
        <div className="text-center">
          <div className="max-w-md mx-auto bg-card rounded-lg p-8 shadow-card border-2 border-dashed border-accent/30">
            <ImageIcon className="w-16 h-16 text-accent/50 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-2">Coming Soon</h3>
            <p className="text-muted-foreground mb-6">
              Our professional photo gallery is being curated. Check back soon to see our 
              latest work and behind-the-scenes moments.
            </p>
            <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              <Upload className="w-4 h-4 mr-2" />
              Upload Photos
            </Button>
          </div>
        </div>

        {/* Featured Preview */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center group hover:shadow-elegant transition-smooth">
              <div className="text-center">
                <ImageIcon className="w-12 h-12 text-accent/60 mx-auto mb-2" />
                <p className="text-muted-foreground text-sm">Preview {item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PicturesSection;