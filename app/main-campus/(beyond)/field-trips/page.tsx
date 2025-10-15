"use client";

import FadeImage from "@/components/ui/fade-image";

export default function HeroSection() {
  return (
    <div className="max-w-6xl mx-auto">
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border border-border/50 bg-card/30 p-8 shadow-lg rounded-3xl">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">FIELD & OUT OF STATION TRIPS
</h2>
              <p className="text-muted-foreground leading-relaxed">
                Stepping beyond the boundaries of the school with a purpose in mind works wonders on young children. While improving interpersonal relationships with peers, it also instils awareness, endurance, patience and grit, which can never be taught in the confines of a classroom.
<br/> <br/>
                This world is only as creepy as we make it – so at FKS our motto is to dare to explore our world and its wonders – and in the process – find ourselves!
              </p>
            </div>
            <div className="relative w-full h-80 rounded-2xl overflow-hidden order-first lg:order-last">
              <FadeImage
                src="/field1.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border border-border/50 bg-card/30 p-8 shadow-lg rounded-3xl">
            {/* Image */}
            <div className="relative w-full h-80 rounded-2xl overflow-hidden">
              <FadeImage
                src="/field2.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Wiith a beautiful, diverse and huge country like ours, with its mountains and beaches and snow and sand to explore – FKS plans its trips within India, to unveil the beauty of our motherland with our children. Rest of the world? Maybe someday, when we are done exploring our home!
              </p>
            </div>
          </div>

        </div>
      </section>

      <div className="my-12 flex justify-center items-center gap-6">
        {/* Image 1 */}
        <div className="relative w-124 h-64 transform -rotate-6 shadow-lg border-4 border-white rounded-lg overflow-hidden">
          <FadeImage
            src="/trip1.jpg"
            alt="Gallery 1"
            fill
            className="object-cover"
          />
        </div>
        {/* Image 2 (center, larger) */}
        <div className="relative w-132 h-72 transform rotate-3 shadow-lg border-4 border-white rounded-lg overflow-hidden z-10">
          <FadeImage
            src="/trip2.jpg"
            alt="Gallery 2"
            fill
            className="object-cover"
          />
        </div>
        {/* Image 3 */}
        <div className="relative w-114 h-64 transform rotate-6 shadow-lg border-4 border-white rounded-lg overflow-hidden">
          <FadeImage
            src="/trip3.jpg"
            alt="Gallery 3"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
