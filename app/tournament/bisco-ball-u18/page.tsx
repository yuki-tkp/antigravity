'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function BiscoBallU18() {
    return (
        <>
            <Navbar />
            <main className="tournament-page">
                <header className="page-header">
                    <div className="container">
                        <span className="season">SEASON 2026</span>
                        <h1 className="page-title">bisco ball Under18</h1>
                    </div>
                </header>

                <section className="tournament-content">
                    <div className="container">
                        <div className="content-inner">
                            <div className="media-container">
                                <img 
                                    src="/images/special/bisco-ball-u18-2.png" 
                                    alt="bisco ball Under18 Poster" 
                                    className="poster-image" 
                                />
                            </div>

                            <div className="details-section">
                                <h2>大会概要</h2>
                                <p className="description">
                                    北九州の若者よ。ここから街を創れ。<br />
                                    U-18カテゴリを対象としたストリートバスケットボールの祭典「bisco ball Under18」を開催します。<br />
                                    JR小倉駅JAM広場の特設コートで繰り広げられる熱い戦いを、ぜひ現地で体感してください！
                                </p>

                                <div className="details-list">
                                    <div className="detail-row">
                                        <span className="label">SCHEDULE</span>
                                        <span className="value">2026.08.09 (SUN) 9:00〜19:00</span>
                                    </div>
                                    <div className="detail-row">
                                        <span className="label">LOCATION</span>
                                        <span className="value">JR小倉駅 3階改札前 JAM広場 (特設コート)</span>
                                    </div>
                                    <div className="detail-row">
                                        <span className="label">FEE</span>
                                        <span className="value">観戦無料</span>
                                    </div>
                                    <div className="detail-row">
                                        <span className="label">PRIZE</span>
                                        <span className="value">- (TBD)</span>
                                    </div>
                                </div>

                                <div className="cta-section">
                                    <p>
                                        エントリー希望はこちらのボタンから必要事項を入力してください。<br />
                                        入力後３日以内に協会より連絡します。
                                    </p>
                                    <Link href="/entry" className="btn btn-primary btn-large">
                                        ENTRY NOW
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <style jsx>{`
                    .tournament-page {
                        background: var(--bg-dark);
                        min-height: 100vh;
                        color: white;
                        padding-top: 80px;
                    }
                    .page-header {
                        padding: 6rem 0 3rem;
                        text-align: center;
                        background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url(/images/hero-bg.jpg);
                        background-size: cover;
                        background-position: center;
                        border-bottom: 1px solid var(--glass-border);
                    }
                    .season {
                        color: var(--accent-color);
                        font-family: var(--font-heading);
                        font-size: 1.1rem;
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
                        text-transform: uppercase;
                    }
                    .tournament-content {
                        padding: 5rem 0;
                    }
                    .content-inner {
                        max-width: 900px;
                        margin: 0 auto;
                        display: flex;
                        flex-direction: column;
                        gap: 4rem;
                        align-items: center;
                    }
                    .media-container {
                        width: 100%;
                        max-width: 500px;
                        box-shadow: 0 20px 40px rgba(0,0,0,0.6);
                        border: 1px solid var(--glass-border);
                        border-radius: 8px;
                        overflow: hidden;
                        transition: transform 0.3s ease;
                    }
                    .media-container:hover {
                        transform: scale(1.02);
                    }
                    .poster-image {
                        width: 100%;
                        height: auto;
                        display: block;
                    }
                    .details-section {
                        width: 100%;
                    }
                    .details-section h2 {
                        color: var(--accent-color);
                        margin-bottom: 1.5rem;
                        font-size: 2rem;
                        font-family: var(--font-heading);
                        border-bottom: 2px solid var(--accent-color);
                        display: inline-block;
                        padding-bottom: 0.5rem;
                    }
                    .description {
                        line-height: 1.8;
                        color: #ddd;
                        font-size: 1.1rem;
                        margin-bottom: 3rem;
                    }
                    .details-list {
                        display: flex;
                        flex-direction: column;
                        gap: 1.2rem;
                        background: var(--bg-dark-secondary);
                        padding: 3rem;
                        border: 1px solid var(--glass-border);
                        border-radius: 8px;
                        margin-bottom: 4rem;
                    }
                    .detail-row {
                        display: flex;
                        align-items: baseline;
                        font-size: 1.1rem;
                        line-height: 1.6;
                        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                        padding-bottom: 1rem;
                    }
                    .detail-row:last-child {
                        border-bottom: none;
                        padding-bottom: 0;
                    }
                    .detail-row .label {
                        font-family: var(--font-heading);
                        color: var(--accent-color);
                        width: 150px;
                        flex-shrink: 0;
                        letter-spacing: 2px;
                        font-weight: bold;
                        font-size: 1rem;
                    }
                    .detail-row .value {
                        color: white;
                        font-weight: 500;
                    }
                    .cta-section {
                        text-align: center;
                        padding: 4rem 2rem;
                        background: var(--bg-dark-secondary);
                        border: 1px dashed var(--glass-border);
                        border-radius: 8px;
                    }
                    .cta-section p {
                        margin-bottom: 2rem;
                        font-size: 1.1rem;
                        color: #ccc;
                    }
                    .btn-large {
                        padding: 1.2rem 4rem;
                        font-size: 1.2rem;
                        display: inline-block;
                    }

                    @media (max-width: 768px) {
                        .page-title {
                            font-size: 2.5rem;
                        }
                        .detail-row {
                            flex-direction: column;
                            gap: 0.3rem;
                            padding-bottom: 1.2rem;
                        }
                        .detail-row .label {
                            width: auto;
                        }
                        .cta-section {
                            padding: 2.5rem 1rem;
                        }
                    }
                `}</style>
            </main>
            <Footer />
        </>
    );
}
