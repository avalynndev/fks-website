import Navbar from "@/components/navbar";
import { Banner } from "@/components/banner";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Banner />
      <Navbar />
      <main className="overflow-x-hidden md:overflow-visible">
        <div className="relative overflow-hidden">
          <div
            className="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat opacity-[0.20]"
            style={{
              backgroundImage: "url('/bg-opaque.png')",
              backgroundAttachment: "fixed",
            }}
          />
        </div>
      </main>
      {children}
      <Footer />
    </>
  );
}
