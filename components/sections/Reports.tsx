'use client';

import Link from 'next/link';
import { Report } from '@/lib/types';

export default function Reports({ reports }: { reports: Report[] }) {

  return (
    <section id="reports" className="section reports">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">ACTIVITY <span className="accent">REPORTS</span></h2>
          <p className="section-desc">協会の活動記録や大会レポートを定期的にお届けします。</p>
        </div>
        <div className="reports-grid">
          {reports.map((report) => (
            <article key={report.id} className="report-card">
              <div className="report-img">
                <img src={report.imageUrl} alt={report.title} className="report-background-img" />
                <span className="tag">REPORT</span>
              </div>
              <div className="report-content">
                <span className="date">{report.date}</span>
                <h4>{report.title}</h4>
                <p>{report.description.length > 60 ? report.description.substring(0, 60) + '...' : report.description}</p>
                <Link href={`/news/${report.id}`} className="read-more">
                  READ MORE
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .reports {
          background: var(--bg-dark-secondary);
          position: relative;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .reports-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2.5rem;
        }

        .report-card {
          background: var(--bg-dark);
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          border: 1px solid var(--glass-border);
          box-shadow: var(--glass-shadow);
          display: flex;
          flex-direction: column;
        }

        .report-card:hover {
          transform: translateY(-10px);
          border-color: var(--accent-color);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }

        .report-img {
          height: 240px;
          position: relative;
          overflow: hidden;
        }

        .report-background-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .report-card:hover .report-background-img {
          transform: scale(1.1);
        }

        .report-img::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
        }

        .tag {
          position: absolute;
          top: 20px;
          left: 20px;
          background: var(--accent-color);
          color: white;
          padding: 4px 12px;
          font-family: var(--font-heading);
          font-size: 0.7rem;
          letter-spacing: 2px;
          z-index: 5;
        }

        .report-content {
          padding: 2.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .report-content .date {
          font-size: 0.8rem;
          color: var(--accent-color);
          font-weight: bold;
          font-family: var(--font-heading);
          letter-spacing: 2px;
          margin-bottom: 0.5rem;
          display: block;
        }

        .report-content h4 {
          font-size: 1.6rem;
          margin-bottom: 1rem;
          line-height: 1.3;
          color: white;
        }

        .report-content p {
          font-size: 1rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
          line-height: 1.6;
          flex: 1;
        }

        .read-more {
          font-size: 0.9rem;
          font-weight: 700;
          text-transform: uppercase;
          color: white;
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-heading);
          letter-spacing: 2px;
          transition: gap 0.3s ease;
        }

        .read-more:hover {
          color: var(--accent-color);
          gap: 15px;
        }

        @media screen and (max-width: 768px) {
          .reports-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
