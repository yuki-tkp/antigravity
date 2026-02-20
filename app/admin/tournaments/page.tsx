import Link from 'next/link';
import { getTournaments } from '@/lib/content';
import { deleteTournament } from '@/app/actions/tournaments';

export default async function AdminTournamentsPage() {
    const tournaments = await getTournaments();

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1 className="section-title" style={{ textAlign: 'left', margin: 0 }}>Tournaments Management</h1>
                <Link href="/admin/tournaments/create" className="btn btn-primary">Add New</Link>
            </div>

            <div style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ backgroundColor: '#f9fafb', textAlign: 'left' }}>
                            <th style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}>Date</th>
                            <th style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}>Title</th>
                            <th style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}>Status</th>
                            <th style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tournaments.map((item) => (
                            <tr key={item.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                                <td style={{ padding: '1rem' }}>{item.date}</td>
                                <td style={{ padding: '1rem' }}>{item.title}</td>
                                <td style={{ padding: '1rem' }}>
                                    <span style={{
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '999px',
                                        fontSize: '0.8rem',
                                        backgroundColor: item.status === 'open' ? '#dcfce7' : item.status === 'upcoming' ? '#e0f2fe' : '#f3f4f6',
                                        color: item.status === 'open' ? '#166534' : item.status === 'upcoming' ? '#0369a1' : '#4b5563'
                                    }}>
                                        {item.status.toUpperCase()}
                                    </span>
                                </td>
                                <td style={{ padding: '1rem' }}>
                                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                                        <Link href={`/admin/tournaments/edit/${item.id}`} style={{ color: 'var(--primary-blue)', fontWeight: 600 }}>Edit</Link>
                                        <form action={async () => {
                                            'use server';
                                            await deleteTournament(item.id);
                                        }}>
                                            <button type="submit" style={{ color: '#ef4444', fontWeight: 600 }}>Delete</button>
                                        </form>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
