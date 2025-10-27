"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ArrowRight, Star, Users, Globe } from "lucide-react";
import FadeImage from "@/components/ui/fade-image";
import { Link } from "next-view-transitions";
import { Videos } from "@/components/videos";

export default function HomePage() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  const sections = [
    {
      title: "Environment",
      icon: Star,
      text: "Students are surrounded by an environment that nurtures curiosity, supports their growth, and empowers them to be their best selves.",
      image: "/Environment.jpg",
    },
    {
      title: "Exploration",
      icon: Users,
      text: "Opportunities to explore, experiment, and discover passions through meaningful, hands-on experiences.",
      image: "/Explore.jpg",
    },
    {
      title: "Experience",
      icon: Globe,
      text: "Experiences that build confidence, foster respect, and create lasting values beyond the classroom.",
      image: "/Experience.jpg",
    },
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

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
    <div className="min-h-screen px-4">
      <section className="container max-w-container relative md:pb-10 lg:pt-6 mx-auto rounded-3xl overflow-hidden">
        <Carousel
          setApi={setApi}
          className="h-[80vh] min-h-[600px] w-full rounded-3xl overflow-hidden"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="rounded-3xl">
            <CarouselItem className="rounded-3xl">
              <div className="relative h-[80vh] min-h-[600px] w-full flex items-end rounded-3xl overflow-hidden">
                <FadeImage
                  src="/playgrpbg1.jpg"
                  alt="FKS Education"
                  fill
                  className="absolute inset-0 object-cover rounded-3xl"
                />

                <div className="absolute inset-0 bg-black/40 rounded-3xl" />
                <div className="relative z-10 w-full px-4 pb-12 md:pb-16 lg:pb-20 max-w-7xl mx-auto">
                  <div className="max-w-xl md:max-w-2xl text-center md:text-left md:ml-8">
                    <h1 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight">
                      FKS gives the child an education as a &quot;child would
                      want it,&quot; where they are &quot;schooled for a journey
                      called life!&quot;
                    </h1>
                  </div>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem className="rounded-3xl">
              <div className="relative h-[80vh] min-h-[600px] w-full flex items-end rounded-3xl overflow-hidden">
                <FadeImage
                  src="/playgrp3.jpg"
                  alt="Organic Growth"
                  fill
                  className="absolute inset-0 object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-black/40 rounded-3xl" />
                <div className="relative z-10 w-full px-4 pb-12 md:pb-16 lg:pb-20 max-w-7xl mx-auto">
                  <div className="max-w-xl md:max-w-2xl text-center md:text-left md:ml-8">
                    <h2 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight">
                      We believe in organic growth from within because such a
                      change carries the power to transform self and others.
                    </h2>
                  </div>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem className="rounded-3xl">
              <div className="relative h-[80vh] min-h-[600px] w-full flex items-end rounded-3xl overflow-hidden">
                <FadeImage
                  src="/playgrpbg2.jpg"
                  alt="Future Generations"
                  fill
                  className="absolute inset-0 object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-black/40 rounded-3xl" />
                <div className="relative z-10 w-full px-4 pb-12 md:pb-16 lg:pb-20 max-w-7xl mx-auto">
                  <div className="max-w-xl md:max-w-2xl text-center md:text-left md:ml-8">
                    <h2 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight">
                      We work towards making the future generations responsible,
                      work with equanimity and integrity; Creating a strong
                      foundation where they balance head and heart.
                    </h2>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>

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
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border border-border/50 bg-card/30 p-8 shadow-lg rounded-3xl">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">ABOUT FKS</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                FKS was a dream born on 8 February 1997 with an objective to
                give the child an education as a “child would want it,” an
                education which fostered emotional balance, and an education
                that instilled integrity.
              </p>
              <Link
                href="/main-campus/our-story"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline transition-colors"
              >
                Know More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex justify-center lg:justify-end">
              <FadeImage
                src="/Check.png"
                alt="FKS Students"
                width={600}
                height={400}
                className="rounded-lg shadow-md max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Foundation of FKS Pedagogy is the
              <span className="text-primary"> 3Es</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Experience the difference that quality education makes in shaping
              successful futures
            </p>

            <div className="space-y-4">
              {sections.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all hover:-translate-y-1 ${
                    activeIndex === idx
                      ? "bg-primary/10 border-primary"
                      : "bg-card/40 border-border/50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 aspect-square rounded-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10 shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg">
            <FadeImage
              src={sections[activeIndex].image}
              alt={sections[activeIndex].title}
              fill
              className="object-cover transition-opacity duration-500"
              key={sections[activeIndex].image}
            />
          </div>
        </div>
      </section>

      <Videos />
    </div>
  );
}
