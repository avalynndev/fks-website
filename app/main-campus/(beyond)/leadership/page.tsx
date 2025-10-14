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
                src="/lead1.jpg"
                alt="Fks Force"
                fill
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                LEADERSHIP AT FKS
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our FKS children never shirk responsibility! The various
                activities and events designed around our students expose them
                to taking charge and exhibit leadership abilities in their
                individual capacities. Taking the lead from planning an event to
                execution, being accountable for things and sharing duties
                teaches children to be go-getters, excellent team-players,
                risk-takers and responsible leaders of tomorrow!
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="my-12 flex justify-center items-center gap-6">
        {/* Image 1 */}
        <div className="relative w-124 h-64 transform -rotate-6 shadow-lg border-4 border-white rounded-lg overflow-hidden">
          <FadeImage
            src="/lead2.jpg"
            alt="Gallery 1"
            fill
            className="object-cover"
          />
        </div>
        {/* Image 2 (center, larger) */}
        <div className="relative w-132 h-72 transform rotate-3 shadow-lg border-4 border-white rounded-lg overflow-hidden z-10">
          <FadeImage
            src="/lead3.jpg"
            alt="Gallery 2"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
