"use client";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Image from "next/image";
import { Link } from "next-view-transitions";

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background image with mask and overlay */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full blur-sm" />
        <div className="absolute inset-0 bg-background/80" />
        <Image
          src="/Laptop-PC.2edd87aef5d6c2793b90.png"
          alt="Students laptop bg"
          fill
          className="object-cover lg:flex hidden"
          priority
        />
        <Image
          src="/mobile.c5f75c33dc61a1770533.png"
          alt="Students mobile bg"
          fill
          className="object-cover lg:hidden flex"
          priority
        />
      </div>

      {/* Main content section */}
      <main className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-12 px-6 md:px-12 py-12">
        <div className="flex flex-col items-center lg:items-start lg:w-1/2 max-w-lg">
          <div className="mb-4">
            <Image
              src="/fks-logo.png"
              alt="The Future Kid's School Logo"
              width={300}
              height={280}
              className="mx-auto lg:mx-0"
            />
          </div>

          <div className="text-center lg:text-left leading-tight">
            <span className="block text-6xl font-bold text-red-600 ">DARE</span>
            <span className="block text-2xl font-normal text-red-600">
              to dream &amp;
            </span>
            <span className="block text-6xl font-bold text-blue-700 ">
              LEAD
            </span>
            <span className="block text-2xl font-normal text-blue-700 ">
              by example
            </span>
          </div>
        </div>

        {/* Right: School Campuses Card */}
        <div className="relative w-full max-w-xl lg:w-1/2 z-10">
          <div className="backdrop-blur-md bg-card/80 border border-border shadow-2xl rounded-xl p-8 z-10 relative">
            <div className="text-center text-lg font-semibold text-green-600 dark:text-green-400 mb-4 pb-2">
              School Campuses
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              {/* Main Schools */}
              <div className="flex-1">
                <div className="bg-green-400 text-blue-900 font-semibold px-3 py-1 rounded mb-2 w-fit mx-auto text-sm">
                  Main Schools
                </div>
                <Link href="/main-campus">
                  <div className="text-foreground text-sm text-center">
                    The Future Kid&apos;s School
                    <br />
                    <span className="text-muted-foreground">Nanakramguda</span>
                  </div>
                </Link>
              </div>

              {/* Playgroups */}
              <div className="flex-1 border-l">
                <div className="bg-green-400 text-blue-900 font-semibold px-3 py-1 rounded mb-2 w-fit mx-auto text-sm">
                  Playgroups
                </div>

                <div className="space-y-3">
                  <div className="text-center">
                    <Link href="/playgroup-jubileehills">
                      <div className="text-foreground text-sm">
                        The Future Kid&apos;s Playgroup
                        <br />
                        <span className="text-muted-foreground">
                          Jubilee Hills
                        </span>
                        <br />
                      </div>
                    </Link>
                    <Link
                      href="/playgroup-jubileehills/connect"
                      className="underline text-xs text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors"
                    >
                      Go to admissions form →
                    </Link>
                  </div>

                  <div className="text-center">
                    <Link href="/playgroup-narsingi">
                      <div className="text-foreground text-sm">
                        The Future Kid&apos;s Playgroup
                        <br />
                        <span className="text-muted-foreground">Narsingi</span>
                        <br />
                      </div>
                    </Link>
                    <Link
                      href="/playgroup-narsingi/connect"
                      className="underline text-xs text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors"
                    >
                      Go to admissions form →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* School Manifesto Section */}
      <div className="w-full lg:w-2/3 ml-auto px-4 lg:px-12 z-20 mb-16 dark:text-background">
        <div className="text-base md:text-lg font-serif whitespace-pre-line text-center">
          {`I am not just an edifice set in stone
Nor a horde of tutors that merely students I will hone
I am not just your set of run-of-the-mill books
Or a mirror to divulge how your future looks

You may find me ordinary sometimes ... but lackluster is never me
Your perception of me, however, is a reflection of you in me to see
I am a source of infinite energy that binds my dynamic universe
Choose to repel, remark or revel in my facade diverse

I am the progressive verve that sees the unseen
I sense the elusive and achieve the never-been
I am an endless source of vitality
I am the infinite reality!`}
          <br />
          <span className="block mt-4 text-base text-red-700 font-semibold">
            I am me!
          </span>
          <span className="block text-base text-red-700 font-semibold">
            I am the Future Kids School
          </span>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full flex items-center justify-between text-sm backdrop-blur-md px-4 py-3">
        <div>© 2021 The Future Kid&apos;s School.</div>
        <ModeToggle />
      </footer>
    </div>
  );
}
