"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ArrowRight, Star, Users, Globe } from "lucide-react";
import Image from "next/image";
import { Link } from "next-view-transitions";

export default function HomePage() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  const videos = [
    {
      thumbnailSrc: "https://i.ytimg.com/vi/xS7djhBbDs8/hqdefault.jpg",
      videoSrc: "https://www.youtube.com/watch?v=xS7djhBbDs8",
    },
    {
      thumbnailSrc: "https://i.ytimg.com/vi/0NNNSyuuzjA/hqdefault.jpg",
      videoSrc: "https://www.youtube.com/watch?v=0NNNSyuuzjA",
    },
    {
      thumbnailSrc: "https://i.ytimg.com/vi/J6DVgz5lcBw/hqdefault.jpg",
      videoSrc: "https://www.youtube.com/watch?v=J6DVgz5lcBw",
    },
    {
      thumbnailSrc: "https://i.ytimg.com/vi/4Vse_xpdj0w/hqdefault.jpg",
      videoSrc: "https://www.youtube.com/watch?v=4Vse_xpdj0w",
    },
  ];

  const founder_videos = [
    {
      thumbnailSrc: "https://i.ytimg.com/vi/8QboKvQ_V90/hqdefault.jpg",
      videoSrc: "https://www.youtube.com/watch?v=8QboKvQ_V90",
    },
    {
      thumbnailSrc: "https://i.ytimg.com/vi/4Vse_xpdj0w/hqdefault.jpg",
      videoSrc: "https://www.youtube.com/watch?v=4Vse_xpdj0w",
    },
    {
      thumbnailSrc: "https://i.ytimg.com/vi/r6HoUkqsibY/hqdefault.jpg",
      videoSrc: "https://www.youtube.com/watch?v=r6HoUkqsibY",
    },
    {
      thumbnailSrc: "https://i.ytimg.com/vi/pfREBI69jtk/hqdefault.jpg",
      videoSrc: "https://www.youtube.com/watch?v=pfREBI69jtk",
    },
    {
      thumbnailSrc: "https://i.ytimg.com/vi/0utH05N7j4w/hqdefault.jpg",
      videoSrc: "https://www.youtube.com/watch?v=0utH05N7j4w",
    },

    {
      thumbnailSrc: "https://i.ytimg.com/vi/DLKSWYdKTRI/hqdefault.jpg",
      videoSrc: "https://www.youtube.com/watch?v=DLKSWYdKTRI",
    },
  ];

  const sections = [
    {
      title: "Environment",
      icon: Star,
      text: "Students are surrounded by an environment that nurtures curiosity, supports their growth, and empowers them to be their best selves.",
      image: "/Enivronment.jpg",
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
    <div className="min-h-screen bg-background">
      {/* Hero Section with Carousel */}
      <section className="container max-w-container relative md:py-10 mx-auto rounded-3xl overflow-hidden">
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
                <Image
                  src="/HB1.png"
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

            {/* Slide 2: Organic Growth */}
            <CarouselItem className="rounded-3xl">
              <div className="relative h-[80vh] min-h-[600px] w-full flex items-end rounded-3xl overflow-hidden">
                <Image
                  src="/HB2.png"
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

            {/* Slide 3: Willingness to Learn */}
            <CarouselItem className="rounded-3xl">
              <div className="relative h-[80vh] min-h-[600px] w-full flex items-end rounded-3xl overflow-hidden">
                <Image
                  src="/HB3.jpg"
                  alt="Learning Journey"
                  fill
                  className="absolute inset-0 object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-black/40 rounded-3xl" />
                <div className="relative z-10 w-full px-4 pb-12 md:pb-16 lg:pb-20 max-w-7xl mx-auto">
                  <div className="max-w-xl md:max-w-2xl text-center md:text-left md:ml-8">
                    <h2 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight">
                      We fuel in them the willingness to learn and zest to take
                      on challenges. Thus, developing in them the quest for
                      knowledge and saying yes to opportunities.
                    </h2>
                  </div>
                </div>
              </div>
            </CarouselItem>

            {/* Slide 4: Future Generations */}
            <CarouselItem className="rounded-3xl">
              <div className="relative h-[80vh] min-h-[600px] w-full flex items-end rounded-3xl overflow-hidden">
                <Image
                  src="/HB4.jpg"
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
      {/* About FKS Section */}
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
                href="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline transition-colors"
              >
                Know More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image
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

      <section className="py-20 px-4 bg-gradient-to-b from-background to-background/80">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Text */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Foundation of FKS Pedagogy is the
              <span className="text-primary">3Es</span>
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

          {/* Right side - Image */}
          <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={sections[activeIndex].image}
              alt={sections[activeIndex].title}
              fill
              className="object-cover transition-opacity duration-500"
              key={sections[activeIndex].image} // triggers fade change
            />
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="border border-border/50 bg-card/30 p-8 shadow-lg rounded-3xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              EVENTS 2020-2021
            </h2>
            <Carousel
              opts={{ align: "center", loop: false, startIndex: 1 }}
              className="max-w-3xl mx-auto"
            >
              <CarouselContent className="-ml-4">
                {videos.map((video, idx) => (
                  <CarouselItem
                    key={idx}
                    className="basis-auto px-4 flex justify-center"
                  >
                    <Link
                      href={video.videoSrc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative block w-full max-w-[480px] aspect-video"
                    >
                      <img
                        src={video.thumbnailSrc}
                        alt="Video thumbnail"
                        className="w-full h-full object-cover rounded-md border shadow-lg transition-all duration-200 ease-out group-hover:brightness-[0.8]"
                      />
                      <div className="absolute inset-0 flex scale-[0.9] items-center justify-center rounded-2xl transition-all duration-200 ease-out group-hover:scale-100">
                        <div className="flex size-28 items-center justify-center rounded-full bg-primary/10 backdrop-blur-md">
                          <div className="relative flex size-20 items-center justify-center rounded-full bg-gradient-to-b from-primary/30 to-primary shadow-md transition-all duration-200 ease-out group-hover:scale-[1.2]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="size-8 fill-white text-white transition-transform duration-200 ease-out group-hover:scale-105"
                              viewBox="0 0 24 24"
                              style={{
                                filter:
                                  "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))",
                              }}
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white shadow-md z-10 md:left-4" />
              <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white shadow-md z-10 md:right-4" />
            </Carousel>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="border border-border/50 bg-card/30 p-8 shadow-lg rounded-3xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              FROM THE FOUNDERS DESK
            </h2>
            <Carousel
              opts={{ align: "center", loop: false, startIndex: 3 }}
              className="max-w-3xl mx-auto"
            >
              <CarouselContent className="-ml-4">
                {founder_videos.map((video, idx) => (
                  <CarouselItem
                    key={idx}
                    className="basis-auto px-4 flex justify-center"
                  >
                    <Link
                      href={video.videoSrc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative block w-full max-w-[480px] aspect-video"
                    >
                      <img
                        src={video.thumbnailSrc}
                        alt="Video thumbnail"
                        className="w-full h-full object-cover rounded-md border shadow-lg transition-all duration-200 ease-out group-hover:brightness-[0.8]"
                      />
                      <div className="absolute inset-0 flex scale-[0.9] items-center justify-center rounded-2xl transition-all duration-200 ease-out group-hover:scale-100">
                        <div className="flex size-28 items-center justify-center rounded-full bg-primary/10 backdrop-blur-md">
                          <div className="relative flex size-20 items-center justify-center rounded-full bg-gradient-to-b from-primary/30 to-primary shadow-md transition-all duration-200 ease-out group-hover:scale-[1.2]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="size-8 fill-white text-white transition-transform duration-200 ease-out group-hover:scale-105"
                              viewBox="0 0 24 24"
                              style={{
                                filter:
                                  "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))",
                              }}
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white shadow-md z-10 md:left-4" />
              <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white shadow-md z-10 md:right-4" />
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
}
