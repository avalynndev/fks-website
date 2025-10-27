"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "next-view-transitions";

export function Videos() {
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
  ]
  return (
    <>
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
              <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-background dark:bg-background/70 shadow-md z-10 md:left-4" />
              <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-background dark:bg-background/70 shadow-md z-10 md:right-4" />
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
              <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-background dark:bg-background/70 shadow-md z-10 md:left-4" />
              <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-background dark:bg-background/70 shadow-md z-10 md:right-4" />
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
}
