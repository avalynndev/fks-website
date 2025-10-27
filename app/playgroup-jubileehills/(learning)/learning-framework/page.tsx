"use client";

import FadeImage from "@/components/ui/fade-image";
import { Globe, Star, Users } from "lucide-react";
import React from "react";

export default function HeroSection() {
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

  return (
    <div className="max-w-6xl mx-auto">
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border border-border/50 bg-card/30 p-8 shadow-lg rounded-3xl">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                LEARNING FRAMEWORK
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The mentor and the mentee walk hand in hand in the immersive
                learning environment. Children are spontaneous, spirited --- it
                is imperative to make sure the learning environment nurtures and
                supports this innate base of our being.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The individual flourishes and builds oneself in a stimulating,
                fertile and seamless learning framework.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The learning modules are planned to cater to individual needs
                while ensuring the enhancement of the entire group. In short,
                the children are their individual self while they are a part of
                the whole.
              </p>
            </div>
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <FadeImage
                src="/frame1.jpg"
                alt="Teachers"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border border-border/50 bg-card/30 p-8 shadow-lg rounded-3xl">
            <div className="relative w-full h-full rounded-2xl overflow-hidden min-h-82">
              <FadeImage
                src="/frame2.jpg"
                alt="Support Staff"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                <strong>
                  The tenets of our learning programs from playgroup through
                  high school.
                </strong>{" "}
                <br />
                1. Pre-activity (check what the child already knows) <br />
                2. Introduction (initiating the topic from where the child does
                not know) <br />
                3. Exploration (gaining deeper understanding by experiential
                learning) <br />
                4. Reiteration ( recall, repeat, remember) <br />
                5. Application (using the understanding in different situations)
              </p>
            </div>
          </div>

          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Foundation of FKS Pedagogy is the
                  <span className="text-primary"> 3Es</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Experience the difference that quality education makes in
                  shaping successful futures
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
                          <h3 className="text-lg font-semibold">
                            {item.title}
                          </h3>
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
        </div>
      </section>
    </div>
  );
}
