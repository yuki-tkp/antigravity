import { getTournaments } from '@/lib/content';
import { updateTournament } from '@/app/actions/tournaments';
import Link from 'next/link';

export default async function EditTournamentPage({ params }: { params: { id: string } }) {
    const tournaments = await getTournaments();
    const item = tournaments.find((t) => t.id === params.id);

    if (!item) {
        return <div>Tournament not found</div>;
    }

    const updateTournamentWithId = updateTournament.bind(null, item.id);

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 className="section-title" style={{ textAlign: 'left' }}>Edit Tournament</h1>
            <form action={updateTournamentWithId} style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Title</label>
                    <input type="text" name="title" defaultValue={item.title} required style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #d1d5db' }} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Date</label>
                        <input type="date" name="date" defaultValue={item.date} required style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #d1d5db' }} />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Status</label>
                        <select name="status" defaultValue={item.status} style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #d1d5db' }}>
                            <option value="upcoming">Upcoming</option>
                            <option value="open">Entry Open</option>
                            <option value="closed">Closed</option>
                        </select>
                    </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Location</label>
                    <input type="text" name="location" defaultValue={item.location} required style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #d1d5db' }} />
                </div>

                <div style={{ marginBottom: '2rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Description</label>
                    <textarea name="description" defaultValue={item.description} required rows={5} style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #d1d5db' }}></textarea>
                </div>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                    <Link href="/admin/tournaments" className="btn" style={{ padding: '0.75rem 1.5rem', borderRadius: '4px', border: '1px solid #d1d5db', background: 'white', textDecoration: 'none', color: 'black', display: 'flex', alignItems: 'center' }}>Cancel</Link>
                    <button type="submit" className="btn btn-primary">Update</button>
                </div>
            </form>
        </div>
    );
}
