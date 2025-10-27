"use client";

import FadeImage from "@/components/ui/fade-image";

export default function HeroSection() {
  return (
    <>
      <div className="max-w-6xl mx-auto my-12 space-y-10">
        <div className="grid grid-cols-1 gap-8 items-center border border-border/50 bg-card/30 p-8 shadow-lg rounded-3xl">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">PLAY AT FKS</h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                Play is the very cornerstone of our program in FKS. We believe
                PLAY is integral to learning, where the child is deeply involved
                and in the process discovers himself. There is a balance of
                active and passive activities. Number, alphabet games allow
                children to reapply concerts; Free play nurtures social and
                emotional development while strengthening motor and physical
                growth.
              </p>
              <p>
                Some parts of the play are free and flowing, others focus on
                getting children to understand boundaries, rules, the give and
                take involved while playing.
              </p>
              <p>
                The trips to the big school of FKS for their sports day is a big
                event every year for them.
              </p>
            </div>
          </div>
        </div>

        <div className="my-12 flex justify-center items-center gap-6">
          <div className="relative w-124 h-64 transform -rotate-6 shadow-lg border-4 border-white rounded-lg overflow-hidden">
            <FadeImage
              src="/play1.png"
              alt="Gallery 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-114 h-64 transform rotate-6 shadow-lg border-4 border-white rounded-lg overflow-hidden">
            <FadeImage
              src="/play2.png"
              alt="Gallery 3"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}
