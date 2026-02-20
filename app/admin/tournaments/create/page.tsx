'use client';

import { createTournament } from '@/app/actions/tournaments';
import Link from 'next/link';

export default function CreateTournamentPage() {
    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 className="section-title" style={{ textAlign: 'left' }}>Create Tournament</h1>
            <form action={createTournament} style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Title</label>
                    <input type="text" name="title" required style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #d1d5db' }} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Date</label>
                        <input type="date" name="date" required style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #d1d5db' }} />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Status</label>
                        <select name="status" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #d1d5db' }}>
                            <option value="upcoming">Upcoming</option>
                            <option value="open">Entry Open</option>
                            <option value="closed">Closed</option>
                        </select>
                    </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Location</label>
                    <input type="text" name="location" required style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #d1d5db' }} />
                </div>

                <div style={{ marginBottom: '2rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Description</label>
                    <textarea name="description" required rows={5} style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #d1d5db' }}></textarea>
                </div>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                    <Link href="/admin/tournaments" className="btn" style={{ padding: '0.75rem 1.5rem', borderRadius: '4px', border: '1px solid #d1d5db', background: 'white', textDecoration: 'none', color: 'black', display: 'flex', alignItems: 'center' }}>Cancel</Link>
                    <button type="submit" className="btn btn-primary">Create</button>
                </div>
            </form>
        </div>
    );
}
