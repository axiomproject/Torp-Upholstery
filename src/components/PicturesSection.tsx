import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';

const PicturesSection = () => {
  const images = [
    { src: '/gallery/1.jpg', alt: 'Gallery image 1' },
    { src: '/gallery/2.jpg', alt: 'Gallery image 2' },
    { src: '/gallery/3.jpg', alt: 'Gallery image 3' },
    { src: '/gallery/5.jpg', alt: 'Gallery image 5' },
    { src: '/gallery/6.jpg', alt: 'Gallery image 6' },
  ];

  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="pictures" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of our recent work and details.
          </p>
        </div>

        {/* Carousel */}
        <Card className="border-0 shadow-card">
          <div className="p-4 sm:p-6">
            <Carousel
              className="w-full"
              setApi={setApi}
              opts={{ loop: true, align: 'start' }}
            >
              <CarouselContent>
                {images.map((img, idx) => (
                  <CarouselItem key={idx} className="">
                    <div className="overflow-hidden rounded-xl bg-muted aspect-[16/9]">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default PicturesSection;