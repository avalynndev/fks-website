"use client";

import FadeImage from "@/components/ui/fade-image";

export default function HeroSection() {
  return (
    <div className="max-w-6xl mx-auto">
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border border-border/50 bg-card/30 p-8 shadow-lg rounded-3xl">
            {/* Image */}
            <div className="relative w-full h-80 rounded-2xl overflow-hidden">
              <FadeImage
                src="/event1.jpg"
                alt="Fks Force"
                fill
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">EVENTS & SHOWS</h2>
              <p className="text-muted-foreground leading-relaxed">
                Events are an integral feature of the FKS philosophy to build organization and management skills. They provide each student an avenue to discover, test and hone their talents and abilities.
                <br /> <br />
                Events instill a sense of ownership and appreciation for all. Students hence realize the importance of a team, imbibe a sense of dignity and appreciate the power of hard work.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border border-border/50 bg-card/30 p-8 shadow-lg rounded-3xl">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Over the past two decades, The FKS force and students have conceptualized and hosted many events, such as, fairs, exhibitions, shows etc. Each year, the surplus from these shows support various social and charitable initiatives identified by the students.
              </p>
            </div>
            <div className="relative w-full h-80 rounded-2xl overflow-hidden order-first lg:order-last">
              <FadeImage
                src="/event2.jpg"
                alt="Teachers"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border border-border/50 bg-card/30 p-8 shadow-lg rounded-3xl">
            {/* Images */}
            <div className="grid grid-cols-2 gap-4 w-full h-80">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <FadeImage
                  src="/celeb1.jpg"
                  alt="Support Staff - Didis"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <FadeImage
                  src="/celeb2.jpg" alt="Support Staff - Bhaiyas"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Text */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">FESTIVALS & CELEBRATIONS</h2>
              <p className="text-muted-foreground leading-relaxed">
                At FKS we celebrate life in all its nuances. No matter what the religion, caste, creed or economic background, we encourage the feeling of oneness of humanity and use every opportunity to bring out the joy of childhood and innocence.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Festivals are a special and most beautiful way to demonstrate ‘Unity in Diversity’ to our children – a boon of a culturally rich and vibrant country called India! FKS is a world beyond religions and faith and we welcome each festival with zeal and day-long celebrations with activities, programs and lots of good food!
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="my-12 flex justify-center items-center gap-6">
        {/* Image 1 */}
        <div className="relative w-124 h-64 transform -rotate-6 shadow-lg border-4 border-white rounded-lg overflow-hidden">
          <FadeImage
            src="/eventb1.jpg"
            alt="Gallery 1"
            fill
            className="object-cover"
          />
        </div>
        {/* Image 2 (center, larger) */}
        <div className="relative w-132 h-72 transform rotate-3 shadow-lg border-4 border-white rounded-lg overflow-hidden z-10">
          <FadeImage
            src="/eventb2.jpg"
            alt="Gallery 2"
            fill
            className="object-cover"
          />
        </div>
        {/* Image 3 */}
        <div className="relative w-114 h-64 transform rotate-6 shadow-lg border-4 border-white rounded-lg overflow-hidden">
          <FadeImage
            src="/eventb3.jpg"
            alt="Gallery 3"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
