"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import FadeImage from "@/components/ui/fade-image";

export default function AdmissionsForm() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Auto-play functionality with reset capability
  const startAutoPlay = React.useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      if (api) {
        api.scrollNext();
      }
    }, 6000);
  }, [api]);

  const resetAutoPlay = React.useCallback(() => {
    startAutoPlay();
  }, [startAutoPlay]);

  React.useEffect(() => {
    if (!api) return;
    startAutoPlay();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [api, startAutoPlay]);

  const handlePrevious = () => {
    if (api) {
      api.scrollPrev();
      resetAutoPlay();
    }
  };

  const handleNext = () => {
    if (api) {
      api.scrollNext();
      resetAutoPlay();
    }
  };

  const handleDotClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
      resetAutoPlay();
    }
  };
  return (
    <div className="py-10">
      <div className="relative mx-auto max-w-7xl h-[500px] rounded-3xl overflow-hidden">
        <FadeImage
          src="/cover-image.jpg"
          alt="Connect"
          fill
          priority
          className="object-cover"
        />
      </div>
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border border-border/50 bg-card/30 p-8 shadow-lg rounded-3xl">
            {/* Image */}
            <div className="relative w-full h-80 rounded-2xl overflow-hidden">
              <FadeImage
                src="/campus1.jpg"
                alt="1"
                fill
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">CAMPUS</h2>
              <p className="text-muted-foreground leading-relaxed">
                How rightly has Julia Morgan said, “Architecture is a visual
                art, and the buildings speak for themselves!” Walk through the
                gates of FKS campus and you will know how talkative and
                expressive the robust stone structure of FKS is! Look closely
                and you will find stories etched in eve. <br /> <br />
                By aligning it to the landscape and environment it was born in,
                the FKS building is built among the natural rock and lush
                greenery of the land and façades perfectly in its settings. We
                have adopted environment-friendly construction practices through
                un-plastered, load-bearing fly-ash, brick masonry walls and RCC
                surfaces.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border border-border/50 bg-card/30 p-8 shadow-lg rounded-3xl">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Allowing topography to lead architectural design and
                implementation, are 3 distinct structures for primary, middle
                school and high school integrating seamlessly through the
                landscape. These dainty buildings create a cohesive learning
                space between them that accommodates children and offers each
                phase of learning, exactly what it needs in terms of
                infrastructure. <br /> <br />
                Our space is a continuous work-in-progress, where our children
                help us plan, plant and care look after the landscape that
                consists of a variety of ever-evolving flora and fauna – a vital
                step in creating environmental awareness among them.
              </p>
            </div>
            <div className="relative w-full h-80 rounded-2xl overflow-hidden order-first lg:order-last">
              <FadeImage src="/campus2.jpg" alt="2" fill className="object-cover" />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border border-border/50 bg-card/30 p-8 shadow-lg rounded-3xl">
            {/* Image */}
            <div className="relative w-full h-80 rounded-2xl overflow-hidden">
              <FadeImage
                src="/22.jpg"
                alt="1"
                fill
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                With the outside world, we are connected through a wide network of school buses and transportation vans and inside, we are connected to one another through a seamless flow of spaces. We boast of a staff-room free school, classrooms with abundant natural light and ventilation and open spaces for children to use freely.
                <br /> <br />
                Choosing constructive over the destructive, including over excluding and being environment-friendly, FKS has kept in mind its inhabitants – the children – at the center of its philosophy always – and designed its spaces keeping in mind their age-groups, the climate and the maximum freedom that can be made available to them for their unhindered growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container max-w-container relative md:pb-10 lg:pt-10 mx-auto rounded-3xl overflow-hidden">
        <Carousel
          setApi={setApi}
          className="h-[80vh] min-h-[600px] w-full rounded-3xl overflow-hidden"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="rounded-3xl">
            {/* Slide 1: FKS Education Philosophy */}
            <CarouselItem className="rounded-3xl">
              <div className="relative h-[80vh] min-h-[600px] w-full flex items-end rounded-3xl overflow-hidden">
                <FadeImage
                  src="/item1.jpeg"
                  alt="1"
                  fill
                  className="absolute inset-0 object-cover rounded-3xl"
                />

                <div className="absolute inset-0 bg-black/40 rounded-3xl" />
              </div>
            </CarouselItem>

            {/* Slide 2: Organic Growth */}
            <CarouselItem className="rounded-3xl">
              <div className="relative h-[80vh] min-h-[600px] w-full flex items-end rounded-3xl overflow-hidden">
                <FadeImage
                  src="/item2.jpeg"
                  alt="2"
                  fill
                  className="absolute inset-0 object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-black/40 rounded-3xl" />
              </div>
            </CarouselItem>

            <CarouselItem className="rounded-3xl">
              <div className="relative h-[80vh] min-h-[600px] w-full flex items-end rounded-3xl overflow-hidden">
                <FadeImage
                  src="/item3.jpeg"
                  alt="2"
                  fill
                  className="absolute inset-0 object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-black/40 rounded-3xl" />
              </div>
            </CarouselItem>

            <CarouselItem className="rounded-3xl">
              <div className="relative h-[80vh] min-h-[600px] w-full flex items-end rounded-3xl overflow-hidden">
                <FadeImage
                  src="/item4.jpg"
                  alt="2"
                  fill
                  className="absolute inset-0 object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-black/40 rounded-3xl" />
              </div>
            </CarouselItem>

            <CarouselItem className="rounded-3xl">
              <div className="relative h-[80vh] min-h-[600px] w-full flex items-end rounded-3xl overflow-hidden">
                <FadeImage
                  src="/item5.jpeg"
                  alt="2"
                  fill
                  className="absolute inset-0 object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-black/40 rounded-3xl" />
              </div>
            </CarouselItem>

            {/* Slide 3: Willingness to Learn */}
            <CarouselItem className="rounded-3xl">
              <div className="relative h-[80vh] min-h-[600px] w-full flex items-end rounded-3xl overflow-hidden">
                <FadeImage
                  src="/item6.jpg"
                  alt="Learning Journey"
                  fill
                  className="absolute inset-0 object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-black/40 rounded-3xl" />
              </div>
            </CarouselItem>

            {/* Slide 4: Future Generations */}
            <CarouselItem className="rounded-3xl">
              <div className="relative h-[80vh] min-h-[600px] w-full flex items-end rounded-3xl overflow-hidden">
                <FadeImage
                  src="/item7.jpg"
                  alt="Future Generations"
                  fill
                  className="absolute inset-0 object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-black/40 rounded-3xl" />
              </div>
            </CarouselItem>

            <CarouselItem className="rounded-3xl">
              <div className="relative h-[80vh] min-h-[600px] w-full flex items-end rounded-3xl overflow-hidden">
                <FadeImage
                  src="/item8.jpg"
                  alt="Future Generations"
                  fill
                  className="absolute inset-0 object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-black/40 rounded-3xl" />
              </div>
            </CarouselItem>
          </CarouselContent>

          {/* Navigation Arrows with Reset Functionality */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-background/90 rounded-full p-2 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-background/90 rounded-full p-2 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Progress Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-full p-2 flex space-x-1">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    current === index + 1
                      ? "bg-primary scale-125"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="absolute top-4 right-4 z-10">
            <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-full p-2">
              <div className="flex space-x-1">
                {Array.from({ length: count }).map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      current === index + 1
                        ? "bg-primary w-8"
                        : "bg-muted-foreground/30 w-4"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Carousel>
      </section>
    </div>
  );
}
