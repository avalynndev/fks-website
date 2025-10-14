"use client";

import FadeImage from "@/components/ui/fade-image";

export default function HeroSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* PHILOSOPHY */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border border-border/50 bg-card/30 p-8 shadow-lg rounded-3xl">
          {/* Image */}
          <div className="relative w-full h-80 rounded-2xl overflow-hidden">
            <FadeImage
              src="/Philo.jpg"
              alt="Philosophy"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">PHILOSOPHY</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A SCHOOL FOR THE CHILDREN AND OF THE CHILDREN.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our ‘Child-first’ philosophy has been our pillar of strength
              through this fascinating journey speckled with ups and downs – and
              a lot of learning in the process.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Children have always been the center of our ever-expanding
              universe – where they are ‘Schooled for a journey called Life!”
              The lessons they learn here, the experiences they endure, the
              relationships they forge stay with them as they graduate to
              bigger, wider, and more challenging arenas in our dynamic world.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              An environment of learning where kids can be kids and where
              parents and teachers are only the levers to enable children
              recognize themselves and enhance their inherent abilities, is the
              foundation tenet of The Future Kid’s School (FKS). With focus on
              the vital life lessons, children are encouraged “To dream the
              impossible dream” and provide everything that they need to triumph
              over it!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border border-border/50 bg-card/30 p-8 shadow-lg rounded-3xl">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">VISION & MISSION</h2>
            <p className="text-muted-foreground leading-relaxed">
              At FKS, children are equipped with the skills to take
              responsibility, tackle challenges with integrity, maintain dignity
              in setbacks and courage with conviction to bounce back – creating
              a solid foundation for their lives.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Through Integrated learning and developmental methods, the pursuit
              is education through multiple delivery channels. A child is at the
              center of learning. FKS strives to enhance the best qualities in
              children, understand their inner strength and achieve their
              personal goals.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The FKS fraternity is committed to creating a milieu of stimuli,
              inquisitiveness and solidarity among students. Gently, but firmly,
              children are nudged on the path of self-actualization, to realize
              their true potential and use it to the best of their abilities.
            </p>
          </div>
          <div className="relative w-full h-80 rounded-2xl overflow-hidden order-first lg:order-last">
            <FadeImage
              src="/M&V2.jpg"
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
