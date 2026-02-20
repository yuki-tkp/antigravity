export default function AdminDashboard() {
    return (
        <div>
            <h1 className="section-title" style={{ textAlign: 'left', fontSize: '1.8rem' }}>Dashboard</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                <DashboardCard title="News" link="/admin/news" count="-" />
                <DashboardCard title="Tournaments" link="/admin/tournaments" count="-" />
                <DashboardCard title="Entries" link="/admin/entries" count="-" />
                <DashboardCard title="Sponsors" link="/admin/sponsors" count="-" />
            </div>
        </div>
    );
}

function DashboardCard({ title, link, count }: { title: string, link: string, count: string | number }) {
    return (
        <a href={link} style={{
            display: 'block',
            padding: '2rem',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: 'var(--shadow-sm)',
            textDecoration: 'none',
            color: 'inherit',
            transition: 'transform 0.2s'
        }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--primary-blue)' }}>{title}</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{count}</p>
        </a>
    );
}
