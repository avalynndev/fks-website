"use client";

import FadeImage from "@/components/ui/fade-image";

export default function HeroSection() {
  const performance = [
    {
      name: "Mridangam",
      icon: "/mridangam.png",
    },
    { name: "Violin", icon: "/violin.png" },
    { name: "Guitar", icon: "/guitar.png" },
    {
      name: "Folk Dance",
      icon: "/folk-dance.png",
    },
    {
      name: "Classical Dance",
      icon: "/classical-dance.png",
    },
    {
      name: "Drums",
      icon: "/drums.png",
    },
    { name: "Theatre", icon: "/theatre.png" },
  ];
  return (
    <div className="max-w-6xl mx-auto">
      <section className="py-20 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border border-border/50 bg-card/30 p-8 shadow-lg rounded-3xl">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">PERFORMING ART</h2>
            <p className="text-muted-foreground leading-relaxed">
              Among its many advantages, any art form instils poise,
              imagination, compassion and an outlet for the budding creative
              juices of our children. Playing music instruments or performing
              any of the dance forms brings stability and cultivates focus of
              the mind and body – boosting positivity and make the kids more
              aware of themselves.
              <br /> <br />
              Drama, on the other hand enhances spoken and expressive
              communication skills, improves voice projections, semantic
              eloquence and persuasive speech which benefit children in every
              walk of life. However, our favorite part of art forms at FKS is
              that it brings a lot of fun in learning and reduces stress levels
              – making our happy place, happier!
            </p>
          </div>
          <div className="relative w-full h-80 rounded-2xl overflow-hidden order-first lg:order-last">
            <FadeImage
              src="/perf1.jpg"
              alt="Theatre performance at FKS"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <div className="space-y-16 mt-12">
        <section className="border border-border/50 bg-card/30 p-8 shadow-lg rounded-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Performing Art at FKS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {performance.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center space-y-4 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <div className="relative w-20 h-20">
                  <FadeImage
                    src={skill.icon}
                    alt={skill.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-lg font-medium text-foreground dark:text-background">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="my-12 flex justify-center items-center gap-6">
        <div className="relative w-124 h-64 transform -rotate-6 shadow-lg border-4 border-white rounded-lg overflow-hidden">
          <FadeImage
            src="/perf2.jpg"
            alt="Gallery 1"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-132 h-72 transform rotate-3 shadow-lg border-4 border-white rounded-lg overflow-hidden z-10">
          <FadeImage
            src="/perf3.jpg"
            alt="Gallery 2"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
