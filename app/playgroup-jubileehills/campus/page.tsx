"use client";

import FadeImage from "@/components/ui/fade-image";
import { GoogleMapsEmbed } from "@next/third-parties/google";

export default function AdmissionsForm() {
  return (
    <div className="pb-10 pt-4 px-4">
      <div className="relative mx-auto max-w-7xl h-[500px] rounded-3xl overflow-hidden">
        <FadeImage
          src="/playcampus.jpeg"
          alt="Connect"
          fill
          priority
          className="object-cover"
        />
      </div>
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border border-border/50 bg-card/30 p-8 shadow-lg rounded-3xl">
            <div className="relative w-full h-80 rounded-2xl overflow-hidden">
              <FadeImage
                src="/playca1.jpg"
                alt="1"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">CAMPUS</h2>
              <p className="text-muted-foreground leading-relaxed">
                All spaces in the campus are learning spaces. The children move
                to different areas, different classes, outdoors and indoors and
                the spaces are set up to hold children’s attention for short
                durations so that they move and learn around the school. Whether
                it is the steps to the tree house, all spaces get used by all
                children all through the days.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our space is a continuous work-in-progress, with the children
                helping plan, plant and care for the landscape that consists of
                a variety of ever-evolving flora and fauna – a vital step in
                creating environmental awareness among our children.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border border-border/50 bg-card/30 p-8 shadow-lg rounded-3xl">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                With the outside world, we are connected through a wide network
                of school buses and transportation vans and inside, we are
                connected to one another through a seamless flow of spaces. We
                boast of a staff-room free school, classrooms with abundant
                natural light and ventilation and open spaces for children to
                use freely.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Choosing constructive over the destructive, including over
                excluding and being environment-friendly, FKS has kept in mind
                its inhabitants – the children – at the centre of its philosophy
                always – and designed its spaces keeping in mind their
                age-groups, the climate and the maximum freedom that can be made
                available to them for their unhindered growth.
              </p>
            </div>
            <div className="relative w-full h-80 rounded-2xl overflow-hidden order-first lg:order-last">
              <FadeImage
                src="/playca2.png"
                alt="2"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="container max-w-container relative md:py-10 mx-auto rounded-3xl overflow-hidden">
        <GoogleMapsEmbed
          apiKey={process.env.NEXT_PUBLIC_MAPS_EMBED_KEY || ""}
          height={400}
          width="100%"
          mode="place"
          q="The+Future+Kid's+Play+Group,Jubliee+Hills"
        />
      </section>
    </div>
  );
}
