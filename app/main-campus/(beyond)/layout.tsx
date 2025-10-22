"use client";
import { usePathname } from "next/navigation";
import FadeImage from "@/components/ui/fade-image";
import { Link } from "next-view-transitions";

const menuItems = [
  {
    name: "Leadership at FKS",
    href: "/main-campus/leadership",
    color: "text-green-600",
    img: "/leadership.jpg",
  },
  {
    name: "Sports, Games & Physical Activities",
    href: "/main-campus/sports-games",
    color: "text-green-600",
    img: "/sport.jpg",
  },
  {
    name: "Events & Festivals",
    href: "/main-campus/events-and-festivals",
    color: "text-green-600",
    img: "/events.png",
  },
  {
    name: "Performing Art",
    href: "/main-campus/theatre-and-drama",
    color: "text-green-600",
    img: "/per.jpg",
  },
  {
    name: "Field Trips",
    href: "/main-campus/field-trips",
    color: "text-green-600",
    img: "/trip.jpg",
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
    <>
      <section className="py-10">
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
      </section>
      {children}
    </>
  );
}
