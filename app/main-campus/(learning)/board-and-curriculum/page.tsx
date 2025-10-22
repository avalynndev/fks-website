"use client";

import FadeImage from "@/components/ui/fade-image";

export default function HeroSection() {
  return (
    <>
      <div className="max-w-6xl mx-auto mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border border-border/50 bg-card/30 p-8 shadow-lg rounded-3xl">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              BOARD & CURRICULUM
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              &quot;If an egg is broken by an outside force, life ends. If
              broken by force within, life begins. Great things always begin
              from within.&quot;
              <br />
              <br />
              Our lessons are based on the CICSE board recommendations, but not
              limited to them! FKS envisions more than mere textbook learning.
              It creates a stimulating and dynamic learning atmosphere. FKS has
              uniquely designed programs that hone various facets of children
              that allow them to blossom at their own pace.
              <br />
              <br />
              FKS has adopted the Indian School Certificate (ISC) syllabus for
              grades 11 and 12. On careful assessment, FKS believes that ISC has
              an in-depth syllabus. This coupled with innovative methods are a
              great advantage for students.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg transform rotate-2">
              <FadeImage
                src="/board1.jpg"
                alt="Board1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg transform -rotate-1">
              <FadeImage
                src="/board2.jpg"
                alt="Board2"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border border-border/50 bg-card/30 p-8 shadow-lg rounded-3xl">
          <div className="relative w-full h-80 rounded-2xl overflow-hidden">
            <FadeImage
              src="/academic.jpg"
              alt="Academic"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              ACADEMIC ACCOLADES
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              FKS students have aced exams across different streams and came
              within the first three ranks in the city of Hyderabad, Telangana.
              Apart from this Students have secured commendable ranks in various
              regional and national Competitive Exams and Olympiads. <br />
              <br />
              FKS Alumni are spread across the best of universities across the
              world in the fields of Music, Psychology, Medicine, Computer
              Science, Media, Engineering, Law, Bio-medical, Economics and
              Finance, Film making, Architecture etc. Some are entrepreneurs in
              Events, Design, Movies, Film Making, Playback Singing, Data
              Analytics, E-Commerce, Science & Technology, Social Entrepreneurs
              and many more in the making.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
