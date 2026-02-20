'use client';

import { createNews } from '@/app/actions/news';
import Link from 'next/link';

export default function CreateNewsPage() {
    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 className="section-title" style={{ textAlign: 'left' }}>Create News</h1>
            <form action={createNews} style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Title</label>
                    <input type="text" name="title" required style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #d1d5db' }} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Date</label>
                        <input type="date" name="publishedAt" required style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #d1d5db' }} />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Category</label>
                        <select name="category" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #d1d5db' }}>
                            <option value="info">Info</option>
                            <option value="game">Game</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Content</label>
                    <textarea name="content" required rows={10} style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #d1d5db' }}></textarea>
                </div>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                    <Link href="/admin/news" className="btn" style={{ padding: '0.75rem 1.5rem', borderRadius: '4px', border: '1px solid #d1d5db', background: 'white', textDecoration: 'none', color: 'black', display: 'flex', alignItems: 'center' }}>Cancel</Link>
                    <button type="submit" className="btn btn-primary">Create</button>
                </div>
            </form>
        </div>
    );
}
