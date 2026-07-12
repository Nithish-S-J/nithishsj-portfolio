import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-[#09090B]">
        <Hero />
      </main>
    </>
  );
}