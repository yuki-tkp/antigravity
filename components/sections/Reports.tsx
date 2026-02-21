'use client';

import Link from 'next/link';

export default function Reports() {
    const reports = [
        {
            date: '2026.01.15',
            title: 'WINTER CUP 予選大会レポート',
            desc: '熱戦が繰り広げられた予選大会の様子をお届けします。MVPはTeam Xの...',
        },
        {
            date: '2025.12.20',
            title: '年末チャリティイベント開催',
            desc: '地域の子供たちを対象とした3x3体験会を実施しました。',
        },
        {
            date: '2025.11.05',
            title: '新ルール適用のお知らせ',
            desc: 'FIBA 3x3公式ルールの改定に伴い、当リーグでも新ルールを適用します。',
        },
    ];

    return (
        <section id="reports" className="section reports">
            <div className="container">
                <h2 className="section-title">ACTIVITY <span className="accent">REPORTS</span></h2>
                <div className="reports-grid">
                    {reports.map((report, index) => (
                        <article key={index} className="report-card">
                            <div className="report-img"></div>
                            <div className="report-content">
                                <span className="date">{report.date}</span>
                                <h4>{report.title}</h4>
                                <p>{report.desc}</p>
                                <Link href="#" className="read-more">READ MORE</Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .reports {
          background: var(--bg-dark-secondary);
        }

        .reports-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .report-card {
          background: #151515;
          overflow: hidden;
          transition: all 0.3s ease;
          border: 1px solid #222;
        }

        .report-card:hover {
          transform: scale(1.02);
          border-color: var(--accent-color);
        }

        .report-img {
          height: 200px;
          background: #333;
          position: relative;
          overflow: hidden;
          background:
            linear-gradient(45deg, #111 25%, #222 25%, #222 50%, #111 50%, #111 75%, #222 75%, #222 100%);
          background-size: 20px 20px;
        }

        .report-img::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
        }

        .report-content {
          padding: 20px;
        }

        .report-content .date {
          font-size: 0.8rem;
          color: var(--accent-color);
          font-weight: bold;
          font-family: var(--font-heading);
        }

        .report-content h4 {
          font-size: 1.4rem;
          margin: 10px 0;
          line-height: 1.3;
          color: white;
        }

        .report-content p {
          font-size: 0.9rem;
          color: #aaa;
          margin-bottom: 20px;
        }

        .read-more {
          font-size: 0.9rem;
          font-weight: bold;
          text-transform: uppercase;
          border-bottom: 2px solid var(--accent-color);
          color: white;
          padding-bottom: 2px;
        }
      `}</style>
        </section>
    );
}
