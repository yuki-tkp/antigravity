import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import LeagueInfo from "@/components/sections/LeagueInfo";
import Reports from "@/components/sections/Reports";
import Sponsors from "@/components/sections/Sponsors";
import SpecialWebsites from "@/components/sections/SpecialWebsites";
import Contact from "@/components/sections/Contact";
import { getReports, getSponsors, getSpecialWebsites } from "@/lib/content";

export const dynamic = 'force-dynamic';

export default async function Home() {
  const reportsData = await getReports();
  const sponsorsData = await getSponsors();
  const specialWebsitesData = await getSpecialWebsites();
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <LeagueInfo />
        <Reports reports={reportsData} limit={5} showArchiveButton={true} />
        <SpecialWebsites banners={specialWebsitesData} />
        <Sponsors sponsors={sponsorsData} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
