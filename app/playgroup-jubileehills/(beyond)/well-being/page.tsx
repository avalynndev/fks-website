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
                src="/well1.jpg"
                alt="Philosophy"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">WELL BEING</h2>

            <p className="text-muted-foreground leading-relaxed">
              <strong>
                {" "}
                Safety - CCTVs, Railings in balconies and open areas, Child
                friendly Furniture
              </strong>
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From avoiding chairs that children fall as they rock them or
              tumble on them, to rounded edges of all furniture and no-door
              classrooms to safety measures in balconies and switch boards
              besides CCTV cameras in all common areas, there is the presence of
              teachers and didis all around on campus to ensure safekeeping of
              each child.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>
                {" "}
                Care and Guidance - Teacher to Student Ratio , Didi bhaiyas,
                Child under proper care{" "}
              </strong>
            </p>
            <p className="text-muted-foreground leading-relaxed">
              In the preschools, the children need assistance in all aspects.
              Our didis and bhaiyas are trained to manage them. From holding
              their hands to talking to them. We train and explain to them why
              we do what we do.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Teachers, Assistant teachers and didis in the classroom. 3 adults
              in a class of 20.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border border-border/50 bg-card/30 p-8 shadow-lg rounded-3xl">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">NUTRITION</h2>
            <p className="text-muted-foreground leading-relaxed">
              The objective at FKS is to create a global citizen who can adapt,
              someone who can thrive in any situation. Kids tend to get finicky
              and picky often, especially with food. The FKS children come from
              all strata of society and cultures. Their food habits are varied.
              Shailaja wanted to discourage these differences and convinced
              parents of the need to have a common kitchen for children.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Eating easily and commonly available food helps in appreciating
              all kinds of tastes and eating the same food together gives a
              sense of community.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Some of the favourites from the FKS Kitchen:</strong>
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Idly with Chutney| Pongal | Upma with Chutney | Sandwiches |
              Cornflakes | Pav Bhaji | Noodles | Pasta | Festival Specials.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Lunch Meals - Pulao | Sambar rice | Roti Chole curry
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our students receive well-planned, nourishing meals throughout the
              day. The menu is designed with the idea that a growing child, a
              picky palette and anxious parents are all to be taken very
              seriously. A well-balanced diet can also be tasty and “yummy”:
              proof of pudding that Mrs. Rao presents on a daily basis. In fact,
              her tasters are student volunteers and she takes suggestions and
              cooking help from the senior graders as she plans the daily menu.
            </p>
          </div>
          <div className="relative w-full h-80 rounded-2xl overflow-hidden order-first lg:order-last">
            <FadeImage
              src="/well2.jpg"
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
