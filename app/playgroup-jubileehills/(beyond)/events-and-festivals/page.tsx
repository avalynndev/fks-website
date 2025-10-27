"use client";

import FadeImage from "@/components/ui/fade-image";

export default function HeroSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border border-border/50 bg-card/30 p-8 shadow-lg rounded-3xl">
          <div className="relative w-full h-80 rounded-2xl overflow-hidden">
            <div className="relative aspect-square w-full h-auto">
              <FadeImage
                src="/event1.png"
                alt="Philosophy"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">EVENTS</h2>

            <p className="text-muted-foreground leading-relaxed">
              Over the past two decades, The FKS Force and Students have
              conceptualized and hosted many events, such as fairs, exhibitions,
              shows etc. Each year, the surplus from these shows support various
              social and charitable initiatives identified by the students.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Events play a pivotal role in the FKS philosophy to build
              organization and management skills. They provide each student an
              avenue to discover, test and hone their talents and abilities.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Events instil a sense of ownership and appreciation for all.
              Students hence realize the importance of a team, imbibe a sense of
              dignity and appreciate the power of hard work.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border border-border/50 bg-card/30 p-8 shadow-lg rounded-3xl">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">FESTIVALS</h2>
            <p className="text-muted-foreground leading-relaxed">
              At FKS we celebrate life in all its nuances and colours. No matter
              what the religion, caste, creed or economic background, we
              encourage the feeling of oneness of humanity and use every
              opportunity to bring out the joy of childhood and innocence.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Festivals are a special and most beautiful way to demonstrate
              ‘Unity in Diversity’ to our children – a boon of a culturally rich
              and vibrant country called India! FKS is a world beyond religions
              and faith and we welcome each festival with zeal and day-long
              celebrations with activities, programs and lots of good food!
            </p>
          </div>
          <div className="relative w-full h-80 rounded-2xl overflow-hidden order-first lg:order-last">
            <FadeImage
              src="/festiva1.jpg"
              alt="Vision & Mission"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
