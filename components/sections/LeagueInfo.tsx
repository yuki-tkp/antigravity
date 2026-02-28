'use client';

import Link from 'next/link';

export default function LeagueInfo() {
  const leagues = [
    {
      season: 'SEASON 2026',
      title: 'BISCO BALL',
      date: '2026.02.28 (SAT)',
      place: 'KITAKYUSHU CITY',
      fee: '¥10,000 / TEAM',
      prize: '¥20,000',
      buttonText: 'ENTRY',
      link: '/entry',
      visible: false,
    },
    {
      season: 'SEASON 2026',
      title: 'OPEN LEAGUE',
      date: 'COMING SOON',
      place: 'TBD',
      fee: '-',
      prize: '-',
      buttonText: 'COMING SOON',
      link: '#',
      visible: false,
    },
  ];

  const visibleLeagues = leagues.filter(league => league.visible);

  return (
    <section id="league" className="section league">
      <div className="container">
        <h2 className="section-title">1DAY <span className="accent">LEAGUE</span></h2>
        <p className="section-desc">週末に開催される短期決戦。勝利を手にするのは誰だ。</p>

        <div className="league-cards">
          {visibleLeagues.length > 0 ? (
            visibleLeagues.map((league, index) => (
              <div key={index} className="league-card">
                <div className="card-header">
                  <span className="season">{league.season}</span>
                  <h3>{league.title}</h3>
                </div>
                <div className="card-body">
                  <div className="info-item">
                    <div className="info-label">SCHEDULE</div>
                    <div className="info-value">{league.date}</div>
                  </div>
                  <div className="info-item">
                    <div className="info-label">LOCATION</div>
                    <div className="info-value">{league.place}</div>
                  </div>
                  <div className="info-meta">
                    <div className="meta-item">
                      <span className="label">FEE</span>
                      <span className="value">{league.fee}</span>
                    </div>
                    <div className="meta-item">
                      <span className="label">PRIZE</span>
                      <span className="value">{league.prize}</span>
                    </div>
                  </div>
                  <Link href={league.link} className="btn btn-primary full-width">
                    {league.buttonText}
                  </Link>
                  {league.buttonText === 'APPLY NOW' && (
                    <Link href="/tournament" className="more-info">VIEW PROGRAM DETAILS</Link>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="no-leagues">
              <p>現在、エントリー可能な大会はありません。<br />次回の開催をお待ちください。</p>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .league {
          background: var(--bg-dark);
          position: relative;
        }

        .league-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 3rem;
          margin-top: 4rem;
        }

        .league-card {
          background: var(--bg-dark-secondary);
          border: 1px solid var(--glass-border);
          box-shadow: var(--glass-shadow);
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .league-card:hover {
          transform: translateY(-10px);
          border-color: var(--accent-color);
        }

        .card-header {
          background: #000;
          padding: 3rem 2rem;
          border-bottom: 1px solid var(--glass-border);
          text-align: center;
          position: relative;
        }

        .card-header .season {
          color: var(--accent-color);
          font-family: var(--font-heading);
          font-size: 0.9rem;
          letter-spacing: 4px;
          display: block;
          margin-bottom: 1rem;
        }

        .card-header h3 {
          font-size: 3rem;
          color: white;
          font-family: var(--font-heading);
          letter-spacing: 2px;
          line-height: 1;
        }

        .card-body {
          padding: 3rem;
        }

        .info-item {
          margin-bottom: 2rem;
        }

        .info-label {
          font-family: var(--font-heading);
          color: var(--text-muted);
          font-size: 0.8rem;
          letter-spacing: 2px;
          margin-bottom: 0.5rem;
        }

        .info-value {
          font-size: 1.4rem;
          font-weight: 700;
          color: white;
        }

        .info-meta {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin: 2rem 0 3rem;
          padding: 2rem 0;
          border-top: 1px dashed var(--glass-border);
          border-bottom: 1px dashed var(--glass-border);
        }

        .meta-item {
          display: flex;
          flex-direction: column;
        }

        .meta-item .label {
          font-family: var(--font-heading);
          font-size: 0.7rem;
          color: var(--text-muted);
          letter-spacing: 2px;
          margin-bottom: 0.5rem;
        }

        .meta-item .value {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--accent-color);
        }

        .more-info {
          display: block;
          text-align: center;
          margin-top: 1.5rem;
          font-family: var(--font-heading);
          font-size: 0.8rem;
          letter-spacing: 2px;
          color: var(--text-muted);
          text-decoration: underline;
          transition: color 0.3s ease;
        }

        .more-info:hover {
          color: white;
        }

        .no-leagues {
          grid-column: 1 / -1;
          text-align: center;
          padding: 4rem 2rem;
          background: var(--bg-dark-secondary);
          border: 1px dashed var(--glass-border);
          color: var(--text-muted);
        }

        .no-leagues p {
          font-size: 1.2rem;
          line-height: 1.8;
        }

        @media (max-width: 768px) {
          .league-cards {
            grid-template-columns: 1fr;
          }
          .card-header h3 {
            font-size: 2.2rem;
          }
          .card-body {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
