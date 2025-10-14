"use client";
import { usePathname } from "next/navigation";
import FadeImage from "@/components/ui/fade-image";
import { Link } from "next-view-transitions";

const menuItems = [
  {
    name: "Board & Curriculum",
    href: "/main-campus/board-and-curriculum",
    color: "text-green-600",
    img: "/7.jpg",
  },
  {
    name: "Pedagogy",
    href: "/main-campus/pedagogy",
    color: "text-green-600",
    img: "/pedagogy.jpg",
  },
  {
    name: "Extra & Co-curricular Activities",
    href: "/main-campus/extra-activities",
    color: "text-green-600",
    img: "/extra.jpeg",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Find the active menu item
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
            <h2 className="text-xl font-semibold mb-4 dark:text-background">Learning at FKS</h2>
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
