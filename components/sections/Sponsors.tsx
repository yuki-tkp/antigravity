'use client';

import Link from 'next/link';

export default function Sponsors() {
    const sponsors = ['LOGO 01', 'LOGO 02', 'LOGO 03', 'LOGO 04'];

    return (
        <section id="sponsors" className="section sponsors">
            <div className="container">
                <h2 className="section-title">OFFICIAL <span className="accent">PARTNERS</span></h2>
                <div className="sponsors-grid">
                    {sponsors.map((sponsor, index) => (
                        <div key={index} className="sponsor-logo">
                            {sponsor}
                        </div>
                    ))}
                </div>
                <div className="sponsor-cta">
                    <p>スポンサー募集中。共にシーンを盛り上げましょう。</p>
                    <Link href="/contact" className="btn btn-outline">
                        BECOME A PARTNER
                    </Link>
                </div>
            </div>

            <style jsx>{`
        .sponsors {
          text-align: center;
          background: #fff;
          color: #000;
          padding: 80px 0;
        }

        .sponsors :global(.section-title) {
          color: #000;
        }

        .sponsors :global(.section-title::after) {
          background: #000;
        }

        .sponsors-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 2rem;
          margin: 4rem 0;
        }

        .sponsor-logo {
          height: 100px;
          background: #eee;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: var(--font-heading);
          font-weight: bold;
          color: #999;
          border: 1px solid #ddd;
          transition: all 0.3s ease;
        }

        .sponsor-logo:hover {
          background: #f8f8f8;
          border-color: #000;
          color: #000;
          transform: translateY(-5px);
        }

        .sponsor-cta p {
          font-weight: bold;
          margin-bottom: 1.5rem;
          color: #333;
        }
      `}</style>
        </section>
    );
}
