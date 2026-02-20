import Link from 'next/link';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            <aside style={{ width: '250px', backgroundColor: '#1a1a1a', color: 'white', padding: '2rem 1rem' }}>
                <h2 style={{ fontSize: '1.2rem', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid #333' }}>
                    K3A Admin
                </h2>
                <nav>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <li><Link href="/admin" style={{ display: 'block', padding: '0.5rem', borderRadius: '4px', backgroundColor: '#333' }}>Dashboard</Link></li>
                        <li><Link href="/admin/news" style={{ display: 'block', padding: '0.5rem', color: '#ccc' }}>News</Link></li>
                        <li><Link href="/admin/tournaments" style={{ display: 'block', padding: '0.5rem', color: '#ccc' }}>Tournaments</Link></li>
                        <li><Link href="/admin/entries" style={{ display: 'block', padding: '0.5rem', color: '#ccc' }}>Entries</Link></li>
                        <li><Link href="/admin/sponsors" style={{ display: 'block', padding: '0.5rem', color: '#ccc' }}>Sponsors</Link></li>
                    </ul>
                </nav>
                <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
                    <Link href="/" style={{ color: '#888', fontSize: '0.9rem' }}>← Back to Site</Link>
                </div>
            </aside>
            <main style={{ flex: 1, padding: '2rem', backgroundColor: '#f5f5f5' }}>
                {children}
            </main>
        </div>
    );
}
