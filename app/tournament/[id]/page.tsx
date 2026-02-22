import { notFound } from 'next/navigation';
import { getTournamentById } from '@/lib/content';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TournamentDetailContent from '@/components/tournament/TournamentDetailContent';

export default async function TournamentDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const tournament = await getTournamentById(id);

    if (!tournament) {
        notFound();
    }

    return (
        <>
            <Navbar />
            <main className="tournament-detail">
                <TournamentDetailContent tournament={tournament} />
            </main>
            <Footer />
        </>
    );
}
