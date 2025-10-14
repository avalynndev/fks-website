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
                src="/Teachers.jpeg"
                alt="Fks Force"
                fill
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">FKS FORCE</h2>
              <p className="text-muted-foreground leading-relaxed">
                It began as a flicker of hope in the heart of Shailaja, and
                today is a world in itself. The FKS force is a holy trinity of
                knowledgeable, dedicated and jovial teachers and support staff
                and enthusiastic parent volunteers – who are all fueled by our
                core values that hold us together, which provides not only a
                platform for us to grow upon but also serve as a guide rail to
                keep us focused on our goals. The FKS core values develop strong
                bonds and provide a pedestal for personal growth.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border border-border/50 bg-card/30 p-8 shadow-lg rounded-3xl">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">TEACHERS</h2>
              <p className="text-muted-foreground leading-relaxed">
                Life is all about constant learning – and our teachers are
                students themselves. As receptors of knowledge in the process of
                facilitating the children, the teachers are evolving, exploring
                and enriching the FKS ecosystem. The result is a relationship
                way beyond that of the teacher and the taught. They are making a
                connect every day, in every way!
              </p>
            </div>
            <div className="relative w-full h-80 rounded-2xl overflow-hidden order-first lg:order-last">
              <FadeImage
                src="/2.jpeg"
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
                  src="/Didi.jpeg"
                  alt="Support Staff - Didis"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <FadeImage
                  src="/Bhaiyas.jpeg"
                  alt="Support Staff - Bhaiyas"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Text */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">SUPPORT STAFF</h2>
              <p className="text-muted-foreground leading-relaxed">
                An integral part of this ever-growing family, “Didis” and
                “Bhaiyas” are the invisible forces who keep this colossal ship
                called FKS sailing smoothly through rain and shine.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Like the children, the teachers and support staff wear uniforms.
                “We don’t want to force something upon the children that we
                ourselves can’t follow – so we wear uniforms too!” says the FKS
                Staff. An instance of many measures of instilling a belief of
                unity and life led by example.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                An environment of learning where kids can be kids and where
                parents and teachers are only the levers to enable children
                recognize themselves and enhance their inherent abilities, is
                the foundation tenet of The Future Kid’s School (FKS). With
                focus on the vital life lessons, children are encouraged “To
                dream the impossible dream” and provide everything that they
                need to triumph over it!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border border-border/50 bg-card/30 p-8 shadow-lg rounded-3xl">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                PARENT VOLUNTEERS
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Reinforcing our belief in what we are doing for the children is
                right, the parent volunteers are our phenomenal motivating
                force. They inspire us to outshine ourselves every day. Their
                unflinching faith in us and walking with us in their child’s
                learning journey as volunteers, mentors and friends has helped
                us build a coherent world of common understanding, philosophies
                and foundation for ‘our’ children.
              </p>
            </div>
            <div className="relative w-full h-80 rounded-2xl overflow-hidden order-first lg:order-last">
              <FadeImage
                src="/Parents.jpeg"
                alt="Vision & Mission"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="my-12 flex justify-center items-center gap-6">
        {/* Image 1 */}
        <div className="relative w-124 h-64 transform -rotate-6 shadow-lg border-4 border-white rounded-lg overflow-hidden">
          <FadeImage
            src="/curvy1.jpg"
            alt="Gallery 1"
            fill
            className="object-cover"
          />
        </div>
        {/* Image 2 (center, larger) */}
        <div className="relative w-132 h-72 transform rotate-3 shadow-lg border-4 border-white rounded-lg overflow-hidden z-10">
          <FadeImage
            src="/Teachers1.jpeg"
            alt="Gallery 2"
            fill
            className="object-cover"
          />
        </div>
        {/* Image 3 */}
        <div className="relative w-114 h-64 transform rotate-6 shadow-lg border-4 border-white rounded-lg overflow-hidden">
          <FadeImage
            src="/Didi-Bhaiyas.jpeg"
            alt="Gallery 3"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
