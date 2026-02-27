import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import LeagueInfo from "@/components/sections/LeagueInfo";
import Reports from "@/components/sections/Reports";
import Sponsors from "@/components/sections/Sponsors";
import Contact from "@/components/sections/Contact";
import { getReports, getSponsors } from "@/lib/content";

export const dynamic = 'force-dynamic';

export default async function Home() {
  const reportsData = await getReports();
  const sponsorsData = await getSponsors();
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <LeagueInfo />
        <Reports reports={reportsData} limit={5} showArchiveButton={true} />
        <Sponsors sponsors={sponsorsData} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
