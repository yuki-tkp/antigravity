'use client';

import React from 'react';
import Link from 'next/link';

export default function BiscoBallU15() {
    return (
        <main className="tournament-page">
            <header className="page-header" style={{
                background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/images/hero-bg.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '8rem 1rem 4rem',
                textAlign: 'center'
            }}>
                <div className="container">
                    <span className="season">SEASON 2026</span>
                    <h1 className="page-title">Bisco Ball U-15</h1>
                </div>
            </header>

            <section className="tournament-content">
                <div className="container">
                    <div className="content-inner">
                        <div className="overview">
                            <h2>大会概要</h2>
                            <p>本大会は中学生以下を対象とした3x3トーナメント「Bisco Ball U-15」です。日頃の練習の成果を発揮し、勝利を掴み取りましょう。</p>
                        </div>

                        <div className="details-grid">
                            <div className="detail-item">
                                <div className="label">SCHEDULE</div>
                                <div className="value">2026.04.25 (SAT)</div>
                            </div>
                            <div className="detail-item">
                                <div className="label">LOCATION</div>
                                <div className="value">船場広場（小倉北区）</div>
                            </div>
                            <div className="detail-item">
                                <div className="label">FEE</div>
                                <div className="value">未定</div>
                                <div className="sub-text">※決定次第更新いたします</div>
                            </div>
                            <div className="detail-item">
                                <div className="label">PRIZE</div>
                                <div className="value">未定</div>
                                <div className="sub-text">※決定次第更新いたします</div>
                            </div>
                        </div>

                        <div className="cta-section">
                            <p>エントリーはお早めに！皆様の挑戦をお待ちしております。</p>
                            <Link href="/entry" className="btn btn-primary btn-large">
                                ENTRY
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .tournament-page {
                    background: var(--bg-dark);
                    min-height: 100vh;
                    color: white;
                }
                .season {
                    color: var(--accent-color);
                    font-family: var(--font-heading);
                    font-size: 1rem;
                    letter-spacing: 4px;
                    display: block;
                    margin-bottom: 1rem;
                }
                .page-title {
                    font-size: 4rem;
                    font-family: var(--font-heading);
                    letter-spacing: 2px;
                    line-height: 1.1;
                    margin: 0;
                }
                .tournament-content {
                    padding: 5rem 0;
                }
                .content-inner {
                    max-width: 800px;
                    margin: 0 auto;
                }
                .overview {
                    background: var(--bg-dark-secondary);
                    padding: 3rem;
                    border: 1px solid var(--glass-border);
                    margin-bottom: 3rem;
                }
                .overview h2 {
                    color: var(--accent-color);
                    margin-bottom: 1.5rem;
                    font-size: 1.5rem;
                }
                .overview p {
                    line-height: 1.8;
                    color: #ddd;
                }
                .details-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 2rem;
                    margin-bottom: 4rem;
                }
                .detail-item {
                    background: var(--bg-dark-secondary);
                    padding: 2rem;
                    border: 1px solid var(--glass-border);
                    text-align: center;
                }
                .detail-item .label {
                    font-family: var(--font-heading);
                    color: var(--text-muted);
                    font-size: 0.9rem;
                    letter-spacing: 2px;
                    margin-bottom: 1rem;
                }
                .detail-item .value {
                    font-size: 1.8rem;
                    font-weight: 700;
                    margin-bottom: 0.5rem;
                }
                .detail-item .sub-text {
                    font-size: 0.8rem;
                    color: var(--text-muted);
                }
                .cta-section {
                    text-align: center;
                    padding: 4rem;
                    background: var(--bg-dark-secondary);
                    border: 1px dashed var(--glass-border);
                }
                .cta-section p {
                    margin-bottom: 2rem;
                    font-size: 1.1rem;
                }
                .btn-large {
                    padding: 1.2rem 4rem;
                    font-size: 1.2rem;
                }

                @media (max-width: 768px) {
                    .page-title {
                        font-size: 2.5rem;
                    }
                    .details-grid {
                        grid-template-columns: 1fr;
                    }
                    .overview {
                        padding: 2rem;
                    }
                    .detail-item {
                        padding: 1.5rem;
                    }
                    .cta-section {
                        padding: 2rem 1rem;
                    }
                }
            `}</style>
        </main>
    );
}
