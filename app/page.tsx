import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import LiveMatch from "@/components/sections/LiveMatch";
import About from "@/components/sections/About";
import LeagueInfo from "@/components/sections/LeagueInfo";
import Reports from "@/components/sections/Reports";
import Sponsors from "@/components/sections/Sponsors";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LiveMatch />
        <About />
        <LeagueInfo />
        <Reports />
        <Sponsors />
      </main>
      <Footer />
    </>
  );
}
