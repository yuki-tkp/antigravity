import { getTournaments } from '@/lib/content';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TournamentList from '@/components/tournament/TournamentList';

export default async function TournamentPage() {
    const tournaments = await getTournaments();

    return (
        <>
            <Navbar />
            <main className="tournament-page">
                <div className="page-header">
                    <div className="container">
                        <h1 className="section-title">TOURNAMENTS</h1>
                        <p className="section-desc">現在募集中の大会および過去のアーカイブです。</p>
                    </div>
                </div>

                <div className="container">
                    <TournamentList tournaments={tournaments} />
                </div>
            </main>
            <Footer />
        </>
    );
}
