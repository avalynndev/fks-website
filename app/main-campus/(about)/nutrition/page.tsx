"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Main Card */}
      <div className="grid grid-cols-1 gap-8 items-center border border-border/50 bg-card/30 p-8 shadow-lg rounded-3xl">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">NUTRITION</h2>
          <div className="text-lg leading-relaxed space-y-4">
            <p>
              The objective at FKS is to create a global citizen who can adapt,
              someone who can thrive in any situation. Kids tend to get finicky
              and picky often, especially with food. The FKS children come from
              all strata of society and cultures. Their food habits are varied.
              Shailaja wanted to discourage these differences and convinced
              parents of the need to have a common kitchen for children.
            </p>
            <p>
              Eating easily and commonly available food helps in appreciating
              all kinds of tastes and eating the same food together gives a
              sense of community.
            </p>
            <p>
              Our students receive well-planned, nourishing meals through the
              day. The menu is designed with the idea that a growing child, a
              picky palette and anxious parents are all to be taken very
              seriously. A well-balanced diet can also be tasty and “yummy”:
              proof of pudding that Mrs. Rao presents on a daily basis. In fact,
              her tasters are student volunteers and she takes suggestions and
              cooking help from the senior graders as she plans the daily menu.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-center items-center gap-6">
        {/* Image 1 */}
        <div className="relative w-124 h-64 transform -rotate-6 shadow-lg border-4 border-white rounded-lg overflow-hidden">
          <Image
            src="/Food.jpeg"
            alt="Gallery 1"
            fill
            className="object-cover"
          />
        </div>
        {/* Image 2 (center, larger) */}
        <div className="relative w-132 h-72 transform rotate-3 shadow-lg border-4 border-white rounded-lg overflow-hidden z-10">
          <Image
            src="/Food-gallery.jpg"
            alt="Gallery 2"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
