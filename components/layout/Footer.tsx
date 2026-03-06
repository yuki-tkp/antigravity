'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link href="/">
              <img src="/images/k3a-logo.png" alt="Kitakyushu 3on3 Association Logo" style={{ height: '60px', width: 'auto' }} />
            </Link>
            <p>STREET TO ELITE</p>
          </div>

        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()} 3x3 BASKETBALL ASSOCIATION. ALL RIGHTS RESERVED.
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #000;
          padding: 60px 0 30px;
          border-top: 1px solid #111;
          color: white;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
        }

        .footer-brand h2 {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          margin-bottom: 5px;
        }

        .footer-brand p {
          color: var(--text-muted);
          font-size: 0.9rem;
          letter-spacing: 2px;
        }



        .copyright {
          text-align: center;
          font-size: 0.8rem;
          color: #333;
          padding-top: 30px;
          border-top: 1px solid #111;
        }

        @media screen and (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            gap: 2rem;
            text-align: center;
          }
          

        }
      `}</style>
    </footer>
  );
}
