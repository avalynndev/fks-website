"use client";

import FadeImage from "@/components/ui/fade-image";
import { Globe, Star, Users } from "lucide-react";
import { useState } from "react";

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

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <div className="max-w-6xl mx-auto">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border border-border/50 bg-card/30 p-8 shadow-lg rounded-3xl">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              The FKS approach caters to different kinds of learners. It&apos;s
              highly flexible, comprehensive, relatable and hands on! FKS
              believes in an inclusive approach. The Special ED team constantly
              enhances the programme.
              <br />
              <br />
              Playgroup (Playschool to UKG) practices a thematic approach.
              Primary School (Grade 1 – 4) has an integrated system with the FKS
              designed curriculum with no textbooks.
              <br />
              <br />
              Students move into the Middle School (Grade 5 – 7) with ease.
              Textbooks are introduced here. Assessments are designed for
              different kinds of learners. Teachers get a clear understanding of
              what has worked for each child and what has not.
              <br />
              <br />
              Assessments commence from LKG, in a climate that enables the
              student to like the journey and is left with a positive
              experience.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg transform rotate-2">
              <FadeImage
                src="/learning.jpeg"
                alt="Learning environment at FKS"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg transform -rotate-1">
              <FadeImage
                src="/9.jpg"
                alt="Students in classroom"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 items-center border border-border/50 bg-card/30 p-8 shadow-lg rounded-3xl">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              SPECIAL EDUCATION
            </h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                Even before the world acknowledged, The Future Kid&apos;s
                Philosophy was always inclusive. The Special Ed Team along with
                the teaching faculty designs an intensive remedial program that
                is tailor made to suit the diverse learning needs, to
                consolidate their knowledge, strengthen their confidence &
                enhance the effectiveness of learning.
              </p>
            </div>
          </div>
        </div>

        <div className="my-12 flex justify-center items-center gap-6">
          <div className="relative w-124 h-64 transform -rotate-6 shadow-lg border-4 border-white rounded-lg overflow-hidden">
            <FadeImage
              src="/ko.jpg"
              alt="Kartik learning programme students"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-132 h-72 transform rotate-3 shadow-lg border-4 border-white rounded-lg overflow-hidden z-10">
            <FadeImage
              src="/peda.jpg"
              alt="Pedagogy in action"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-114 h-64 transform rotate-6 shadow-lg border-4 border-white rounded-lg overflow-hidden">
            <FadeImage
              src="/10.jpg"
              alt="Classroom learning activities"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}
