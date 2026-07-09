'use client';

import Link from 'next/link';

export default function LeagueInfo() {
  const leagues = [
    {
      season: 'SEASON 2026',
      title: 'Bisco Ball U-15',
      date: '2026.04.25',
      place: '船場広場（小倉北区）',
      fee: '-',
      prize: '-',
      buttonText: 'VIEW DETAILS',
      link: '/tournament/bisco-ball-u15',
      visible: false,
    },
    {
      season: 'SEASON 2026',
      title: 'bisco ball Under18',
      date: '2026.08.09(SUN)',
      place: 'JR小倉駅 3階改札前 JAM広場',
      fee: '観戦無料',
      prize: '-',
      buttonText: 'VIEW DETAILS',
      link: '/tournament/bisco-ball-u18',
      visible: true,
      imageUrl: '/images/special/bisco-ball-u18-2.png',
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
                {league.imageUrl && (
                  <div className="card-image">
                    <img src={league.imageUrl} alt={league.title} />
                  </div>
                )}
                <div className="card-header">
                  <span className="season">{league.season}</span>
                  <h3>{league.title}</h3>
                </div>
                <div className="card-body">
                  <div className="info-grid">
                    <div className="info-item">
                      <div className="info-label">SCHEDULE</div>
                      <div className="info-value">{league.date}</div>
                    </div>
                    <div className="info-item">
                      <div className="info-label">LOCATION</div>
                      <div className="info-value">{league.place}</div>
                    </div>
                    <div className="info-item">
                      <div className="info-label">FEE</div>
                      <div className="info-value">{league.fee}</div>
                    </div>
                    <div className="info-item">
                      <div className="info-label">PRIZE</div>
                      <div className="info-value">{league.prize}</div>
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

        .card-image {
          width: 100%;
          background: #0a0a0a;
          display: flex;
          justify-content: center;
          align-items: center;
          border-bottom: 1px solid var(--glass-border);
          padding: 2.5rem 1rem;
        }

        .card-image img {
          max-width: 100%;
          max-height: 380px;
          width: auto;
          height: auto;
          object-fit: contain;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .league-card:hover .card-image img {
          transform: scale(1.05);
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

        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .info-item {
          margin-bottom: 0;
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
