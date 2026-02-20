import { getSponsors } from '@/lib/content';
import { addSponsor, deleteSponsor } from '@/app/actions/sponsors';

export default async function AdminSponsorsPage() {
    const sponsors = await getSponsors();

    return (
        <div>
            <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>Sponsors Management</h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 300px', gap: '2rem' }}>
                <div style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f9fafb', textAlign: 'left' }}>
                                <th style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}>Name</th>
                                <th style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}>URL</th>
                                <th style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}>Logo</th>
                                <th style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sponsors.map((sponsor) => {
                                const deleteSponsorWithId = deleteSponsor.bind(null, sponsor.id);
                                return (
                                    <tr key={sponsor.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                                        <td style={{ padding: '1rem' }}>{sponsor.name}</td>
                                        <td style={{ padding: '1rem' }}>
                                            <a href={sponsor.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)' }}>{sponsor.url}</a>
                                        </td>
                                        <td style={{ padding: '1rem' }}>
                                            <img src={sponsor.logoUrl} alt={sponsor.name} style={{ height: '40px', objectFit: 'contain' }} />
                                        </td>
                                        <td style={{ padding: '1rem' }}>
                                            <form action={deleteSponsorWithId}>
                                                <button type="submit" style={{ color: 'red', background: 'none', border: 'none', cursor: 'pointer' }}>Delete</button>
                                            </form>
                                        </td>
                                    </tr>
                                );
                            })}
                            {sponsors.length === 0 && (
                                <tr>
                                    <td colSpan={4} style={{ padding: '2rem', textAlign: 'center', color: '#ccc' }}>No sponsors added yet.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: 'var(--shadow-sm)', height: 'fit-content' }}>
                    <h2 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem' }}>Add New Sponsor</h2>
                    <form action={addSponsor}>
                        <div style={{ marginBottom: '1rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Name</label>
                            <input type="text" name="name" required style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #d1d5db' }} />
                        </div>
                        <div style={{ marginBottom: '1rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>URL</label>
                            <input type="url" name="url" placeholder="https://" style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #d1d5db' }} />
                        </div>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Logo URL</label>
                            <input type="text" name="logoUrl" placeholder="/assets/logo.png" style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #d1d5db' }} />
                            <p style={{ fontSize: '0.8rem', color: '#888', marginTop: '0.25rem' }}>Enter absolute URL or path to public assets</p>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Add Sponsor</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
