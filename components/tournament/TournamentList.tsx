'use client';

import Link from 'next/link';
import { Tournament } from '@/lib/types';

export default function TournamentList({ tournaments }: { tournaments: Tournament[] }) {
    return (
        <div className="tournament-grid">
            {tournaments.map((tournament) => (
                <Link href={`/tournament/${tournament.id}`} key={tournament.id} className="tournament-card">
                    <div className="card-image">
                        <div className="status-badge" data-status={tournament.status}>{tournament.status}</div>
                    </div>
                    <div className="card-content">
                        <span className="date">{tournament.date}</span>
                        <h3>{tournament.title}</h3>
                        <p className="location">{tournament.location}</p>
                        <div className="view-link">
                            DETAILS
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </div>
                    </div>
                </Link>
            ))}

            <style jsx>{`
                .tournament-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
                    gap: 3rem;
                    margin-bottom: 8rem;
                }

                .tournament-card {
                    background: var(--bg-dark-secondary);
                    border: 1px solid var(--glass-border);
                    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                    display: block;
                    text-decoration: none;
                }

                .tournament-card:hover {
                    transform: translateY(-10px);
                    border-color: var(--accent-color);
                    box-shadow: var(--glass-shadow);
                }

                .card-image {
                    height: 200px;
                    background: #111;
                    position: relative;
                    background: 
                        linear-gradient(45deg, #050505 25%, #111 25%, #111 50%, #050505 50%, #050505 75%, #111 75%, #111 100%);
                    background-size: 30px 30px;
                }

                .status-badge {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    padding: 4px 12px;
                    font-size: 0.7rem;
                    font-weight: 900;
                    text-transform: uppercase;
                    background: #000;
                    border: 1px solid;
                    font-family: var(--font-heading);
                    letter-spacing: 2px;
                }

                .status-badge[data-status="upcoming"] { color: #888; border-color: #333; }
                .status-badge[data-status="open"] { color: var(--feature-color); border-color: var(--feature-color); }
                .status-badge[data-status="finished"] { color: #555; border-color: #222; }

                .card-content {
                    padding: 2.5rem;
                }

                .card-content .date {
                    font-family: var(--font-heading);
                    color: var(--accent-color);
                    font-size: 0.8rem;
                    letter-spacing: 2px;
                    display: block;
                    margin-bottom: 0.5rem;
                }

                .card-content h3 {
                    font-size: 1.8rem;
                    color: white;
                    margin-bottom: 1rem;
                    line-height: 1.2;
                }

                .card-content .location {
                    color: var(--text-muted);
                    font-size: 1rem;
                    margin-bottom: 2rem;
                }

                .view-link {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    color: white;
                    font-family: var(--font-heading);
                    font-size: 0.8rem;
                    letter-spacing: 2px;
                    transition: gap 0.3s ease;
                }

                .tournament-card:hover .view-link {
                    color: var(--accent-color);
                    gap: 15px;
                }

                @media (max-width: 768px) {
                    .tournament-grid {
                        grid-template-columns: 1fr;
                    }
                }

                :global(.tournament-page) {
                    padding-top: 80px;
                    background: var(--bg-dark);
                    min-height: 100vh;
                }

                :global(.page-header) {
                    padding: 6rem 0 4rem;
                    text-align: center;
                }
            `}</style>
        </div>
    );
}
