import Navbar from "@/components/navbar";
import Banner from "@/components/banner";
import Footer from "@/components/sections/footer/default";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Banner />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
