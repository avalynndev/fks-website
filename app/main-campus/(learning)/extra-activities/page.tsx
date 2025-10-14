"use client";

import FadeImage from "@/components/ui/fade-image";
export default function HeroSection() {
      const lifeSkills = [
        { name: "Life Skills", icon: "/life-skills.png" },
        { name: "Critical Thinking", icon: "/critical-thinking.png" },
        {
          name: "Creative Thinking & Writing",
          icon: "/creative-thinking-and-writing.png",
        },
        { name: "Reading Programme", icon: "/reading-programme.png" },
        {
          name: "Effective Communication",
          icon: "/effective-communication.png",
        },
        { name: "Funtoot Online Math Programme", icon: "/funtoot.png" },
      ];

      const specialClubs = [
        {
          name: "Logical & Analytical Skills",
          icon: "/logical-and-analytical-skills.png",
        },
        { name: "Spell Fun", icon: "/spell-fun.png" },
        { name: "Memory Enhancement", icon: "/memory-enhancement.png" },
        { name: "General Knowledge", icon: "/general-knowledge.png" },
        { name: "Arts", icon: "/arts.png" },
      ];
  return (
    <>
      <div className="max-w-6xl mx-auto">
        {/* Main Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border border-border/50 bg-card/30 p-8 shadow-lg rounded-3xl">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Extra & Co-curricular Activities
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              FKS recognizes the importance of co-curricular activities in
              encouraging holistic development. Our syllabus incorporates
              various activities in regular learning seamlessly. This encourages
              children to step outside their comfort zone, and learn new and
              innovative skills, helping broaden both their skillset and their
              mindset. <br /> <br />
              Appreciating the intellectual dimensions and diversity within our
              student body, we offer them a wide range of extra and
              co-curricular activities to choose from. A good mix of sporting,
              cultural, literary and art events are offered throughout the year
              for children to explore, and enjoy! <br /> <br />
              Our children participate in all the activities with enthusiasm
              that could rival the largest cricket stadiums. Every competition,
              presentation, or an event is in fact a showcase of more than the
              pride and talents – we see teamwork, organizational skills, time
              management skills, and above all the pride of participation.
            </p>
          </div>
          <div className="relative w-full h-80 rounded-2xl overflow-hidden order-first lg:order-last">
            <FadeImage
              src="/extrabg.jpeg"
              alt="e"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="space-y-16 mt-12">
          {/* Life Skills Section */}
          <section className="border border-border/50 bg-card/30 p-8 shadow-lg rounded-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
              Life Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
              {lifeSkills.map((skill) => (
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

          {/* Special Clubs Section */}
          <section className="border border-border/50 bg-card/30 p-8 shadow-lg rounded-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
              Special Clubs
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
              {specialClubs.map((club) => (
                <div
                  key={club.name}
                  className="flex flex-col items-center justify-center space-y-4 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
                >
                  <div className="relative w-20 h-20">
                    <FadeImage
                      src={club.icon}
                      alt={club.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-lg font-medium text-foreground dark:text-background">
                    {club.name}
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
              src="/k.jpeg"
              alt="Gallery 1"
              fill
              className="object-cover"
            />
          </div>
          {/* Image 2 (center, larger) */}
          <div className="relative w-132 h-72 transform rotate-3 shadow-lg border-4 border-white rounded-lg overflow-hidden z-10">
            <FadeImage
              src="/e.jpeg"
              alt="Gallery 2"
              fill
              className="object-cover"
            />
          </div>
          {/* Image 3 */}
          <div className="relative w-114 h-64 transform rotate-6 shadow-lg border-4 border-white rounded-lg overflow-hidden">
            <FadeImage
              src="/ee.jpeg"
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
