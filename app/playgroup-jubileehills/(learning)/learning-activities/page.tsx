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
                src="/frtui1.jpg"
                alt="Philosophy"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              LEARNING ACTIVITIES
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Early years have multiple goals for learning, like getting ready
              for writing, building vocabulary, use of materials, fine motor
              skills, eye-hand coordination, preparing to focus on learning,
              managing to work in groups and sharing resources while taking
              turns.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The learning activities thus ensure that all of these goals for
              learning are achieved gently, regularly and while in play. They
              range from storytelling , to songs, organised games, and group
              activities, all of this while resource managing and partnering
              with peers, as part of their everyday routine.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border border-border/50 bg-card/30 p-8 shadow-lg rounded-3xl">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              These learning activities provide opportunities to help the child
              to get to be a learner while independent in taking care of
              themselves as people. The teachers help them in this process by
              scaffolding and guiding them to learn while making mistakes.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From learning to writing strokes to form play where they make
              alphabets from various sensorial materials, slowly and without
              pressure the child learns to write correctly
            </p>
            <p className="text-muted-foreground leading-relaxed">
              These kinds of activities ensure that all kinds of learners and
              learning styles are taken care of. By such time, children are
              confident with reading, writing and arithmetic skills apart from a
              wide exposure to various concepts and topic modules. They get
              ready to embark their journey into Primary school.
            </p>
          </div>
          <div className="relative w-full h-80 rounded-2xl overflow-hidden order-first lg:order-last">
            <FadeImage
              src="/act2.jpg"
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
