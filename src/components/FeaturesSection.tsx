import { Award, Users, Clock } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Award,
      title: "Quality Certificate",
      description: "We are concerned with quality and that it should be reflected in the job we do. Good quality ensures you as a happy customer."
    },
    {
      icon: Users,
      title: "Satisfied customers",
      description: "We believe that the best marketing is satisfied customers, and the customer's wishes are therefore the focus regardless of the size of the job."
    },
    {
      icon: Clock,
      title: "Redisibility and quality",
      description: "We are very keen to keep what we promise both in terms of agreed delivery time and quality of work performance."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index} 
                className="bg-card shadow-card rounded-lg p-8 text-center group hover:shadow-elegant transition-smooth"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;