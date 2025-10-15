"use client";

import FadeImage from "@/components/ui/fade-image";

export default function HeroSection() {
  const games = [
    {
      name: "Volley Ball",
      icon: "/volley-ball.png",
    },
    { name: "Table Tennis", icon: "/table-tennis.png" },
    { name: "Skating", icon: "/skating.png" },
    { name: "Cricket", icon: "/cricket.png" },
    { name: "Athletics", icon: "/athletics.png" },
    {
      name: "Basketball",
      icon: "/basketball.png",
    },
    { name: "Karate", icon: "/karate.png" },
    { name: "Isometrics", icon: "/Iso.png" },
    { name: "Carrom", icon: "/carrom.png" },
    { name: "Football", icon: "/football.png" },
    { name: "Chess", icon: "/chess.png" },
  ];
  return (
    <div className="max-w-6xl mx-auto">
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border border-border/50 bg-card/30 p-8 shadow-lg rounded-3xl">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Sports And Games
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                FKS emphasizes on at least one hour of sports or games per day
                for children of every age. We believe that beyond just the
                physical fitness, sports increase our self-esteem and ignite our
                minds to be more receptive and alert – leading to overall
                personality development. Our strong-willed children learn to win
                with humility and lose with grace, to work as a team and to take
                risks – and well-designed sport sessions at FKS are playing a
                major role in adding shine to their character.
              </p>
            </div>
            <div className="relative w-full h-80 rounded-2xl overflow-hidden order-first lg:order-last">
              <FadeImage
                src="/sports.jpeg"
                alt="Teachers"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-16 mt-12">
        <section className="border border-border/50 bg-card/30 p-8 shadow-lg rounded-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Various Sports and Activities at FKS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {games.map((skill) => (
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
