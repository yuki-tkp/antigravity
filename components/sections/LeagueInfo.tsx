'use client';

import Link from 'next/link';

export default function LeagueInfo() {
    const leagues = [
        {
            season: 'SEASON 2026',
            title: 'WINTER CUP',
            date: '2026.02.28 (SAT)',
            place: 'SHIBUYA STREET COURT',
            fee: '¥12,000 / TEAM',
            prize: '¥50,000 + GEAR',
            buttonText: 'APPLY NOW',
            link: '/entry',
        },
        {
            season: 'SEASON 2026',
            title: 'SPRING OPEN',
            date: '2026.03.21 (SAT)',
            place: 'YOYOGI PARK',
            fee: '¥12,000 / TEAM',
            prize: '¥50,000 + GEAR',
            buttonText: 'COMING SOON',
            link: '#',
        },
    ];

    return (
        <section id="league" className="section league">
            <div className="container">
                <h2 className="section-title">1DAY <span className="accent">LEAGUE</span></h2>
                <p className="section-desc">週末に開催される短期決戦。勝利を手にするのは誰だ。</p>

                <div className="league-cards">
                    {leagues.map((league, index) => (
                        <div key={index} className="card league-card">
                            <div className="card-header">
                                <span className="season">{league.season}</span>
                                <h3>{league.title}</h3>
                            </div>
                            <div className="card-body">
                                <div className="info-row">
                                    <span className="label">DATE</span>
                                    <span className="value">{league.date}</span>
                                </div>
                                <div className="info-row">
                                    <span className="label">PLACE</span>
                                    <span className="value">{league.place}</span>
                                </div>
                                <div className="info-row">
                                    <span className="label">ENTRY FEE</span>
                                    <span className="value">{league.fee}</span>
                                </div>
                                <div className="info-row">
                                    <span className="label">PRIZE</span>
                                    <span className="value">{league.prize}</span>
                                </div>
                                <Link href={league.link} className="btn btn-secondary full-width">
                                    {league.buttonText}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .league {
          background: var(--bg-dark);
        }

        .league-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .league-card {
          background: #1a1a1a;
          border: 1px solid #333;
          transition: transform 0.3s ease;
        }

        .league-card:hover {
          transform: translateY(-10px);
          border-color: var(--feature-color);
        }

        .card-header {
          background: #000;
          padding: 20px;
          border-bottom: 1px solid #333;
          text-align: center;
        }

        .season {
          color: var(--text-muted);
          font-size: 0.9rem;
          display: block;
          margin-bottom: 5px;
        }

        .card-header h3 {
          font-size: 2rem;
          color: #fff;
          font-family: var(--font-heading);
        }

        .card-body {
          padding: 30px;
        }

        .info-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 15px;
          border-bottom: 1px dashed #333;
          padding-bottom: 5px;
        }

        .info-row .label {
          color: var(--text-muted);
          font-weight: bold;
        }

        .info-row .value {
          font-weight: bold;
          color: #fff;
        }
      `}</style>
        </section>
    );
}
