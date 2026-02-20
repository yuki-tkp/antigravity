import { getEntries } from '@/lib/content';
import ExportButton from './ExportButton';

export default async function AdminEntriesPage() {
    const entries = await getEntries();

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1 className="section-title" style={{ textAlign: 'left', margin: 0 }}>Entries Management</h1>
                <ExportButton entries={entries} />
            </div>

            <div style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
                {entries.length === 0 ? (
                    <p style={{ padding: '2rem', textAlign: 'center', color: '#666' }}>No entries found.</p>
                ) : (
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f9fafb', textAlign: 'left' }}>
                                <th style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}>Date</th>
                                <th style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}>Team Name</th>
                                <th style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}>Representative</th>
                                <th style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}>Players</th>
                            </tr>
                        </thead>
                        <tbody>
                            {entries.map((item) => (
                                <tr key={item.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                                    <td style={{ padding: '1rem' }}>{new Date(item.createdAt).toLocaleDateString()}</td>
                                    <td style={{ padding: '1rem' }}>{item.teamName}</td>
                                    <td style={{ padding: '1rem' }}>
                                        {item.representative.name}<br />
                                        <span style={{ fontSize: '0.8rem', color: '#666' }}>{item.representative.email}</span>
                                    </td>
                                    <td style={{ padding: '1rem' }}>{item.players.length} Players</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}
