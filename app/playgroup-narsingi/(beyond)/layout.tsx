"use client";
import { usePathname } from "next/navigation";
import FadeImage from "@/components/ui/fade-image";
import { Link } from "next-view-transitions";

const menuItems = [
  {
    name: "Well Being",
    href: "/playgroup-narsingi/well-being",
    color: "text-green-600",
    img: "/beyond12.jpg",
  },
  {
    name: "Play At FKS",
    href: "/playgroup-narsingi/play-at-fks",
    color: "text-green-600",
    img: "/beyond12.jpg",
  },
  {
    name: "Events And Festivals",
    href: "/playgroup-narsingi/events-and-festivals",
    color: "text-green-600",
    img: "/evnts1.jpg",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const activeItem =
    menuItems.find((item) => pathname === item.href) || menuItems[0];
  return (
    <div className="pb-10 pt-4 px-4">
      <div className="relative mx-auto max-w-6xl h-[500px] rounded-3xl overflow-hidden">
        <FadeImage
          key={pathname}
          src={activeItem.img}
          alt={activeItem.name}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute bottom-8 left-8 bg-white/70 backdrop-blur-md rounded-3xl p-6 max-w-xs">
          <h2 className="text-xl font-semibold mb-4 dark:text-background">
            Beyond Learning
          </h2>
          <ul className="space-y-2 text-sm">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`cursor-pointer hover:underline ${
                      isActive
                        ? item.color || "text-blue-700 font-semibold"
                        : "text-blue-700"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {children}
    </div>
  );
}
