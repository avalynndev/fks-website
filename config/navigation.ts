export interface NavigationLink {
  href: string;
  label: string;
  external?: boolean;
}

export const navigationLinks: NavigationLink[] = [
  {
    href: "/main-campus/our-story",
    label: "About Us",
  },
  {
    href: "/main-campus/board-and-curriculum",
    label: "Learning at FKS",
  },
  {
    href: "/main-campus/leadership",
    label: "Beyond Learning",
  },
  {
    href: "/main-campus/campus",
    label: "Campus",
  },
  {
    href: "/main-campus/connect",
    label: "Get In Touch",
  },
];

export const authLinks = {
  signIn: {
    href: "/",
    label: "Log in",
  },
  getStarted: {
    href: "/",
    label: "Button",
  },
};
