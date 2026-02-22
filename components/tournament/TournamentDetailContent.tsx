'use client';

import Link from 'next/link';
import { Tournament } from '@/lib/types';

export default function TournamentDetailContent({ tournament }: { tournament: Tournament }) {
    return (
        <div className="detail-container">
            <div className="hero-compact">
                <div className="container">
                    <div className="status-badge" data-status={tournament.status}>{tournament.status}</div>
                    <h1>{tournament.title}</h1>
                    <p className="date">{tournament.date}</p>
                </div>
            </div>

            <div className="container content-grid">
                <div className="main-content">
                    <section className="detail-section">
                        <h2>DESCRIPTION</h2>
                        <p>{tournament.description}</p>
                    </section>

                    <section className="detail-section">
                        <h2>SCHEDULE</h2>
                        <div className="schedule-list">
                            <div className="schedule-item">
                                <span className="time">09:00</span>
                                <span className="event">受付開始</span>
                            </div>
                            <div className="schedule-item">
                                <span className="time">10:00</span>
                                <span className="event">オープニングセレモニー</span>
                            </div>
                            <div className="schedule-item">
                                <span className="time">10:30</span>
                                <span className="event">予選リーグ開始</span>
                            </div>
                            <div className="schedule-item">
                                <span className="time">15:00</span>
                                <span className="event">決勝トーナメント</span>
                            </div>
                        </div>
                    </section>
                </div>

                <aside className="sidebar">
                    <div className="info-box">
                        <h3>TOURNAMENT INFO</h3>
                        <div className="info-row">
                            <span className="label">LOCATION</span>
                            <span className="value">{tournament.location}</span>
                        </div>
                        <div className="info-row">
                            <span className="label">DATE</span>
                            <span className="value">{tournament.date}</span>
                        </div>
                        <div className="info-row">
                            <span className="label">FEE</span>
                            <span className="value">¥12,000 / Team</span>
                        </div>
                        <Link href="/entry" className="btn btn-primary full-width">REGISTER NOW</Link>
                    </div>
                </aside>
            </div>

            <style jsx>{`
                .hero-compact {
                    background: var(--bg-dark-secondary);
                    padding: 4rem 0;
                    border-bottom: 1px solid var(--glass-border);
                    margin-bottom: 4rem;
                }

                .hero-compact h1 {
                    font-size: 3.5rem;
                    margin: 1rem 0;
                }

                .status-badge {
                    display: inline-block;
                    padding: 4px 12px;
                    font-size: 0.8rem;
                    font-weight: bold;
                    text-transform: uppercase;
                    border: 1px solid;
                    border-radius: 4px;
                }

                .status-badge[data-status="open"] {
                    color: var(--feature-color);
                    border-color: var(--feature-color);
                }

                .hero-compact .date {
                    font-size: 1.2rem;
                    color: var(--text-muted);
                    font-family: var(--font-heading);
                    letter-spacing: 2px;
                }

                .content-grid {
                    display: grid;
                    grid-template-columns: 1fr 350px;
                    gap: 4rem;
                    margin-bottom: 6rem;
                }

                .detail-section {
                    margin-bottom: 4rem;
                }

                .detail-section h2 {
                    font-size: 1.5rem;
                    margin-bottom: 2rem;
                    padding-bottom: 1rem;
                    border-bottom: 2px solid var(--accent-color);
                    display: inline-block;
                }

                .detail-section p {
                    line-height: 1.8;
                    color: var(--text-muted);
                    font-size: 1.1rem;
                }

                .schedule-list {
                    background: rgba(255, 255, 255, 0.02);
                    padding: 2rem;
                    border: 1px solid var(--glass-border);
                }

                .schedule-item {
                    display: flex;
                    gap: 2rem;
                    padding: 1rem 0;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                }

                .schedule-item:last-child {
                    border-bottom: none;
                }

                .schedule-item .time {
                    font-family: var(--font-heading);
                    color: var(--accent-color);
                    font-weight: bold;
                }

                .sidebar .info-box {
                    background: var(--bg-dark-secondary);
                    padding: 2.5rem;
                    border: 1px solid var(--glass-border);
                    position: sticky;
                    top: 120px;
                }

                .info-box h3 {
                    margin-bottom: 2rem;
                    font-size: 1.2rem;
                }

                .info-row {
                    margin-bottom: 1.5rem;
                    padding-bottom: 0.5rem;
                    border-bottom: 1px dashed rgba(255, 255, 255, 0.1);
                }

                .info-row .label {
                    display: block;
                    font-size: 0.7rem;
                    color: var(--text-muted);
                    font-family: var(--font-heading);
                    letter-spacing: 2px;
                    margin-bottom: 0.3rem;
                }

                .info-row .value {
                    font-weight: bold;
                    font-size: 1.1rem;
                }

                @media (max-width: 992px) {
                    .content-grid {
                        grid-template-columns: 1fr;
                    }
                    .hero-compact h1 {
                        font-size: 2.5rem;
                    }
                }

                :global(.tournament-detail) {
                    padding-top: 80px;
                    background: var(--bg-dark);
                    min-height: 100vh;
                    color: white;
                }
            `}</style>
        </div>
    );
}
