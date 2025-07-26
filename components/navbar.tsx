import React from "react";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { ThemeToggle } from "./theme-toggle";

const Navbar = () => (
  <>
    <header className="abosolute top-0 z-50 w-full p-2">
      <div className="max-w-container mx-auto">
        <nav
          data-slot="navbar"
          className="flex items-center justify-between p-2"
        >
          {/* Left: Logo */}
          <nav
            data-slot="navbar-left"
            className="flex items-center justify-start gap-4"
          >
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 18.75L3.75 21L21 3.75L18.75 7.5L7.5 18.75Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M16.5 5.25L20.25 3L3 20.25L5.25 16.5L16.5 5.25Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.3833 6.86669C15.204 5.85869 13.6731 5.25 12 5.25C8.27208 5.25 5.25 8.27208 5.25 12C5.25 13.6731 5.85869 15.204 6.86669 16.3833L16.3833 6.86669Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 18.75C12 18.75 12 18.75 12 18.75C15.728 18.75 18.75 15.728 18.75 12C18.75 12 18.75 12 18.75 12L12 18.75ZM18.6125 10.6376C18.5308 10.2393 18.4141 9.85373 18.2657 9.48438L9.48438 18.2657C9.85373 18.4141 10.2393 18.5308 10.6376 18.6125L18.6125 10.6376Z"
                  fill="currentColor"
                ></path>
              </svg>
              Saturn
            </Link>
          </nav>
          {/* Right: Auth buttons and hamburger */}
          <nav
            data-slot="navbar-right"
            className="flex items-center justify-end gap-4"
          >
            <ThemeToggle />
            <Link href="/signin" className="hidden text-sm md:block">
              Sign in
            </Link>
            <Link
              href="/get-started"
              data-slot="button"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground shadow-sm dark:hover:from-primary/80 hover:from-primary/70 dark:hover:to-primary/70 hover:to-primary/90 bg-linear-to-b from-primary/60 to-primary/100 dark:from-primary/100 dark:to-primary/70 border-t-primary h-9 px-4 py-2"
            >
              Get Started
            </Link>
            {/* Hamburger for mobile */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <button
                    data-slot="button"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground size-9 shrink-0"
                    type="button"
                    aria-haspopup="dialog"
                    aria-expanded="false"
                    aria-controls="radix-_r_21_"
                    data-state="closed"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-menu size-5"
                    >
                      <line x1="4" x2="20" y1="12" y2="12"></line>
                      <line x1="4" x2="20" y1="6" y2="6"></line>
                      <line x1="4" x2="20" y1="18" y2="18"></line>
                    </svg>
                    <span className="sr-only">Toggle navigation menu</span>
                  </button>
                </SheetTrigger>
                <SheetContent side="left" className="p-0 w-64">
                  <nav className="flex flex-col gap-2 p-6">
                    <Link
                      href="/"
                      className="flex items-center gap-2 text-xl font-bold mb-6"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.5 18.75L3.75 21L21 3.75L18.75 7.5L7.5 18.75Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M16.5 5.25L20.25 3L3 20.25L5.25 16.5L16.5 5.25Z"
                          fill="currentColor"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.3833 6.86669C15.204 5.85869 13.6731 5.25 12 5.25C8.27208 5.25 5.25 8.27208 5.25 12C5.25 13.6731 5.85869 15.204 6.86669 16.3833L16.3833 6.86669Z"
                          fill="currentColor"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 18.75C12 18.75 12 18.75 12 18.75C15.728 18.75 18.75 15.728 18.75 12C18.75 12 18.75 12 18.75 12L12 18.75ZM18.6125 10.6376C18.5308 10.2393 18.4141 9.85373 18.2657 9.48438L9.48438 18.2657C9.85373 18.4141 10.2393 18.5308 10.6376 18.6125L18.6125 10.6376Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      Saturn
                    </Link>
                    <ul className="flex flex-col gap-2">
                      <li>
                        <Link
                          href="/features"
                          className="group w-full text-left inline-flex h-9 items-center justify-start rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-hidden"
                        >
                          Features
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/resources"
                          className="group w-full text-left inline-flex h-9 items-center justify-start rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-hidden"
                        >
                          Resources
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="group w-full text-left inline-flex h-9 items-center justify-start rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-hidden"
                          href="/about"
                        >
                          About
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="group w-full text-left inline-flex h-9 items-center justify-start rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-hidden"
                          href="/pricing"
                        >
                          Pricing
                        </Link>
                      </li>
                    </ul>
                    <div className="mt-6 flex flex-col gap-2">
                      <Link href="/signin" className="text-sm">
                        Sign in
                      </Link>
                      <Link
                        href="/get-started"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground shadow-sm dark:hover:from-primary/80 hover:from-primary/70 dark:hover:to-primary/70 hover:to-primary/90 bg-linear-to-b from-primary/60 to-primary/100 dark:from-primary/100 dark:to-primary/70 border-t-primary h-9 px-4 py-2"
                      >
                        Get Started
                      </Link>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </nav>
        </nav>
      </div>
    </header>
    <div className="max-w-container sticky top-0 z-50 mx-auto hidden items-center justify-center p-3 md:flex">
      <nav
        data-slot="navbar"
        className="flex items-center justify-between bg-background/30 border-border dark:border-border/15 rounded-xl border p-1 backdrop-blur-lg"
      >
        <nav
          aria-label="Main"
          data-orientation="horizontal"
          dir="ltr"
          data-slot="navigation-menu"
          className="relative z-10 max-w-max flex-1 items-center justify-center hidden md:flex"
        >
          <div style={{ position: "relative" }}>
            <ul
              data-orientation="horizontal"
              data-slot="navigation-menu-list"
              className="group flex flex-1 list-none items-center justify-center space-x-1"
              dir="ltr"
            >
              <li>
                <Link
                  href="/features"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 data-active:bg-accent/50 data-[state=open]:bg-accent/50"
                  data-radix-collection-item=""
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 data-active:bg-accent/50 data-[state=open]:bg-accent/50"
                  data-radix-collection-item=""
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 data-active:bg-accent/50 data-[state=open]:bg-accent/50"
                  href="/about"
                  data-radix-collection-item=""
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 data-active:bg-accent/50 data-[state=open]:bg-accent/50"
                  href="/pricing"
                  data-radix-collection-item=""
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div className="absolute top-full left-0 flex justify-center"></div>
        </nav>
      </nav>
    </div>
  </>
);

export default Navbar;
