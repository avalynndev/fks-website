"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        {/* Main Card */}
        <div className="grid grid-cols-1 gap-8 items-center border border-border/50 bg-card/30 p-8 shadow-lg rounded-3xl">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">OUR STORY</h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                When asked what motivated her to start FKS, Ms. Shailaja Rao,
                The Prime Mover of The Future Kid’s School (FKS), responded that
                she had the “benefit of the worst teachers.”
              </p>
              <p>
                She was the victim of teacher discouragement and rebuke while in
                school. All she wanted to do in her lifetime was to create a
                place of learning which the child would cherish, look forward to
                going every day. She wanted to build an institution where every
                child was understood for who she or he was. This, Shailaja
                wanted to achieve by moving away from conventional methods of
                teaching.
              </p>
              <p>
                In 1997, a dream was born in Hyderabad. A 4,000 sq. ft. of
                rented space housed 20 eager minds, one teacher and 5 support
                staff. The dream was christened The Future Kid’s School. This
                dream grew steadily and by 2005, FKS had over 650 children, 65
                teachers and 55 support staff to make it a one big family.
              </p>
              <p>
                Today, in 2024, it stands tall and proud. Three campuses host
                over 3000+ students, 250+ teachers, over 380 support staff, a
                kitchen that feeds around 3500 members every day and plies 98
                school buses.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center items-center gap-6">
          {/* Image 1 */}
          <div className="relative w-124 h-64 transform -rotate-6 shadow-lg border-4 border-white rounded-lg overflow-hidden">
            <Image
              src="https://thefks.in/images/our-story/OS%204.jpg"
              alt="Gallery 1"
              fill
              className="object-cover"
            />
          </div>
          {/* Image 2 (center, larger) */}
          <div className="relative w-132 h-72 transform rotate-3 shadow-lg border-4 border-white rounded-lg overflow-hidden z-10">
            <Image
              src="https://thefks.in/images/our-story/OS%203.jpg"
              alt="Gallery 2"
              fill
              className="object-cover"
            />
          </div>
          {/* Image 3 */}
          <div className="relative w-114 h-64 transform rotate-6 shadow-lg border-4 border-white rounded-lg overflow-hidden">
            <Image
              src="https://thefks.in/images/our-story/OS%207.jpg"
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
