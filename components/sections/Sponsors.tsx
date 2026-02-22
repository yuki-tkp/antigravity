'use client';

import Link from 'next/link';
import { Sponsor } from '@/lib/types';

export default function Sponsors({ sponsors }: { sponsors: Sponsor[] }) {

  return (
    <section id="sponsors" className="section sponsors">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">OFFICIAL <span className="accent">PARTNERS</span></h2>
          <p className="section-desc">北九州 3on3 協会の活動を支えてくださっているパートナー企業様です。</p>
        </div>
        <div className="sponsors-grid">
          {sponsors.map((sponsor) => (
            <div key={sponsor.id} className="sponsor-card">
              <div className="sponsor-logo-placeholder">
                {sponsor.name}
              </div>
            </div>
          ))}
        </div>
        <div className="sponsor-cta">
          <p>共に北九州の3x3を盛り上げませんか？</p>
          <Link href="#contact" className="btn btn-primary">
            BECOME A PARTNER
          </Link>
        </div>
      </div>

      <style jsx>{`
        .sponsors {
          background: var(--bg-dark);
          position: relative;
          padding: 100px 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .sponsors-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-bottom: 6rem;
        }

        .sponsor-card {
          aspect-ratio: 16/9;
          background: var(--bg-dark-secondary);
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid var(--glass-border);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .sponsor-card:hover {
          border-color: var(--accent-color);
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

        .sponsor-logo-placeholder {
          font-family: var(--font-heading);
          font-weight: 900;
          color: #333;
          font-size: 1.2rem;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .sponsor-cta {
          text-align: center;
          padding: 4rem;
          background: var(--bg-dark-secondary);
          border: 1px dashed var(--glass-border);
        }

        .sponsor-cta p {
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 2rem;
          color: var(--text-muted);
        }

        @media (max-width: 576px) {
          .sponsors-grid {
            grid-template-columns: 1fr 1fr;
          }
          .sponsor-cta {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
