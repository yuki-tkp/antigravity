import { getReports } from '@/lib/content';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export async function generateStaticParams() {
    const reports = await getReports();
    return reports.map((report) => ({
        id: report.id,
    }));
}

export default async function ReportDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const reports = await getReports();
    const report = reports.find((item) => item.id === id);

    if (!report) {
        return (
            <>
                <Navbar />
                <div style={{ padding: '10rem 1rem', textAlign: 'center', background: 'var(--bg-dark)', color: 'white', minHeight: '100vh' }}>
                    <div className="container">
                        <h1>Report not found</h1>
                        <Link href="/" className="btn btn-primary" style={{ marginTop: '2rem' }}>Back to Home</Link>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <main style={{ paddingTop: '80px', background: 'var(--bg-dark)', color: 'white', minHeight: '100vh' }}>
                <header style={{ padding: '4rem 0', background: 'var(--bg-dark-secondary)', textAlign: 'center', borderBottom: '1px solid var(--glass-border)' }}>
                    <div className="container">
                        <span style={{ color: 'var(--accent-color)', fontWeight: 'bold', letterSpacing: '2px', marginBottom: '1rem', display: 'block' }}>{report.date}</span>
                        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', margin: 0 }}>{report.title}</h1>
                    </div>
                </header>

                <section style={{ padding: '4rem 0' }}>
                    <div className="container">
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
                            {report.videoUrl && (
                                <div style={{ border: '1px solid var(--glass-border)', borderRadius: '8px', overflow: 'hidden', background: '#000', marginBottom: '2rem' }}>
                                    <video
                                        src={report.videoUrl}
                                        controls
                                        style={{ width: '100%', height: 'auto', display: 'block' }}
                                    >
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            )}
                            {report.images?.map((img, index) => (
                                <div key={index} style={{ border: '1px solid var(--glass-border)', borderRadius: '8px', overflow: 'hidden', background: '#000' }}>
                                    <img src={img} alt={`${report.title} ${index + 1}`} style={{ width: '100%', height: 'auto', display: 'block' }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section style={{ padding: '4rem 0 8rem' }}>
                    <div className="container">
                        <div style={{ background: 'var(--bg-dark-secondary)', padding: 'clamp(1.5rem, 5vw, 3rem)', borderRadius: '12px', border: '1px solid var(--glass-border)', marginBottom: '4rem' }}>
                            <h2 style={{ color: 'var(--accent-color)', marginBottom: '2rem', fontSize: '2rem', borderLeft: '4px solid var(--accent-color)', paddingLeft: '1.5rem' }}>Event Details</h2>
                            <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-muted)' }}>
                                {report.details?.split('\n').map((line, i) => (
                                    <p key={i} style={{ marginBottom: '1.5rem' }}>{line}</p>
                                )) || <p>{report.description}</p>}
                            </div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <Link href="/" className="btn btn-primary">Back to Home</Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
