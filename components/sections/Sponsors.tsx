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
          {sponsors.map((sponsor) => {
            const isClickable = sponsor.url && sponsor.url.trim() !== '';
            const CardContent = (
              <div className="sponsor-card">
                <div className="sponsor-logo-container">
                  {sponsor.logoUrl ? (
                    <div className="sponsor-logo-wrapper">
                      <img
                        src={sponsor.logoUrl}
                        alt={sponsor.name}
                        className="sponsor-logo-img"
                      />
                    </div>
                  ) : (
                    <div className="sponsor-logo-placeholder">
                      {sponsor.name === 'Partner Slot' ? (
                        <span className="placeholder-text">AVAILABLE</span>
                      ) : (
                        sponsor.name
                      )}
                    </div>
                  )}
                </div>
              </div>
            );

            return isClickable ? (
              <a
                href={sponsor.url}
                key={sponsor.id}
                target="_blank"
                rel="noopener noreferrer"
                className="sponsor-link"
              >
                {CardContent}
              </a>
            ) : (
              <div key={sponsor.id} className="sponsor-link disabled">
                {CardContent}
              </div>
            );
          })}
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
          grid-template-columns: repeat(5, 1fr);
          gap: 1.5rem;
          margin-bottom: 6rem;
        }

        .sponsor-link {
          text-decoration: none;
          display: block;
        }

        .sponsor-card {
          aspect-ratio: 16/5;
          background: var(--bg-dark-secondary);
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid var(--glass-border);
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          position: relative;
          overflow: hidden;
          padding: 0.5rem 1rem;
          text-align: center;
        }

        .sponsor-link:hover .sponsor-card {
          border-color: var(--accent-color);
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.5), 0 0 20px rgba(255, 60, 0, 0.1);
          background: rgba(255, 255, 255, 0.05);
        }

        .sponsor-link.disabled {
          cursor: default;
        }

        .sponsor-logo-container {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .sponsor-logo-wrapper {
          width: 80%;
          height: 80%;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .sponsor-logo-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          transition: all 0.3s ease;
        }

        .sponsor-link:hover .sponsor-logo-img {
          transform: scale(1.05);
        }

        .sponsor-logo-placeholder {
          font-family: var(--font-heading);
          font-weight: 900;
          color: #eee;
          font-size: 0.8rem;
          letter-spacing: 1px;
          text-transform: uppercase;
          line-height: 1.2;
        }

        .placeholder-text {
          color: #333;
          font-size: 0.7rem;
          letter-spacing: 2px;
        }

        .sponsor-cta {
          text-align: center;
          padding: 4rem;
          background: var(--bg-dark-secondary);
          border: 1px dashed var(--glass-border);
          border-radius: 4px;
        }

        @media (max-width: 1200px) {
          .sponsors-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        @media (max-width: 992px) {
          .sponsors-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .sponsors-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
        }

        @media (max-width: 480px) {
          .sponsors-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
