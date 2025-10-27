"use client";

import FadeImage from "@/components/ui/fade-image";

export default function HeroSection() {
  return (
    <div className="max-w-6xl mx-auto">
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border border-border/50 bg-card/30 p-8 shadow-lg rounded-3xl">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                THEMATIC LEARNING
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The preschool years are the point where the child begins to
                explore itself. The child metamorphoses itself to be a part of a
                bigger world away from the confines of its home.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We lay foundations for their future learning path through the
                three years of play school. We work at enhancing their skills
                through a multi-sensory approach in a thematic learning
                environment. It is very important that we allow this process to
                unfold with as little interference as possible. Thus, the
                environment created is -- safe, offering equal opportunities, it
                is supportive and nurturing.
              </p>
            </div>
            <div className="relative w-full h-80 rounded-2xl overflow-hidden order-first lg:order-last">
              <FadeImage
                src="/teamatic1.jpg"
                alt="Teachers"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border border-border/50 bg-card/30 p-8 shadow-lg rounded-3xl">
            <div className="relative w-full h-full rounded-2xl overflow-hidden aspect-square">
              <FadeImage
                src="/tea2.jpg"
                alt="Support Staff"
                fill
                className="object-cover "
              />
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                The comprehensive programs integrate learning and developmental
                goals in themes which range from the self and extending to the
                world at large.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our programs focus at enhancing large and fine motor skills,
                language development, cognitive skills, social and emotional
                development. The programs cater to the curious and inquisitive
                nature of the pre-schooler. The multisensory approach keeps them
                involved, enthused and motivated.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border border-border/50 bg-card/30 p-8 shadow-lg rounded-3xl">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                We believe in an inclusive approach. The Special ED team
                constantly enhances the programme. The faculty designs an
                intensive remedial program that is tailor made to suit the
                <br />
                Diverse learning needs <br />
                Consolidate their knowledge <br />
                Strengthen their confidence <br />
                Enhance the effectiveness of learning
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Our goal at the end of preschool years:</strong>
                <br /> They have the basic skills of reading, writing and
                numbers.
                <br /> Make the child school ready <br /> Weaned off the home
                for a long duration
              </p>
            </div>
            <div className="relative w-full h-80 rounded-2xl overflow-hidden order-first lg:order-last">
              <FadeImage
                src="/tea3.jpg"
                alt="Vision & Mission"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
