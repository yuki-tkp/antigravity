import { getReports } from '@/lib/content';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Reports from '@/components/sections/Reports';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function ReportsArchivePage() {
    const reports = await getReports();

    return (
        <>
            <Navbar />
            <main style={{ paddingTop: '80px', background: 'var(--bg-dark)', minHeight: '100vh' }}>
                <header style={{ padding: '6rem 0 4rem', textAlign: 'center' }}>
                    <div className="container">
                        <Link href="/" style={{ color: 'var(--accent-color)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                            BACK TO HOME
                        </Link>
                        <h1 style={{ color: 'white', fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', margin: '1rem 0', fontFamily: 'var(--font-heading)', letterSpacing: '4px' }}>
                            ACTIVITY <span style={{ color: 'var(--accent-color)' }}>ARCHIVE</span>
                        </h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                            これまでの活動記録とイベントレポートの全履歴です。
                        </p>
                    </div>
                </header>

                <Reports reports={reports} />

                <div style={{ padding: '4rem 0 8rem', textAlign: 'center' }}>
                    <div className="container">
                        <Link href="/" className="btn btn-primary">
                            BACK TO HOME
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
